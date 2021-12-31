"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DustEffect = void 0;
const csharp_1 = require("csharp");
const Mathf_1 = require("../../../../Core/Module/Math/Mathf");
const TimeKit_1 = require("../../../../Core/Utils/TimeKit");
const Color_1 = require("../DataDefine/Color");
const FileHelper_1 = require("../FileHelper");
const UIHelper_1 = require("../UI/UIHelper");
const AbstractEffect_1 = require("./AbstractEffect");
class DustEffect extends AbstractEffect_1.AbstractEffect {
    Vx;
    Vy;
    BaseAlpha;
    Vr;
    Loader;
    Interval;
    constructor(parent = null) {
        super();
        this.Interval = Mathf_1.Mathf.RandomRange(5, 14);
        this.Loader = UIHelper_1.default.CreateGLoader();
        if (parent)
            parent.AddChild(this.Loader);
        this.Loader.touchable = false;
        this.Loader.url = FileHelper_1.default.FormatPath("Vfx/env/dust" + Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(1, 7)) + ".png");
        this.Loader.x = Mathf_1.Mathf.RandomRange(0, csharp_1.FairyGUI.GRoot.inst.width);
        this.Loader.y = Mathf_1.Mathf.RandomRange(500, 1080);
        this.Vx = Mathf_1.Mathf.RandomRange(-12, 12);
        this.Vy = Mathf_1.Mathf.RandomRange(-30, 12);
        let color = Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(26, 180));
        this.Loader.color = new Color_1.default(color, color, color, 255).UnityColor();
        this.Loader.alpha = 0;
        this.BaseAlpha = 1 - (color / 255);
        this.Loader.rotation = Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(0, 360));
        this.Vr = Mathf_1.Mathf.RandomRange(-120, 120);
        this.Loader.TweenFade(this.BaseAlpha, this.Interval / 2).SetEase(csharp_1.FairyGUI.EaseType.SineInOut).OnComplete(() => {
            this.Loader.TweenFade(0, this.Interval / 2).SetEase(csharp_1.FairyGUI.EaseType.SineInOut);
        });
    }
    Update() {
        let rotation = this.Loader.rotation + this.Vr * TimeKit_1.TimeKit.DeltaTime;
        let x = this.Loader.x + this.Vx * TimeKit_1.TimeKit.DeltaTime;
        let y = this.Loader.y + this.Vy * TimeKit_1.TimeKit.DeltaTime;
        this.Loader.rotation = rotation;
        this.Loader.x = x;
        this.Loader.y = y;
        if (this.Duration >= this.Interval) {
            this.IsDone = true;
            this.Loader.Dispose();
        }
    }
}
exports.DustEffect = DustEffect;
//# sourceMappingURL=DustEffect.js.map