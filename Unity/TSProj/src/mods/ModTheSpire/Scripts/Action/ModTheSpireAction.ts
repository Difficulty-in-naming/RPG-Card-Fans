import {IGameAction} from "../../../../Core/QueueMessageKit";

export default class ModTheSpireAction implements IGameAction{
    Duration: number = 0;
    Type : ActionType;
    Init() {
    }

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