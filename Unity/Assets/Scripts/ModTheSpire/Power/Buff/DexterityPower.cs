using ModTheSpire.Event.Ids;
using TCG.Config;

namespace ModTheSpire.Power.Buff
{
    public class DexterityPower : AbstractPower
    {
        public override string Id { get; } = nameof(DexterityPower);
        public override string Name { get; } = LocalizationProperty.Read("能力-敏捷");
        public override string Icon { get; } = "Powers/strength.png";
        public override PowerType Type => Amount >= 0 ? PowerType.Buff : PowerType.Debuff;
        public override string GetDescription(object[] args)
        {
            return string.Format(LocalizationProperty.Read(this.Amount >= 0 ? "能力-敏捷(提升)" : "能力-敏捷(下降)"),this.Amount);
        }

        public override void PlayApplyPowerSfx()
        {
            base.PlayApplyPowerSfx();
            SoundMaster.PlayVoice(SoundMaster.POWER_DEXTERITY, 0.05f);
        }

        protected override void PreModifyBlock(PreModifyBlockMessage msg)
        {
            base.PreModifyBlock(msg);
            msg.Amount += Amount;
        }
    }
}