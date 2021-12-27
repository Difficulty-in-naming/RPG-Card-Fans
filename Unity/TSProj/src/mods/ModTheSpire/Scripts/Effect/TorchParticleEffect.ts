import { FairyGUI } from "csharp";
import { Mathf } from "../../../../Core/Module/Math/Mathf";
import { TimeKit } from "../../../../Core/Utils/TimeKit";
import Color from "../DataDefine/Color";
import FileHelper from "../FileHelper";
import UIHelper from "../UI/UIHelper";
import { AbstractEffect } from "./AbstractEffect";


export class TorchParticleEffect extends AbstractEffect{
    private Interval:number;
    public Loader : FairyGUI.GLoader
    private Vy:number;
    public static RenderGreen:boolean;
    constructor(public X:number,public Y: number,parent:FairyGUI.GComponent = null) {
        super();
        this.Interval = Mathf.RandomRange(1.5,3);
        this.Loader = UIHelper.CreateGLoader();
        if(parent)
            parent.AddChildAt(this.Loader,0);
        this.Loader.url = FileHelper.FormatPath(`Vfx/env/fire${Mathf.Floor(Mathf.RandomRange(1,4))}.png`);
        this.Loader.SetPivot(0.5,0.5,true);
        this.Loader.SetPosition(X - Mathf.RandomRange(-3,3) ,Y,0);
        this.Loader.autoSize = true;
        let scale = Mathf.RandomRange(1,2);
        this.Loader.SetScale(scale,scale);
        this.Vy = Mathf.RandomRange(-100,0);
        this.Loader.rotation = Mathf.RandomRange(-20,20);
        this.Loader.color = TorchParticleEffect.RenderGreen ? 
            new Color(Mathf.RandomRange(153,255),Mathf.RandomRange(77,153),Mathf.RandomRange(0,77)).UnityColor() :
            new Color(Mathf.RandomRange(26,77),Mathf.RandomRange(128,230),Mathf.RandomRange(26,77)).UnityColor();
        this.Loader.TweenFade(0,this.Interval).SetEase(FairyGUI.EaseType.SineInOut);
    }
    Update() {
        super.Update();
        let y = this.Loader.y + this.Vy * TimeKit.DeltaTime;
        this.Loader.y = y;
        if(this.Duration >= this.Interval){
            this.IsDone = true;
            this.Loader.Dispose();
        }
    }
}