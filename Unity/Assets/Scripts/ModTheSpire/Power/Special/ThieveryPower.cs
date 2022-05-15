using ModTheSpire.Dungeon;
using ModTheSpire.Event.Ids;
using TCG.Config;
using UnityEngine;

namespace ModTheSpire.Power.Buff
{
    public class ThieveryPower : AbstractPower
    {
        public override string Id { get; } = nameof(ThieveryPower);
        public override string Name { get; } = LocalizationProperty.Read("能力-偷窃");
        public override string Icon { get; } = "Powers/thievery.png";
        public override PowerType Type { get; } = PowerType.Special;
        public override string GetDescription(object[] args)
        {
            return LocalizationProperty.Read("能力-偷窃描述");
        }

        protected override void OnDeath(OnDeathMessage msg)
        {
            base.OnDeath(msg);
            DungeonManager.Inst.CurrentRoom.AddReward(new object[] { Mathf.Clamp(this.Amount, 0, int.MaxValue) });
        }
    }
}