import {AbstractEffect} from "mods/ModTheSpire/Scripts/Effect/AbstractEffect";
import {SoundMaster} from "mods/ModTheSpire/Scripts/Audio/SoundMaster";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {SmokeBlurEffect} from "mods/ModTheSpire/Scripts/Effect/Combat/SmokeBlurEffect";

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