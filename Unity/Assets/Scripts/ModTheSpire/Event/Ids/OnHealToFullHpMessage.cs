using ModTheSpire.Unit;

namespace ModTheSpire.Event.Ids
{
    ///生命回满
    public class OnHealToFullHpMessage : IEventHandle
    {
        public AbstractCreature Unit;

        public OnHealToFullHpMessage(AbstractCreature unit)
        {
            Unit = unit;
        }
    }
}