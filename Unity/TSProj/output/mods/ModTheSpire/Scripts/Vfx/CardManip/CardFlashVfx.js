"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardFlashVfx = void 0;
var AbstractEffect_1 = require("../../Effect/AbstractEffect");
class CardFlashVfx extends AbstractEffect_1.AbstractEffect {
    constructor(card, isSuper, c) {
        super();
        this.card = card;
        this.isSuper = isSuper;
        this.Duration = 0.5;
        if (isSuper) {
        }
    }
}
exports.CardFlashVfx = CardFlashVfx;
//# sourceMappingURL=CardFlashVfx.js.map