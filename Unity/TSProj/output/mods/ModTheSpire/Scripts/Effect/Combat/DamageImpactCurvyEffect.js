"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DamageImpactCurvyEffect = void 0;
var csharp_1 = require("csharp");
var Mathf_1 = require("../../../../../Core/Module/Math/Mathf");
var TimeKit_1 = require("../../../../../Core/Utils/TimeKit");
var Color_1 = require("../../DataDefine/Color");
var UIHelper_1 = require("../../UI/UIHelper");
var AbstractEffect_1 = require("../AbstractEffect");
class DamageImpactCurvyEffect extends AbstractEffect_1.AbstractEffect {
    constructor(_X, _Y, _Color = Color_1.default.Goldenrod) {
        super();
        this._X = _X;
        this._Y = _Y;
        this._Color = _Color;
        this._Scale = 1;
        this.Loader = UIHelper_1.default.CreateGLoader();
        this.Loader.url = "Vfx/combat/strikeLine3";
        this._Interval = Mathf_1.Mathf.RandomRange(0.8, 1.1);
        this.Loader.SetPivot(0.5, 0.5, true);
        this.Loader.SetPosition(_X, _Y, 0);
        this._SpeedStart = this._Speed = Mathf_1.Mathf.RandomRange(400, 900);
        this._SpeedTarget = Mathf_1.Mathf.RandomRange(0.1, 0.5);
        this.Loader.color = this._Color.UnityColor();
        this._Rotation = Mathf_1.Mathf.RandomRange(0, 360);
        this.Loader.rotation = this._Rotation;
        this._WaveIntensity = Mathf_1.Mathf.RandomRange(5, 30);
        this._WaveSpeed = Mathf_1.Mathf.RandomRange(-20, 20);
        this.Loader.alpha = 0.25;
        this.Loader.blendMode = csharp_1.FairyGUI.BlendMode.Add;
        this.Loader.TweenFade(0, this._Interval / 2).SetEase(csharp_1.FairyGUI.EaseType.Linear).SetDelay(this._Interval / 2);
    }
    Update() {
        if (this.Duration >= this._Interval) {
            this.IsDone = true;
            return;
        }
        super.Update();
        let tmpX = Mathf_1.Mathf.CosDeg(this._Rotation) * this._Speed * TimeKit_1.TimeKit.DeltaTime;
        let tmpY = Mathf_1.Mathf.SinDeg(this._Rotation) * this._Speed * TimeKit_1.TimeKit.DeltaTime;
        this.Loader.x += tmpX;
        this.Loader.y += tmpY;
        this._Rotation += Mathf_1.Mathf.Cos((this._Interval - this.Duration) * this._WaveSpeed) * this._WaveIntensity * TimeKit_1.TimeKit.DeltaTime * 60;
        this._Scale = (this._Interval - this.Duration) / this._Interval * 0.75;
        this.Loader.SetScale(this._Scale, this._Scale);
        this.Loader.rotation = this._Rotation;
    }
}
exports.DamageImpactCurvyEffect = DamageImpactCurvyEffect;
//# sourceMappingURL=DamageImpactCurvyEffect.js.map