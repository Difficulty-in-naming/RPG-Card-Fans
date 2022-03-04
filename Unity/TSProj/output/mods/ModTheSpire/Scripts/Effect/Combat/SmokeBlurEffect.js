"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmokeBlurEffect = void 0;
const csharp_1 = require("csharp");
const Mathf_1 = require("../../../../../Core/Module/Math/Mathf");
const TimeKit_1 = require("../../../../../Core/Utils/TimeKit");
const Color_1 = require("../../DataDefine/Color");
const ImageMaster_1 = require("../../Helpers/ImageMaster");
const UIHelper_1 = require("../../UI/UIHelper");
const AbstractEffect_1 = require("../AbstractEffect");
class SmokeBlurEffect extends AbstractEffect_1.AbstractEffect {
    X;
    Y;
    Loader;
    _Interval;
    _TargetScale;
    _Va;
    _Vy;
    constructor(X, Y) {
        super();
        this.X = X;
        this.Y = Y;
        this.Loader = UIHelper_1.default.CreateGLoader();
        if (Mathf_1.Mathf.Random() < 0.5) {
            this.Loader.url = ImageMaster_1.ImageMaster.EXHAUST_L;
            this._TargetScale = Mathf_1.Mathf.RandomRange(0.8, 2.2);
        }
        else {
            this.Loader.url = ImageMaster_1.ImageMaster.EXHAUST_S;
            this._TargetScale = Mathf_1.Mathf.RandomRange(0.8, 1.2);
        }
        this.Loader.SetScale(0.01, 0.01);
        this.Loader.SetPosition(X + Mathf_1.Mathf.RandomRange(-180, 150), Y + Mathf_1.Mathf.RandomRange(-240, 150), 0);
        let color = new Color_1.default();
        color.R = Mathf_1.Mathf.RandomRange(128, 153);
        color.G = color.R + Mathf_1.Mathf.RandomRange(0, 51);
        color.B = 51;
        this.Loader.color = color.UnityColor;
        this._Interval = Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(2, 2.5));
        this.Loader.rotation = Mathf_1.Mathf.RandomRange(0, 360);
        this._Vy = Mathf_1.Mathf.RandomRange(1, 5);
        this._Va = Mathf_1.Mathf.RandomRange(-250, 250);
        this.Loader.TweenScale(new csharp_1.UnityEngine.Vector2(this._TargetScale, this._TargetScale), this._Interval).SetEase(csharp_1.FairyGUI.EaseType.ExpoOut);
        this.Loader.TweenFade(0, 0.33).SetDelay(this._Interval - 0.33).SetEase(csharp_1.FairyGUI.EaseType.Linear);
    }
    Update() {
        super.Update();
        if (this.Duration >= this._Interval) {
            this.IsDone = true;
            this.Loader.Dispose();
            return;
        }
        this.Loader.x += Mathf_1.Mathf.RandomRange(-2, 2) + this._Vy;
        this.Loader.y += Mathf_1.Mathf.RandomRange(-2, 2) + this._Vy;
        this.Loader.rotation += this._Va * TimeKit_1.TimeKit.DeltaTime;
    }
}
exports.SmokeBlurEffect = SmokeBlurEffect;
//# sourceMappingURL=SmokeBlurEffect.js.map