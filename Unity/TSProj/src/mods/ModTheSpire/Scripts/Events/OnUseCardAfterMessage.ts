import { IMessage } from "../../../../Core/ObserverMessageKit";
import AbstractCard from "../Cards/AbstractCard";
import AbstractCreature from "../Unit/AbstractCreature";

export class OnUseCardAfterMessage  implements IMessage{
    public static readonly Id = "OnUseCardAfterMessage";
    constructor(public readonly Source:AbstractCreature,public Target:AbstractCreature,public readonly Card:AbstractCard) {
    }
}