import {IMessage} from "Core/ObserverMessageKit";
import AbstractCreature from "mods/ModTheSpire/Scripts/Unit/AbstractCreature";
import AbstractCard from "mods/ModTheSpire/Scripts/Cards/AbstractCard";

export class OnPreUseCardMessage  implements IMessage{
    public static readonly Id = "OnPreUseCardMessage";
    constructor(public readonly Source:AbstractCreature,public readonly Card:AbstractCard,public CanUse:boolean) {
    }
}