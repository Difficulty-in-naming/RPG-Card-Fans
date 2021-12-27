import { FairyGUI } from "csharp";
import { Mathf } from "../../../../Core/Module/Math/Mathf";
import { TimeKit } from "../../../../Core/Utils/TimeKit";
import Color from "../DataDefine/Color";
import FileHelper from "../FileHelper";
import UIHelper from "../UI/UIHelper";
import { AbstractEffect } from "./AbstractEffect";
import TWEEN from '@tweenjs/tween.js';


export class TitleDustEffect extends AbstractEffect{
    private readonly Vx : number;
    private readonly Vy : number;
    private readonly Va : number;
    private Scale : number;
    public Loader : FairyGUI.GLoader;
    private Vc : Color;
    private Tween;
    private Dur;
    public constructor() {
        super();
        this.Loader = UIHelper.CreateGLoader();
        this.Loader.url = FileHelper.FormatPath(`Vfx/env/smoke${Mathf.Floor(Mathf.RandomRange(1,4))}.png`);
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
        this.Loader.color = this.Vc.UnityColor();
        this.Loader.alpha = 0.2;
        this.Dur = Mathf.Floor(Mathf.RandomRange(2000,3000));
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
        if(this.Duration < 1){
            return;
        }
        else if(this.Tween == null)
        {
            this.Tween = new TWEEN.Tween({a:0.2}).to({a:0}, this.Dur).easing(TWEEN.Easing.Sinusoidal.InOut)
                .onUpdate(object => {
                    this.Loader.alpha = object.a;
                }).start();
        }
        if(this.Tween.isPlaying())
            return;
        this.Loader.Dispose();
        this.IsDone = true;
    }
}