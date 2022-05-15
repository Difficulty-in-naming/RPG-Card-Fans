namespace ModTheSpire.Card
{
    public class CardColor{
        public static CardColor RED = new(nameof(RED));
        public static CardColor GREEN = new(nameof(GREEN));
        public static CardColor BLUE = new(nameof(BLUE));
        public static CardColor PURPLE = new(nameof(PURPLE));
        public static CardColor COLORLESS = new(nameof(COLORLESS));
        public static CardColor CURSE = new(nameof(CURSE));
        public string Key { get; }

        public CardColor(string key)
        {
            Key = key;
        }
    }
}