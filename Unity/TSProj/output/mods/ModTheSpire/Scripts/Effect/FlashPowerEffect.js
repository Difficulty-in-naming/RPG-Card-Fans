"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlashPowerEffect = void 0;
const csharp_1 = require("csharp");
const UIHelper_1 = require("../UI/UIHelper");
const AbstractEffect_1 = require("./AbstractEffect");
class FlashPowerEffect extends AbstractEffect_1.AbstractEffect {
    Loader;
    constructor(power) {
        super();
        if (!power.Owner.IsDeadOrEscaped) { }
        this.Loader = UIHelper_1.default.CreateGLoader();
        this.Loader.url = power.Icon;
        this.Loader.SetPivot(0.5, 0.5, true);
        this.Loader.TweenScale(new csharp_1.UnityEngine.Vector2(0.3, 0.3), 0.7).OnComplete(() => {
            this.Loader.Dispose();
            this.IsDone = true;
        });
    }
}
exports.FlashPowerEffect = FlashPowerEffect;
//# sourceMappingURL=FlashPowerEffect.js.map