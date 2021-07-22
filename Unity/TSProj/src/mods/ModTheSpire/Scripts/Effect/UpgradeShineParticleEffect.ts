import { FairyGUI } from "csharp";
import {AbstractEffect} from "mods/ModTheSpire/Scripts/Effect/AbstractEffect";
import UIHelper from "mods/ModTheSpire/Scripts/UI/UIHelper";
import {Mathf} from "Core/Module/Math/Mathf";
import Color from "mods/ModTheSpire/Scripts/DataDefine/Color";
import {TimeKit} from "Core/Utils/TimeKit";

export class UpgradeShineParticleEffect extends AbstractEffect{
    public Loader:FairyGUI.GLoader[] = new FairyGUI.GLoader[2];
    private _Interval:number;
    private _Scale:number;
    private _Vx:number;
    private _Vy:number;
    private _Floor:number;
    private static _Gravity = 3000;
    public constructor(private _X,private _Y) {
        super();
        for (let i = 0; i < 2; i++) {
            this.Create(i);
        }
    }
    
    private Create(i:number){
        this.Loader[i] = UIHelper.CreateGLoader();
        this._Interval = Mathf.RandomRange(0.5,1);
        this.Loader[i].SetPivot(0.5,0.5,true);
        this.Loader[i].color = new Color(Mathf.RandomRange(127,255),Mathf.RandomRange(102, 153),Mathf.RandomRange(0, 51),255).UnityColor();
        if(this._Interval > 0.9)
            this.Loader[i].alpha = 0;
        else
            this.Loader[i].alpha = 1;
        this.Loader[i].rotation = Mathf.RandomRange(0,360);
        this._Vx = Mathf.RandomRange(-900,900);
        this._Vx = Mathf.RandomRange(-500,1000);
        this._Floor = Mathf.RandomRange(100,250);
        this.Loader[i].blendMode = FairyGUI.BlendMode.Add;
        this.Loader[i].SetPosition(this._X,this._Y,0);
        if(this._Interval > 0.9)
            this.Loader[i].TweenFade(1,Mathf.Clamp(this._Interval - 0.9,0,0.1)).SetEase(FairyGUI.EaseType.SineInOut);
        this.Loader[i].TweenFade(0,0.1).SetEase(FairyGUI.EaseType.QuadInOut).SetDelay(this._Interval - 0.1);
    }
    
    Update() {
        super.Update();
        this._Vy -= UpgradeShineParticleEffect._Gravity * TimeKit.DeltaTime;
        for (let i = 0; i < 2; i++) {
            this.Loader[i].x += this._Vx * TimeKit.DeltaTime;
            this.Loader[i].y += this._Vy * TimeKit.DeltaTime;
            this.Loader[i].SetScale(Mathf.RandomRange(0.7,1.3),Mathf.RandomRange(0.7,1.3));
            this.Loader[i].rotation = Mathf.Angle(this._Vx,this._Vy);
        }
        if(this.Loader[0].y <this._Floor){
            this._Vy = -this._Vy * 0.75;
            for (let i = 0; i < 2; i++) {
                this.Loader[i].y = this._Floor + 0.1;
            }
            this._Vx *= 1.1;
        }
    }
}