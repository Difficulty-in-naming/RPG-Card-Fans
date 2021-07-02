import AbstractCreature from "../AbstractCreature";
import ModTheSpireAction from "./ModTheSpireAction";
import {AEffect} from "../Effect/AEffect";
import EffectKit, {EffectOrder} from "../Effect/EffectKit";
import Async from "../../../../Core/Async";

export default class VFXAction extends ModTheSpireAction
{
    private readonly Target: AbstractCreature;
    private readonly Effect : AEffect
    private readonly dur : number;
    //target:目标,damageInfo:伤害数据,effect:伤害特效
    constructor(target: AbstractCreature,effect: AEffect,duration:number,order = EffectOrder.MID)
    {
        super();
        this.Target = target;
        this.Effect = effect;
        this.dur = duration;
        this.Effect.order = order;
    }

    async Update(): Promise<boolean> {
        EffectKit.Inst().Play(this.Effect);
        await Async.Delay(this.dur);
        return true;
    }
}