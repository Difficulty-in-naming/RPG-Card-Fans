import { IMessage } from "../../../../Core/ObserverMessageKit";
import DamageInfo from "../DataDefine/DamageInfo";
import AbstractCreature from "../Unit/AbstractCreature";

export class OnHurtBefore implements IMessage{
    public static readonly Id = "PlayerOnHurtBefore";
    public constructor(public Damage:DamageInfo,public target:AbstractCreature){

    }
}