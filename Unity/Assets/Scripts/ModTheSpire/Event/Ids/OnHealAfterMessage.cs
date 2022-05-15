using ModTheSpire.Unit;

namespace ModTheSpire.Event.Ids
{
    ///受到治疗前
    public class OnHealAfterMessage : IEventHandle
    {
        public AbstractCreature Unit;
        public int Amount;

        public OnHealAfterMessage(AbstractCreature unit, int amount)
        {
            Unit = unit;
            Amount = amount;
        }
    }
}