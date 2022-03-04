import { IMessage } from "../../../../Core/ObserverMessageKit";
import { UseCardAction } from "../Action/Utility/UseCardAction";
import AbstractCard from "../Cards/AbstractCard";
import AbstractCreature from "../Unit/AbstractCreature";

export class OnUseCardBeforeMessage  implements IMessage{
    public static readonly Id = "OnUseCardBeforeMessage";
    CanUse: boolean = true;
    constructor(public readonly Source:AbstractCreature,public Target:AbstractCreature,public readonly Card:AbstractCard,public Action:UseCardAction) {
    }
}