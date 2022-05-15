
using TCG.Config;

namespace ModTheSpire.Card.Status
{
    public class Slimed : AbstractCard
    {
        public override string Desc { get; } = LocalizationProperty.Read("黏液描述");
        public override string Icon { get; } = "cards/status/slimed";
        public override CardType Type { get; } = CardType.STATUS;
        public override CardRarity Rarity { get; }= CardRarity.COMMON;
        public override CardTarget Target { get; } = CardTarget.SELF;
        public override CardColor Color { get; } = CardColor.COLORLESS;

        public Slimed()
        {
            Exhaust = true;
        }
    }
}