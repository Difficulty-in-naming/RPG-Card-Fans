import { FairyGUI } from "csharp";
import { Mathf } from "../../../../Core/Module/Math/Mathf";
import { TimeKit } from "../../../../Core/Utils/TimeKit";
import Color from "../DataDefine/Color";
import FileHelper from "../FileHelper";
import UIHelper from "../UI/UIHelper";
import { AbstractEffect } from "./AbstractEffect";

export class BottomFogEffect extends AbstractEffect{
    private Interval:number;
    private Loader : FairyGUI.GLoader
    private Scale:number;
    private FlipX:number;
    private FlipY:number;
    private Vx:number;
    private Vr:number;
    constructor(parent:FairyGUI.GComponent = null) {
        super();
        this.Interval = Mathf.RandomRange(10,12);
        this.Loader = UIHelper.CreateGLoader();
        if(parent)
            parent.AddChild(this.Loader);
        this.Loader.url = FileHelper.FormatPath("Vfx/env/smoke" + Mathf.Floor(Mathf.RandomRange(1,4)) + ".png");
        this.Loader.touchable = false;
        this.Loader.SetPivot(0.5,0.5,true);
        this.Loader.x = Mathf.RandomRange(-200,2120);
        this.Loader.y = FairyGUI.GRoot.inst.height + Mathf.RandomRange(60,410);
        this.Vx = Mathf.RandomRange(-200,200);
        this.Vr = Mathf.RandomRange(-10,10);
        let tmp = Mathf.RandomRange(0.1,0.15) * 255;
        let color = new Color(0,0,0,255);
        color.R =  tmp + Mathf.RandomRange(0,0.1) * 255;
        color.G = tmp;
        color.B = color.R + Mathf.RandomRange(0,0.05) * 255;
        this.Scale = Mathf.RandomRange(4,6);
        this.FlipX = Mathf.Random() >= 0.5 ?1 : -1;
        this.FlipY = Mathf.Random() >= 0.5 ?1 : -1;
        this.Loader.color = color.UnityColor();
        this.Loader.alpha = 0;
        this.Loader.SetScale(this.Scale * this.FlipX,this.Scale * this.FlipY);
        this.Loader.TweenFade(0.3,this.Interval / 2).SetEase(FairyGUI.EaseType.SineInOut).OnComplete(()=>{
            this.Loader.TweenFade(0,this.Interval / 2).SetEase(FairyGUI.EaseType.SineInOut)
        })
    }
    
    Update() {
        super.Update();
        let x = this.Loader.x + this.Vx * TimeKit.DeltaTime;
        let rotation = this.Loader.rotation + this.Vr * TimeKit.DeltaTime;
        this.Scale += TimeKit.DeltaTime / 3;
        this.Loader.x = x;
        this.Loader.rotation = rotation;
        this.Loader.SetScale(this.Scale * this.FlipX,this.Scale * this.FlipY);
        if(this.Duration >= this.Interval) {
            this.IsDone = true;
            this.Loader.Dispose();
        }
    }
}