import { FairyGUI, UnityEngine } from "csharp";
import {AbstractEffect} from "mods/ModTheSpire/Scripts/Effect/AbstractEffect";
import {AbstractPower} from "mods/ModTheSpire/Scripts/Power/AbstractPower";
import UIHelper from "mods/ModTheSpire/Scripts/UI/UIHelper";

export class GainPowerEffect extends AbstractEffect{
    public Loader:FairyGUI.GLoader;
    public Interval = 2;
    public constructor(power : AbstractPower,silent:boolean = false){
        super();
        this.Loader = UIHelper.CreateGLoader();
        this.Loader.url = power.Icon;
        this.Loader.blendMode = FairyGUI.BlendMode.Add;
        if(!silent)
            power.PlayApplyPowerSfx();
        this.Loader.alpha = 0.5;
        this.Loader.TweenScale(new UnityEngine.Vector2(3,3),1.5).SetEase(FairyGUI.EaseType.CubicOut);
        this.Loader.TweenFade(0,0.5).SetDelay(1.5).SetEase(FairyGUI.EaseType.SineInOut);
    }
    Update() {
        if(this.Duration >= this.Interval) {
            this.Loader.Dispose()
            this.IsDone = true;
        }
    }
}