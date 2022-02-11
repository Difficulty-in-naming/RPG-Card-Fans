import { FairyGUI, UnityEngine } from "csharp";
import { Mathf } from "../../../../Core/Module/Math/Mathf";
import { TimeKit } from "../../../../Core/Utils/TimeKit";
import TWEEN from "../../../../ThirdParty/@tweenjs/tween";
import Color from "../DataDefine/Color";
import { basePath } from "../FileHelper";
import UIHelper from "../UI/UIHelper";
import { AbstractEffect } from "./AbstractEffect";

export class VerticalAuraParticleEffect extends AbstractEffect
{
    private Vy: number;
    private Loader : FairyGUI.GLoader;
    private Tween;
    public constructor(c : Color, x:number,y:number) {
        super();
        this.Loader = UIHelper.CreateGLoader();
        let scale = Mathf.RandomRange(0.6,1.7);
        console.log(scale);

        let color = c.Clone().Random(-0.1,0.1);
        this.Loader.url = basePath + "Res/Vfx/combat/verticalAura.png";
        this.Loader.touchable = false;
        this.Loader.scale = new UnityEngine.Vector2(scale,scale);
        this.Loader.SetPivot(0.5,0.5,true);
        this.Loader.SetPosition(x + Mathf.RandomRange(-200,200),y + Mathf.RandomRange(-200,200),0)
        this.Vy = Mathf.RandomRange(-300,300);
        this.Loader.color = color.UnityColor;
        this.Loader.alpha = 0;
        this.Tween = new TWEEN.Tween({a:this.Loader.color.a}).to({a:1}, 200).easing(TWEEN.Easing.Sinusoidal.InOut)
            .onUpdate(object => {
                this.Loader.alpha = object.a;
            })
            .start()
            .onComplete(object => {
                this.Tween = new TWEEN.Tween({a:this.Loader.color.a}).to({a:0}, 800).easing(TWEEN.Easing.Sinusoidal.InOut)
                    .onUpdate(object => {
                        this.Loader.alpha = object.a;
                    }).onComplete(()=>{
                        this.Loader.Dispose();
                    })
                    .start()
            });
    }

    Update()
    {
        let y = this.Vy * TimeKit.DeltaTime;
        this.Loader.y += y;
        this.IsDone = !this.Tween.isPlaying();
    }
}