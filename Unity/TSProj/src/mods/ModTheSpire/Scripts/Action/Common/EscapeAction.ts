import Async from "../../../../../Core/Async";
import { AbstractMonster } from "../../Unit/Monster/AbstractMonster";
import AbstractGameAction, { ActionType } from "../AbstractGameAction";

export class EscapeAction extends AbstractGameAction{
    Type = ActionType.TEXT
    public constructor(private enemy:AbstractMonster) {
        super();
    }
    
    async Update(): Promise<boolean> {
        if(this.Duration == 0){
            this.enemy.Escape();
        }
        await Async.Delay(500)
        return super.Update();
    }
}