using ModTheSpire.Unit;

namespace ModTheSpire.Event.Ids
{
    ///死亡
    public class OnDeathMessage : IEventHandle
    {
        public AbstractCreature Unit;

        public OnDeathMessage(AbstractCreature unit)
        {
            Unit = unit;
        }
    }
}