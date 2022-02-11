import { IGameAction } from "../../../../Core/Module/Event/IGameAction";
import DungeonManager from "../../../../mods/ModTheSpire/Scripts/DungeonManager";

export default class AbstractGameAction implements IGameAction{
    Type: ActionType;
    Duration: number = 0;
    Init() {
    }

    protected AddToBot(action : IGameAction){DungeonManager.ActionManager.AddToBottom(action);}
    protected AddToTop(action : IGameAction){DungeonManager.ActionManager.AddToTop(action);}
    
    async Update(): Promise<boolean> {
        return true;
    }
}

export enum ActionType {
    BLOCK,
    POWER,
    CARD_MANIPULATION,
    DAMAGE,
    DEBUFF,
    DISCARD,
    DRAW,
    EXHAUST,
    HEAL,
    ENERGY,
    TEXT,
    USE,
    CLEAR_CARD_QUEUE,
    DIALOG,
    SPECIAL,
    WAIT,
    SHUFFLE,
    REDUCE_POWER,

}