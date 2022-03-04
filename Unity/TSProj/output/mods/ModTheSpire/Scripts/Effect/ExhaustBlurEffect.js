"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExhaustBlurEffect = void 0;
const csharp_1 = require("csharp");
const Mathf_1 = require("../../../../Core/Module/Math/Mathf");
const TimeKit_1 = require("../../../../Core/Utils/TimeKit");
const Color_1 = require("../DataDefine/Color");
const ImageMaster_1 = require("../Helpers/ImageMaster");
const UIHelper_1 = require("../UI/UIHelper");
const AbstractEffect_1 = require("./AbstractEffect");
class ExhaustBlurEffect extends AbstractEffect_1.AbstractEffect {
    X;
    Y;
    Vr;
    Vy;
    Loader;
    TargetScale;
    Interval;
    constructor(X, Y) {
        super();
        this.X = X;
        this.Y = Y;
        this.Loader = UIHelper_1.default.CreateGLoader();
        if (Mathf_1.Mathf.Random() > 0.5) {
            this.Loader.url = ImageMaster_1.ImageMaster.EXHAUST_L;
            this.Interval = Mathf_1.Mathf.RandomRange(0.9, 1.2);
            this.TargetScale = Mathf_1.Mathf.RandomRange(0.5, 1.3);
        }
        else {
            this.Loader.url = ImageMaster_1.ImageMaster.EXHAUST_S;
            this.Interval = Mathf_1.Mathf.RandomRange(0.6, 1.4);
            this.TargetScale = Mathf_1.Mathf.RandomRange(0.3, 1);
        }
        let color = Color_1.default.Black;
        color.G = color.R = Mathf_1.Mathf.RandomRange(26, 102);
        color.B = color.R + 13;
        this.Loader.color = color.UnityColor;
        this.Loader.touchable = false;
        this.Loader.SetPivot(0.5, 0.5, true);
        this.Loader.x = X + Mathf_1.Mathf.RandomRange(-150, 150);
        this.Loader.y = Y + Mathf_1.Mathf.RandomRange(-240, 150);
        this.Vr = Mathf_1.Mathf.RandomRange(-250, 250);
        this.Vy = Mathf_1.Mathf.RandomRange(1, 5);
        this.Loader.SetScale(0.01, 0.01);
        this.Loader.rotation = Mathf_1.Mathf.RandomRange(0, 360);
        this.Loader.TweenScale(new csharp_1.UnityEngine.Vector2(this.TargetScale, this.TargetScale), this.Interval).SetEase(csharp_1.FairyGUI.EaseType.BackInOut);
    }
    Update() {
        if (this.Duration >= this.Interval) {
            this.IsDone = true;
            return true;
        }
        this.Loader.x += Mathf_1.Mathf.RandomRange(-2, 2);
        this.Loader.y += Mathf_1.Mathf.RandomRange(-2, 2);
        this.Loader.y += this.Vy * TimeKit_1.TimeKit.DeltaTime * 60;
        this.Loader.rotation += this.Vr * TimeKit_1.TimeKit.DeltaTime;
        if (this.Duration > this.Interval - 0.33) {
            this.Loader.alpha = (this.Interval - this.Duration) * 3;
        }
    }
}
exports.ExhaustBlurEffect = ExhaustBlurEffect;
//# sourceMappingURL=ExhaustBlurEffect.js.map