using ModTheSpire.Power;
using ModTheSpire.Unit;

namespace ModTheSpire.Event.Ids
{
    ///应用能力之前
    public class PreApplyPowerMessage : IEventHandle
    {
        public AbstractCreature Source;
        public AbstractCreature Target;      
        public AbstractPower Power;
        public int Amount;

        public PreApplyPowerMessage(AbstractCreature source, AbstractCreature target, AbstractPower power, int amount)
        {
            Source = source;
            Target = target;
            Power = power;
            Amount = amount;
        }
    }
}