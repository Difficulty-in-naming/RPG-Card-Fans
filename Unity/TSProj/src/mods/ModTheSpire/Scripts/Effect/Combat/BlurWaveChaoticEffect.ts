import { FairyGUI } from "csharp";
import { Mathf } from "../../../../../Core/Module/Math/Mathf";
import { TimeKit } from "../../../../../Core/Utils/TimeKit";
import TWEEN from "../../../../../ThirdParty/@tweenjs/tween";
import Color from "../../DataDefine/Color";
import FileHelper from "../../FileHelper";
import UIHelper from "../../UI/UIHelper";
import { AbstractEffect } from "../AbstractEffect";

export class BlurWaveChaoticEffect extends AbstractEffect{
    private _stallTimer:number;
    public Loader:FairyGUI.GLoader;
    private _scale:number;
    private _speedTarget:number = 2000;
    private _speed :number;
    private _flipper = 270;
    private _rotation:number;
    public constructor(private _X:number,private _Y:number,private _Color:Color,private chosenSpeed:number) {
        super();
        this._stallTimer = Mathf.RandomRange(0,0.3);
        this.Loader = UIHelper.CreateGLoader();
        this.Loader.url = FileHelper.FormatPath("Vfx/combat/blurWave.png");
        this._rotation = Mathf.RandomRange(0,360);
        this.Loader.rotation = this._rotation;
        this._scale = Mathf.RandomRange(0.5,0.9);
        this.Loader.SetPivot(0.5,0.5,true);
        this.Loader.color = _Color.UnityColor;
        this.Loader.alpha = 0;
        this.Loader.TweenFade(0.7,0.5).SetEase(FairyGUI.EaseType.SineInOut);
        this.Loader.TweenFade(0,1).SetEase(FairyGUI.EaseType.SineInOut).SetDelay(1.5);
        this.Loader.blendMode = FairyGUI.BlendMode.Add;
        new TWEEN.Tween({value:this._speedTarget})
            .to({value:chosenSpeed})
            .onUpdate((t1)=>{this._speed = t1.value})
            .easing(TWEEN.Easing.Sinusoidal.InOut)
            .duration(2000)
            .start();
    }

    Update() {
        super.Update();
        this._stallTimer -= TimeKit.DeltaTime;
        if(this._stallTimer < 0) {
            let x = Mathf.CosDeg(this._rotation) * this._speed;
            let y = Mathf.SinDeg(this._rotation) * this._speed;
            this.Loader.SetPosition(x, y, 0);
            this.Loader.SetScale(this._scale+ Mathf.RandomRange(-0.1,0.1),this._scale+ Mathf.RandomRange(-0.1,0.1));
            this.Loader.rotation = this._rotation + this._flipper + Mathf.RandomRange(-30,30);
            this._scale *= 1 + TimeKit.DeltaTime * 2;
            if (this.Duration >= 2) {
                this.IsDone = true;
                return;
            }
        }
    }
}