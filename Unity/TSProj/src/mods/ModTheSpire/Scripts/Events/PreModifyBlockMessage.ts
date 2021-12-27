import { IMessage } from "../../../../Core/ObserverMessageKit";

export class PreModifyBlockMessage implements IMessage{
    public static readonly Id = "PreModifyBlockMessage";
    constructor(public block:number) {
    }
}