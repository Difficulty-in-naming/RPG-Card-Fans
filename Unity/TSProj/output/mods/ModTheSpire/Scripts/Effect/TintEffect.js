"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TimeKit_1 = require("../../../../Core/Utils/TimeKit");
const Color_1 = require("../DataDefine/Color");
const AbstractEffect_1 = require("./AbstractEffect");
class TintEffect extends AbstractEffect_1.AbstractEffect {
    From = Color_1.default.White.Clone();
    To;
    Lerp;
    ChangeColor(to, lerp = 3) {
        this.To = to;
        this.Lerp = lerp;
    }
    FadeOut() {
        this.To.A = 0;
        this.Lerp = 3;
    }
    Update() {
        this.From = this.From.Lerp(this.To, TimeKit_1.TimeKit.DeltaTime * this.Lerp);
        return true;
    }
}
exports.default = TintEffect;
//# sourceMappingURL=TintEffect.js.map