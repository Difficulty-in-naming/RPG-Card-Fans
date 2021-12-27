import { TimeKit } from "../../../../Core/Utils/TimeKit";
import { AbstractEffect } from "./AbstractEffect";


export default class EffectKit{
    private static inst: EffectKit;
    public static Inst(): EffectKit {
        if (!EffectKit.inst) {
            EffectKit.inst = new EffectKit();
        }
        return EffectKit.inst;
    }
    private waiting : boolean;
    private AsyncEffect : Array<AbstractEffect> = new Array<AbstractEffect>();
    private SyncEffect : Array<AbstractEffect> = new Array<AbstractEffect>();
    public Play(effect: AbstractEffect, sync:boolean = true)
    {
        if(sync)
            this.SyncEffect.push(effect);
        else
            this.AsyncEffect.push(effect);
    }

    public Update(){
        for (let i = this.AsyncEffect.length - 1; i >= 0; i--) {
            let node = this.AsyncEffect[i];
            try{
                let result = node.Update();
                if(!node.IsDone)
                {
                    node.Duration+=TimeKit.DeltaTime;
                    break;
                }
                else
                {
                    this.AsyncEffect.splice(i,1);
                }
            }
            catch{
                this.AsyncEffect.splice(i,1);
            }
        }

        for (let i = this.SyncEffect.length - 1; i >= 0; i--) {
            let node = this.SyncEffect[i];
            try{
                let result = node.Update();
                if(!node.IsDone)
                {
                    node.Duration+=TimeKit.DeltaTime;
                }
                else
                {
                    this.SyncEffect.splice(i,1);
                }
            }
            catch{
                this.SyncEffect.splice(i,1);
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