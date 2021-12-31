"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArmamentsAction = void 0;
const DungeonManager_1 = require("../../DungeonManager");
const AbstractGameAction_1 = require("../AbstractGameAction");
class ArmamentsAction extends AbstractGameAction_1.default {
    upgraded;
    p;
    cannotUpgrade = new Array();
    constructor(upgraded) {
        super();
        this.upgraded = upgraded;
        this.Type = AbstractGameAction_1.ActionType.CARD_MANIPULATION;
        this.p = DungeonManager_1.default.Inst.Player;
    }
}
exports.ArmamentsAction = ArmamentsAction;
//# sourceMappingURL=ArmamentsAction.js.map