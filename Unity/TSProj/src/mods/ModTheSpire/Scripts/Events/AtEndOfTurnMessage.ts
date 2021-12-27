import { IMessage } from "../../../../Core/ObserverMessageKit";
import AbstractCreature from "../Unit/AbstractCreature";

export class AtEndOfTurnMessage implements IMessage{
    public static readonly Id = "AtEndOfTurnMessage"; 
    public constructor(public IsPlayer:boolean,public unit:AbstractCreature) {
    }
}