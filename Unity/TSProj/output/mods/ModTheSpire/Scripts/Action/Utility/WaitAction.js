"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaitAction = void 0;
const Async_1 = require("../../../../../Core/Async");
const AbstractGameAction_1 = require("../AbstractGameAction");
class WaitAction extends AbstractGameAction_1.default {
    dur;
    Type = AbstractGameAction_1.ActionType.WAIT;
    constructor(dur) {
        super();
        this.dur = dur;
    }
    async Update() {
        await Async_1.default.Delay(this.dur);
        return true;
    }
}
exports.WaitAction = WaitAction;
//# sourceMappingURL=WaitAction.js.map