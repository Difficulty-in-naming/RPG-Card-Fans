"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionType = void 0;
const DungeonManager_1 = require("../../../../mods/ModTheSpire/Scripts/DungeonManager");
class AbstractGameAction {
    Type;
    Duration = 0;
    Init() {
    }
    AddToBot(action) { DungeonManager_1.default.ActionManager.AddToBottom(action); }
    AddToTop(action) { DungeonManager_1.default.ActionManager.AddToTop(action); }
    async Update() {
        return true;
    }
}
exports.default = AbstractGameAction;
var ActionType;
(function (ActionType) {
    ActionType[ActionType["BLOCK"] = 0] = "BLOCK";
    ActionType[ActionType["POWER"] = 1] = "POWER";
    ActionType[ActionType["CARD_MANIPULATION"] = 2] = "CARD_MANIPULATION";
    ActionType[ActionType["DAMAGE"] = 3] = "DAMAGE";
    ActionType[ActionType["DEBUFF"] = 4] = "DEBUFF";
    ActionType[ActionType["DISCARD"] = 5] = "DISCARD";
    ActionType[ActionType["DRAW"] = 6] = "DRAW";
    ActionType[ActionType["EXHAUST"] = 7] = "EXHAUST";
    ActionType[ActionType["HEAL"] = 8] = "HEAL";
    ActionType[ActionType["ENERGY"] = 9] = "ENERGY";
    ActionType[ActionType["TEXT"] = 10] = "TEXT";
    ActionType[ActionType["USE"] = 11] = "USE";
    ActionType[ActionType["CLEAR_CARD_QUEUE"] = 12] = "CLEAR_CARD_QUEUE";
    ActionType[ActionType["DIALOG"] = 13] = "DIALOG";
    ActionType[ActionType["SPECIAL"] = 14] = "SPECIAL";
    ActionType[ActionType["WAIT"] = 15] = "WAIT";
    ActionType[ActionType["SHUFFLE"] = 16] = "SHUFFLE";
    ActionType[ActionType["REDUCE_POWER"] = 17] = "REDUCE_POWER";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
//# sourceMappingURL=AbstractGameAction.js.map