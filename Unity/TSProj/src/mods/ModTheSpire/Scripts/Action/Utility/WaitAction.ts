import AbstractGameAction, {ActionType} from "mods/ModTheSpire/Scripts/Action/AbstractGameAction";
import Async from "Core/Async";

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