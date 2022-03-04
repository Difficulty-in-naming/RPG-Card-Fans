import { FairyGUI } from "csharp";
import { TimeKit } from "../../../../../../Core/Utils/TimeKit";
import Color from "../../../DataDefine/Color";
import DungeonManager from "../../../DungeonManager";
import { LightFlareParticleEffect } from "../../../Effect/LightFlareParticleEffect";
import { View_PeekButton } from "../../../Gen/View/ModTheSpire_Common";

export class UI_HandCardSelectScreen extends View_PeekButton
{
    private ButtonView : FairyGUI.GButton;
    private ParticleTimer: number;
    OnInit(...args: any[]): void {
        this.ButtonView = <FairyGUI.GButton>this.View;
    }

    OnUpdate(): void {
        if(this.ButtonView.selected){
            this.ParticleTimer -= TimeKit.DeltaTime;
            if (this.ParticleTimer < 0.0) {
                this.ParticleTimer = 0.2;
                DungeonManager.EffectManager.Play(new LightFlareParticleEffect(this.ButtonView.x, this.ButtonView.y, Color.Sky));
                DungeonManager.EffectManager.Play(new LightFlareParticleEffect(this.ButtonView.x, this.ButtonView.y, Color.White));
            }
        }
    }
}