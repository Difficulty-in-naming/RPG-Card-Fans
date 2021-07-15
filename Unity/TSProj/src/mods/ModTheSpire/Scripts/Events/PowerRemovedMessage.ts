import {IMessage} from "Core/ObserverMessageKit";
import {AbstractPower} from "mods/ModTheSpire/Scripts/Power/AbstractPower";
import AbstractCreature from "mods/ModTheSpire/Scripts/Unit/AbstractCreature";

export class PowerRemovedMessage implements IMessage{
    public static readonly Id = "PowerRemovedMessage";
    public constructor(public Power:AbstractPower,public Owner:AbstractCreature) {
    }
}