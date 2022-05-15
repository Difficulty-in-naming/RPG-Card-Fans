using ModTheSpire.Effect.Other;
using ModTheSpire.Event.Ids;
using TCG.Config;

namespace ModTheSpire.Power.Buff
{
    public class RitualPower : AbstractPower
    {
        public override string Id { get; } = nameof(RitualPower);
        public override string Name { get; } = LocalizationProperty.Read("能力-仪式");
        public override string Icon { get; } = "Powers/ritual.png";
        public override PowerType Type { get; } = PowerType.Buff;
        private bool SkipFirst { get; set; } = true;
        public override string GetDescription(object[] args)
        {
            return string.Format(LocalizationProperty.Read("能力-仪式描述"), this.Amount);
        }

        protected override void AtEndOfTurn(AtEndOfTurnMessage msg)
        {
            base.AtEndOfTurn(msg);
            if(this.SkipFirst){
                this.SkipFirst = false;
                return;
            }
            this.Flash();
            this.AddToBot(new ApplyPowerAction(this.Owner,this.Owner,new StrengthPower(),this.Amount));
        }
    }
}