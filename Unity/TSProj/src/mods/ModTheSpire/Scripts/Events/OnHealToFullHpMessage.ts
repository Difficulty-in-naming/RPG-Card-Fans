import { IMessage } from "../../../../Core/ObserverMessageKit";
import AbstractCreature from "../Unit/AbstractCreature";

export class OnHealToFullHpMessage implements IMessage{
    public static readonly Id = "OnHealToFullHpMessage";
    public constructor(public source:AbstractCreature){

    }
}