"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealNumberEffect = void 0;
const csharp_1 = require("csharp");
const Mathf_1 = require("../../../../../Core/Module/Math/Mathf");
const AbstractEffect_1 = require("../AbstractEffect");
const UIHelper_1 = require("../../UI/UIHelper");
const TimeKit_1 = require("../../../../../Core/Utils/TimeKit");
const Color_1 = require("../../DataDefine/Color");
class HealNumberEffect extends AbstractEffect_1.AbstractEffect {
    X;
    Y;
    Amount;
    Effect;
    Vx;
    Vy;
    static Gravity_Y = -2000;
    constructor(X, Y, Amount) {
        super();
        this.X = X;
        this.Y = Y;
        this.Amount = Amount;
        this.Vx = Mathf_1.Mathf.RandomRange(100, 150);
        if (Mathf_1.Mathf.Random() >= 0.5)
            this.Vx = -this.Vx;
        this.Vy = Mathf_1.Mathf.RandomRange(400, 500);
        this.Effect = UIHelper_1.default.CreateTextField();
        this.Effect.textFormat.size = 46;
        this.Effect.textFormat.shadowColor = Color_1.default.DarkGray.UnityColor;
        this.Effect.shadowOffset = new csharp_1.UnityEngine.Vector2(3, 3);
    }
    Update() {
        this.X += TimeKit_1.TimeKit.DeltaTime * this.Vx;
        this.Y += TimeKit_1.TimeKit.DeltaTime * this.Vy;
        this.Vy += TimeKit_1.TimeKit.DeltaTime * HealNumberEffect.Gravity_Y;
        let scale = (1.2 - this.Duration) / 1.2 * 3;
        if (scale <= 0)
            scale = 0.01;
        this.Effect.SetScale(scale, scale);
        this.Effect.SetPosition(this.X, this.Y, 0);
    }
}
exports.HealNumberEffect = HealNumberEffect;
//# sourceMappingURL=HealNumberEffect.js.map