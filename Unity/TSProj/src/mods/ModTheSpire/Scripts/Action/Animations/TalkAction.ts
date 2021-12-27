import Async from "../../../../../Core/Async";
import DungeonManager from "../../DungeonManager";
import { SpeechBubble } from "../../Effect/Combat/SpeechBubble";
import AbstractGameAction, { ActionType } from "../AbstractGameAction";

export class TalkAction extends AbstractGameAction{
    Type = ActionType.TEXT;
    public constructor(private X:number,private Y:number,private Text:string,private FlipX? : boolean,private Interval:number = 2,private BubbleDuration:number = 2) {
        super();
    }
    
    public async Update(): Promise<boolean> {
        DungeonManager.EffectManager.Play(new SpeechBubble(this.X,this.Y,this.Text,this.BubbleDuration,this.FlipX));
        await Async.Delay(this.Interval);
        return true;
    }
}