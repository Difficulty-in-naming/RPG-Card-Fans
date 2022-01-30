import { IMessage } from "../../../../Core/ObserverMessageKit";
import AbstractCreature from "../Unit/AbstractCreature";

export class AtEndOfTurnRemoveBlockMessage implements IMessage{
    public static readonly Id = "AtEndOfTurnRemoveBlockMessage"; 
    public constructor(public Block:number) {
    }
}