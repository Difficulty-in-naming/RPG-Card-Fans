import { FairyGUI } from "csharp";
import { Mathf } from "../../../../Core/Module/Math/Mathf";
import { TimeKit } from "../../../../Core/Utils/TimeKit";
import Color from "../DataDefine/Color";
import UIHelper from "../UI/UIHelper";
import { AbstractEffect } from "./AbstractEffect";
export class TitleDustEffect extends AbstractEffect{
    private readonly Vx : number;
    private readonly Vy : number;
    private readonly Va : number;
    private Scale : number;
    public Loader : FairyGUI.GLoader;
    private Vc : Color;
    private Interval;
    public constructor() {
        super();
        this.Loader = UIHelper.CreateGLoader();
        this.Loader.url = "ui://ModTheSpire_Effect/smoke" + Mathf.Floor(Mathf.RandomRange(1,4));
        this.Loader.SetPivot(0.5,0.5,true);
        this.Loader.touchable = false;
        this.Scale = Mathf.RandomRange(6,8);
        this.Loader.SetScale(this.Scale,this.Scale);
        let x = -600;
        let y = Mathf.RandomRange(-200,0);
        this.Loader.SetPosition(x,y,0);
        this.Vx = Mathf.RandomRange(400,1200);
        this.Vy = Mathf.RandomRange(-50,50);
        this.Va = Mathf.RandomRange(-50,50);
        let tmp = Mathf.RandomRange(51,77);
        let r,g,b,a:number;
        g = tmp + Mathf.RandomRange(0,26);
        r = g + Mathf.RandomRange(0,26);
        b = tmp;
        a = 255;
        this.Vc = new Color(r,g,b,a);
        this.Loader.color = this.Vc.UnityColor;
        this.Loader.alpha = 0.2;
        this.Interval = Mathf.Floor(Mathf.RandomRange(3,4));
        this.Loader.TweenFade(0,this.Interval).SetEase(FairyGUI.EaseType.SineInOut);
    }

    Update() {
        let x,y:number;
        x = this.Vx * TimeKit.DeltaTime;
        y = this.Vy * TimeKit.DeltaTime;
        this.Scale += TimeKit.DeltaTime / 3;
        this.Loader.x += x;
        this.Loader.y += y;
        this.Loader.rotation = this.Va * TimeKit.DeltaTime;
        this.Loader.SetScale(this.Scale,this.Scale);
        if(this.Duration > this.Interval){
            this.Loader.Dispose();
            this.IsDone = true;
            return;
        }
    }
}