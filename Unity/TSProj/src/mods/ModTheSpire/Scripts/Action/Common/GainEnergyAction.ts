import Async from "../../../../../Core/Async";
import DungeonManager from "../../DungeonManager";
import AbstractCreature from "../../Unit/AbstractCreature";
import AbstractGameAction, { ActionType } from "../AbstractGameAction";

export default class GainEnergyAction extends AbstractGameAction
{
    public constructor(private Amount : number) {
        super();
    }
    
    async Update(){
        DungeonManager.Inst.Player.GainEnergy(this.Amount);
        if(this.Duration >= 0.2)
            return true;
        return false;
    }
}
