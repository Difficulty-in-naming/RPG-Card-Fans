import {EffectOrder} from "./EffectKit";

export class AEffect{
    public Duration : number = 0;
    public async Update() : Promise<boolean>{return true;}
    public order = EffectOrder.MID;
}