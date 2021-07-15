import {EffectOrder} from "./EffectKit";

export class AbstractEffect {
    public Duration : number = 0;
    public IsDone:boolean = false;
    public Update(){};
    public Dispose(){};
    public order = EffectOrder.MID;
}