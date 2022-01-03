"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GainPowerEffect = void 0;
var csharp_1 = require("csharp");
var UIHelper_1 = require("../UI/UIHelper");
var AbstractEffect_1 = require("./AbstractEffect");
class GainPowerEffect extends AbstractEffect_1.AbstractEffect {
    constructor(power, silent = false) {
        super();
        this.Interval = 2;
        this.Loader = UIHelper_1.default.CreateGLoader();
        this.Loader.url = power.Icon;
        this.Loader.blendMode = csharp_1.FairyGUI.BlendMode.Add;
        if (!silent)
            power.PlayApplyPowerSfx();
        this.Loader.alpha = 0.5;
        this.Loader.TweenScale(new csharp_1.UnityEngine.Vector2(3, 3), 1.5).SetEase(csharp_1.FairyGUI.EaseType.CubicOut);
        this.Loader.TweenFade(0, 0.5).SetDelay(1.5).SetEase(csharp_1.FairyGUI.EaseType.SineInOut);
    }
    Update() {
        if (this.Duration >= this.Interval) {
            this.Loader.Dispose();
            this.IsDone = true;
        }
    }
}
exports.GainPowerEffect = GainPowerEffect;
//# sourceMappingURL=GainPowerEffect.js.map