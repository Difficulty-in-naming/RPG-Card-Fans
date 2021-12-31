"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlashAtkImgEffect = void 0;
const csharp_1 = require("csharp");
const Mathf_1 = require("../../../../Core/Module/Math/Mathf");
const AttackEffect_1 = require("../DataDefine/AttackEffect");
const FileHelper_1 = require("../FileHelper");
const UIHelper_1 = require("../UI/UIHelper");
const AbstractEffect_1 = require("./AbstractEffect");
class FlashAtkImgEffect extends AbstractEffect_1.AbstractEffect {
    X;
    Y;
    Effect;
    Mute;
    Interval = 0.6;
    Loader;
    BlockSound;
    constructor(X, Y, Effect, Mute = false) {
        super();
        this.X = X;
        this.Y = Y;
        this.Effect = Effect;
        this.Mute = Mute;
        this.Loader = UIHelper_1.default.CreateGLoader();
        this.Loader.url = FileHelper_1.default.FormatPath(this.LoadImage());
        this.Loader.SetPosition(X, Y, 0);
        if (!Mute) {
            this.PlaySound();
        }
        this.Loader.TweenFade(0, 0.6).SetEase(csharp_1.FairyGUI.EaseType.SineInOut);
        this.Loader.TweenMoveY(Y + 80, 0.6).SetEase(csharp_1.FairyGUI.EaseType.ExpoIn);
    }
    LoadImage() {
        switch (this.Effect) {
            case AttackEffect_1.AttackEffect.SLASH_DIAGONAL: {
                return "Vfx/attack/slash_light.png";
            }
            case AttackEffect_1.AttackEffect.SLASH_HEAVY: {
                return "Vfx/attack/slash_heavy.png";
            }
            case AttackEffect_1.AttackEffect.SLASH_HORIZONTAL: {
                return "Vfx/attack/slash_horizontal.png";
            }
            case AttackEffect_1.AttackEffect.SLASH_VERTICAL: {
                return "Vfx/attack/slash_vertical.png";
            }
            case AttackEffect_1.AttackEffect.BLUNT_LIGHT: {
                return "Vfx/attack/blunt_light.png";
            }
            case AttackEffect_1.AttackEffect.BLUNT_HEAVY: {
                this.Loader.rotation = Mathf_1.Mathf.RandomRange(0, 360.0);
                return "Vfx/attack/blunt_heavy.png";
            }
            case AttackEffect_1.AttackEffect.FIRE: {
                return "Vfx/attack/fire.png";
            }
            case AttackEffect_1.AttackEffect.POISON: {
                return "Vfx/attack/poison.png";
            }
            case AttackEffect_1.AttackEffect.SHIELD: {
                return "Vfx/attack/shield.png";
            }
            case AttackEffect_1.AttackEffect.NONE: {
                return null;
            }
        }
        return "Vfx/attack/slash_light.png";
    }
    PlaySound() {
        switch (this.Effect) {
            case AttackEffect_1.AttackEffect.SLASH_HEAVY: {
                csharp_1.MediaManager.PlayVoice("Audio/sound/SOTE_SFX_HeavyAtk_v2.ogg");
                break;
            }
            case AttackEffect_1.AttackEffect.BLUNT_LIGHT: {
                csharp_1.MediaManager.PlayVoice("Audio/sound/SOTE_SFX_FastBlunt_v2.ogg");
                break;
            }
            case AttackEffect_1.AttackEffect.BLUNT_HEAVY: {
                csharp_1.MediaManager.PlayVoice("Audio/sound/SOTE_SFX_HeavyBlunt_v2.ogg");
                break;
            }
            case AttackEffect_1.AttackEffect.FIRE: {
                csharp_1.MediaManager.PlayVoice("Audio/sound/SOTE_SFX_FireIgnite_2_v1.ogg");
                break;
            }
            case AttackEffect_1.AttackEffect.POISON: {
                csharp_1.MediaManager.PlayVoice("Audio/sound/SOTE_SFX_PoisonCard_2_v1.ogg");
                break;
            }
            case AttackEffect_1.AttackEffect.SHIELD: {
                this.PlayBlockSound();
                break;
            }
            case AttackEffect_1.AttackEffect.NONE: {
                break;
            }
            default: {
                csharp_1.MediaManager.PlayVoice("Audio/sound/SOTE_SFX_FastAtk_v2.ogg");
            }
        }
    }
    PlayBlockSound() {
        if (this.BlockSound == 0) {
            csharp_1.MediaManager.PlayVoice("Audio/sound/SOTE_SFX_GainDefense_RR1_v3.ogg");
        }
        else if (this.BlockSound == 1) {
            csharp_1.MediaManager.PlayVoice("Audio/sound/SOTE_SFX_GainDefense_RR3_v3.ogg");
        }
        else {
            csharp_1.MediaManager.PlayVoice("Audio/sound/SOTE_SFX_GainDefense_RR2_v3.ogg");
        }
        if (++this.BlockSound > 2) {
            this.BlockSound = 0;
        }
    }
    Update() {
        if (this.Duration >= this.Interval) {
            this.IsDone = true;
            this.Loader.Dispose();
        }
    }
}
exports.FlashAtkImgEffect = FlashAtkImgEffect;
//# sourceMappingURL=FlashAtkImgEffect.js.map