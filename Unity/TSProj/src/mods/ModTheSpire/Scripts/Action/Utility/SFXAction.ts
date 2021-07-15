import AbstractGameAction from "mods/ModTheSpire/Scripts/Action/AbstractGameAction";
import {SoundMaster} from "mods/ModTheSpire/Scripts/Audio/SoundMaster";

export class SFXAction extends AbstractGameAction{
    public constructor(public path:string, public pitchVar?:number, public pitchAdjust?:boolean) {
        super();
    }

    async Update(): Promise<boolean> {
        if(this.pitchAdjust)
            SoundMaster.PlayVoiceA(this.path,this.pitchVar);
        else
            SoundMaster.PlayVoice(this.path,this.pitchVar);
        return super.Update();
    }
} 