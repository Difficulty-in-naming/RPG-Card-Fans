"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EffectOrder = void 0;
var TimeKit_1 = require("../../../../Core/Utils/TimeKit");
class EffectKit {
    constructor() {
        this.AsyncEffect = new Array();
        this.SyncEffect = new Array();
    }
    static Inst() {
        if (!EffectKit.inst) {
            EffectKit.inst = new EffectKit();
        }
        return EffectKit.inst;
    }
    Play(effect, sync = true) {
        if (sync)
            this.SyncEffect.push(effect);
        else
            this.AsyncEffect.push(effect);
    }
    Update() {
        for (let i = this.AsyncEffect.length - 1; i >= 0; i--) {
            let node = this.AsyncEffect[i];
            try {
                let result = node.Update();
                if (!node.IsDone) {
                    node.Duration += TimeKit_1.TimeKit.DeltaTime;
                    break;
                }
                else {
                    this.AsyncEffect.splice(i, 1);
                }
            }
            catch {
                this.AsyncEffect.splice(i, 1);
            }
        }
        for (let i = this.SyncEffect.length - 1; i >= 0; i--) {
            let node = this.SyncEffect[i];
            try {
                let result = node.Update();
                if (!node.IsDone) {
                    node.Duration += TimeKit_1.TimeKit.DeltaTime;
                }
                else {
                    this.SyncEffect.splice(i, 1);
                }
            }
            catch {
                this.SyncEffect.splice(i, 1);
            }
        }
    }
}
exports.default = EffectKit;
var EffectOrder;
(function (EffectOrder) {
    EffectOrder[EffectOrder["BOT"] = 0] = "BOT";
    EffectOrder[EffectOrder["MID"] = 1] = "MID";
    EffectOrder[EffectOrder["TOP"] = 3] = "TOP";
})(EffectOrder = exports.EffectOrder || (exports.EffectOrder = {}));
//# sourceMappingURL=EffectKit.js.map