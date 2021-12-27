import { IMessage } from "../../../../Core/ObserverMessageKit";

export class PostModifyBlockMessage implements IMessage{
    public static readonly Id = "PostModifyBlockMessage";
    constructor(public block:number) {
    }
}