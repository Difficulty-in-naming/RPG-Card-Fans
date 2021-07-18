import { FairyGUI, UnityEngine } from "csharp";
import {AbstractEffect} from "mods/ModTheSpire/Scripts/Effect/AbstractEffect";
import UIHelper from "mods/ModTheSpire/Scripts/UI/UIHelper";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import {Mathf} from "Core/Module/Math/Mathf";
import Color from "mods/ModTheSpire/Scripts/DataDefine/Color";
import {TimeKit} from "Core/Utils/TimeKit";

export class SmokeBlurEffect extends AbstractEffect{
    public Loader:FairyGUI.GLoader;
    private _Interval:number;
    private _TargetScale:number;
    private _Va:number;
    private _Vy:number;
    public constructor(public X: number,public Y:number) {
        super();
        this.Loader = UIHelper.CreateGLoader();
        if(Mathf.Random() < 0.5){
            this.Loader.url = FileHelper.FormatPath(`Vfx/exhaust/bigBlur.png`)
            this._TargetScale = Mathf.RandomRange(0.8,2.2);
        }else{
            this.Loader.url = FileHelper.FormatPath(`Vfx/exhaust/smallBlur.png`)
            this._TargetScale = Mathf.RandomRange(0.8,1.2);
        }
        this.Loader.SetScale(0.01,0.01);
        this.Loader.SetPosition(X+Mathf.RandomRange(-180,150),Y+Mathf.RandomRange(-240,150),0);
        let color = new Color();
        color.R = Mathf.RandomRange(128,153)
        color.G = color.R + Mathf.RandomRange(0, 51);
        color.B = 51;
        this.Loader.color = color.UnityColor();
        this._Interval = Mathf.Floor(Mathf.RandomRange(2,2.5));
        this.Loader.rotation = Mathf.RandomRange(0,360);
        this._Vy = Mathf.RandomRange(1,5);
        this._Va = Mathf.RandomRange(-250,250);
        this.Loader.TweenScale(new UnityEngine.Vector2(this._TargetScale,this._TargetScale),this._Interval).SetEase(FairyGUI.EaseType.ExpoOut);
        this.Loader.TweenFade(0,0.33).SetDelay(this._Interval - 0.33).SetEase(FairyGUI.EaseType.Linear);
    }
    
    Update() {
        super.Update();
        if(this.Duration >= this._Interval) {
            this.IsDone = true;
            this.Loader.Dispose();
            return;
        }
        this.Loader.x += Mathf.RandomRange(-2,2) + this._Vy;
        this.Loader.y += Mathf.RandomRange(-2,2) + this._Vy;
        this.Loader.rotation += this._Va * TimeKit.DeltaTime;
    }
}