namespace ModTheSpire.Card
{
    public class CardTarget {
        public static CardTarget ENEMY = new(nameof(ENEMY));
        public static CardTarget ALL_ENEMY = new(nameof(ALL_ENEMY));
        public static CardTarget SELF = new(nameof(SELF));
        public static CardTarget NONE = new(nameof(NONE));
        public static CardTarget SELF_AND_ENEMY = new(nameof(SELF_AND_ENEMY));
        public static CardTarget ALL = new(nameof(ALL));
        public string Key { get; }

        public CardTarget(string key)
        {
            Key = key;
        }
    }
}