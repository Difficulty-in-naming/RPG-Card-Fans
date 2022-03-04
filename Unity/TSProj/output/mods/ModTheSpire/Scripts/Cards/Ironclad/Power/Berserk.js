"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Berserk = void 0;
const FileHelper_1 = require("../../../FileHelper");
const Localization_1 = require("../../../Gen/DB/Localization");
const AbstractCard_1 = require("../../AbstractCard");
const ApplyPowerAction_1 = require("../../../Action/Common/ApplyPowerAction");
const VulnerablePower_1 = require("../../../Power/VulnerablePower");
const BerserkPower_1 = require("../../../Power/BerserkPower");
class Berserk extends AbstractCard_1.default {
    Color = AbstractCard_1.CardColor.RED;
    Desc = Localization_1.LocalizationProperty.Read("狂暴描述");
    Icon = FileHelper_1.default.FormatPath("cards/red/power/berserk.png");
    Name = Localization_1.LocalizationProperty.Read("狂暴");
    Rarity = AbstractCard_1.CardRarity.RARE;
    Target = AbstractCard_1.CardTarget.SELF;
    Type = AbstractCard_1.CardType.POWER;
    Energy = 0;
    Magic = 2;
    Use(player, monster) {
        this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(player, player, new VulnerablePower_1.VulnerablePower(), this.Magic));
        this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(player, player, new BerserkPower_1.BerserkPower(1), 1));
    }
    1;
    Upgrade() {
        if (!this.IsUpgraded()) {
            this.UpgradeName();
            this.UpgradeEnergy(-1);
            this.UpgradeTimes++;
        }
    }
}
exports.Berserk = Berserk;
//# sourceMappingURL=Berserk.js.map