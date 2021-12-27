import { IMessage } from "../../../../Core/ObserverMessageKit";
import AbstractCard from "../Cards/AbstractCard";
import AbstractCreature from "../Unit/AbstractCreature";

export class OnPreUseCardMessage  implements IMessage{
    public static readonly Id = "OnPreUseCardMessage";
    constructor(public readonly Source:AbstractCreature,public readonly Card:AbstractCard,public CanUse:boolean) {
    }
}