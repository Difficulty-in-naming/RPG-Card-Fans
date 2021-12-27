import { AbstractMonster } from "../../Unit/Monster/AbstractMonster";
import AbstractGameAction from "../AbstractGameAction";

export class RollMoveAction extends AbstractGameAction{
    public constructor(public enemy:AbstractMonster) {
        super();
    }

    async Update(): Promise<boolean> {
        if(this.enemy){
            this.enemy.RollMove();
        }
        return true;
    }
}