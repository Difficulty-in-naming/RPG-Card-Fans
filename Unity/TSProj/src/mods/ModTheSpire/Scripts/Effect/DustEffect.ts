import { FairyGUI } from "csharp";
import { Mathf } from "../../../../Core/Module/Math/Mathf";
import { TimeKit } from "../../../../Core/Utils/TimeKit";
import Color from "../DataDefine/Color";
import FileHelper from "../FileHelper";
import UIHelper from "../UI/UIHelper";
import { AbstractEffect } from "./AbstractEffect";


export class DustEffect extends AbstractEffect{
    private Vx:number;
    private Vy:number;
    private BaseAlpha:number;
    private Vr:number;
    public Loader:FairyGUI.GLoader
    private Interval:number;
    constructor(parent:FairyGUI.GComponent = null) {
        super();
        this.Interval = Mathf.RandomRange(5,14);
        this.Loader = UIHelper.CreateGLoader();
        if(parent)
            parent.AddChild(this.Loader);
        this.Loader.touchable = false;
        this.Loader.url = FileHelper.FormatPath("Vfx/env/dust" + Mathf.Floor(Mathf.RandomRange(1,7)) + ".png");
        this.Loader.x = Mathf.RandomRange(0,FairyGUI.GRoot.inst.width);
        this.Loader.y = Mathf.RandomRange(500,1080);
        this.Vx = Mathf.RandomRange(-12,12);
        this.Vy = Mathf.RandomRange(-30,12);
        let color = Mathf.Floor(Mathf.RandomRange(26,180));
        this.Loader.color = new Color(color,color,color,255).UnityColor();
        this.Loader.alpha = 0;
        this.BaseAlpha = 1 - (color / 255);
        this.Loader.rotation = Mathf.Floor(Mathf.RandomRange(0,360));
        this.Vr = Mathf.RandomRange(-120,120);
        this.Loader.TweenFade(this.BaseAlpha,this.Interval / 2).SetEase(FairyGUI.EaseType.SineInOut).OnComplete(()=>{
            this.Loader.TweenFade(0,this.Interval / 2).SetEase(FairyGUI.EaseType.SineInOut);
        });
    }
    
    Update() {
        let rotation = this.Loader.rotation + this.Vr * TimeKit.DeltaTime;
        let x = this.Loader.x + this.Vx * TimeKit.DeltaTime;
        let y = this.Loader.y + this.Vy * TimeKit.DeltaTime;
        this.Loader.rotation = rotation;
        this.Loader.x = x;
        this.Loader.y = y;
        if(this.Duration >= this.Interval) {
            this.IsDone = true;
            this.Loader.Dispose();
        }
    }
}