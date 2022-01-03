"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardGroupType = exports.CardGroup = void 0;
class CardGroup {
    constructor(Type) {
        this.Type = Type;
        this.Group = new Array();
        this.Queued = new Array();
        this.InHand = new Array();
    }
    get length() {
        return this.Group.length;
    }
    forEach(callbackfn, thisArg) {
        this.Group.forEach(callbackfn);
    }
}
exports.CardGroup = CardGroup;
var CardGroupType;
(function (CardGroupType) {
    CardGroupType["DRAW_PILE"] = "draw_pile";
    CardGroupType["MASTER_DECK"] = "master_deck";
    CardGroupType["HAND"] = "hand";
    CardGroupType["DISCARD_PILE"] = "discard_pile";
    CardGroupType["EXHAUST_PILE"] = "exhaust_pile";
    CardGroupType["CARD_POOL"] = "card_pool";
    CardGroupType["UNSPECIFIED"] = "unspecified";
})(CardGroupType = exports.CardGroupType || (exports.CardGroupType = {}));
//# sourceMappingURL=CardGroup.js.map