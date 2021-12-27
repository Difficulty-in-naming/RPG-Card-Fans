import { IMessage } from "../../../../Core/ObserverMessageKit";
import { AbstractPower } from "../Power/AbstractPower";
import AbstractCreature from "../Unit/AbstractCreature";

export class PostApplyPowerMessage implements IMessage{
    public static readonly Id = "PostApplyPowerMessage";
    constructor(public Power:AbstractPower,public Target:AbstractCreature,public Source:AbstractCreature) {
    }
}