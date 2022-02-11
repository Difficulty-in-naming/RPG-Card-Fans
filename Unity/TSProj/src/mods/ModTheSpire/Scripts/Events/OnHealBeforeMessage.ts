import { IMessage } from "../../../../Core/ObserverMessageKit";
import AbstractCreature from "../Unit/AbstractCreature";

export class OnHealBeforeMessage implements IMessage{
    public static readonly Id = "OnHealBeforeMessage";
    public constructor(public source:AbstractCreature,public Amount : number){

    }
}