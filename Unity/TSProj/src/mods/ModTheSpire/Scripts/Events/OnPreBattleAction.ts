import {IMessage} from "Core/ObserverMessageKit";
export class OnPreBattleAction implements IMessage{
    public static readonly Id = "OnPreBattleAction";
    public constructor() {
    }
}