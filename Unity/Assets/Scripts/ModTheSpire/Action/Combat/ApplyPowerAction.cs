using Cysharp.Threading.Tasks;
using ModTheSpire.Dungeon;
using ModTheSpire.Effect.Combat;
using ModTheSpire.Event;
using ModTheSpire.Event.Ids;
using ModTheSpire.Power;
using ModTheSpire.Unit;
using ModTheSpire.Unit.Monster;

namespace ModTheSpire.Effect.Other
{
    public class ApplyPowerAction : IGameAction
    {
        public float Duration { get; set; }
        public ActionType Type { get; } = ActionType.POWER;
        private AbstractCreature Target;
        private AbstractCreature Source;
        private AbstractPower Power;
        private int StackAmount;
        private AttackEffect Effect;

        public ApplyPowerAction(AbstractCreature target, AbstractCreature source, AbstractPower power, int stackAmount = 1, AttackEffect effect = 0)
        {
            Target = target;
            Source = source;
            Power = power;
            StackAmount = stackAmount;
            Effect = effect;
            DungeonManager.MessageManager.Send(new PreApplyPowerMessage(Source, Target, Power, StackAmount));
            Power.Amount += StackAmount;
        }

        public void Init()
        {
        }

        public async UniTask<bool> Update()
        {
            if (this.Target == null || this.Target.IsDeadOrEscaped)
            {
                return true;
            }

            if (this.StackAmount == 0)
                return true;
            if (this.Duration == 0)
            {
                if (this.Target.GetPower(this.Power.Id) != null && !this.Power.CanStack)
                {
                    return true;
                }
            }

            if (DungeonManager.Inst.CurrentRoom.Monsters == null || DungeonManager.Inst.CurrentRoom.Monsters.AreMonstersBasicallyDead())
            {
                return true;
            }

            if (this.Target is AbstractMonster && this.Target.IsDeadOrEscaped)
            {
                return true;
            }

            DungeonManager.EffectManager.Play(new FlashAtkImgEffect(this.Target.DisplayObject.Bounds.x, this.Target.DisplayObject.Bounds.y,
                this.Effect));
            var hasBuffAlready = false;
            for (int i = 0; i < this.Target.Powers.Count; i++)
            {
                var node = this.Target.Powers[i];
                if (node.Id == this.Power.Id)
                {
                    node.Amount += this.StackAmount;
                    node.Flash();
                    if (node.Type == PowerType.Buff)
                    {
                        DungeonManager.EffectManager.Play(new PowerBuffEffect(this.Target.DisplayObject.Bounds.x,
                            this.Target.DisplayObject.Bounds.height,
                            $"+ {this.StackAmount} {this.Power.Name}"));
                    }
                    else if (node.Type == PowerType.Debuff)
                    {
                        DungeonManager.EffectManager.Play(new PowerDebuffEffect(this.Target.DisplayObject.Bounds.x,
                            this.Target.DisplayObject.Bounds.height, $"- {this.StackAmount} {this.Power.Name}"));
                    }

                    hasBuffAlready = true;
                    DungeonManager.MessageManager.Send(new PostApplyPowerMessage(this.Source, this.Target, this.Power));
                }
            }

            if (this.Power.Type == PowerType.Debuff)
            {
                this.Target.DisplayObject.PlayFastShake(0.5f);
            }

            if (!hasBuffAlready)
            {
                this.Target.AddPower(this.Power, this.Source);
                this.Power.OnInit();
                this.Power.Flash();
                if (this.Power.Type == PowerType.Buff)
                {
                    DungeonManager.EffectManager.Play(new PowerBuffEffect(this.Target.DisplayObject.Bounds.x, this.Target.DisplayObject.Bounds.height,
                        $"- {this.StackAmount} {this.Power.Name}"));
                }
                else if (this.Power.Type == PowerType.Debuff)
                {
                    DungeonManager.EffectManager.Play(new PowerDebuffEffect(this.Target.DisplayObject.Bounds.x,
                        this.Target.DisplayObject.Bounds.height, $"- {this.StackAmount} {this.Power.Name}"));
                }

                DungeonManager.MessageManager.Send(new PostApplyPowerMessage(this.Source, this.Target, this.Power));
            }

            await UniTask.Delay(250);
            return true;
        }
    }
}