namespace ModTheSpire.Card
{
    public class CardType {
        public static CardType ATTACK = new(nameof(ATTACK));
        public static CardType SKILL = new(nameof(SKILL));
        public static CardType POWER = new(nameof(POWER));
        public static CardType STATUS = new(nameof(STATUS));
        public static CardType CURSE = new(nameof(CURSE));
        public string Key { get; }

        public CardType(string key)
        {
            Key = key;
        }
    }
}