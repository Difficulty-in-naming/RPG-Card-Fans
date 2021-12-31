"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Defend = void 0;
const GainBlockAction_1 = require("../../../Action/Common/GainBlockAction");
const FileHelper_1 = require("../../../FileHelper");
const Localization_1 = require("../../../Gen/DB/Localization");
const AbstractCard_1 = require("../../AbstractCard");
class Defend extends AbstractCard_1.default {
    Color = AbstractCard_1.CardColor.RED;
    Desc = Localization_1.LocalizationProperty.Read("防御描述");
    Icon = FileHelper_1.default.FormatPath("cards/red/attack/defend.png");
    Name = Localization_1.LocalizationProperty.Read("防御");
    Rarity = AbstractCard_1.CardRarity.BASIC;
    Target = AbstractCard_1.CardTarget.SELF;
    Type = AbstractCard_1.CardType.SKILL;
    Tags = AbstractCard_1.CardTags.STARTER_DEFEND;
    Block = 5;
    Energy = 1;
    Use(player, monster) {
        super.Use(player, monster);
        this.AddToBot(new GainBlockAction_1.default(player, this.Block));
    }
    Upgrade() {
        if (!this.IsUpgraded()) {
            this.Name += "+";
            this.Block += 3;
        }
    }
}
exports.Defend = Defend;
//# sourceMappingURL=Defend.js.map