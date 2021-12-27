import { IMessage } from "../../../../Core/ObserverMessageKit";
import DamageInfo from "../DataDefine/DamageInfo";
import AbstractCreature from "../Unit/AbstractCreature";

export class OnHurt implements IMessage{
    public static readonly Id = "PlayerOnHurt";
    public constructor(public Damage:DamageInfo,public target:AbstractCreature){
        
    }    
}