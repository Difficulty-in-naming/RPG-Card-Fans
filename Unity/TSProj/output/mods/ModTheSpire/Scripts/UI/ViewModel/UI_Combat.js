"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UI_Combat = void 0;
const TimeKit_1 = require("../../../../../Core/Utils/TimeKit");
const DiscardGlowEffect_1 = require("../../Effect/DiscardGlowEffect");
const EffectKit_1 = require("../../Effect/EffectKit");
const ExhaustPileParticle_1 = require("../../Effect/ExhaustPileParticle");
const GameDeckGlowEffect_1 = require("../../Effect/GameDeckGlowEffect");
const ModTheSpire_Combat_1 = require("../../Gen/View/ModTheSpire_Combat");
const LocalSettings_1 = require("../../Saves/LocalSettings");
class UI_Combat extends ModTheSpire_Combat_1.View_Combat {
    mEnergyVfxTimer = 0;
    mDeckVfx = new Array();
    mDiscardVfx = new Array();
    mDiscardVfx2 = new Array();
    OnInit(...args) {
        this.EndTurnButton2.visible = false;
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
    OnUpdate() {
        super.OnUpdate();
        this.RenderExhaustVfx();
        this.RenderDrawPileVfx();
        this.RenderDiscardPileVfx();
    }
}
exports.UI_Combat = UI_Combat;
//# sourceMappingURL=UI_Combat.js.map