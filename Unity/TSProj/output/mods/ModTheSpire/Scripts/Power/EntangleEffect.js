"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntanglePower = void 0;
const RemoveSpecificPowerAction_1 = require("../Action/Common/RemoveSpecificPowerAction");
const SoundMaster_1 = require("../Audio/SoundMaster");
const AbstractCard_1 = require("../Cards/AbstractCard");
const DungeonManager_1 = require("../DungeonManager");
const OnUseCardBeforeMessage_1 = require("../Events/OnUseCardBeforeMessage");
const FileHelper_1 = require("../FileHelper");
const Localization_1 = require("../Gen/DB/Localization");
const StringHelper_1 = require("../StringHelper");
const AbstractPower_1 = require("./AbstractPower");
class EntanglePower extends AbstractPower_1.AbstractPower {
    static Id = "Entangle";
    Icon = FileHelper_1.default.FormatPath("Powers/entangle.png");
    Id = "Entangle";
    Name = Localization_1.LocalizationProperty.Read("能力-缠身");
    get Type() {
        return AbstractPower_1.PowerType.Debuff;
    }
    OnInit() {
        super.OnInit();
        DungeonManager_1.default.MessageManager.Add(OnUseCardBeforeMessage_1.OnUseCardBeforeMessage.Id, this.PreUseCard);
    }
    OnRemove() {
        super.OnRemove();
        DungeonManager_1.default.MessageManager.Remove(OnUseCardBeforeMessage_1.OnUseCardBeforeMessage.Id, this.PreUseCard);
    }
    GetDescription(...args) {
        return StringHelper_1.StringHelper.FormatColorString(Localization_1.LocalizationProperty.Read("能力-缠身描述"));
    }
    PlayApplyPowerSfx() {
        SoundMaster_1.SoundMaster.PlayVoice("POWER_ENTANGLED", 0.05);
    }
    PreUseCard(msg) {
        if (msg.Card.Type == AbstractCard_1.CardType.ATTACK)
            msg.CanUse = false;
    }
    AtEndOfTurn(msg) {
        if (msg.unit.GetPower(this.Id)) {
            this.AddToBot(new RemoveSpecificPowerAction_1.RemoveSpecificPowerAction(this.Owner, this.Owner, this));
        }
    }
}
exports.EntanglePower = EntanglePower;
//# sourceMappingURL=EntangleEffect.js.map