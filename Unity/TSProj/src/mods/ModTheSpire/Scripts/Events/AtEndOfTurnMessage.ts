import {IMessage} from "Core/ObserverMessageKit";

export class AtEndOfTurnMessage implements IMessage{
    public static readonly Id = "AtEndOfTurnMessage"; 
    public constructor(public IsPlayer) {
    }
}