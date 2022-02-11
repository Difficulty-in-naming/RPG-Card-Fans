"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowCardAction = void 0;
const Async_1 = require("../../../../../Core/Async");
const AbstractGameAction_1 = require("../AbstractGameAction");
class ShowCardAction extends AbstractGameAction_1.default {
    Card;
    constructor(Card) {
        super();
        this.Card = Card;
    }
    async Update() {
        await Async_1.default.Delay(200);
        return true;
    }
}
exports.ShowCardAction = ShowCardAction;
//# sourceMappingURL=ShowCardAction.js.map