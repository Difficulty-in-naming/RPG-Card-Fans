import { IMessage } from "../../../../Core/ObserverMessageKit";
import DamageInfo from "../DataDefine/DamageInfo";
import AbstractCreature from "../Unit/AbstractCreature";

export class OnHurtMessage implements IMessage{
    public static readonly Id = "OnHurtMessage";
    public constructor(public Damage:DamageInfo,public target:AbstractCreature){
        
    }    
}