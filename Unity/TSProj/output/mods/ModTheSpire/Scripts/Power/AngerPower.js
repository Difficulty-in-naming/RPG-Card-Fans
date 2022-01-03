"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AngerPower = void 0;
var ApplyPowerAction_1 = require("../Action/Common/ApplyPowerAction");
var AbstractCard_1 = require("../Cards/AbstractCard");
var DungeonManager_1 = require("../DungeonManager");
var OnUseCardMessage_1 = require("../Events/OnUseCardMessage");
var FileHelper_1 = require("../FileHelper");
var Localization_1 = require("../Gen/DB/Localization");
var StringHelper_1 = require("../StringHelper");
var AbstractPower_1 = require("./AbstractPower");
var StrengthPower_1 = require("./StrengthPower");
class AngerPower extends AbstractPower_1.AbstractPower {
    constructor() {
        super(...arguments);
        this.Icon = FileHelper_1.default.FormatPath("Powers/anger.png");
        this.Id = "Anger";
        this.Name = Localization_1.LocalizationProperty.Read("能力-激怒");
    }
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