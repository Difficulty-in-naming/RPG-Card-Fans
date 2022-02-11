import Async from "../../../../../Core/Async";
import AbstractCreature from "../../Unit/AbstractCreature";
import AbstractGameAction, { ActionType } from "../AbstractGameAction";

export default class HealAction extends AbstractGameAction
{
    Type = ActionType.HEAL;
    public constructor(private target : AbstractCreature, private source: AbstractCreature, private amount : number) {
        super();
    }
    
    async Update(){
        if(this.Duration >= 0.2){
            this.target.Heal(this.amount);
            return true;
        }
    }
}
