import Async from "../../../../../Core/Async";
import { AbstractPower } from "../../Power/AbstractPower";
import AbstractCreature from "../../Unit/AbstractCreature";
import AbstractGameAction from "../AbstractGameAction";

export class ReducePowerAction extends AbstractGameAction{
    public constructor(public Target:AbstractCreature,public Source:AbstractCreature,public power:string|AbstractPower,public Amount:number) {
        super();
    }

    async Update(): Promise<boolean> {
        if(this.Duration == 0){
            let reduceMe:AbstractPower;
            if(this.power){
                if(typeof this.power === 'string'){
                    reduceMe = this.Target.GetPower(this.power);
                }
                else{
                    reduceMe = <AbstractPower>this.power;
                }
                if(reduceMe){
                    reduceMe.Amount -= this.Amount;
                }
            }
        }
        await Async.Delay(0.25);
        return true;
    }
}