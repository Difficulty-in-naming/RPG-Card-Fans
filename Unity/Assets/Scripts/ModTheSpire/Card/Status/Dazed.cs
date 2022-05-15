using TCG.Config;

namespace ModTheSpire.Card.Status
{
    public class Dazed : AbstractCard
    {
        public override string Desc { get; } = LocalizationProperty.Read("卡牌-晕眩描述");
        public override string Icon { get; } = "cards/status/dazed.png";
        public override CardType Type { get; } = CardType.STATUS;
        public override CardRarity Rarity { get; } = CardRarity.COMMON;
        public override CardTarget Target { get; } = CardTarget.NONE;
        public override CardColor Color { get; } = CardColor.COLORLESS;

        public Dazed()
        {
            Ethereal = true;
        }
    }
}