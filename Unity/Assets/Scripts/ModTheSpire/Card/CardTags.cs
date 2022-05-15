using System.Collections.Generic;

namespace ModTheSpire.Card
{
    public class CardTags
    {
        public static CardTags HEALING = new(nameof(HEALING));
        public static CardTags STRIKE = new(nameof(STRIKE));
        public static CardTags EMPTY = new(nameof(EMPTY));
        public static CardTags STARTER_DEFEND = new(nameof(STARTER_DEFEND));
        public static CardTags STARTER_STRIKE = new(nameof(STARTER_STRIKE));

        public List<string> Tag { get; }

        public CardTags(params string[] tag)
        {
            Tag = new List<string>();
            for (int i = 0; i < tag.Length; i++)
            {
                Tag.Add(tag[i]);
            }
        }
    }
}