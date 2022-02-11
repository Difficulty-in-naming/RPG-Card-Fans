import { IMessage } from "../../../../Core/ObserverMessageKit";

//卡牌进入手牌
export class CardEnterHandMessage implements  IMessage{
    public static readonly Id = "CardEnterHandMessage";
    public constructor() {
    }
}