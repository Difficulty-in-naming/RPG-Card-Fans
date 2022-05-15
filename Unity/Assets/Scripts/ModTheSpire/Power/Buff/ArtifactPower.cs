using ModTheSpire.Dungeon;
using ModTheSpire.Effect.Other;
using ModTheSpire.Event.Ids;
using TCG.Config;

namespace ModTheSpire.Power.Buff
{
    public class ArtifactPower : AbstractPower
    {
        public override string Id { get; } = nameof(ArtifactPower);
        public override string Name { get; } = LocalizationProperty.Read("能力-人工制品");
        public override string Icon { get; } = "Powers/artifact.png";
        public override PowerType Type { get; } = PowerType.Buff;
        public override string GetDescription(object[] args)
        {
            return string.Format(LocalizationProperty.Read("能力-人工制品描述"), this.Amount);
        }

        public override void OnInit()
        {
            base.OnInit();
            DungeonManager.MessageManager.Add<PreApplyPowerMessage>(PreApplyPower);
        }

        public override void OnRemove()
        {
            base.OnRemove();
            DungeonManager.MessageManager.Remove<PreApplyPowerMessage>(PreApplyPower);
        }

        private void PreApplyPower(PreApplyPowerMessage e)
        {
            e.Amount = 0;
            if(this.Amount == 0){
                this.AddToBot(new RemoveSpecificPowerAction(this.Owner,this.Owner,this));
            }else{
                this.AddToBot(new ReducePowerAction(this.Owner,this.Owner,this,1));
            }
        }
    }
}