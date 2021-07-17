import {IMessage} from "Core/ObserverMessageKit";
import AbstractCreature from "mods/ModTheSpire/Scripts/Unit/AbstractCreature";

export class OnDeathMessage implements IMessage{
    public static readonly Id = "OnDeath";
    public constructor(public source:AbstractCreature){

    }
}