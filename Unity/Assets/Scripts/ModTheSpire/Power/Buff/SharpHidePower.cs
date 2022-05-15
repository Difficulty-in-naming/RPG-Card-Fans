using ModTheSpire.Card;
using ModTheSpire.DataDefine;
using ModTheSpire.Effect;
using ModTheSpire.Effect.Other;
using ModTheSpire.Event.Ids;
using TCG.Config;

namespace ModTheSpire.Power.Buff
{
    public class SharpHidePower : AbstractPower
    {
        public override string Id { get; } = nameof(SharpHidePower);
        public override string Name { get; } = LocalizationProperty.Read("能力-锋利外壳");
        public override string Icon { get; } = "Powers/sharpHide.png";
        public override PowerType Type { get; } = PowerType.Buff;
        public override string GetDescription(object[] args)
        {
            return string.Format(LocalizationProperty.Read("能力-锋利外壳描述"),this.Amount);
        }

        protected override void OnHurtAfter(OnHurtAfterMessage msg)
        {
            base.OnHurtAfter(msg);
            if(this.Owner.IsDeadOrEscaped || this.Owner.IsDying){
                return;
            }
            if(msg.DamageInfo.Modify[0].Damage.Source is AbstractCard card) {
                if(card.Type == CardType.ATTACK) {
                    this.Flash();
                    this.AddToBot(new DamageAction(msg.DamageInfo.Unit, new DamageInfo(this.Owner, this.Amount, DamageType.THORNS),
                        AttackEffect.SLASH_HORIZONTAL));
                }
            }
        }
    }
}