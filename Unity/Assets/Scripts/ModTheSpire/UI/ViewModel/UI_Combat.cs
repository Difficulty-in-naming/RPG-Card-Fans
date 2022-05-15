using System.Collections.Generic;
using Core.Game;
using Core.Utils.Unity;
using FairyGUI;
using ModTheSpire.Effect;
using ModTheSpire.Effect.Combat;
using ModTheSpire.ModTheSpire_Combat;
using UnityEngine;

namespace ModTheSpire.UI.ViewModel
{
    public class UI_Combat : UIBase<View_Combat>
    {
        private float mEnergyVfxTimer;
        private List<GameDeckGlowEffect> mDeckVfx = new();
        private List<DiscardGlowEffect> mDiscardVfx = new();
        private List<DiscardGlowEffect> mDiscardVfx2 = new();
        private bool HandleMode = false; //手柄模式
        private Rect TargetRect;
        private UI_CombatHandLayout HandLayout;
        private List<GLoader> mReticleArrow = new List<GLoader>();

        protected override void OnInit(IUIParams p)
        {
            base.OnInit(p);
            View.MakeFullScreen();
            HandLayout = new UI_CombatHandLayout(this);
            for (var i = 0; i < 19; i++)
            {
                var block = new GLoader();
                block.url = "ui://ModTheSpire_Combat/reticleBlock";
                View.AddChild(block);
                block.sortingOrder = 1;
                block.visible = false;
                block.autoSize = true;
                block.SetPivot(0.5f, 1, true);
                mReticleArrow.Add(block);
            }

            var arrow = new FairyGUI.GLoader();
            arrow.url = "ui://ModTheSpire_Combat/reticleArrow";
            View.AddChild(arrow);
            arrow.sortingOrder = 1;
            arrow.visible = false;
            arrow.autoSize = true;
            arrow.SetPivot(0.5f, 1, true);
            mReticleArrow.Add(arrow);
            HandLayout.Render();
        }

        void RenderExhaustVfx()
        {
            if ((mEnergyVfxTimer -= Time.deltaTime) < 0)
            {
                var effect = new ExhaustPileParticle();
                EffectKit.Inst.Play(effect);
                View.Exhaust.AddChildAt(effect.Loader, 0);
                mEnergyVfxTimer = 0.05f;
            }
        }

        void RenderDrawPileVfx()
        {
            var length = mDeckVfx.Count;
            for (var i = length - 1; i >= 0; i--)
            {
                mDeckVfx[i].Duration += Time.deltaTime;
                mDeckVfx[i].Update();
                if (mDeckVfx[i].IsDone)
                    mDeckVfx.RemoveAt(i);
            }

            if (length < 25 && !LocalSettings.Inst.DisableEffects)
            {
                var effect = new GameDeckGlowEffect();
                View.Deck.AddChildAt(effect.Loader, 0);
                mDeckVfx.Add(effect);
            }
        }

        void RenderDiscardPileVfx()
        {
            var length = mDiscardVfx.Count;
            for (var i = length - 1; i >= 0; i--)
            {
                mDiscardVfx[i].Duration += Time.deltaTime;
                mDiscardVfx[i].Update();
                if (mDiscardVfx[i].IsDone)
                    mDiscardVfx.RemoveAt(i);
            }

            if (length < 9 && !LocalSettings.Inst.DisableEffects)
            {
                var effect = new DiscardGlowEffect(false);
                View.Discard.AddChildAt(effect.Loader, 0);
                mDiscardVfx.Add(effect);
            }

            length = mDiscardVfx2.Count;
            for (var i = length - 1; i >= 0; i--)
            {
                mDiscardVfx2[i].Duration += Time.deltaTime;
                mDiscardVfx2[i].Update();
                if (mDiscardVfx2[i].IsDone)
                    mDiscardVfx2.RemoveAt(i);
            }

            if (length < 9 && !LocalSettings.Inst.DisableEffects)
            {
                var effect = new DiscardGlowEffect(true);
                View.Discard.AddChild(effect.Loader);
                mDiscardVfx2.Add(effect);
            }
        }


        void RenderReticle()
        {
            View.ReticleCorner.visible = true;
            var leftTop = View.ReticleCorner.GetChild("LeftTop");
            var llt = this.TargetRect.LeftTop();
            leftTop.SetXY(llt.x - 9, llt.y - 9);
            leftTop.TweenMove(llt, 0.9f).SetEase(EaseType.ElasticOut);
            var leftBottom = View.ReticleCorner.GetChild("LeftBottom");
            var llb = this.TargetRect.LeftBottom();
            leftBottom.SetXY(llb.x - 9, llb.y + 9);
            leftBottom.TweenMove(llb, 0.9f).SetEase(FairyGUI.EaseType.ElasticOut);
            var rightTop = View.ReticleCorner.GetChild("RightTop");
            var rlt = this.TargetRect.RightTop();
            rightTop.SetXY(rlt.x - 9, rlt.y - 9);
            rightTop.TweenMove(rlt, 0.9f).SetEase(FairyGUI.EaseType.ElasticOut);
            var rightBottom = View.ReticleCorner.GetChild("RightBottom");
            var rlb = this.TargetRect.RightTop();
            rightBottom.SetXY(rlb.x - 9, rlb.y - 9);
            rightBottom.TweenMove(rlb, 0.9f).SetEase(FairyGUI.EaseType.ElasticOut);
        }

        public override void Update()
        {
            base.Update();
            RenderExhaustVfx();
            RenderDrawPileVfx();
            RenderDiscardPileVfx();
            HandLayout.Update();
        }
    }
}