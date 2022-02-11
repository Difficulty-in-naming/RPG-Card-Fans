"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExhaustEmberEffect = void 0;
const csharp_1 = require("csharp");
const Mathf_1 = require("../../../../Core/Module/Math/Mathf");
const TimeKit_1 = require("../../../../Core/Utils/TimeKit");
const Color_1 = require("../DataDefine/Color");
const ImageMaster_1 = require("../Helpers/ImageMaster");
const UIHelper_1 = require("../UI/UIHelper");
const AbstractEffect_1 = require("./AbstractEffect");
class ExhaustEmberEffect extends AbstractEffect_1.AbstractEffect {
    X;
    Y;
    Vx;
    Vy;
    Loader;
    Add;
    TargetScale;
    Interval;
    RotateSpeed;
    constructor(X, Y) {
        super();
        this.X = X;
        this.Y = Y;
        this.Loader = UIHelper_1.default.CreateGLoader();
        this.Add = UIHelper_1.default.CreateGLoader();
        this.Add.blendMode = csharp_1.FairyGUI.BlendMode.Add;
        let rand = Math.trunc(Mathf_1.Mathf.RandomRange(0, 3));
        let color = Color_1.default.Black;
        if (rand == 0) {
            color = Color_1.default.Coral.Clone();
        }
        else if (rand == 1) {
            color = Color_1.default.Orange.Clone();
        }
        else
            color = Color_1.default.Scarlet.Clone();
        this.Interval = Mathf_1.Mathf.RandomRange(0.6, 1.4);
        this.Interval *= this.Interval;
        this.TargetScale = Mathf_1.Mathf.RandomRange(0.4, 0.8);
        color.G = color.R = Mathf_1.Mathf.RandomRange(26, 102);
        color.B = color.R + 13;
        this.Vx = Mathf_1.Mathf.RandomRange(-150, 150);
        this.Vy = Mathf_1.Mathf.RandomRange(-100, 300);
        this.Add.url = this.Loader.url = this.SetImg();
        this.Add.color = this.Loader.color = color.UnityColor;
        this.Add.touchable = this.Loader.touchable = false;
        this.Loader.SetPivot(0.5, 0.5, true);
        this.Add.SetPivot(0.5, 0.5, true);
        this.Add.x = this.Loader.x = X + Mathf_1.Mathf.RandomRange(-170, 170);
        this.Add.y = this.Loader.y = Y + Mathf_1.Mathf.RandomRange(-220, 150);
        this.Loader.SetScale(0.01, 0.01);
        this.Add.SetScale(0.01, 0.01);
        this.RotateSpeed = Mathf_1.Mathf.RandomRange(-700, 700);
        this.Loader.TweenScale(new csharp_1.UnityEngine.Vector2(this.TargetScale, this.TargetScale), this.Interval).SetEase(csharp_1.FairyGUI.EaseType.BackInOut);
        this.Add.TweenScale(new csharp_1.UnityEngine.Vector2(this.TargetScale, this.TargetScale), this.Interval).SetEase(csharp_1.FairyGUI.EaseType.BackInOut);
    }
    SetImg() {
        let rand = Math.trunc(Mathf_1.Mathf.RandomRange(0, 5));
        switch (rand) {
            case 0: return ImageMaster_1.ImageMaster.DUST_1;
            case 1: return ImageMaster_1.ImageMaster.DUST_2;
            case 2: return ImageMaster_1.ImageMaster.DUST_3;
            case 3: return ImageMaster_1.ImageMaster.DUST_4;
            case 4: return ImageMaster_1.ImageMaster.DUST_5;
        }
        return ImageMaster_1.ImageMaster.DUST_6;
    }
    Update() {
        if (this.Duration >= this.Interval) {
            this.IsDone = true;
            return true;
        }
        this.Add.x = this.Loader.x += this.Vx * TimeKit_1.TimeKit.DeltaTime;
        this.Add.y = this.Loader.y += this.Vy * TimeKit_1.TimeKit.DeltaTime;
        this.Add.rotation = this.Loader.rotation += this.RotateSpeed * TimeKit_1.TimeKit.DeltaTime;
        if (this.Duration > this.Interval - 0.5) {
            this.Loader.alpha = (this.Interval - this.Duration) * 2;
        }
        this.Add.alpha = this.Loader.alpha / 3;
    }
}
exports.ExhaustEmberEffect = ExhaustEmberEffect;
//# sourceMappingURL=ExhaustEmberEffect.js.map