import { FairyGUI } from "csharp";
import { Mathf } from "../../../../Core/Module/Math/Mathf";
import { TimeKit } from "../../../../Core/Utils/TimeKit";
import Color from "../DataDefine/Color";
import FileHelper from "../FileHelper";
import UIHelper from "../UI/UIHelper";
import { AbstractEffect } from "./AbstractEffect";

export class GameDeckGlowEffect extends AbstractEffect{
    private Interval:number = Mathf.RandomRange(2,5);
    private Vx = Mathf.RandomRange(10,20);
    private Vy = Mathf.RandomRange(10,20);
    private FlipX = Mathf.Random() < 0.5 ? -1 : 1;
    private FlipY = Mathf.Random() < 0.5 ? -1 : 1;
    private Vr = Mathf.RandomRange(-120,120);
    public Loader : FairyGUI.GLoader;
    constructor() {
        super();
        this.Loader = UIHelper.CreateGLoader()
        let color = Color.Cream.Clone();
        let darkness = Mathf.RandomRange(0.1,0.4);
        color.R -= darkness;
        color.G -= darkness;
        color.B -= darkness;
        this.Loader.color = color.UnityColor();
        this.Loader.url = FileHelper.FormatPath("Vfx/ui/p" + Mathf.Floor(Mathf.RandomRange(1,7)) + ".png");
        this.Loader.SetPosition(Mathf.RandomRange(35,85),Mathf.RandomRange(35,85),0);
        this.Loader.SetScale(0.75,0.75);
        this.Loader.TweenFade(0,this.Interval).SetEase(FairyGUI.EaseType.Linear);
    }
    
    Update(){
        this.Loader.rotation = this.Vr * TimeKit.DeltaTime;
        let x = this.Loader.x,y = this.Loader.y;
        if(this.Vy != 0){
            y += this.FlipY * this.Vy * TimeKit.DeltaTime;
            this.Vy = Mathf.Lerp(this.Vy,0,TimeKit.DeltaTime / 4);
            if(this.Vy < 0.5)
                this.Vy = 0;
        }
        if(this.Vx != 0){
            x += this.FlipX * this.Vx * TimeKit.DeltaTime;
            this.Vx = Mathf.Lerp(this.Vx,0,TimeKit.DeltaTime / 4);
            if(this.Vx < 0.5)
                this.Vx = 0;
        }
        this.Loader.SetPosition(x,y,0);
        if(this.Duration>this.Interval) {
            this.IsDone = true;
            this.Loader.Dispose();
        }
    }
}