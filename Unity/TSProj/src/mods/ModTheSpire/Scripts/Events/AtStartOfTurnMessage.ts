import {IMessage} from "Core/ObserverMessageKit";

export class AtStartOfTurnMessage implements IMessage{
    public static readonly Id = "AtStartOfTurnMessage"; 
}