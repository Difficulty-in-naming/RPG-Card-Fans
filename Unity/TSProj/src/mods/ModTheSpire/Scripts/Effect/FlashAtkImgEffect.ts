import { FairyGUI, MediaManager } from "csharp";
import { Mathf } from "../../../../Core/Module/Math/Mathf";
import { AttackEffect } from "../DataDefine/AttackEffect";
import FileHelper from "../FileHelper";
import UIHelper from "../UI/UIHelper";
import { AbstractEffect } from "./AbstractEffect";


export class FlashAtkImgEffect extends AbstractEffect{
    private Interval = 0.6;
    public Loader:FairyGUI.GLoader;
    private BlockSound : number;
    constructor(private X:number,private Y:number,private Effect:AttackEffect,private Mute:boolean = false) {
        super();
        this.Loader = UIHelper.CreateGLoader();
        this.Loader.url = FileHelper.FormatPath(this.LoadImage());
        this.Loader.SetPosition(X,Y,0);
        if(!Mute){
            this.PlaySound();
        }
        this.Loader.TweenFade(0,0.6).SetEase(FairyGUI.EaseType.SineInOut);
        this.Loader.TweenMoveY(Y + 80,0.6).SetEase(FairyGUI.EaseType.ExpoIn);
    }

    private LoadImage() {
        switch (this.Effect) {
            case AttackEffect.SLASH_DIAGONAL: {
                return "Vfx/attack/slash_light.png";
            }
            case AttackEffect.SLASH_HEAVY: {
                return "Vfx/attack/slash_heavy.png";
            }
            case AttackEffect.SLASH_HORIZONTAL: {
                return "Vfx/attack/slash_horizontal.png";
            }
            case AttackEffect.SLASH_VERTICAL: {
                return "Vfx/attack/slash_vertical.png";
            }
            case AttackEffect.BLUNT_LIGHT: {
                return "Vfx/attack/blunt_light.png";
            }
            case AttackEffect.BLUNT_HEAVY: {
                this.Loader.rotation = Mathf.RandomRange(0,360.0);
                return "Vfx/attack/blunt_heavy.png";
            }
            case AttackEffect.FIRE: {
                return "Vfx/attack/fire.png";
            }
            case AttackEffect.POISON: {
                return "Vfx/attack/poison.png";
            }
            case AttackEffect.SHIELD: {
                return "Vfx/attack/shield.png";
            }
            case AttackEffect.NONE: {
                return null;
            }
        }
        return "Vfx/attack/slash_light.png";
    }

    private PlaySound() {
        switch (this.Effect) {
            case AttackEffect.SLASH_HEAVY: {
                MediaManager.PlayVoice("Audio/sound/SOTE_SFX_HeavyAtk_v2.ogg");
                break;
            }
            case AttackEffect.BLUNT_LIGHT: {
                MediaManager.PlayVoice("Audio/sound/SOTE_SFX_FastBlunt_v2.ogg");
                break;
            }
            case AttackEffect.BLUNT_HEAVY: {
                MediaManager.PlayVoice("Audio/sound/SOTE_SFX_HeavyBlunt_v2.ogg");
                break;
            }
            case AttackEffect.FIRE: {
                MediaManager.PlayVoice("Audio/sound/SOTE_SFX_FireIgnite_2_v1.ogg");
                break;
            }
            case AttackEffect.POISON: {
                MediaManager.PlayVoice("Audio/sound/SOTE_SFX_PoisonCard_2_v1.ogg");
                break;
            }
            case AttackEffect.SHIELD: {
                this.PlayBlockSound();
                break;
            }
            case AttackEffect.NONE: {
                break;
            }
            default: {
                MediaManager.PlayVoice("Audio/sound/SOTE_SFX_FastAtk_v2.ogg");
            }
        }
    }

    private PlayBlockSound() {
        if (this.BlockSound == 0) {
            MediaManager.PlayVoice("Audio/sound/SOTE_SFX_GainDefense_RR1_v3.ogg");
        } else if (this.BlockSound == 1) {
            MediaManager.PlayVoice("Audio/sound/SOTE_SFX_GainDefense_RR3_v3.ogg");
        } else {
            MediaManager.PlayVoice("Audio/sound/SOTE_SFX_GainDefense_RR2_v3.ogg");
        }
        if (++this.BlockSound > 2) {
            this.BlockSound = 0;
        }
    }
    
    Update(){
        if(this.Duration >= this.Interval) {
            this.IsDone = true;
            this.Loader.Dispose();
        }
    }
}