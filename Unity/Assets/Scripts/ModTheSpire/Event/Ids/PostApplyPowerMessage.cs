using ModTheSpire.Power;
using ModTheSpire.Unit;

namespace ModTheSpire.Event.Ids
{
    public class PostApplyPowerMessage : IEventHandle
    {
        public AbstractCreature Source;
        public AbstractCreature Target;      
        public AbstractPower Power;

        public PostApplyPowerMessage(AbstractCreature source, AbstractCreature target, AbstractPower power)
        {
            Source = source;
            Target = target;
            Power = power;
        }
    }
}