using ModTheSpire.Card;
using ModTheSpire.Unit;

namespace ModTheSpire.Event.Ids
{
    ///使用卡牌时
    public class OnUseCardMessage : IEventHandle
    {
        public AbstractCreature Source;
        public AbstractCreature Target;      
        public AbstractCard Card;

        public OnUseCardMessage(AbstractCreature source, AbstractCreature target, AbstractCard card)
        {
            Source = source;
            Target = target;
            Card = card;
        }
    }
}