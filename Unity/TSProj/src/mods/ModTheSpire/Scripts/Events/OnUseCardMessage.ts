import {IMessage} from "Core/ObserverMessageKit";
import AbstractCreature from "mods/ModTheSpire/Scripts/Unit/AbstractCreature";
import AbstractCard from "mods/ModTheSpire/Scripts/Cards/AbstractCard";

export class OnUseCardMessage  implements IMessage{
    public static readonly Id = "OnUseCardMessage";
    constructor(public readonly Source:AbstractCreature,public Target:AbstractCreature[],public readonly Card:AbstractCard) {
    }
}