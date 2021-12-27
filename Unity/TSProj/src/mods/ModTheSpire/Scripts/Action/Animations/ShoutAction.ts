import DungeonManager from "../../DungeonManager";
import { MegaSpeechBubble } from "../../Effect/Combat/MegaSpeechBubble";
import AbstractCreature from "../../Unit/AbstractCreature";
import { AbstractPlayer } from "../../Unit/Character/AbstractPlayer";
import AbstractGameAction, { ActionType } from "../AbstractGameAction";

export class ShoutAction extends AbstractGameAction{
    Type = ActionType.TEXT;
    public constructor(private _Source:AbstractCreature,private _Text:string,private _Duration:number = 0.5,private _BubbleDuration:number = 3) {
        super();
    }

    async Update(): Promise<boolean> {
        let hitBox = this._Source.GetHitBox();
        DungeonManager.EffectManager.Play(new MegaSpeechBubble(hitBox.CX, hitBox.CY,this._Text,this._BubbleDuration,!(this._Source instanceof AbstractPlayer)));
        return super.Update();
    }
}