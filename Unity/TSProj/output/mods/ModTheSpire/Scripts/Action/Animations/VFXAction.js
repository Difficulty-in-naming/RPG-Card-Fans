"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Async_1 = require("../../../../../Core/Async");
var DungeonManager_1 = require("../../DungeonManager");
var EffectKit_1 = require("../../Effect/EffectKit");
var AbstractGameAction_1 = require("../AbstractGameAction");
class VFXAction extends AbstractGameAction_1.default {
    constructor(Effect, Interval = 0, Order = EffectKit_1.EffectOrder.MID) {
        super();
        this.Effect = Effect;
        this.Interval = Interval;
        this.Order = Order;
    }
    async Update() {
        DungeonManager_1.default.EffectManager.Play(this.Effect);
        await Async_1.default.Delay(this.Interval);
        return true;
    }
}
exports.default = VFXAction;
//# sourceMappingURL=VFXAction.js.map