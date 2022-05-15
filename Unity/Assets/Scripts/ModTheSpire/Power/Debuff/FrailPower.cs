using ModTheSpire.Dungeon;
using ModTheSpire.Effect.Other;
using ModTheSpire.Event.Ids;
using TCG.Config;
using UnityEngine;

namespace ModTheSpire.Power.Debuff
{
    public class FrailPower : AbstractPower
    {
        public override string Id { get; } = nameof(FrailPower);
        public override string Name { get; } = LocalizationProperty.Read("能力-脆弱");
        public override string Icon { get; } = "Powers/frail.png";
        public override PowerType Type { get; } = PowerType.Debuff;
        public override string GetDescription(object[] args)
        {
            return string.Format(LocalizationProperty.Read("能力-脆弱描述"), this.Amount);
        }
        
        protected override void PreModifyBlock(PreModifyBlockMessage e)
        {
            e.Amount = Mathf.CeilToInt(e.Amount * 0.75f);
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
    }
}