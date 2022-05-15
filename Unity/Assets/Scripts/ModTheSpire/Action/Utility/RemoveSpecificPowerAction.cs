using Cysharp.Threading.Tasks;
using ModTheSpire.Dungeon;
using ModTheSpire.Effect.Combat;
using ModTheSpire.Event;
using ModTheSpire.Power;
using ModTheSpire.Unit;

namespace ModTheSpire.Effect.Other
{
    public class RemoveSpecificPowerAction : IGameAction
    {
        public float Duration { get; set; }
        public ActionType Type { get; } = ActionType.POWER;
        private AbstractCreature Target;
        private AbstractCreature Source;
        private AbstractPower Power;

        public RemoveSpecificPowerAction(AbstractCreature target, AbstractCreature source, AbstractPower power)
        {
            Target = target;
            Source = source;
            Power = power;
            Power = this.Target.GetPower(power?.Id);
        }

        public RemoveSpecificPowerAction(AbstractCreature target, AbstractCreature source, string power)
        {
            Target = target;
            Source = source;
            Power = this.Target.GetPower(power);
        }

        public void Init()
        {
        }

        public async UniTask<bool> Update()
        {
            if(this.Target.IsDeadOrEscaped)
                return true;
            AbstractPower removeMe = Power;
            if(removeMe != null)
            {
                DungeonManager.EffectManager.Play(new PowerExpireTextEffect(this.Target.DisplayObject.Bounds.x,
                    this.Target.DisplayObject.Bounds.height, removeMe.Name, removeMe.Icon));
                this.Target.RemovePower(removeMe.Id);
                await UniTask.Delay(100);
                return true;
            }
            else{
                return true;
            }
        }
    }
}