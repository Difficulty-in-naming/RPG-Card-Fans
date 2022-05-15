using ModTheSpire.Unit;

namespace ModTheSpire.Event.Ids
{
    ///受到治疗后
    public class OnHealBeforeMessage : IEventHandle
    {
        public AbstractCreature Unit;
        public int Amount;

        public OnHealBeforeMessage(AbstractCreature unit, int amount)
        {
            Unit = unit;
            Amount = amount;
        }
    }
}