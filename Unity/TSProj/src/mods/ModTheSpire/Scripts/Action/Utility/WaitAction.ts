import Async from "../../../../../Core/Async";
import AbstractGameAction, { ActionType } from "../AbstractGameAction";

export class WaitAction extends AbstractGameAction{
    Type = ActionType.WAIT;
    constructor(private dur:number) {
        super();
    }
    
    public async Update(): Promise<boolean> {
        await Async.Delay(this.dur);
        return true;
    }
}