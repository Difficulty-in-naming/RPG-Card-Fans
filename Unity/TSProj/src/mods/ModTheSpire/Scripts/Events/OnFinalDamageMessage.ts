import {IMessage} from "Core/ObserverMessageKit";
import DamageInfo from "mods/ModTheSpire/Scripts/DataDefine/DamageInfo";
import AbstractCreature from "mods/ModTheSpire/Scripts/Unit/AbstractCreature";

export class OnFinalDamageMessage implements  IMessage{
    public static readonly Id = "OnFinalDamage";
    public constructor(public info:DamageInfo,public source:AbstractCreature,public target: AbstractCreature) {
    }
}