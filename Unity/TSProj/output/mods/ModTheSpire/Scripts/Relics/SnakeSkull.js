"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnakeSkull = void 0;
var DungeonManager_1 = require("../DungeonManager");
var PreApplyPowerMessage_1 = require("../Events/PreApplyPowerMessage");
var Localization_1 = require("../Gen/DB/Localization");
var StringHelper_1 = require("../StringHelper");
var AbstractRelic_1 = require("./AbstractRelic");
class SnakeSkull extends AbstractRelic_1.default {
    constructor() {
        super(...arguments);
        this.Id = "SnakeSkull";
        this.Name = Localization_1.LocalizationProperty.Read("异蛇头骨");
        this.Desc = StringHelper_1.StringHelper.FormatColorString(Localization_1.LocalizationProperty.Read("异蛇头骨-效果描述")).format(SnakeSkull.Effect);
        this.Flavor = Localization_1.LocalizationProperty.Read("异蛇头骨-特殊描述");
    }
    OnObtain() {
        DungeonManager_1.default.MessageManager.Add(PreApplyPowerMessage_1.PreApplyPowerMessage.Id, this.Event_WhenApplyPowerMessage);
    }
    Event_WhenApplyPowerMessage(msg) {
        msg.StackAmount += SnakeSkull.Effect;
    }
    OnLose() {
        DungeonManager_1.default.MessageManager.Remove(PreApplyPowerMessage_1.PreApplyPowerMessage.Id, this.Event_WhenApplyPowerMessage);
    }
}
exports.SnakeSkull = SnakeSkull;
SnakeSkull.Effect = 1;
//# sourceMappingURL=SnakeSkull.js.map