"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightyImpactEffect = void 0;
var csharp_1 = require("csharp");
var tween_js_1 = require("@tweenjs/tween.js");
var Mathf_1 = require("../../../../../Core/Module/Math/Mathf");
var TimeKit_1 = require("../../../../../Core/Utils/TimeKit");
var SoundMaster_1 = require("../../Audio/SoundMaster");
var Color_1 = require("../../DataDefine/Color");
var DungeonManager_1 = require("../../DungeonManager");
var FileHelper_1 = require("../../FileHelper");
var UIHelper_1 = require("../../UI/UIHelper");
var AbstractEffect_1 = require("../AbstractEffect");
var ShakeScreen_1 = require("../ShakeScreen");
var UpgradeShineParticleEffect_1 = require("../UpgradeShineParticleEffect");
var BorderFlashEffect_1 = require("./BorderFlashEffect");
var DamageImpactCurvyEffect_1 = require("./DamageImpactCurvyEffect");
class WeightyImpactEffect extends AbstractEffect_1.AbstractEffect {
    constructor(_X, _Y, _Color) {
        super();
        this._X = _X;
        this._Y = _Y;
        this._Color = _Color;
        this.Loader = new csharp_1.FairyGUI.GLoader[3];
        this._Scale = 1;
        this._ImpactHook = false;
        this._InitHeight = 0;
        this._InitY = csharp_1.FairyGUI.GRoot.inst.height;
        this._TargetY = this._Y - 180;
        for (let i = 0; i < 3; i++)
            this.Create(i);
        this._InitHeight = this.Loader[0].height;
        new tween_js_1.default.Tween({ y: this._InitY }).to({ y: this._TargetY }).easing(tween_js_1.default.Easing.Sinusoidal.InOut).onUpdate(t1 => this._Y = t1.y).start();
    }
    Create(i) {
        this.Loader[i] = UIHelper_1.default.CreateGLoader();
        this.Loader[i].url = FileHelper_1.default.FormatPath("Vfx/combat/weightImpact");
        this.Loader[i].SetPivot(0.5, 0.5, true);
        this.Loader[i].SetPosition(this._X, this._InitY, 0);
        this.Loader[i].rotation = Mathf_1.Mathf.RandomRange(-1, 1);
        this.Loader[i].color = this._Color.UnityColor();
        this.Loader[i].alpha = 0.6;
        this.Loader[i].TweenFade(0, 0.2).SetEase(csharp_1.FairyGUI.EaseType.SineInOut).SetDelay(0.8);
        this.Loader[i].TweenFade(0.2, 0.8).SetEase(csharp_1.FairyGUI.EaseType.QuadInOut);
        this.Loader[i].blendMode = csharp_1.FairyGUI.BlendMode.Add;
        this.Loader[i].SetSize(this.Loader[i].texture.width, this.Loader[i].texture.height);
        this.Loader[i].fill = csharp_1.FairyGUI.FillType.ScaleFree;
    }
    Update() {
        super.Update();
        this._Scale += TimeKit_1.TimeKit.DeltaTime;
        this.Loader[0].SetScale(this._Scale * Mathf_1.Mathf.RandomRange(0.99, 1.01) * 0.3, this._Scale * Mathf_1.Mathf.RandomRange(0.99, 1.01) * 2 * (1 - this.Duration + 0.8));
        this.Loader[1].SetScale(this._Scale * Mathf_1.Mathf.RandomRange(0.99, 1.01) * 0.7, this._Scale * Mathf_1.Mathf.RandomRange(0.99, 1.01) * 1.3 * (1 - this.Duration + 0.8));
        this.Loader[2].SetScale(this._Scale * Mathf_1.Mathf.RandomRange(0.99, 1.01), this._Scale * Mathf_1.Mathf.RandomRange(0.99, 1.01) * (1 - this.Duration + 0.8));
        for (let i = 0; i < 3; i++) {
            this.Loader[i].height = this._InitHeight * (1 - this.Duration + 2) * 5;
        }
        this.Loader[0].y = this._Y + 140;
        this.Loader[1].y = this._Y + 40;
        this.Loader[2].y = this._Y;
        if (this.Duration >= 1) {
            this.IsDone = true;
            SoundMaster_1.SoundMaster.PlayVoiceA("ATTACK_IRON_2", -0.5);
            return;
        }
        else if (this.Duration > 0.8) {
            if (this._ImpactHook == false) {
                let i = 0;
                this._ImpactHook = true;
                DungeonManager_1.default.EffectManager.Play(new BorderFlashEffect_1.BorderFlashEffect(Color_1.default.Orange));
                DungeonManager_1.default.EffectManager.Play(new ShakeScreen_1.ShakeScreen(ShakeScreen_1.ShakeIntensity.HIGH, ShakeScreen_1.ShakeDur.MED, { Vertical: true, Horizontal: false }));
                for (i = 0; i < 10; i++) {
                    DungeonManager_1.default.EffectManager.Play(new DamageImpactCurvyEffect_1.DamageImpactCurvyEffect(this._X, this._Y));
                }
                for (i = 0; i < 30; i++) {
                    DungeonManager_1.default.EffectManager.Play(new UpgradeShineParticleEffect_1.UpgradeShineParticleEffect(this._X + Mathf_1.Mathf.RandomRange(-100, 100), this._Y + Mathf_1.Mathf.RandomRange(-50, 120)));
                }
            }
        }
    }
}
exports.WeightyImpactEffect = WeightyImpactEffect;
//# sourceMappingURL=WeightyImpactEffect.js.map