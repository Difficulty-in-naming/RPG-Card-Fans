"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractEffect = void 0;
var EffectKit_1 = require("./EffectKit");
class AbstractEffect {
    constructor() {
        this.Duration = 0;
        this.IsDone = false;
        this.order = EffectKit_1.EffectOrder.MID;
    }
    Update() { }
    ;
    Dispose() { }
    ;
}
exports.AbstractEffect = AbstractEffect;
//# sourceMappingURL=AbstractEffect.js.map