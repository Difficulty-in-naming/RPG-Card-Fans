"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawCardAction = void 0;
const AbstractGameAction_1 = require("../AbstractGameAction");
class DrawCardAction extends AbstractGameAction_1.default {
    constructor(amount, source = null, endTurnDraw = false, clearDrawHistory = false) {
        super();
    }
}
exports.DrawCardAction = DrawCardAction;
//# sourceMappingURL=DrawCardAction.js.map