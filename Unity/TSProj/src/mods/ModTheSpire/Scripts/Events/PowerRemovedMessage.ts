import { IMessage } from "../../../../Core/ObserverMessageKit";
import { AbstractPower } from "../Power/AbstractPower";
import AbstractCreature from "../Unit/AbstractCreature";

export class PowerRemovedMessage implements IMessage{
    public static readonly Id = "PowerRemovedMessage";
    public constructor(public Power:AbstractPower,public Owner:AbstractCreature) {
    }
}