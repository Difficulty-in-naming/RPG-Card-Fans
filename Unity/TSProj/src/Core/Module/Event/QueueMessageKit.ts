import { ActionType } from "../../../mods/ModTheSpire/Scripts/Action/AbstractGameAction";
import GainBlockAction from "../../../mods/ModTheSpire/Scripts/Action/Common/GainBlockAction";
import HealAction from "../../../mods/ModTheSpire/Scripts/Action/Common/HealAction";
import { UseCardAction } from "../../../mods/ModTheSpire/Scripts/Action/Utility/UseCardAction";
import {TimeKit} from "../../Utils/TimeKit";
import { IGameAction } from "./IGameAction";


export default class QueueMessageKit
{
    private waiting : boolean; 
    private list : Array<IGameAction> = new Array<IGameAction>();
    private currentRunning : IGameAction;
    public AddToBottom(func : IGameAction)
    {
        this.list.splice(0,0,func);
    }
    
    public AddToTop(func : IGameAction){
        this.list.push(func);
    }

    public Remove(func : IGameAction){
        this.list = this.list.filter(item => item == func);
    }

    public ClearPostCombatActions() {
        for (let index = this.list.length - 1; index >= 0 ; index--) {
            const e = this.list[index];
            if (e instanceof HealAction || e instanceof GainBlockAction || e instanceof UseCardAction || e.Type == ActionType.DAMAGE) continue;
            this.list.splice(index,1);
        }
    }

    public async Update()
    {
        if(this.waiting && this.currentRunning) {
            this.currentRunning += TimeKit.DeltaTime;
            return;
        }
        let action = this.currentRunning == undefined ? this.list.pop() : this.currentRunning;
        if(action){
            if(this.currentRunning != action){
                action.Init();
                this.currentRunning = action;
            }
            this.waiting = true;
            let result = await action.Update();
            this.waiting = false;
            if(result)
            {
                this.currentRunning = null;
            }
        }
    }
}