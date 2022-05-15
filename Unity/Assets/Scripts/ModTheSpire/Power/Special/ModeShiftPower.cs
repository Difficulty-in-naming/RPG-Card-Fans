using System;
using ModTheSpire.Event.Ids;
using TCG.Config;

namespace ModTheSpire.Power.Special
{
    public class ModeShiftPower : AbstractPower
    {
        public override string Id { get; } = nameof(ModeShiftPower);
        public override string Name { get; } = LocalizationProperty.Read("能力-形态转换");
        public override string Icon { get; } = "Powers/modeShift.png";
        public override PowerType Type { get; } = PowerType.Special;
        public override string GetDescription(object[] args)
        {
            return LocalizationProperty.Read("能力-形态转换描述");
        }

        public ModeShiftPower(Action func)
        {
        }

        protected override void OnDamageAfter(OnDamageAfterMessage msg)
        {
            base.OnDamageAfter(msg);

        }
    }
}