namespace ModTheSpire.Card
{
    public class CardGroupType {
        public static CardGroupType DRAW_PILE = new(nameof(DRAW_PILE));
        public static CardGroupType MASTER_DECK = new(nameof(MASTER_DECK));
        public static CardGroupType HAND = new(nameof(HAND));
        public static CardGroupType DISCARD_PILE = new(nameof(DISCARD_PILE));
        public static CardGroupType EXHAUST_PILE = new(nameof(EXHAUST_PILE));
        public static CardGroupType CARD_POOL = new(nameof(CARD_POOL));
        public static CardGroupType UNSPECIFIED = new(nameof(UNSPECIFIED));
        public string Key { get; }

        public CardGroupType(string key)
        {
            Key = key;
        }
    }
}