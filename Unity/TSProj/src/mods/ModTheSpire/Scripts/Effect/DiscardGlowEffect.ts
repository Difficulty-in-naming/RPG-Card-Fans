import { FairyGUI } from "csharp";
import { Mathf } from "../../../../Core/Module/Math/Mathf";
import { TimeKit } from "../../../../Core/Utils/TimeKit";
import Color from "../DataDefine/Color";
import FileHelper from "../FileHelper";
import UIHelper from "../UI/UIHelper";
import { AbstractEffect } from "./AbstractEffect";


export class DiscardGlowEffect extends AbstractEffect{
    private Interval:number = Mathf.RandomRange(0.4,0.9);
    private Vy = -Mathf.RandomRange(30,60);
    private Vr = Mathf.RandomRange(-180,180);
    public Loader : FairyGUI.GLoader;
    constructor(private IsAbove:boolean) {
        super();
        this.Loader = UIHelper.CreateGLoader()
        let color = Color.DiscardColor.Clone();
        let darkness = Mathf.RandomRange(0.1,0.4);
        color.R -= darkness;
        color.G -= darkness;
        color.B -= darkness;
        this.Loader.color = color.UnityColor();
        this.Loader.url = FileHelper.FormatPath("Vfx/ui/p" + Mathf.Floor(Mathf.RandomRange(1,7)) + ".png");
        this.Loader.SetPosition(Mathf.RandomRange(35,85),Mathf.RandomRange(35,85),0);
        let scale = Mathf.RandomRange(0.9,1.1);
        this.Loader.SetScale(scale,scale);
        this.Loader.alpha = 1;
        this.Loader.TweenFade(0,this.Interval).SetEase(FairyGUI.EaseType.Linear);
        this.Loader.blendMode = Mathf.Random() < 0.5 ? FairyGUI.BlendMode.Add : FairyGUI.BlendMode.Normal;
    }
    
    private SetPosition()
    {
        let roll = Mathf.Floor(Mathf.RandomRange(0,10));
        if(this.IsAbove){
            switch (roll){
                case 0 :this.Loader.SetPosition(86,102,0);break;
                case 1 :this.Loader.SetPosition(80,111,0);break;
                case 2 :this.Loader.SetPosition(72,109,0);break;
                case 3 :this.Loader.SetPosition(64,107,0);break;
                case 4 :this.Loader.SetPosition(58,106,0);break;
                case 5 :this.Loader.SetPosition(50,104,0);break;
                case 6 :this.Loader.SetPosition(42,101,0);break;
                case 7 :this.Loader.SetPosition(36,98,0);break;
                case 8 :this.Loader.SetPosition(30,95,0);break;
            }
        }
        else{
            switch (roll){
                case 0 :this.Loader.SetPosition(36,61,0);break;
                case 1 :this.Loader.SetPosition(44,53,0);break;
                case 2 :this.Loader.SetPosition(52,40,0);break;
                case 3 :this.Loader.SetPosition(60,40,0);break;
                case 4 :this.Loader.SetPosition(68,40,0);break;
                case 5 :this.Loader.SetPosition(76,40,0);break;
                case 6 :this.Loader.SetPosition(88,40,0);break;
                case 7 :this.Loader.SetPosition(96,40,0);break;
                case 8 :this.Loader.SetPosition(105,61,0);break;
            }
        }
    }
    
    Update(){
        this.Loader.rotation = this.Vr * TimeKit.DeltaTime;
        this.Loader.y+= this.Vy * TimeKit.DeltaTime;
        let d = this.Interval - this.Duration;
        if(d < 0.1){
            this.Loader.SetScale(d / this.Interval * 2,d / this.Interval * 2);
        }
        if(d < 0.25){
            this.Loader.alpha = d * 4;
        }
        if(d <= 0) {
            this.IsDone = true;
            this.Loader.Dispose();
        }
    }
}