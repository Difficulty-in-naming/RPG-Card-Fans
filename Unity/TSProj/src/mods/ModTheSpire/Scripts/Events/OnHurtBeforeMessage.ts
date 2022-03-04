import { IMessage } from "../../../../Core/ObserverMessageKit";
import DamageInfo from "../DataDefine/DamageInfo";
import AbstractCreature from "../Unit/AbstractCreature";

export class OnHurtBeforeMessage implements IMessage{
    public static readonly Id = "OnHurtBeforeMessage";
    public constructor(public Damage:DamageInfo,public target:AbstractCreature){

    }
}