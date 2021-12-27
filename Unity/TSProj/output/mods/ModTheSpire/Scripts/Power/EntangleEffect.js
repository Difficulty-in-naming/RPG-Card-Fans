"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntanglePower = void 0;
var RemoveSpecificPowerAction_1 = require("../Action/Common/RemoveSpecificPowerAction");
var SoundMaster_1 = require("../Audio/SoundMaster");
var AbstractCard_1 = require("../Cards/AbstractCard");
var DungeonManager_1 = require("../DungeonManager");
var OnPreUseCardMessage_1 = require("../Events/OnPreUseCardMessage");
var FileHelper_1 = require("../FileHelper");
var Localization_1 = require("../Gen/DB/Localization");
var StringHelper_1 = require("../StringHelper");
var AbstractPower_1 = require("./AbstractPower");
class EntanglePower extends AbstractPower_1.AbstractPower {
    constructor() {
        super(...arguments);
        this.Icon = FileHelper_1.default.FormatPath("Powers/entangle.png");
        this.Id = "Entangle";
        this.Name = Localization_1.LocalizationProperty.Read("能力-缠身");
    }
    get Type() {
        return AbstractPower_1.PowerType.Debuff;
    }
    OnInit() {
        super.OnInit();
        DungeonManager_1.default.MessageManager.Add(OnPreUseCardMessage_1.OnPreUseCardMessage.Id, this.PreUseCard);
    }
    OnRemove() {
        super.OnRemove();
        DungeonManager_1.default.MessageManager.Remove(OnPreUseCardMessage_1.OnPreUseCardMessage.Id, this.PreUseCard);
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
EntanglePower.Id = "Entangle";
//# sourceMappingURL=EntangleEffect.js.map