import { IMessage } from "../../../../Core/ObserverMessageKit";

export class NotifyPowerDescerptionChanged implements IMessage{
    public static readonly Id = "NotifyPowerDescerptionChanged";
    constructor(public PowerId:string) {
    }
}