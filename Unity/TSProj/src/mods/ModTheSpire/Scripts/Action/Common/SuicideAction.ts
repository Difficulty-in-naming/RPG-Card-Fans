import AbstractGameAction, {ActionType} from "mods/ModTheSpire/Scripts/Action/AbstractGameAction";
import {AbstractMonster} from "mods/ModTheSpire/Scripts/Unit/Monster/AbstractMonster";

export class SuicideAction extends AbstractGameAction{
    Type = ActionType.DAMAGE;
    public constructor(public Monster:AbstractMonster,public TriggerRelics:boolean = true){
        super();
    }
    
    public async Update(): Promise<boolean> {
        this.Monster.Gold = 0;
        this.Monster.Health = 0;
        this.Monster.Die();
        return true;
    }
}