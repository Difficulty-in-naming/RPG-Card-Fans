import { IMessage } from "../../../../Core/ObserverMessageKit";
import AbstractCreature from "../Unit/AbstractCreature";

export class AtEndOfTurnPreEndTurnCardsMessage implements IMessage{
    public static readonly Id = "AtEndOfTurnPreEndTurnCards";
    public constructor(public unit:AbstractCreature){

    }
}