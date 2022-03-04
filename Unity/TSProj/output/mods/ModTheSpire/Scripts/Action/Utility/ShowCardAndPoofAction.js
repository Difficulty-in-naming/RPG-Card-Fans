"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowCardAndPoofAction = void 0;
const Async_1 = require("../../../../../Core/Async");
const DungeonManager_1 = require("../../DungeonManager");
const ExhaustCardEffect_1 = require("../../Effect/ExhaustCardEffect");
const AbstractGameAction_1 = require("../AbstractGameAction");
class ShowCardAndPoofAction extends AbstractGameAction_1.default {
    Card;
    constructor(Card) {
        super();
        this.Card = Card;
    }
    async Update() {
        DungeonManager_1.default.EffectManager.Play(new ExhaustCardEffect_1.ExhaustCardEffect(this.Card));
        await Async_1.default.Delay(200);
        return true;
    }
}
exports.ShowCardAndPoofAction = ShowCardAndPoofAction;
//# sourceMappingURL=ShowCardAndPoofAction.js.map