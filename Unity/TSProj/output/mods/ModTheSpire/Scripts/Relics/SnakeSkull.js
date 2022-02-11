"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnakeSkull = void 0;
const DungeonManager_1 = require("../DungeonManager");
const PreApplyPowerMessage_1 = require("../Events/PreApplyPowerMessage");
const Localization_1 = require("../Gen/DB/Localization");
const StringHelper_1 = require("../StringHelper");
const AbstractRelic_1 = require("./AbstractRelic");
class SnakeSkull extends AbstractRelic_1.default {
    static Effect = 1;
    Id = "SnakeSkull";
    Name = Localization_1.LocalizationProperty.Read("异蛇头骨");
    Desc = StringHelper_1.StringHelper.FormatColorString(Localization_1.LocalizationProperty.Read("异蛇头骨-效果描述")).format(SnakeSkull.Effect);
    Icon;
    Flavor = Localization_1.LocalizationProperty.Read("异蛇头骨-特殊描述");
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
//# sourceMappingURL=SnakeSkull.js.map