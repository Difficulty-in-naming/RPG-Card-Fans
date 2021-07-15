import AbstractGameAction from "mods/ModTheSpire/Scripts/Action/AbstractGameAction";
import {AbstractEffect} from "mods/ModTheSpire/Scripts/Effect/AbstractEffect";
import AbstractCreature from "../../Unit/AbstractCreature";
import Async from "Core/Async";
import EffectKit, {EffectOrder} from "mods/ModTheSpire/Scripts/Effect/EffectKit";

export default class VFXAction extends AbstractGameAction
{
    private readonly Target: AbstractCreature;
    private readonly Effect : AbstractEffect
    private readonly dur : number;
    //target:目标,damageInfo:伤害数据,effect:伤害特效
    constructor(target: AbstractCreature, effect: AbstractEffect, duration:number, order = EffectOrder.MID)
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