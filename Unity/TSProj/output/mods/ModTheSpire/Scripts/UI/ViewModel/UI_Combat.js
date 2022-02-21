"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UI_Combat = void 0;
const csharp_1 = require("csharp");
const TimeKit_1 = require("../../../../../Core/Utils/TimeKit");
const DiscardGlowEffect_1 = require("../../Effect/DiscardGlowEffect");
const EffectKit_1 = require("../../Effect/EffectKit");
const ExhaustPileParticle_1 = require("../../Effect/ExhaustPileParticle");
const GameDeckGlowEffect_1 = require("../../Effect/GameDeckGlowEffect");
const ModTheSpire_Combat_1 = require("../../Gen/View/ModTheSpire_Combat");
const LocalSettings_1 = require("../../Saves/LocalSettings");
const UI_CombatHandLayout_1 = require("./UI_CombatHandLayout");
class UI_Combat extends ModTheSpire_Combat_1.View_Combat {
    mEnergyVfxTimer = 0;
    mDeckVfx = new Array();
    mDiscardVfx = new Array();
    mDiscardVfx2 = new Array();
    HandleMode = false; //手柄模式
    TargetRect;
    HandLayout;
    OnInit(...args) {
        this.View.MakeFullScreen();
        this.HandLayout = new UI_CombatHandLayout_1.UI_CombatHandLayout(this);
        this.HandLayout.Render();
    }
    RenderExhaustVfx() {
        if ((this.mEnergyVfxTimer -= TimeKit_1.TimeKit.DeltaTime) < 0) {
            let effect = new ExhaustPileParticle_1.ExhaustPileParticle();
            EffectKit_1.default.Inst().Play(effect);
            this.Exhaust.AddChildAt(effect.Loader, 0);
            this.mEnergyVfxTimer = 0.05;
        }
    }
    RenderDrawPileVfx() {
        let length = this.mDeckVfx.length;
        for (let i = length - 1; i >= 0; i--) {
            this.mDeckVfx[i].Duration += TimeKit_1.TimeKit.DeltaTime;
            this.mDeckVfx[i].Update();
            if (this.mDeckVfx[i].IsDone)
                this.mDeckVfx.splice(i, 1);
        }
        if (length < 25 && !LocalSettings_1.LocalSettings.Inst().DisableEffects) {
            let effect = new GameDeckGlowEffect_1.GameDeckGlowEffect();
            this.Deck.AddChildAt(effect.Loader, 0);
            this.mDeckVfx.push(effect);
        }
    }
    RenderDiscardPileVfx() {
        let length = this.mDiscardVfx.length;
        for (let i = length - 1; i >= 0; i--) {
            this.mDiscardVfx[i].Duration += TimeKit_1.TimeKit.DeltaTime;
            this.mDiscardVfx[i].Update();
            if (this.mDiscardVfx[i].IsDone)
                this.mDiscardVfx.splice(i, 1);
        }
        if (length < 9 && !LocalSettings_1.LocalSettings.Inst().DisableEffects) {
            let effect = new DiscardGlowEffect_1.DiscardGlowEffect(false);
            this.Discard.AddChildAt(effect.Loader, 0);
            this.mDiscardVfx.push(effect);
        }
        length = this.mDiscardVfx2.length;
        for (let i = length - 1; i >= 0; i--) {
            this.mDiscardVfx2[i].Duration += TimeKit_1.TimeKit.DeltaTime;
            this.mDiscardVfx2[i].Update();
            if (this.mDiscardVfx2[i].IsDone)
                this.mDiscardVfx2.splice(i, 1);
        }
        if (length < 9 && !LocalSettings_1.LocalSettings.Inst().DisableEffects) {
            let effect = new DiscardGlowEffect_1.DiscardGlowEffect(true);
            this.Discard.AddChild(effect.Loader);
            this.mDiscardVfx2.push(effect);
        }
    }
    RenderReticle() {
        this.ReticleCorner.visible = true;
        const leftTop = this.ReticleCorner.GetChild("LeftTop");
        let llt = this.TargetRect.LeftTop;
        leftTop.SetXY(llt.X - 9, llt.Y - 9);
        leftTop.TweenMove(llt.UnityVec, 0.9).SetEase(csharp_1.FairyGUI.EaseType.ElasticOut);
        const leftBottom = this.ReticleCorner.GetChild("LeftBottom");
        let llb = this.TargetRect.LeftBottom;
        leftBottom.SetXY(llb.X - 9, llb.Y + 9);
        leftBottom.TweenMove(llb.UnityVec, 0.9).SetEase(csharp_1.FairyGUI.EaseType.ElasticOut);
        const rightTop = this.ReticleCorner.GetChild("RightTop");
        let rlt = this.TargetRect.RightTop;
        rightTop.SetXY(rlt.X - 9, rlt.Y - 9);
        rightTop.TweenMove(rlt.UnityVec, 0.9).SetEase(csharp_1.FairyGUI.EaseType.ElasticOut);
        const rightBottom = this.ReticleCorner.GetChild("RightBottom");
        let rlb = this.TargetRect.RightTop;
        rightBottom.SetXY(rlb.X - 9, rlb.Y - 9);
        rightBottom.TweenMove(rlb.UnityVec, 0.9).SetEase(csharp_1.FairyGUI.EaseType.ElasticOut);
    }
    OnUpdate() {
        super.OnUpdate();
        this.RenderExhaustVfx();
        this.RenderDrawPileVfx();
        this.RenderDiscardPileVfx();
        this.HandLayout.Update();
    }
}
exports.UI_Combat = UI_Combat;
//# sourceMappingURL=UI_Combat.js.map