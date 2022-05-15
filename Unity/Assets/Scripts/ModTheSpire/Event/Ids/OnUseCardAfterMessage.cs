using ModTheSpire.Card;
using ModTheSpire.Unit;

namespace ModTheSpire.Event.Ids
{
    ///使用卡牌前
    public class OnUseCardAfterMessage : IEventHandle
    {
        public AbstractCreature Source;
        public AbstractCreature Target;      
        public AbstractCard Card;

        public OnUseCardAfterMessage(AbstractCreature source, AbstractCreature target, AbstractCard card)
        {
            Source = source;
            Target = target;
            Card = card;
        }
    }
}