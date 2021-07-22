import AbstractGameAction, {ActionType} from "mods/ModTheSpire/Scripts/Action/AbstractGameAction";
import AbstractCreature from "mods/ModTheSpire/Scripts/Unit/AbstractCreature";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {MegaSpeechBubble} from "mods/ModTheSpire/Scripts/Effect/Combat/MegaSpeechBubble";
import {AbstractPlayer} from "mods/ModTheSpire/Scripts/Unit/Character/AbstractPlayer";

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