import { IMessage } from "../../../../Core/ObserverMessageKit";

export class NotifyPowerDescerptionChangedMessage implements IMessage{
    public static readonly Id = "NotifyPowerDescerptionChangedMessage";
    constructor(public PowerId:string) {
    }
}