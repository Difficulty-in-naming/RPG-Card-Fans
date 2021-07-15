import AbstractGameAction from "mods/ModTheSpire/Scripts/Action/AbstractGameAction";
import {AbstractMonster} from "mods/ModTheSpire/Scripts/Unit/Monster/AbstractMonster";

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