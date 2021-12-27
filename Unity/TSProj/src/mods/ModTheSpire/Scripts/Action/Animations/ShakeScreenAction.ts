import Async from "../../../../../Core/Async";
import DungeonManager from "../../DungeonManager";
import { ShakeIntensity, ShakeDur, ShakeScreen } from "../../Effect/ShakeScreen";
import AbstractGameAction from "../AbstractGameAction";

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