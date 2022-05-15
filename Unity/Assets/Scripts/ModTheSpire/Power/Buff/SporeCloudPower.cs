using ModTheSpire.Dungeon;
using ModTheSpire.Effect.Other;
using ModTheSpire.Event.Ids;
using ModTheSpire.Power.Debuff;
using TCG.Config;

namespace ModTheSpire.Power.Buff
{
    public class SporeCloudPower : AbstractPower
    {
        public override string Id { get; } = nameof(SporeCloudPower);
        public override string Name { get; } = LocalizationProperty.Read("能力-孢子云");
        public override string Icon { get; } = "Powers/sporeCloud.png";
        public override PowerType Type { get; } = PowerType.Buff;
        public override string GetDescription(object[] args)
        {
            return string.Format(LocalizationProperty.Read("能力-孢子云描述"), this.Amount);
        }

        protected override void OnDeath(OnDeathMessage msg)
        {
            base.OnDeath(msg);
            if(DungeonManager.Inst.CurrentRoom.Monsters.AreMonstersBasicallyDead())
                return;
            SoundMaster.PlayVoice(SoundMaster.SPORE_CLOUD_RELEASE);
            this.Flash(true);
            this.AddToTop(new ApplyPowerAction(msg.Unit, this.Owner, new VulnerablePower(), this.Amount));
        }
    }
}