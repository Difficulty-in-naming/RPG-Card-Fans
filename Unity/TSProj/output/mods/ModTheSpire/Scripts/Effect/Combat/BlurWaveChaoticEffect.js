"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlurWaveChaoticEffect = void 0;
var csharp_1 = require("csharp");
var Mathf_1 = require("../../../../../Core/Module/Math/Mathf");
var TimeKit_1 = require("../../../../../Core/Utils/TimeKit");
var FileHelper_1 = require("../../FileHelper");
var UIHelper_1 = require("../../UI/UIHelper");
var AbstractEffect_1 = require("../AbstractEffect");
var tween_js_1 = require("@tweenjs/tween.js");
class BlurWaveChaoticEffect extends AbstractEffect_1.AbstractEffect {
    constructor(_X, _Y, _Color, chosenSpeed) {
        super();
        this._X = _X;
        this._Y = _Y;
        this._Color = _Color;
        this.chosenSpeed = chosenSpeed;
        this._speedTarget = 2000;
        this._flipper = 270;
        this._stallTimer = Mathf_1.Mathf.RandomRange(0, 0.3);
        this.Loader = UIHelper_1.default.CreateGLoader();
        this.Loader.url = FileHelper_1.default.FormatPath("Vfx/combat/blurWave.png");
        this._rotation = Mathf_1.Mathf.RandomRange(0, 360);
        this.Loader.rotation = this._rotation;
        this._scale = Mathf_1.Mathf.RandomRange(0.5, 0.9);
        this.Loader.SetPivot(0.5, 0.5, true);
        this.Loader.color = _Color.UnityColor();
        this.Loader.alpha = 0;
        this.Loader.TweenFade(0.7, 0.5).SetEase(csharp_1.FairyGUI.EaseType.SineInOut);
        this.Loader.TweenFade(0, 1).SetEase(csharp_1.FairyGUI.EaseType.SineInOut).SetDelay(1.5);
        this.Loader.blendMode = csharp_1.FairyGUI.BlendMode.Add;
        new tween_js_1.default.Tween({ value: this._speedTarget })
            .to({ value: chosenSpeed })
            .onUpdate((t1) => { this._speed = t1.value; })
            .easing(tween_js_1.default.Easing.Sinusoidal.InOut)
            .duration(2000)
            .start();
    }
    Update() {
        super.Update();
        this._stallTimer -= TimeKit_1.TimeKit.DeltaTime;
        if (this._stallTimer < 0) {
            let x = Mathf_1.Mathf.CosDeg(this._rotation) * this._speed;
            let y = Mathf_1.Mathf.SinDeg(this._rotation) * this._speed;
            this.Loader.SetPosition(x, y, 0);
            this.Loader.SetScale(this._scale + Mathf_1.Mathf.RandomRange(-0.1, 0.1), this._scale + Mathf_1.Mathf.RandomRange(-0.1, 0.1));
            this.Loader.rotation = this._rotation + this._flipper + Mathf_1.Mathf.RandomRange(-30, 30);
            this._scale *= 1 + TimeKit_1.TimeKit.DeltaTime * 2;
            if (this.Duration >= 2) {
                this.IsDone = true;
                return;
            }
        }
    }
}
exports.BlurWaveChaoticEffect = BlurWaveChaoticEffect;
//# sourceMappingURL=BlurWaveChaoticEffect.js.map