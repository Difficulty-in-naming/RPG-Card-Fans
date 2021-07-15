import AbstractGameAction, {ActionType} from "mods/ModTheSpire/Scripts/Action/AbstractGameAction";

export class WaitAction extends AbstractGameAction{
    Type = ActionType.WAIT;
    constructor(private dur:number) {
        super();
    }
    
    public async Update(): Promise<boolean> {
        return this.Duration >= this.dur;
    }
}