import { IMessage } from "../../../../Core/ObserverMessageKit";

export class OnPreBattleMessage implements IMessage{
    public static readonly Id = "OnPreBattleMessage";
    public constructor() {
    }
}