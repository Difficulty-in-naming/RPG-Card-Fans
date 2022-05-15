using ModTheSpire.Effect.Other;
using ModTheSpire.Event.Ids;
using TCG.Config;

namespace ModTheSpire.Power.Buff
{
    public class MetallicizePower : AbstractPower
    {
        public override string Id { get; } = nameof(MetallicizePower);
        public override string Name { get; } = LocalizationProperty.Read("能力-金属化");
        public override string Icon { get; } = "Powers/armor.png";
        public override PowerType Type { get; } = PowerType.Buff;
        public override string GetDescription(object[] args)
        {
            return string.Format(LocalizationProperty.Read("能力-金属化描述"), this.Amount);
        }

        public override void PlayApplyPowerSfx()
        {
            base.PlayApplyPowerSfx();
            SoundMaster.PlayVoice(SoundMaster.POWER_METALLICIZE,0.05f);
        }

        protected override void AtEndOfTurnPreEndTurnCards(AtEndOfTurnPreEndTurnCardsMessage msg)
        {
            base.AtEndOfTurnPreEndTurnCards(msg);
            Flash();
            AddToBot(new GainBlockAction(this.Owner,this.Amount));
        }
    }
}