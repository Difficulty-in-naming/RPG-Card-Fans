import { IMessage } from "../../../../Core/ObserverMessageKit";
import AbstractCreature from "../Unit/AbstractCreature";

export class OnDeathMessage implements IMessage{
    public static readonly Id = "OnDeathMessage";
    public constructor(public source:AbstractCreature){

    }
}