import { FairyGUI, UnityEngine } from "csharp";
import { AbstractPower } from "../Power/AbstractPower";
import UIHelper from "../UI/UIHelper";
import { AbstractEffect } from "./AbstractEffect";

export class FlashPowerEffect extends AbstractEffect{
    public Loader: FairyGUI.GLoader;
    constructor(power : AbstractPower) {
        super();
        if(!power.Owner.IsDeadOrEscaped){}
        this.Loader = UIHelper.CreateGLoader();
        this.Loader.url = power.Icon;
        this.Loader.SetPivot(0.5,0.5,true);
        this.Loader.TweenScale(new UnityEngine.Vector2(0.3,0.3),0.7).OnComplete(()=>{
            this.Loader.Dispose();
            this.IsDone = true;
        })
    }
}