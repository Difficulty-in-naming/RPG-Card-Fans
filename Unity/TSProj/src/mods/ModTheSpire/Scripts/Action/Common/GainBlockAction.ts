import AbstractGameAction from "mods/ModTheSpire/Scripts/Action/AbstractGameAction";
import AbstractCreature from "../../Unit/AbstractCreature";
import Async from "Core/Async";

export default class GainBlockAction extends AbstractGameAction
{
    private Target:AbstractCreature;
    private Source:AbstractCreature;
    private Amount:number;
    public constructor(target : AbstractCreature, amount : number, source: AbstractCreature = null) {
        super();
        this.Target = target;
        if(!source)
            this.Source = source;
        else
            this.Source = target;
        this.Amount = amount;
    }
    
    async Update(){
        if(this.Target && !this.Target.IsDying && !this.Target.IsDead){
            return true;
        }
        await Async.Delay(250);
        return true;
    }
}
