import {IMessage} from "Core/ObserverMessageKit";
import {AbstractPower} from "mods/ModTheSpire/Scripts/Power/AbstractPower";
import AbstractCreature from "mods/ModTheSpire/Scripts/Unit/AbstractCreature";

export class PreApplyPowerMessage implements IMessage{
    public static readonly Id = "PreApplyPowerMessage";
    constructor(public Power:AbstractPower,public Target:AbstractCreature,public Source:AbstractCreature,public StackAmount:number) {
    }
}