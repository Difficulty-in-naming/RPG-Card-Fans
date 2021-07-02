import {AEffect} from "./AEffect";
import {TimeKit} from "../../../../Core/Utils/TimeKit";

export default class EffectKit{
    private static inst: EffectKit;
    public static Inst(): EffectKit {
        if (!EffectKit.inst) {
            EffectKit.inst = new EffectKit();
        }
        return EffectKit.inst;
    }
    private waiting : boolean;
    private RunningEffect : Array<AEffect> = new Array<AEffect>();
    
    public Play(effect: AEffect)
    {
        this.RunningEffect.push(effect);
    }
    
    public async Update(){
        if(this.waiting)
            return;
        for (let i = this.RunningEffect.length - 1; i >= 0; i--) {
            let node = this.RunningEffect[i];
            this.waiting = true; 
            let result = await node.Update();
            this.waiting = false;
            if(!result)
            {
                node.Duration+=TimeKit.DeltaTime;
            }
            else
            {
                this.RunningEffect.splice(i,1);
            }
        }
    }
}

export enum EffectOrder
{
    BOT = 0,
    MID = 1,
    TOP = 3,
}