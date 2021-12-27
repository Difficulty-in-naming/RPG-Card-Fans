"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaitAction = void 0;
var Async_1 = require("../../../../../Core/Async");
var AbstractGameAction_1 = require("../AbstractGameAction");
class WaitAction extends AbstractGameAction_1.default {
    constructor(dur) {
        super();
        this.dur = dur;
        this.Type = AbstractGameAction_1.ActionType.WAIT;
    }
    async Update() {
        await Async_1.default.Delay(this.dur);
        return true;
    }
}
exports.WaitAction = WaitAction;
//# sourceMappingURL=WaitAction.js.map