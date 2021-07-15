import { FairyGUI, UnityEngine } from "csharp";
import {AbstractEffect} from "mods/ModTheSpire/Scripts/Effect/AbstractEffect";
import UIHelper from "mods/ModTheSpire/Scripts/UI/UIHelper";
import {Mathf} from "Core/Module/Math/Mathf";
import Color from "mods/ModTheSpire/Scripts/DataDefine/Color";
import {TimeKit} from "Core/Utils/TimeKit";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";

export class ExhaustPileParticle extends AbstractEffect
{
    public Loader : FairyGUI.GLoader;
    private Interval = 2;
    constructor() {
        super();
        this.Loader = UIHelper.CreateGLoader();
        this.Loader.SetPosition(24,24,0);
        this.Loader.url = FileHelper.FormatPath("Vfx/exhaust/bigBlur.png");
        this.Loader.SetPivot(0.5,0.5,true);
        this.Loader.autoSize = true;
        let scale = Mathf.RandomRange(0.5,0.7);
        let color = new Color();
        color.G = Mathf.RandomRange(51,102);
        color.R = color.G + 26;
        color.B = color.R + 26;
        this.Loader.color = color.UnityColor();
        this.Loader.alpha = 0;
        this.Loader.rotation = Mathf.RandomRange(0,360);
        this.Loader.SetScale(scale,scale);
        this.Loader.TweenScale(new UnityEngine.Vector2(0.1,0.1),2).SetEase(FairyGUI.EaseType.BounceIn);
    }
    
    Update() {
        this.Loader.rotation += this.Interval * TimeKit.DeltaTime;
        this.Loader.alpha = this.Duration / this.Interval;
        if(this.Duration >= this.Interval) {
            this.IsDone = true;
            this.Loader.Dispose();
        }
    }
}