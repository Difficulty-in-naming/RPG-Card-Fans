using ModTheSpire.DataDefine;
using ModTheSpire.Dungeon;
using ModTheSpire.Effect.Other;
using ModTheSpire.Event.Ids;
using ModTheSpire.Relics;
using ModTheSpire.Utils;
using TCG.Config;

namespace ModTheSpire.Power.Debuff
{
    public class WeakPower : AbstractPower
    {
        public override string Id { get; } = nameof(WeakPower);
        public override string Name { get; } = LocalizationProperty.Read("能力-虚弱");
        public override string Icon { get; } = "Powers/weak";
        public override PowerType Type { get; } = PowerType.Debuff;
        public float Effect = 25;
        public override string GetDescription(object[] args)
        {
            return string.Format(LocalizationProperty.Read("能力-虚弱描述"),Effect,this.Amount);
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

        protected override void CalcFinalDamageValue(CalcFinalDamageValueMessage msg)
        {
            base.CalcFinalDamageValue(msg);
            msg.DamageInfo.AddModify(new WrapDamage(this.Owner, -msg.DamageInfo.Total * Effect));
        }

        protected override void OnDamageAfter(OnDamageAfterMessage msg)
        {
            base.OnDamageAfter(msg);
            msg.DamageInfo.AddModify(new WrapDamage(this.Owner, -msg.DamageInfo.Total * Effect));
        }
    }
}