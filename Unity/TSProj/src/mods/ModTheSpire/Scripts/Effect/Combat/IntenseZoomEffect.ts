import Color from "../../DataDefine/Color";
import DungeonManager from "../../DungeonManager";
import { AbstractEffect } from "../AbstractEffect";
import { BorderFlashEffect } from "./BorderFlashEffect";


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