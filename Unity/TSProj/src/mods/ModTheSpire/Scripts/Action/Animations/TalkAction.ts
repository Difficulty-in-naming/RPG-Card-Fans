import AbstractGameAction, {ActionType} from "mods/ModTheSpire/Scripts/Action/AbstractGameAction";
import AbstractCreature from "mods/ModTheSpire/Scripts/Unit/AbstractCreature";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {SpeechBubble} from "mods/ModTheSpire/Scripts/Effect/Combat/SpeechBubble";
import Async from "Core/Async";

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