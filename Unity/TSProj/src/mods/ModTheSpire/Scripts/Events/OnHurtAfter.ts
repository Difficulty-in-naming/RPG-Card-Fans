import { IMessage } from "../../../../Core/ObserverMessageKit";
import DamageInfo from "../DataDefine/DamageInfo";
import AbstractCreature from "../Unit/AbstractCreature";

export class OnHurtAfter implements IMessage{
    public static readonly Id = "PlayerOnHurtAfter";
    public constructor(public Damage:DamageInfo,public target:AbstractCreature){

    }
}