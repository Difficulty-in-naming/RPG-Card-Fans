"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Barricade = void 0;
const FileHelper_1 = require("../../../FileHelper");
const Localization_1 = require("../../../Gen/DB/Localization");
const AbstractCard_1 = require("../../AbstractCard");
const ApplyPowerAction_1 = require("../../../Action/Common/ApplyPowerAction");
const BarricadePower_1 = require("../../../Power/BarricadePower");
class Barricade extends AbstractCard_1.default {
    Color = AbstractCard_1.CardColor.RED;
    Desc = Localization_1.LocalizationProperty.Read("壁垒描述");
    Icon = FileHelper_1.default.FormatPath("cards/red/power/barricade.png");
    Name = Localization_1.LocalizationProperty.Read("壁垒");
    Rarity = AbstractCard_1.CardRarity.RARE;
    Target = AbstractCard_1.CardTarget.SELF;
    Type = AbstractCard_1.CardType.POWER;
    Energy = 3;
    Use(player, monster) {
        super.Use(player, monster);
        if (player.GetPower(BarricadePower_1.BarricadePower.PowerID)) {
            return;
        }
        this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(player, player, new BarricadePower_1.BarricadePower()));
    }
    Upgrade() {
        if (!this.IsUpgraded()) {
            this.UpgradeName();
            this.UpgradeEnergy(-1);
            this.UpgradeTimes++;
        }
    }
}
exports.Barricade = Barricade;
//# sourceMappingURL=Barricade.js.map