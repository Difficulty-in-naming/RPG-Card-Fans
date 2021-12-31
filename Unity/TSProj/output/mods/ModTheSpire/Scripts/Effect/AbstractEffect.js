"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractEffect = void 0;
const EffectKit_1 = require("./EffectKit");
class AbstractEffect {
    Duration = 0;
    IsDone = false;
    Update() { }
    ;
    Dispose() { }
    ;
    order = EffectKit_1.EffectOrder.MID;
}
exports.AbstractEffect = AbstractEffect;
//# sourceMappingURL=AbstractEffect.js.map