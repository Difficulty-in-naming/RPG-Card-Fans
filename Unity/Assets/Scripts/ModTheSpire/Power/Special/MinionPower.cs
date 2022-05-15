using TCG.Config;

namespace ModTheSpire.Power.Special
{
    public class MinionPower : AbstractPower
    {
        public override string Id { get; } = nameof(MinionPower);
        public override string Name { get; } = LocalizationProperty.Read("能力-爪牙");
        public override string Icon { get; } = "Powers/minion.png";
        public override PowerType Type { get; } = PowerType.Special;
        public override string GetDescription(object[] args)
        {
            return LocalizationProperty.Read("能力-爪牙描述");
        }
    }
}