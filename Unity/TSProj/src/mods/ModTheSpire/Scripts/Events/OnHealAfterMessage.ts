import { IMessage } from "../../../../Core/ObserverMessageKit";
import AbstractCreature from "../Unit/AbstractCreature";

export class OnHealAfterMessage implements IMessage{
    public static readonly Id = "OnHealAfterMessage";
    public constructor(public source:AbstractCreature,public Amount : number){

    }
}