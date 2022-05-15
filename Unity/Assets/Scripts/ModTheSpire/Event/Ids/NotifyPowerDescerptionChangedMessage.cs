using ModTheSpire.Power;

namespace ModTheSpire.Event.Ids
{
    ///能力描述发生变化
    public class NotifyPowerDescerptionChangedMessage : IEventHandle
    {
        public AbstractPower Power;

        public NotifyPowerDescerptionChangedMessage(AbstractPower power)
        {
            Power = power;
        }
    }
}