using ModTheSpire.DataDefine;
using ModTheSpire.Effect.Other;
using ModTheSpire.Event.Ids;
using TCG.Config;

namespace ModTheSpire.Power.Buff
{
    public class CurlUpPower : AbstractPower
    {
        public override string Id { get; } = nameof(CurlUpPower);
        public override string Name { get; } = LocalizationProperty.Read("能力-蜷身");
        public override string Icon { get; } = "Powers/minion.png";
        public override PowerType Type { get; } = PowerType.Buff;
        private bool Triggered = false;

        public override string GetDescription(object[] args)
        {
            return string.Format(LocalizationProperty.Read("能力-蜷身描述"), this.Amount);
        }

        protected override void OnDamageAfter(OnDamageAfterMessage msg)
        {
            base.OnDamageAfter(msg);
            if(!this.Triggered && msg.DamageInfo.Total <this.Owner.Health && msg.DamageInfo.Total > 0 && msg.DamageInfo.Type == DamageType.NORMAL){
                this.Flash();
                this.Triggered = true;
                this.AddToBot(new GainBlockAction(this.Owner,this.Amount));
                this.AddToBot(new RemoveSpecificPowerAction(this.Owner,this.Owner,this));
            }
        }
    }
}