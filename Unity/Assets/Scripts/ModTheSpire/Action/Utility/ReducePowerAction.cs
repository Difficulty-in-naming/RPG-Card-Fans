using Cysharp.Threading.Tasks;
using ModTheSpire.Event;
using ModTheSpire.Power;
using ModTheSpire.Unit;

namespace ModTheSpire.Effect.Other
{
    public class ReducePowerAction : IGameAction
    {
        public float Duration { get; set; }
        public ActionType Type { get; } = ActionType.POWER;
        
        private AbstractCreature Target;
        private AbstractCreature Source;
        private AbstractPower Power;
        private int Amount;

        public ReducePowerAction(AbstractCreature target, AbstractCreature source, AbstractPower power,int amount)
        {
            Target = target;
            Source = source;
            Power = power;
            Amount = amount;
            Power = this.Target.GetPower(power?.Id);
        }

        public ReducePowerAction(AbstractCreature target, AbstractCreature source, string power,int amount)
        {
            Target = target;
            Source = source;
            Amount = amount;
            Power = this.Target.GetPower(power);
        }
        public void Init()
        {
        }

        public async UniTask<bool> Update()
        {
            if (Power != null)
            {
                Power.Amount -= this.Amount;
            }

            await UniTask.Delay(250);
            return true;
        }
    }
}