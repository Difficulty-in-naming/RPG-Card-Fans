using ModTheSpire.Card;
using ModTheSpire.Dungeon;
using ModTheSpire.Effect.Other;
using ModTheSpire.Event.Ids;
using TCG.Config;

namespace ModTheSpire.Power.Buff
{
    public class AngerPower : AbstractPower
    {
        public override string Id { get; } = nameof(AngerPower);
        public override string Name { get; } = LocalizationProperty.Read("能力-激怒");
        public override string Icon { get; } = "Powers/anger.png";
        public override PowerType Type { get; } = PowerType.Buff;
        public override string GetDescription(object[] args)
        {
            return string.Format(LocalizationProperty.Read("能力-激怒描述"), this.Amount);
        }

        public override void OnInit()
        {
            base.OnInit();
            DungeonManager.MessageManager.Add<OnUseCardMessage>(OnUseCard);
        }

        public override void OnRemove()
        {
            base.OnRemove();
            DungeonManager.MessageManager.Remove<OnUseCardMessage>(OnUseCard);
        }
        
        private void OnUseCard(OnUseCardMessage e)
        {
            if(e.Card.Type == CardType.SKILL){
                this.AddToTop(new ApplyPowerAction(this.Owner,this.Owner,new StrengthPower(),this.Amount));
                this.Flash();
            }
        }
    }
}