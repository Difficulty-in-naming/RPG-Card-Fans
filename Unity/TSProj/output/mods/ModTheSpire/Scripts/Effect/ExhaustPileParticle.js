"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExhaustPileParticle = void 0;
var csharp_1 = require("csharp");
var Mathf_1 = require("../../../../Core/Module/Math/Mathf");
var TimeKit_1 = require("../../../../Core/Utils/TimeKit");
var Color_1 = require("../DataDefine/Color");
var FileHelper_1 = require("../FileHelper");
var UIHelper_1 = require("../UI/UIHelper");
var AbstractEffect_1 = require("./AbstractEffect");
class ExhaustPileParticle extends AbstractEffect_1.AbstractEffect {
    constructor() {
        super();
        this.Interval = 2;
        this.Loader = UIHelper_1.default.CreateGLoader();
        this.Loader.SetPosition(24, 24, 0);
        this.Loader.url = FileHelper_1.default.FormatPath("Vfx/exhaust/bigBlur.png");
        this.Loader.SetPivot(0.5, 0.5, true);
        this.Loader.autoSize = true;
        let scale = Mathf_1.Mathf.RandomRange(0.5, 0.7);
        let color = new Color_1.default();
        color.G = Mathf_1.Mathf.RandomRange(51, 102);
        color.R = color.G + 26;
        color.B = color.R + 26;
        this.Loader.color = color.UnityColor();
        this.Loader.alpha = 0;
        this.Loader.rotation = Mathf_1.Mathf.RandomRange(0, 360);
        this.Loader.SetScale(scale, scale);
        this.Loader.TweenScale(new csharp_1.UnityEngine.Vector2(0.1, 0.1), 2).SetEase(csharp_1.FairyGUI.EaseType.BounceIn);
    }
    Update() {
        this.Loader.rotation += this.Interval * TimeKit_1.TimeKit.DeltaTime;
        this.Loader.alpha = this.Duration / this.Interval;
        if (this.Duration >= this.Interval) {
            this.IsDone = true;
            this.Loader.Dispose();
        }
    }
}
exports.ExhaustPileParticle = ExhaustPileParticle;
//# sourceMappingURL=ExhaustPileParticle.js.map