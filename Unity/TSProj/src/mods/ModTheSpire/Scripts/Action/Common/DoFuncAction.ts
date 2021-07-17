import AbstractGameAction from "mods/ModTheSpire/Scripts/Action/AbstractGameAction";
import Async from "Core/Async";

export class DoFuncAction extends AbstractGameAction{
    public constructor(private Func:Function,private Interval:number = 0) {
        super();
    }

    async Update(): Promise<boolean> {
        if(this.Duration == 0){
            this.Func()
        }
        if(this.Interval == 0)
            return true;
        await Async.Delay(this.Interval);
        return true;
    }
}