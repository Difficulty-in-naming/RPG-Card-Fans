import {IMessage} from "Core/ObserverMessageKit";
import DamageInfo from "mods/ModTheSpire/Scripts/DataDefine/DamageInfo";
import AbstractCreature from "mods/ModTheSpire/Scripts/Unit/AbstractCreature";

//计算伤害
export class CalcHurtValueMessage implements  IMessage{
    public static readonly Id = "CalcDamageValueMessage";
    public constructor(public info:DamageInfo,public source:AbstractCreature,public target: AbstractCreature) {
    }
}