using ModTheSpire.Power;
using ModTheSpire.Unit;

namespace ModTheSpire.Event.Ids
{
    ///能力移出
    public class PowerRemovedMessage : IEventHandle
    {
        public AbstractPower Power;
        public AbstractCreature Unit;

        public PowerRemovedMessage(AbstractPower power, AbstractCreature unit)
        {
            Power = power;
            Unit = unit;
        }
    }
}