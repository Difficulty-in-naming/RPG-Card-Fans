import { FairyGUI, UnityEngine } from "csharp";
import { Mathf } from "../../../../Core/Module/Math/Mathf";
import { TimeKit } from "../../../../Core/Utils/TimeKit";
import Color from "../DataDefine/Color";
import FileHelper from "../FileHelper";
import { ImageMaster } from "../Helpers/ImageMaster";
import UIHelper from "../UI/UIHelper";
import { AbstractEffect } from "./AbstractEffect";


export class ExhaustEmberEffect extends AbstractEffect{
    private Vx:number;
    private Vy:number;
    public Loader:FairyGUI.GLoader;
    public Add:FairyGUI.GLoader;

    public TargetScale : number;
    private Interval:number;
    private RotateSpeed:number;
    constructor(public X : number,public Y:number) {
        super();
        this.Loader = UIHelper.CreateGLoader();
        this.Add = UIHelper.CreateGLoader();
        this.Add.blendMode = FairyGUI.BlendMode.Add;
        let rand = Math.trunc(Mathf.RandomRange(0,3));
        let color = Color.Black;
        if(rand == 0){
            color = Color.Coral.Clone();
        }
        else if(rand == 1){
            color = Color.Orange.Clone();
        }
        else
            color = Color.Scarlet.Clone();
        this.Interval = Mathf.RandomRange(0.6,1.4);
        this.Interval *= this.Interval;
        this.TargetScale = Mathf.RandomRange(0.4,0.8);
        color.G = color.R = Mathf.RandomRange(26,102)
        color.B = color.R + 13;
        this.Vx = Mathf.RandomRange(-150,150);
        this.Vy = Mathf.RandomRange(-100,300);
        this.Add.url = this.Loader.url = this.SetImg();
        this.Add.color = this.Loader.color = color.UnityColor;
        this.Add.touchable = this.Loader.touchable = false;
        this.Loader.SetPivot(0.5,0.5,true);
        this.Add.SetPivot(0.5,0.5,true);
        this.Add.x = this.Loader.x = X + Mathf.RandomRange(-170,170);
        this.Add.y = this.Loader.y = Y + Mathf.RandomRange(-220,150);
        this.Loader.SetScale(0.01,0.01);
        this.Add.SetScale(0.01,0.01);
        this.RotateSpeed = Mathf.RandomRange(-700,700);
        this.Loader.TweenScale(new UnityEngine.Vector2(this.TargetScale,this.TargetScale),this.Interval).SetEase(FairyGUI.EaseType.BackInOut);
        this.Add.TweenScale(new UnityEngine.Vector2(this.TargetScale,this.TargetScale),this.Interval).SetEase(FairyGUI.EaseType.BackInOut);
    }

    private SetImg() : string{
        let rand = Math.trunc(Mathf.RandomRange(0,5));
        switch(rand)
        {
            case 0:return ImageMaster.DUST_1;
            case 1:return ImageMaster.DUST_2;
            case 2:return ImageMaster.DUST_3;
            case 3:return ImageMaster.DUST_4;
            case 4:return ImageMaster.DUST_5;
        }
        return ImageMaster.DUST_6;
    }
    
    Update() {
        if(this.Duration >= this.Interval){
            this.IsDone = true;
            return true;
        }
        this.Add.x = this.Loader.x += this.Vx * TimeKit.DeltaTime;
        this.Add.y = this.Loader.y += this.Vy * TimeKit.DeltaTime;
        this.Add.rotation = this.Loader.rotation += this.RotateSpeed * TimeKit.DeltaTime;
        if(this.Duration > this.Interval - 0.5){
            this.Loader.alpha = (this.Interval - this.Duration) * 2
        }
        this.Add.alpha = this.Loader.alpha / 3;
    }
}