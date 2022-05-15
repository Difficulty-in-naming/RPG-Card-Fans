using ModTheSpire.Unit;

namespace ModTheSpire.Event.Ids
{
    ///回合结束弃牌
    public class AtEndOfTurnPreEndTurnCardsMessage : IEventHandle
    {
        public AbstractCreature Unit;
        public AtEndOfTurnPreEndTurnCardsMessage(AbstractCreature unit)
        {
            Unit = unit;
        }
    }
}