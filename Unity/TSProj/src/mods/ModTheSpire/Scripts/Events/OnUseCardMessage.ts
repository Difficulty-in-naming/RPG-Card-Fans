import { IMessage } from "../../../../Core/ObserverMessageKit";
import AbstractCard from "../Cards/AbstractCard";
import AbstractCreature from "../Unit/AbstractCreature";

export class OnUseCardMessage  implements IMessage{
    public static readonly Id = "OnUseCardMessage";
    constructor(public readonly Source:AbstractCreature,public Target:AbstractCreature[],public readonly Card:AbstractCard) {
    }
}