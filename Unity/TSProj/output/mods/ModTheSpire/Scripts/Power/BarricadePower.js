"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarricadePower = void 0;
const DungeonManager_1 = require("../DungeonManager");
const FileHelper_1 = require("../FileHelper");
const Localization_1 = require("../Gen/DB/Localization");
const StringHelper_1 = require("../StringHelper");
const AbstractPower_1 = require("./AbstractPower");
const AtEndOfTurnRemoveBlockMessage_1 = require("../Events/AtEndOfTurnRemoveBlockMessage");
class BarricadePower extends AbstractPower_1.AbstractPower {
    static PowerID = "Barricade";
    Id = BarricadePower.PowerID;
    Name = Localization_1.LocalizationProperty.Read("能力-壁垒");
    Icon = FileHelper_1.default.FormatPath("Powers/barricade.png");
    get Type() { return AbstractPower_1.PowerType.Buff; }
    GetDescription(...args) {
        return StringHelper_1.StringHelper.FormatColorString(Localization_1.LocalizationProperty.Read("能力-壁垒描述"));
    }
    OnInit() {
        super.OnInit();
        DungeonManager_1.default.MessageManager.Add(AtEndOfTurnRemoveBlockMessage_1.AtEndOfTurnRemoveBlockMessage.Id, this.AtEndOfTurnRemoveBlockMessage);
    }
    OnRemove() {
        super.OnRemove();
        DungeonManager_1.default.MessageManager.Remove(AtEndOfTurnRemoveBlockMessage_1.AtEndOfTurnRemoveBlockMessage.Id, this.AtEndOfTurnRemoveBlockMessage);
    }
    AtEndOfTurnRemoveBlockMessage(msg) {
        msg.Block = 0;
    }
}
exports.BarricadePower = BarricadePower;
//# sourceMappingURL=BarricadePower.js.map