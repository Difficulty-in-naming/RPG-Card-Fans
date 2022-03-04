import { FairyGUI } from "csharp";
import { Mathf } from "../../../../../Core/Module/Math/Mathf";
import Color from "../../DataDefine/Color";
import FileHelper from "../../FileHelper";
import UIHelper from "../../UI/UIHelper";
import { AbstractEffect } from "../AbstractEffect";

export class SmallLaserEffect extends AbstractEffect{
    public Loader1:FairyGUI.GLoader;
    public Loader2:FairyGUI.GLoader;
    private _rotation:number;
    private _scale:number = 1;
    public constructor(private _sX:number,private _sY:number,private _dX:number,private _dY:number) {
        super();
        this.Loader1 = UIHelper.CreateGLoader();
        this.Loader2 = UIHelper.CreateGLoader();
        this.Loader1.url = this.Loader2.url = FileHelper.FormatPath("Vfx/combat/laserThin");
        let dst = Mathf.Distance(_sX,_sY,_dX,_dY);
        this.Loader1.color = this.Loader2.color = Color.Cyan.UnityColor;
        this._rotation = Mathf.Atan2(_dX - _sX,_dY - _sY);
        this._rotation *= Mathf.Rad2Deg;
        this._rotation = -this._rotation + 90;
        this.Loader1.blendMode = this.Loader2.blendMode = FairyGUI.BlendMode.Add;
        this.Loader1.TweenFade(1,0.5).SetEase(FairyGUI.EaseType.QuadOut);
        this.Loader1.TweenFade(0,0.5).SetEase(FairyGUI.EaseType.BounceIn).SetDelay(0.5);
        this.Loader2.TweenFade(1,0.5).SetEase(FairyGUI.EaseType.QuadOut);
        this.Loader2.TweenFade(0,0.5).SetEase(FairyGUI.EaseType.BounceIn).SetDelay(0.5);
        this.Loader1.rotation = this.Loader2.rotation = this._rotation;
    }
    
    Update() {
        super.Update();
        if(this.Duration >= 1) {
            this.IsDone = true;
            this.Loader1.Dispose();
            this.Loader2.Dispose();
            this.Loader2.height = Mathf.Floor(Mathf.RandomRange(50,91));
            this.Loader2.scaleX = this._scale + Mathf.RandomRange(-0.02,0.02);
            this.Loader1.scaleX = this._scale + Mathf.RandomRange(-0.01,0.01);
        }
    }
}