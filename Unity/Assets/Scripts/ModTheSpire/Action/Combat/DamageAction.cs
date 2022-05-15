using Core.Utils;
using Cysharp.Threading.Tasks;
using ModTheSpire.DataDefine;
using ModTheSpire.Dungeon;
using ModTheSpire.Effect.Combat;
using ModTheSpire.Event;
using ModTheSpire.Unit;

namespace ModTheSpire.Effect.Other
{
    public class DamageAction : IGameAction
    {
        public float Duration { get; set; }
        public ActionType Type { get; }

        private AbstractCreature Target;
        private DamageInfo Info;
        private AttackEffect Effect;
        private bool MuteSfx;

        private bool SkipWait;

        //target:目标,damageInfo:伤害数据,effect:伤害特效
        public DamageAction(AbstractCreature target, DamageInfo info, AttackEffect effect = AttackEffect.NONE, bool skipWait = false, bool muteSfx = false)
        {
            Target = target;
            Info = info;
            Effect = effect;
            MuteSfx = muteSfx;
            SkipWait = skipWait;
        }

        public void Init()
        {
            throw new System.NotImplementedException();
        }

        public async UniTask<bool> Update()
        {
            if (this.ShouldCancelAction(this.Target) && this.Info.Type != DamageType.THORNS)
            {
                return true;
            }

            if (this.Info.Type != DamageType.THORNS && (this.Info.Unit.IsDeadOrEscaped))
            {
                return true;
            }

            var bounds = Target.DisplayObject.Bounds;
            DungeonManager.EffectManager.Play(new FlashAtkImgEffect(bounds.x, bounds.y, Effect, MuteSfx));
            if (this.Duration >= 0.1f)
            {
                if (Effect == AttackEffect.POISON)
                {
                    this.Target.DisplayObject.Color = MTSColor.White.Clone();
                    this.Target.ChangeColor(MTSColor.Chartreuse.Clone());
                }
                else if (Effect == AttackEffect.FIRE)
                {
                    this.Target.DisplayObject.Color = MTSColor.White.Clone();
                    this.Target.ChangeColor(MTSColor.Red.Clone());
                }

                this.Target.Damage(this.Info);
                if (DungeonManager.Inst.CurrentRoom.Monsters.AreMonstersBasicallyDead())
                {
                    DungeonManager.ActionManager.ClearPostCombatActions();
                }

                if (!SkipWait)
                {
                    await UniTask.Delay(100);
                }
            }

            return true;
        }
    }
}