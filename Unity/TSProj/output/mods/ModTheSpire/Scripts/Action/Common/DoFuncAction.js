"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoFuncAction = void 0;
var Async_1 = require("../../../../../Core/Async");
var AbstractGameAction_1 = require("../AbstractGameAction");
class DoFuncAction extends AbstractGameAction_1.default {
    constructor(Func, Interval = 0) {
        super();
        this.Func = Func;
        this.Interval = Interval;
    }
    async Update() {
        if (this.Duration == 0) {
            this.Func();
        }
        if (this.Interval == 0)
            return true;
        await Async_1.default.Delay(this.Interval);
        return true;
    }
}
exports.DoFuncAction = DoFuncAction;
//# sourceMappingURL=DoFuncAction.js.map