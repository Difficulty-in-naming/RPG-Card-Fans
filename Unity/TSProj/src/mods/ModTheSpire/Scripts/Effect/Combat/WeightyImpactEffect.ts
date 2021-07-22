import {AbstractEffect} from "mods/ModTheSpire/Scripts/Effect/AbstractEffect";
import Color from "mods/ModTheSpire/Scripts/DataDefine/Color";
import {FairyGUI} from "csharp";
import UIHelper from "mods/ModTheSpire/Scripts/UI/UIHelper";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import {Mathf} from "Core/Module/Math/Mathf";
import {TimeKit} from "Core/Utils/TimeKit";
import {SoundMaster} from "mods/ModTheSpire/Scripts/Audio/SoundMaster";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {BorderFlashEffect} from "mods/ModTheSpire/Scripts/Effect/Combat/BorderFlashEffect";
import {ShakeDur, ShakeIntensity, ShakeScreen} from "mods/ModTheSpire/Scripts/Effect/ShakeScreen";
import {DamageImpactCurvyEffect} from "mods/ModTheSpire/Scripts/Effect/Combat/DamageImpactCurvyEffect";
import {UpgradeShineParticleEffect} from "mods/ModTheSpire/Scripts/Effect/UpgradeShineParticleEffect";
import * as TWEEN from "Core/Module/Tween"
export class WeightyImpactEffect extends AbstractEffect{
    public Loader:FairyGUI.GLoader[] = new FairyGUI.GLoader[3]
    private _TargetY:number;
    private _Scale:number = 1;
    private _ImpactHook :boolean = false;
    private _InitY:number;
    private _InitHeight = 0;
    public constructor(private _X:number,private _Y:number,private _Color?:Color) {
        super();
        this._InitY = FairyGUI.GRoot.inst.height;
        this._TargetY = this._Y - 180;
        for(let i = 0;i<3;i++)
            this.Create(i);
        this._InitHeight = this.Loader[0].height;
        new TWEEN.Tween({y:this._InitY}).to({y:this._TargetY}).easing(TWEEN.Easing.Sinusoidal.InOut).onUpdate(t1=>this._Y = t1.y).start()
    }
    
    private Create(i:number){
        this.Loader[i] = UIHelper.CreateGLoader();
        this.Loader[i].url = FileHelper.FormatPath("Vfx/combat/weightImpact");
        this.Loader[i].SetPivot(0.5,0.5,true);
        this.Loader[i].SetPosition(this._X,this._InitY,0);
        this.Loader[i].rotation = Mathf.RandomRange(-1,1);
        this.Loader[i].color = this._Color.UnityColor();
        this.Loader[i].alpha = 0.6;
        this.Loader[i].TweenFade(0,0.2).SetEase(FairyGUI.EaseType.SineInOut).SetDelay(0.8);
        this.Loader[i].TweenFade(0.2,0.8).SetEase(FairyGUI.EaseType.QuadInOut);
        this.Loader[i].blendMode = FairyGUI.BlendMode.Add;
        this.Loader[i].SetSize(this.Loader[i].texture.width,this.Loader[i].texture.height);
        this.Loader[i].fill = FairyGUI.FillType.ScaleFree;
    }
    
    Update() {
        super.Update();
        this._Scale += TimeKit.DeltaTime;
        this.Loader[0].SetScale(this._Scale* Mathf.RandomRange(0.99, 1.01) * 0.3,this._Scale* Mathf.RandomRange(0.99, 1.01) * 2 * (1 - this.Duration + 0.8));
        this.Loader[1].SetScale(this._Scale* Mathf.RandomRange(0.99, 1.01) * 0.7,this._Scale* Mathf.RandomRange(0.99, 1.01) * 1.3 * (1 - this.Duration + 0.8));
        this.Loader[2].SetScale(this._Scale* Mathf.RandomRange(0.99, 1.01),this._Scale* Mathf.RandomRange(0.99, 1.01) * (1 - this.Duration + 0.8));
        for(let i = 0;i<3;i++){
            this.Loader[i].height = this._InitHeight * (1 - this.Duration + 2) * 5;
        }
        this.Loader[0].y = this._Y + 140;
        this.Loader[1].y = this._Y + 40;
        this.Loader[2].y = this._Y;
        if(this.Duration >= 1){
            this.IsDone = true;
            SoundMaster.PlayVoiceA("ATTACK_IRON_2", -0.5);
            return;
        } else if(this.Duration > 0.8){
            if(this._ImpactHook == false){
                let i = 0;
                this._ImpactHook = true;
                DungeonManager.EffectManager.Play(new BorderFlashEffect(Color.Orange));
                DungeonManager.EffectManager.Play(new ShakeScreen(ShakeIntensity.HIGH,ShakeDur.MED,{Vertical: true,Horizontal: false}));
                for(i = 0;i<10;i++){
                    DungeonManager.EffectManager.Play(new DamageImpactCurvyEffect(this._X,this._Y))
                }
                for(i = 0;i<30;i++){
                    DungeonManager.EffectManager.Play(new UpgradeShineParticleEffect(this._X + Mathf.RandomRange(-100,100),this._Y + Mathf.RandomRange(-50,120)))
                }
            }
        }
    }
}