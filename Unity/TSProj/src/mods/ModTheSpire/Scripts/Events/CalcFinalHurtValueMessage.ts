import { IMessage } from "../../../../Core/ObserverMessageKit";
import DamageInfo from "../DataDefine/DamageInfo";
import AbstractCreature from "../Unit/AbstractCreature";

//计算伤害结束
export class CalcFinalHurtValueMessage implements  IMessage{
    public static readonly Id = "CalcFinalHurtValueMessage";
    public constructor(public info:DamageInfo,public source:AbstractCreature,public target: AbstractCreature) {
    }
}