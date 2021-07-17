import {IMessage} from "Core/ObserverMessageKit";
import {AbstractPower} from "mods/ModTheSpire/Scripts/Power/AbstractPower";
import AbstractCreature from "mods/ModTheSpire/Scripts/Unit/AbstractCreature";

export class PreModifyBlockMessage implements IMessage{
    public static readonly Id = "PreModifyBlockMessage";
    constructor(public block:number) {
    }
}