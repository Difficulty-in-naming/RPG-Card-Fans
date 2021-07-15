import {IMessage} from "Core/ObserverMessageKit";
import DamageInfo from "mods/ModTheSpire/Scripts/DataDefine/DamageInfo";
import AbstractCreature from "mods/ModTheSpire/Scripts/Unit/AbstractCreature";

export class OnHurtAfter implements IMessage{
    public static readonly Id = "PlayerOnHurtAfter";
    public constructor(public Damage:DamageInfo,public target:AbstractCreature){

    }
}