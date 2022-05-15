namespace ModTheSpire.Card
{
    public class CardRarity {
        public static CardRarity BASIC = new(nameof(BASIC));
        public static CardRarity SPECIAL = new(nameof(SPECIAL));
        public static CardRarity COMMON = new(nameof(COMMON));
        public static CardRarity UNCOMMON = new(nameof(UNCOMMON));
        public static CardRarity RARE = new(nameof(RARE));
        public static CardRarity CURSE = new(nameof(CURSE));
        public string Key { get; }

        public CardRarity(string key)
        {
            Key = key;
        }
    }
}