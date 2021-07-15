import {IMessage} from "Core/ObserverMessageKit";
import DamageInfo from "mods/ModTheSpire/Scripts/DataDefine/DamageInfo";
import AbstractCreature from "mods/ModTheSpire/Scripts/Unit/AbstractCreature";

//计算伤害结束
export class CalcFinalDamageValueMessage implements  IMessage{
    public static readonly Id = "CalcFinalDamageValue";
    public constructor(public info:DamageInfo,public source:AbstractCreature,public target: AbstractCreature) {
    }
}