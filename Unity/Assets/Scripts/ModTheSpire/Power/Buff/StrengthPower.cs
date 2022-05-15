using ModTheSpire.DataDefine;
using ModTheSpire.Event.Ids;
using TCG.Config;

namespace ModTheSpire.Power.Buff
{
    public class StrengthPower : AbstractPower
    {
        public override string Id { get; } = nameof(StrengthPower);
        public override string Name { get; } = LocalizationProperty.Read("能力-力量");
        public override string Icon { get; } = "Powers/strength.png";
        public override PowerType Type => Amount >= 0 ? PowerType.Buff : PowerType.Debuff;

        public override string GetDescription(object[] args)
        {
            return string.Format(LocalizationProperty.Read(this.Amount >= 0 ? "能力-力量(提升)" : "能力-力量(下降)"),this.Amount);
        }

        protected override void OnDamageBefore(OnDamageBeforeMessage msg)
        {
            base.OnDamageBefore(msg);
            msg.DamageInfo.AddModify(new WrapDamage(this.Owner, this.Amount));
        }

        protected override void CalcDamageValue(CalcDamageValueMessage msg)
        {
            base.CalcDamageValue(msg);
            msg.DamageInfo.AddModify(new WrapDamage(this.Owner, this.Amount));
        }
    }
}