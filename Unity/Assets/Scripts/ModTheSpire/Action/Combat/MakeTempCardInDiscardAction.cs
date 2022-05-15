using Cysharp.Threading.Tasks;
using ModTheSpire.Card;
using ModTheSpire.Dungeon;
using ModTheSpire.Effect.Combat;
using ModTheSpire.Event;

namespace ModTheSpire.Effect.Other
{
    public class MakeTempCardInDiscardAction : IGameAction
    {
        public float Duration { get; set; }
        public ActionType Type { get; } = ActionType.CARD_MANIPULATION;
        private int mNumCards;
        private AbstractCard mCard;
        private bool mSameUUID;
        public MakeTempCardInDiscardAction(AbstractCard card, int amount = 1,bool sameUUID = false) {
            mNumCards = amount;
            mCard = card;
            mSameUUID = false;
            if (!sameUUID && mCard.Type != CardType.CURSE && mCard.Type != CardType.STATUS && DungeonManager.Inst.Player.GetPower("MasterRealityPower") != null)
            {
                mCard.Upgrade();
            }
        }

        public void Init()
        {
            
        }

        public  UniTask<bool> Update()
        {
            if (this.Duration >= 0.5f)
            {
                if (mNumCards < 6)
                {
                    for (int i = 0; i < this.mNumCards; i++)
                    {
                        DungeonManager.EffectManager.Play(new ShowCardAndAddToDiscardEffect(mCard.Clone(mSameUUID)));
                    }
                }

                return UniTask.FromResult(true);
            }

            return UniTask.FromResult(false);
        }
    }
}