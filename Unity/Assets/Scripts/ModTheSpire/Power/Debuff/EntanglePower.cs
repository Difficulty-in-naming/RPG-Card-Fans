using ModTheSpire.Card;
using ModTheSpire.Effect.Other;
using ModTheSpire.Event.Ids;
using TCG.Config;

namespace ModTheSpire.Power.Debuff
{
    public class EntanglePower : AbstractPower
    {
        public override string Id { get; } = nameof(EntanglePower);
        public override string Name { get; } = LocalizationProperty.Read("能力-缠身");
        public override string Icon { get; } = "Powers/entangle.png";
        public override PowerType Type { get; } = PowerType.Debuff;
        public override string GetDescription(object[] args)
        {
            return LocalizationProperty.Read("能力-缠身描述");
        }

        protected override void PreUseCard(OnUseCardAfterMessage msg)
        {
            base.PreUseCard(msg);
            if(msg.Card.Type == CardType.ATTACK)
                msg.Card.CantUse = false;
        }

        public override void PlayApplyPowerSfx()
        {
            base.PlayApplyPowerSfx();
            SoundMaster.PlayVoice(SoundMaster.POWER_ENTANGLED,0.05f);
        }

        protected override void AtEndOfTurn(AtEndOfTurnMessage msg)
        {
            base.AtEndOfTurn(msg);
            if(msg.Unit.GetPower(this.Id) != null){
                this.AddToBot(new RemoveSpecificPowerAction(this.Owner,this.Owner,this));
            }
        }
    }
}