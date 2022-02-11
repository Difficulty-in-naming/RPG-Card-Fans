import { FairyGUI, UnityEngine } from "csharp";
import { Mathf } from "../../../../Core/Module/Math/Mathf";
import { TimeKit } from "../../../../Core/Utils/TimeKit";
import Color from "../DataDefine/Color";
import FileHelper from "../FileHelper";
import { ImageMaster } from "../Helpers/ImageMaster";
import UIHelper from "../UI/UIHelper";
import { AbstractEffect } from "./AbstractEffect";


export class ExhaustBlurEffect extends AbstractEffect{
    private Vr:number;
    private Vy:number;
    public Loader:FairyGUI.GLoader;
    public TargetScale : number;
    private Interval:number;
    constructor(public X : number,public Y:number) {
        super();
        this.Loader = UIHelper.CreateGLoader();
        if(Mathf.Random() > 0.5){
            this.Loader.url = ImageMaster.EXHAUST_L;
            this.Interval = Mathf.RandomRange(0.9,1.2);
            this.TargetScale = Mathf.RandomRange(0.5,1.3);
        }
        else{
            this.Loader.url = ImageMaster.EXHAUST_S;
            this.Interval = Mathf.RandomRange(0.6,1.4);
            this.TargetScale = Mathf.RandomRange(0.3,1);
        }
        let color = Color.Black;
        color.G = color.R = Mathf.RandomRange(26,102)
        color.B = color.R + 13;
        this.Loader.color = color.UnityColor;
        this.Loader.touchable = false;
        this.Loader.SetPivot(0.5,0.5,true);
        this.Loader.x = X + Mathf.RandomRange(-150,150);
        this.Loader.y = Y + Mathf.RandomRange(-240,150);
        this.Vr = Mathf.RandomRange(-250,250);
        this.Vy = Mathf.RandomRange(1,5);
        this.Loader.SetScale(0.01,0.01);
        this.Loader.rotation = Mathf.RandomRange(0,360);
        this.Loader.TweenScale(new UnityEngine.Vector2(this.TargetScale,this.TargetScale),this.Interval).SetEase(FairyGUI.EaseType.BackInOut);
    }
    
    Update() {
        if(this.Duration >= this.Interval){
            this.IsDone = true;
            return true;
        }
        this.Loader.x += Mathf.RandomRange(-2,2);
        this.Loader.y += Mathf.RandomRange(-2,2);
        this.Loader.y += this.Vy * TimeKit.DeltaTime * 60;
        this.Loader.rotation += this.Vr * TimeKit.DeltaTime;
        if(this.Duration > this.Interval - 0.33){
            this.Loader.alpha = (this.Interval - this.Duration) * 3
        }
    }
}