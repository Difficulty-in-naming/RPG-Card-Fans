using ModTheSpire.Card;
using ModTheSpire.Dungeon;
using UnityEngine;

namespace ModTheSpire.Effect.Combat
{
    public class ShowCardAndAddToDiscardEffect : AbstractEffect
    {
        private AbstractCard mCard;
        private const float PADDING = 30;

        public ShowCardAndAddToDiscardEffect(AbstractCard srcCard, float x, float y)
        {
            mCard = srcCard.Clone();
            mCard.View.GComponent.SetPosition(x, y, 0);
            DungeonManager.EffectManager.Play(new CardPoofEffect(mCard.View.GComponent.x, mCard.View.GComponent.y));
            mCard.View.GComponent.SetScale(0.75f, 0.75f);
            SoundMaster.PlayVoice(SoundMaster.CARD_OBTAIN);
            if (mCard.Type != CardType.CURSE && mCard.Type != CardType.STATUS && DungeonManager.Inst.Player.GetPower("MasterRealityPower") != null)
            {
                mCard.Upgrade();
            }

            DungeonManager.Inst.Player.DiscardPile.AddToTop(srcCard);
        }

        public ShowCardAndAddToDiscardEffect(AbstractCard srcCard)
        {
            mCard = srcCard;
            this.identifySpawnLocation(Screen.width / 2.0f, Screen.height / 2.0f);
            DungeonManager.EffectManager.Play(new CardPoofEffect(mCard.View.GComponent.x, mCard.View.GComponent.y));
            mCard.View.GComponent.SetScale(0.01f, 0.01f);
            mCard.View.GComponent.TweenScale(Vector2.one, 1.5f);
            if (mCard.Type != CardType.CURSE && mCard.Type != CardType.STATUS && DungeonManager.Inst.Player.GetPower("MasterRealityPower") != null)
            {
                mCard.Upgrade();
            }

            DungeonManager.Inst.Player.DiscardPile.AddToTop(srcCard);
        }

        private void identifySpawnLocation(float x, float y)
        {
            int effectCount = 0;
            foreach (var node in DungeonManager.EffectManager.List)
            {
                if (node is ShowCardAndAddToDiscardEffect)
                    effectCount++;
            }

            this.mCard.View.GComponent.TweenMoveY(Screen.height * 0.5f, 0.6f);
            switch (effectCount)
            {
                case 0:
                {
                    mCard.View.GComponent.TweenMoveX(Screen.width * 0.5f, 0.6f);
                    break;
                }
                case 1:
                {
                    mCard.View.GComponent.TweenMoveX(Screen.width * 0.5f - PADDING - mCard.View.GComponent.width, 0.6f);
                    break;
                }
                case 2:
                {
                    mCard.View.GComponent.TweenMoveX(Screen.width * 0.5f + PADDING + mCard.View.GComponent.width, 0.6f);
                    break;
                }
                case 3:
                {
                    mCard.View.GComponent.TweenMoveX(Screen.width * 0.5f - (PADDING - mCard.View.GComponent.width) * 2, 0.6f);
                    break;
                }
                case 4:
                {
                    mCard.View.GComponent.TweenMoveX(Screen.width * 0.5f + (PADDING + mCard.View.GComponent.width) * 2, 0.6f);
                    break;
                }
                default:
                {
                    mCard.View.GComponent.TweenMoveX(Random.Range(Screen.width * 0.1f, Screen.width * 0.9f), 0.6f);
                    mCard.View.GComponent.TweenMoveY(Random.Range(Screen.height * 0.2f, Screen.height * 0.8f), 0.6f);
                    break;
                }
            }
        }

        public override async void Update()
        {
            base.Update();
            if (this.Duration >= 1.5f)
            {
                Finish();
                mCard.Shrink();
                DungeonManager.Inst.CurrentRoom.Souls.Discard(true);
            }
        }
    }
}