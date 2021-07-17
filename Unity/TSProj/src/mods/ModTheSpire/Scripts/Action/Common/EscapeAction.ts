import AbstractGameAction, {ActionType} from "mods/ModTheSpire/Scripts/Action/AbstractGameAction";
import {AbstractMonster} from "mods/ModTheSpire/Scripts/Unit/Monster/AbstractMonster";
import Async from "Core/Async";

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