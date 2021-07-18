import AbstractGameAction from "mods/ModTheSpire/Scripts/Action/AbstractGameAction";
import {AbstractEffect} from "mods/ModTheSpire/Scripts/Effect/AbstractEffect";
import AbstractCreature from "../../Unit/AbstractCreature";
import Async from "Core/Async";
import EffectKit, {EffectOrder} from "mods/ModTheSpire/Scripts/Effect/EffectKit";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";

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