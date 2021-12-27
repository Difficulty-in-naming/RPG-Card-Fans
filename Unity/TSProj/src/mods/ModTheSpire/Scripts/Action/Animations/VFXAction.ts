import Async from "../../../../../Core/Async";
import DungeonManager from "../../DungeonManager";
import { AbstractEffect } from "../../Effect/AbstractEffect";
import { EffectOrder } from "../../Effect/EffectKit";
import AbstractGameAction from "../AbstractGameAction";

export default class VFXAction extends AbstractGameAction
{
    constructor(private Effect: AbstractEffect, private Interval:number = 0,private Order = EffectOrder.MID) {
        super();
    }

    async Update(): Promise<boolean> {
        DungeonManager.EffectManager.Play(this.Effect);
        await Async.Delay(this.Interval);
        return true;
    }
}