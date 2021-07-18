import AbstractGameAction from "mods/ModTheSpire/Scripts/Action/AbstractGameAction";
import {ShakeDur, ShakeIntensity, ShakeScreen} from "mods/ModTheSpire/Scripts/Effect/ShakeScreen";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import Async from "Core/Async";

export class ShakeScreenAction extends AbstractGameAction{
    public constructor(private Interval:number,private intensity:ShakeIntensity,private dur:ShakeDur,private dir = {Vertical:false,Horizontal:true}) {
        super();
    }
    
    public async Update(): Promise<boolean> {
        DungeonManager.EffectManager.Play(new ShakeScreen(this.intensity,this.dur,this.dir));
        await Async.Delay(this.Interval);
        return true;
    }
}