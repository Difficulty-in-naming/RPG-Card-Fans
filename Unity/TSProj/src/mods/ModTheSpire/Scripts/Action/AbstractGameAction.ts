import QueueMessageKit, {IGameAction} from "../../../../Core/QueueMessageKit";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";

export default class AbstractGameAction implements IGameAction{
    Duration: number = 0;
    Type : ActionType;
    
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