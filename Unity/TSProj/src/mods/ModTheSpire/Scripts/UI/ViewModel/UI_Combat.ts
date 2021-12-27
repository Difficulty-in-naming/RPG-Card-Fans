import { TimeKit } from "../../../../../Core/Utils/TimeKit";
import { DiscardGlowEffect } from "../../Effect/DiscardGlowEffect";
import EffectKit from "../../Effect/EffectKit";
import { ExhaustPileParticle } from "../../Effect/ExhaustPileParticle";
import { GameDeckGlowEffect } from "../../Effect/GameDeckGlowEffect";
import { View_Combat } from "../../Gen/View/ModTheSpire_Combat";
import { LocalSettings } from "../../Saves/LocalSettings";

export class UI_Combat extends View_Combat{
    private mEnergyVfxTimer : number = 0;
    private mDeckVfx = new Array<GameDeckGlowEffect>();
    private mDiscardVfx = new Array<DiscardGlowEffect>();
    private mDiscardVfx2 = new Array<DiscardGlowEffect>();

    OnInit(...args) {
        this.EndTurnButton2.visible = false;
    }
    
    RenderExhaustVfx(){
        if((this.mEnergyVfxTimer -= TimeKit.DeltaTime) < 0){
            let effect = new ExhaustPileParticle();
            EffectKit.Inst().Play(effect);
            this.Exhaust.AddChildAt(effect.Loader,0);
            this.mEnergyVfxTimer = 0.05;
        }
    }
    
    RenderDrawPileVfx(){
        let length = this.mDeckVfx.length;
        for (let i = length - 1; i >= 0; i--) {
            this.mDeckVfx[i].Duration += TimeKit.DeltaTime;
            this.mDeckVfx[i].Update();
            if(this.mDeckVfx[i].IsDone)
                this.mDeckVfx.splice(i,1);
        }
        if(length < 25 && !LocalSettings.Inst().DisableEffects){
            let effect = new GameDeckGlowEffect();
            this.Deck.AddChildAt(effect.Loader,0);
            this.mDeckVfx.push(effect);
        }
    }
    
    RenderDiscardPileVfx(){
        let length = this.mDiscardVfx.length;
        for (let i = length - 1; i >= 0; i--) {
            this.mDiscardVfx[i].Duration += TimeKit.DeltaTime;
            this.mDiscardVfx[i].Update();
            if(this.mDiscardVfx[i].IsDone)
                this.mDiscardVfx.splice(i,1);
        }
        if(length < 9 && !LocalSettings.Inst().DisableEffects){
            let effect = new DiscardGlowEffect(false);
            this.Discard.AddChildAt(effect.Loader,0);
            this.mDiscardVfx.push(effect);
        }

        length = this.mDiscardVfx2.length;
        for (let i = length - 1; i >= 0; i--) {
            this.mDiscardVfx2[i].Duration += TimeKit.DeltaTime;
            this.mDiscardVfx2[i].Update();
            if(this.mDiscardVfx2[i].IsDone)
                this.mDiscardVfx2.splice(i,1);
        }
        if(length < 9 && !LocalSettings.Inst().DisableEffects){
            let effect = new DiscardGlowEffect(true);
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