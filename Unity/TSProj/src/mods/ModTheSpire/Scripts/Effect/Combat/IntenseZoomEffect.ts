import {AbstractEffect} from "mods/ModTheSpire/Scripts/Effect/AbstractEffect";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {BorderFlashEffect} from "mods/ModTheSpire/Scripts/Effect/Combat/BorderFlashEffect";
import Color from "mods/ModTheSpire/Scripts/DataDefine/Color";

export class IntenseZoomEffect extends AbstractEffect{
    public constructor(private _X:number,private _Y:number,private _IsBlack:boolean) {
        super();
    }
    Update() {
        super.Update();
        DungeonManager.EffectManager.Play(new BorderFlashEffect(this._IsBlack ? Color.Black : Color.Gold,this._IsBlack));
        for (let i = 0; i < 10; i++) {
            DungeonManager.EffectManager.Play(new IntenseZoomEffect(this._X,this._Y,this._IsBlack));
        }
        this.IsDone = true;
    }
}