import { FairyGUI } from "csharp";
import { Mathf } from "../../../../Core/Module/Math/Mathf";
import Color from "../DataDefine/Color";
import FileHelper from "../FileHelper";
import UIHelper from "../UI/UIHelper";
import { AbstractEffect } from "./AbstractEffect";

export class LightFlareEffect extends AbstractEffect{
    public Loader: FairyGUI.GLoader
    private Interval : number;
    public static RenderGreen:boolean;
    constructor(public X:number,public Y:number,parent:FairyGUI.GComponent = null) {
        super();
        this.Loader = UIHelper.CreateGLoader();
        if(parent)
            parent.AddChildAt(this.Loader,0);
        this.Interval = Mathf.RandomRange(2,3);
        this.Loader.url = FileHelper.FormatPath("Vfx/env/lightFlare" + Mathf.Floor(Mathf.RandomRange(1,3)) + ".png");
        this.Loader.SetPivot(0.5,0.5,true);
        this.Loader.SetPosition(X,Y,0);
        let scale = Mathf.RandomRange(7,10.5);
        this.Loader.SetScale(scale,scale);
        this.Loader.color = LightFlareEffect.RenderGreen ?
            new Color(Mathf.RandomRange(153,255),Mathf.RandomRange(77,153),Mathf.RandomRange(0,77)).UnityColor() :
            new Color(Mathf.RandomRange(26,77),Mathf.RandomRange(128,230),Mathf.RandomRange(26,77)).UnityColor();
        this.Loader.alpha = 0.1;
        this.Loader.TweenFade(0,this.Interval).SetEase(FairyGUI.EaseType.SineInOut);
        this.Loader.blendMode = FairyGUI.BlendMode.Add;
    }
    
    Update(){
        if(this.Duration >= this.Interval){
            this.IsDone = true;
            this.Loader.Dispose();
        }    
    }
}