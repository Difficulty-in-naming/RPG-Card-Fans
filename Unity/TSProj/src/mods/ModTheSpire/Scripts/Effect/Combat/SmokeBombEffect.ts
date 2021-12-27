import { SoundMaster } from "../../Audio/SoundMaster";
import DungeonManager from "../../DungeonManager";
import { AbstractEffect } from "../AbstractEffect";
import { SmokeBlurEffect } from "./SmokeBlurEffect";

export class SmokeBombEffect extends AbstractEffect{
    public constructor(private X,private Y) {
        super();
    }
    
    Update() {
        super.Update()
        if(this.Duration == 0){
            SoundMaster.PlayVoice("ATTACK_WHIFF_2");
            for(let i = 0;i<90;i++){
                DungeonManager.EffectManager.Play(new SmokeBlurEffect(this.X,this.Y));
            }
        }
        if(this.Duration >= 0.2)
        {
            SoundMaster.PlayVoice("ATTACK_WHIFF_2");
            this.IsDone = true;
        }
    }
}