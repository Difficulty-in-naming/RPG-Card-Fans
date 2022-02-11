import { IMessage } from "../../../../Core/ObserverMessageKit";

//卡牌进入手牌
export class CardRemoveFromHandMessage implements IMessage{
    public static readonly Id = "CardRemoveFromHandMessage";
    public constructor() {
    }
}