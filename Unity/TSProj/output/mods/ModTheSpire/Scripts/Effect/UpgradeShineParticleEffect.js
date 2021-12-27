"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpgradeShineParticleEffect = void 0;
var csharp_1 = require("csharp");
var Mathf_1 = require("../../../../Core/Module/Math/Mathf");
var TimeKit_1 = require("../../../../Core/Utils/TimeKit");
var Color_1 = require("../DataDefine/Color");
var UIHelper_1 = require("../UI/UIHelper");
var AbstractEffect_1 = require("./AbstractEffect");
class UpgradeShineParticleEffect extends AbstractEffect_1.AbstractEffect {
    constructor(_X, _Y) {
        super();
        this._X = _X;
        this._Y = _Y;
        this.Loader = new csharp_1.FairyGUI.GLoader[2];
        for (let i = 0; i < 2; i++) {
            this.Create(i);
        }
    }
    Create(i) {
        this.Loader[i] = UIHelper_1.default.CreateGLoader();
        this._Interval = Mathf_1.Mathf.RandomRange(0.5, 1);
        this.Loader[i].SetPivot(0.5, 0.5, true);
        this.Loader[i].color = new Color_1.default(Mathf_1.Mathf.RandomRange(127, 255), Mathf_1.Mathf.RandomRange(102, 153), Mathf_1.Mathf.RandomRange(0, 51), 255).UnityColor();
        if (this._Interval > 0.9)
            this.Loader[i].alpha = 0;
        else
            this.Loader[i].alpha = 1;
        this.Loader[i].rotation = Mathf_1.Mathf.RandomRange(0, 360);
        this._Vx = Mathf_1.Mathf.RandomRange(-900, 900);
        this._Vx = Mathf_1.Mathf.RandomRange(-500, 1000);
        this._Floor = Mathf_1.Mathf.RandomRange(100, 250);
        this.Loader[i].blendMode = csharp_1.FairyGUI.BlendMode.Add;
        this.Loader[i].SetPosition(this._X, this._Y, 0);
        if (this._Interval > 0.9)
            this.Loader[i].TweenFade(1, Mathf_1.Mathf.Clamp(this._Interval - 0.9, 0, 0.1)).SetEase(csharp_1.FairyGUI.EaseType.SineInOut);
        this.Loader[i].TweenFade(0, 0.1).SetEase(csharp_1.FairyGUI.EaseType.QuadInOut).SetDelay(this._Interval - 0.1);
    }
    Update() {
        super.Update();
        this._Vy -= UpgradeShineParticleEffect._Gravity * TimeKit_1.TimeKit.DeltaTime;
        for (let i = 0; i < 2; i++) {
            this.Loader[i].x += this._Vx * TimeKit_1.TimeKit.DeltaTime;
            this.Loader[i].y += this._Vy * TimeKit_1.TimeKit.DeltaTime;
            this.Loader[i].SetScale(Mathf_1.Mathf.RandomRange(0.7, 1.3), Mathf_1.Mathf.RandomRange(0.7, 1.3));
            this.Loader[i].rotation = Mathf_1.Mathf.Angle(this._Vx, this._Vy);
        }
        if (this.Loader[0].y < this._Floor) {
            this._Vy = -this._Vy * 0.75;
            for (let i = 0; i < 2; i++) {
                this.Loader[i].y = this._Floor + 0.1;
            }
            this._Vx *= 1.1;
        }
    }
}
exports.UpgradeShineParticleEffect = UpgradeShineParticleEffect;
UpgradeShineParticleEffect._Gravity = 3000;
//# sourceMappingURL=UpgradeShineParticleEffect.js.map