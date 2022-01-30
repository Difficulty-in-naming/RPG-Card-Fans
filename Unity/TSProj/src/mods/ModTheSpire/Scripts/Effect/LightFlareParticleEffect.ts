import { FairyGUI } from "csharp";
import { Mathf } from "../../../../Core/Module/Math/Mathf";
import { TimeKit } from "../../../../Core/Utils/TimeKit";
import Color from "../DataDefine/Color";
import UIHelper from "../UI/UIHelper";
import { AbstractEffect } from "./AbstractEffect";
import { EffectOrder } from "./EffectKit";
import TWEEN from '@tweenjs/tween.js';

export class LightFlareParticleEffect extends AbstractEffect
{
    private Speed : number;
    private SpeedStart : number;
    private SpeedTarget : number;
    private Rotation : number;
    private WaveIntensity : number;
    private WaveSpeed : number;
    private Loader : FairyGUI.GLoader;
    public constructor(private X : number,private Y:number,private Color : Color){
        super();
        this.Speed = this.SpeedStart = Mathf.RandomRange(200,300);
        Color.A = 0;
        this.order = EffectOrder.BOT;
        this.Rotation = Mathf.Random() * 360;
        this.SpeedTarget = Mathf.RandomRange(0.1,0.5);
        this.WaveIntensity = Mathf.RandomRange(5,10);
        this.WaveSpeed = Mathf.RandomRange(-20,20);
        this.Loader = UIHelper.CreateGLoader();
        this.Loader.url = "ui://ModTheSpire_Effect/blurDot";
        let scale = Mathf.RandomRange(0.2,1);
        this.Loader.SetScale(scale,scale);

        this.Duration = Mathf.RandomRange(0.5,1.1);
        let t = new TWEEN.Tween({a:this.SpeedStart}).to({a:this.SpeedTarget}, this.Duration).easing(TWEEN.Easing.Circular.In)
        .onUpdate(object => {
            this.X = Mathf.CosDeg(this.Rotation) * (object.a * TimeKit.DeltaTime);
            this.Y = Mathf.SinDeg(this.Rotation) * (object.a * TimeKit.DeltaTime);
            this.Loader.SetPosition(this.X,this.Y,0);
            this.Rotation += Mathf.Cos(this.Duration * this.WaveSpeed) * this.WaveIntensity;
            this.Loader.rotation = this.Rotation; 
        }).start();
        let t2 = new TWEEN.Tween({a:1}).to({a:0}, 0.5).easing(TWEEN.Easing.Sinusoidal.InOut)
        .onUpdate(object => {
            this.Loader.alpha = object.a;
            this.Loader.Dispose();
            this.IsDone = true;
        }).delay(this.Duration - 0.5).start();
    }

}