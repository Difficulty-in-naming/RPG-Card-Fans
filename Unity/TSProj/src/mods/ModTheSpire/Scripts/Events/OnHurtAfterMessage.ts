import { IMessage } from "../../../../Core/ObserverMessageKit";
import DamageInfo from "../DataDefine/DamageInfo";
import AbstractCreature from "../Unit/AbstractCreature";

export class OnHurtAfterMessage implements IMessage{
    public static readonly Id = "OnHurtAfterMessage";
    public constructor(public Damage:DamageInfo,public target:AbstractCreature){

    }
}