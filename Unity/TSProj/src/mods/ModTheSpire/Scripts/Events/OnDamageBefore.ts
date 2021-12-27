import { IMessage } from "../../../../Core/ObserverMessageKit";
import DamageInfo from "../DataDefine/DamageInfo";
import AbstractCreature from "../Unit/AbstractCreature";

export class OnDamageBefore implements  IMessage{
    public static readonly Id = "OnDamage";
    public constructor(public info:DamageInfo,public source:AbstractCreature,public target: AbstractCreature) {
    }
}