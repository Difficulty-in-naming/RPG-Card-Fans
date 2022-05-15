using ModTheSpire.Unit;

namespace ModTheSpire.Event.Ids
{
    ///在回合结束
    public class AtEndOfTurnMessage : IEventHandle
    {
        public bool IsPlayer;
        public AbstractCreature Unit;
        public AtEndOfTurnMessage(bool isPlayer, AbstractCreature unit)
        {
            IsPlayer = isPlayer;
            Unit = unit;
        }
    }
}