"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeTempCardInDiscardAction = void 0;
const Async_1 = require("../../../../../Core/Async");
const EffectKit_1 = require("../../Effect/EffectKit");
const ShowCardAndAddToDiscardEffect_1 = require("../../Effect/ShowCardAndAddToDiscardEffect");
const AbstractGameAction_1 = require("../AbstractGameAction");
class MakeTempCardInDiscardAction extends AbstractGameAction_1.default {
    card;
    amount;
    sameUUID;
    constructor(card, amount = 1, sameUUID = false) {
        super();
        this.card = card;
        this.amount = amount;
        this.sameUUID = sameUUID;
        this.Type = AbstractGameAction_1.ActionType.CARD_MANIPULATION;
    }
    async Update() {
        for (let i = 0; i < this.amount; i++) {
            EffectKit_1.default.Inst().Play(new ShowCardAndAddToDiscardEffect_1.ShowCardAndAddToDiscardEffect(this.card.Clone()));
        }
        await Async_1.default.Delay(0.5);
        return true;
    }
}
exports.MakeTempCardInDiscardAction = MakeTempCardInDiscardAction;
//# sourceMappingURL=MakeTempCardInDiscardAction.js.map