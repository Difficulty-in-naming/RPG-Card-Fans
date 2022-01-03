"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Async_1 = require("../../../../../Core/Async");
var AbstractGameAction_1 = require("../AbstractGameAction");
class GainBlockAction extends AbstractGameAction_1.default {
    constructor(target, amount, source = null) {
        super();
        this.Type = AbstractGameAction_1.ActionType.BLOCK;
        this.Target = target;
        if (!source)
            this.Source = source;
        else
            this.Source = target;
        this.Amount = amount;
    }
    async Update() {
        if (this.Target && !this.Target.IsDying && !this.Target.IsDead) {
            return true;
        }
        await Async_1.default.Delay(250);
        return true;
    }
}
exports.default = GainBlockAction;
//# sourceMappingURL=GainBlockAction.js.map