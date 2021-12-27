import { FairyGUI } from "csharp";
import { Mathf } from "../../../../../Core/Module/Math/Mathf";
import { TimeKit } from "../../../../../Core/Utils/TimeKit";
import Color from "../../DataDefine/Color";
import UIHelper from "../../UI/UIHelper";
import { AbstractEffect } from "../AbstractEffect";

export class DamageImpactCurvyEffect extends AbstractEffect{
    public Loader:FairyGUI.GLoader
    private _Interval:number;
    private _SpeedStart:number;
    private _SpeedTarget:number;
    private _Speed:number;
    private _WaveIntensity:number;
    private _WaveSpeed:number;
    private _Rotation :number;
    private _Scale:number = 1;
    public constructor(private _X:number,private _Y:number,private _Color:Color = Color.Goldenrod) {
        super();
        this.Loader = UIHelper.CreateGLoader();
        this.Loader.url = "Vfx/combat/strikeLine3";
        this._Interval = Mathf.RandomRange(0.8,1.1);
        this.Loader.SetPivot(0.5,0.5,true);
        this.Loader.SetPosition(_X,_Y,0);
        this._SpeedStart = this._Speed = Mathf.RandomRange(400,900);
        this._SpeedTarget = Mathf.RandomRange(0.1,0.5);
        this.Loader.color = this._Color.UnityColor();
        this._Rotation = Mathf.RandomRange(0,360);
        this.Loader.rotation = this._Rotation;
        this._WaveIntensity = Mathf.RandomRange(5,30);
        this._WaveSpeed = Mathf.RandomRange(-20,20);
        this.Loader.alpha = 0.25
        this.Loader.blendMode = FairyGUI.BlendMode.Add;
        this.Loader.TweenFade(0,this._Interval / 2).SetEase(FairyGUI.EaseType.Linear).SetDelay(this._Interval / 2);
    }
    
    public Update() {
        if(this.Duration >= this._Interval)
        {
            this.IsDone = true;
            return;
        }
        super.Update();
        let tmpX = Mathf.CosDeg(this._Rotation) * this._Speed * TimeKit.DeltaTime;
        let tmpY = Mathf.SinDeg(this._Rotation) * this._Speed * TimeKit.DeltaTime;
        this.Loader.x += tmpX;
        this.Loader.y += tmpY;
        this._Rotation += Mathf.Cos((this._Interval - this.Duration) * this._WaveSpeed) * this._WaveIntensity * TimeKit.DeltaTime * 60;
        this._Scale = (this._Interval - this.Duration) / this._Interval * 0.75;
        this.Loader.SetScale(this._Scale,this._Scale);
        this.Loader.rotation = this._Rotation;
    }
}