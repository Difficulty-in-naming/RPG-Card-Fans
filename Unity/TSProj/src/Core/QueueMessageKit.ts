import {UnityEngine} from 'csharp'
import {TimeKit} from "./Utils/TimeKit";

export interface IGameAction{
    Duration : number;
    Init();
    Update() : Promise<boolean>;
}

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