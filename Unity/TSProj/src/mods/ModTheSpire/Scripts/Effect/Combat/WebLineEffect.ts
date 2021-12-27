import { FairyGUI } from "csharp";
import { Mathf } from "../../../../../Core/Module/Math/Mathf";
import Color from "../../DataDefine/Color";
import FileHelper from "../../FileHelper";
import UIHelper from "../../UI/UIHelper";
import { AbstractEffect } from "../AbstractEffect";


export class WebLineEffect extends AbstractEffect{
    public Loader:FairyGUI.GLoader;
    private _Scale:number;
    public constructor(private _X:number,private _Y:number,facingLeft:boolean) {
        super();
        this.Loader = UIHelper.CreateGLoader();
        this.Loader.url = FileHelper.FormatPath("Vfx/horizontal_line.png");
        this.Loader.SetPosition(_X + Mathf.RandomRange(-20,20),_Y * 128 + Mathf.RandomRange(-10,10), 0);
        this.Loader.rotation = Mathf.RandomRange(170,185);
        if(!facingLeft)
            this.Loader.rotation += 180;
        this._Scale = Mathf.RandomRange(0.8,1);
        this.Loader.scaleY = this._Scale;
        let g = Mathf.RandomRange(153, 230);
        let color = new Color(g,g,g + 26);
        this.Loader.alpha = 0;
        this.Loader.color = color.UnityColor();
        this.Loader.TweenFade(0.8,0.5).SetEase(FairyGUI.EaseType.SineInOut);
        this.Loader.TweenFade(0.01,0.5).SetEase(FairyGUI.EaseType.QuartOut).SetDelay(0.5);
        this.Loader.blendMode = FairyGUI.BlendMode.Add;
    }
    
    public Update() {
        if(this.Duration >= 1){
            this.Loader.Dispose();
            this.IsDone = true;
            return;
        }
        this.Loader.scaleX = this._Scale * 2 * Mathf.Cos(1 - this.Duration * 16) / 4 + 1.5;
        super.Update();
    }
}