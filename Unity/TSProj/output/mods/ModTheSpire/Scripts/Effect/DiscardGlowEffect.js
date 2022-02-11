"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscardGlowEffect = void 0;
const csharp_1 = require("csharp");
const Mathf_1 = require("../../../../Core/Module/Math/Mathf");
const TimeKit_1 = require("../../../../Core/Utils/TimeKit");
const Color_1 = require("../DataDefine/Color");
const UIHelper_1 = require("../UI/UIHelper");
const AbstractEffect_1 = require("./AbstractEffect");
class DiscardGlowEffect extends AbstractEffect_1.AbstractEffect {
    IsAbove;
    Interval = Mathf_1.Mathf.RandomRange(0.4, 0.9);
    Vy = -Mathf_1.Mathf.RandomRange(30, 60);
    Vr = Mathf_1.Mathf.RandomRange(-180, 180);
    Loader;
    constructor(IsAbove) {
        super();
        this.IsAbove = IsAbove;
        this.Loader = UIHelper_1.default.CreateGLoader();
        let color = Color_1.default.DiscardColor.Clone();
        let darkness = Mathf_1.Mathf.RandomRange(0.1, 0.4);
        color.R -= darkness;
        color.G -= darkness;
        color.B -= darkness;
        this.Loader.color = color.UnityColor;
        this.Loader.url = "ui://ModTheSpire_Effect/p" + Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(1, 7));
        this.Loader.SetPosition(Mathf_1.Mathf.RandomRange(35, 85), Mathf_1.Mathf.RandomRange(35, 85), 0);
        let scale = Mathf_1.Mathf.RandomRange(0.9, 1.1);
        this.Loader.SetScale(scale, scale);
        this.Loader.alpha = 1;
        this.Loader.TweenFade(0, this.Interval).SetEase(csharp_1.FairyGUI.EaseType.Linear);
        this.Loader.blendMode = Mathf_1.Mathf.Random() < 0.5 ? csharp_1.FairyGUI.BlendMode.Add : csharp_1.FairyGUI.BlendMode.Normal;
    }
    SetPosition() {
        let roll = Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(0, 10));
        if (this.IsAbove) {
            switch (roll) {
                case 0:
                    this.Loader.SetPosition(86, 102, 0);
                    break;
                case 1:
                    this.Loader.SetPosition(80, 111, 0);
                    break;
                case 2:
                    this.Loader.SetPosition(72, 109, 0);
                    break;
                case 3:
                    this.Loader.SetPosition(64, 107, 0);
                    break;
                case 4:
                    this.Loader.SetPosition(58, 106, 0);
                    break;
                case 5:
                    this.Loader.SetPosition(50, 104, 0);
                    break;
                case 6:
                    this.Loader.SetPosition(42, 101, 0);
                    break;
                case 7:
                    this.Loader.SetPosition(36, 98, 0);
                    break;
                case 8:
                    this.Loader.SetPosition(30, 95, 0);
                    break;
            }
        }
        else {
            switch (roll) {
                case 0:
                    this.Loader.SetPosition(36, 61, 0);
                    break;
                case 1:
                    this.Loader.SetPosition(44, 53, 0);
                    break;
                case 2:
                    this.Loader.SetPosition(52, 40, 0);
                    break;
                case 3:
                    this.Loader.SetPosition(60, 40, 0);
                    break;
                case 4:
                    this.Loader.SetPosition(68, 40, 0);
                    break;
                case 5:
                    this.Loader.SetPosition(76, 40, 0);
                    break;
                case 6:
                    this.Loader.SetPosition(88, 40, 0);
                    break;
                case 7:
                    this.Loader.SetPosition(96, 40, 0);
                    break;
                case 8:
                    this.Loader.SetPosition(105, 61, 0);
                    break;
            }
        }
    }
    Update() {
        this.Loader.rotation = this.Vr * TimeKit_1.TimeKit.DeltaTime;
        this.Loader.y += this.Vy * TimeKit_1.TimeKit.DeltaTime;
        let d = this.Interval - this.Duration;
        if (d < 0.1) {
            this.Loader.SetScale(d / this.Interval * 2, d / this.Interval * 2);
        }
        if (d < 0.25) {
            this.Loader.alpha = d * 4;
        }
        if (d <= 0) {
            this.IsDone = true;
            this.Loader.Dispose();
        }
    }
}
exports.DiscardGlowEffect = DiscardGlowEffect;
//# sourceMappingURL=DiscardGlowEffect.js.map