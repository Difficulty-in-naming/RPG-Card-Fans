import {IMessage} from "Core/ObserverMessageKit";
import {AbstractPower} from "mods/ModTheSpire/Scripts/Power/AbstractPower";

export class PowerModifiedAmountMessage implements IMessage{
    public static readonly Id = "PowerModifiedAmountMessage";
    public constructor(public Power : AbstractPower,public Before:number,public After:number) {
    }
}