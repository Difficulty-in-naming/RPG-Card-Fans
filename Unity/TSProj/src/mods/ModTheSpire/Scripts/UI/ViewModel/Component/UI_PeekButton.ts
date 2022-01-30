import { FairyGUI } from "csharp";
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
            this.ParticleTimer -= Gdx.graphics.getDeltaTime();
            if (this.ParticleTimer < 0.0f) {
                this.ParticleTimer = 0.2f;
                AbstractDungeon.effectsQueue.add(new LightFlareParticleEffect(this.hb.cX, this.hb.cY, Color.SKY));
                AbstractDungeon.effectsQueue.add(new LightFlareParticleEffect(this.hb.cX, this.hb.cY, Color.WHITE));
            }
        }
    }
}