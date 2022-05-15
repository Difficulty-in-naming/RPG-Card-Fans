using ModTheSpire.DataDefine;
using ModTheSpire.Effect.Other;
using ModTheSpire.Event.Ids;
using TCG.Config;

namespace ModTheSpire.Power.Debuff
{
    public class VulnerablePower : AbstractPower
    {
        public override string Id { get; } = nameof(VulnerablePower);
        public override string Name { get; } = LocalizationProperty.Read("能力-易伤");
        public override string Icon { get; } = "Powers/vulnerable.png";
        public override PowerType Type { get; } = PowerType.Debuff;
        public float Effect = 25;
        public override string GetDescription(object[] args)
        {
            return string.Format(LocalizationProperty.Read("能力-易伤描述"),Effect,this.Amount);
        }

        protected override void AtEndOfTurn(AtEndOfTurnMessage msg)
        {
            base.AtEndOfTurn(msg);
            if(this.Amount == 0){
                this.AddToBot(new RemoveSpecificPowerAction(this.Owner,this.Owner,this));
            }else{
                this.AddToBot(new ReducePowerAction(this.Owner,this.Owner,this,1));
            }
        }

        protected override void CalcFinalHurtValue(CalcFinalHurtValueMessage msg)
        {
            base.CalcFinalHurtValue(msg);
            if(msg.DamageInfo.Type == DamageType.NORMAL)
            {
                msg.DamageInfo.AddModify(new WrapDamage(this.Owner, msg.DamageInfo.Total * 0.5f));
            }
        }
    }
}