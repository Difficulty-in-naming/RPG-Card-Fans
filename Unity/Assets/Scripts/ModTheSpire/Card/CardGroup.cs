using System;
using System.Collections.Generic;

namespace ModTheSpire.Card
{
    public class CardGroup
    {
        public CardGroupType Type;
        public List<AbstractCard> Group = new ();
        public List<AbstractCard> Queued = new();
        public List<AbstractCard> InHand = new();
        public int Length => this.Group.Count;
        public void Foreach(Action<AbstractCard> action){
            this.Group.ForEach(action);
        }

        public CardGroup(CardGroupType type)
        {
            Type = type;
        }

        public void AddToTop(AbstractCard c)
        {
            Group.Add(c);
        }

        public void Discard(bool immedatley = false)
        {
            //飞到对应的位置
        }
    }
}