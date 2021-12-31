"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AngerPower = void 0;
const ApplyPowerAction_1 = require("../Action/Common/ApplyPowerAction");
const AbstractCard_1 = require("../Cards/AbstractCard");
const DungeonManager_1 = require("../DungeonManager");
const OnUseCardMessage_1 = require("../Events/OnUseCardMessage");
const FileHelper_1 = require("../FileHelper");
const Localization_1 = require("../Gen/DB/Localization");
const StringHelper_1 = require("../StringHelper");
const AbstractPower_1 = require("./AbstractPower");
const StrengthPower_1 = require("./StrengthPower");
class AngerPower extends AbstractPower_1.AbstractPower {
    Icon = FileHelper_1.default.FormatPath("Powers/anger.png");
    Id = "Anger";
    Name = Localization_1.LocalizationProperty.Read("能力-激怒");
    get Type() {
        return AbstractPower_1.PowerType.Buff;
    }
    GetDescription(...args) {
        return StringHelper_1.StringHelper.FormatColorString(Localization_1.LocalizationProperty.Read("能力-激怒描述")).format(this.Amount);
    }
    OnInit() {
        super.OnInit();
        DungeonManager_1.default.MessageManager.Add(OnUseCardMessage_1.OnUseCardMessage.Id, this.OnUseCard);
    }
    OnRemove() {
        super.OnRemove();
        DungeonManager_1.default.MessageManager.Remove(OnUseCardMessage_1.OnUseCardMessage.Id, this.OnUseCard);
    }
    OnUseCard(msg) {
        if (msg.Card.Type == AbstractCard_1.CardType.SKILL) {
            this.AddToTop(new ApplyPowerAction_1.ApplyPowerAction(this.Owner, this.Owner, new StrengthPower_1.StrengthPower(), this.Amount));
            this.Flash();
        }
    }
}
exports.AngerPower = AngerPower;
//# sourceMappingURL=AngerPower.js.map