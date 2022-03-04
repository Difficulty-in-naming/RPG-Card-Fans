"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DamageAction_1 = require("../../../Action/Common/DamageAction");
const AttackEffect_1 = require("../../../DataDefine/AttackEffect");
const DamageInfo_1 = require("../../../DataDefine/DamageInfo");
const DungeonManager_1 = require("../../../DungeonManager");
const CardEnterHandMessage_1 = require("../../../Events/CardEnterHandMessage");
const CardRemoveFromHandMessage_1 = require("../../../Events/CardRemoveFromHandMessage");
const OnDamageAfterMessage_1 = require("../../../Events/OnDamageAfterMessage");
const OnPreBattleMessage_1 = require("../../../Events/OnPreBattleMessage");
const FileHelper_1 = require("../../../FileHelper");
const Localization_1 = require("../../../Gen/DB/Localization");
const AbstractCard_1 = require("../../AbstractCard");
class BloodForBlood extends AbstractCard_1.default {
    Color = AbstractCard_1.CardColor.RED;
    Desc = Localization_1.LocalizationProperty.Read("以血还血描述");
    Icon = FileHelper_1.default.FormatPath("cards/red/attack/blood_for_blood.png");
    Name = Localization_1.LocalizationProperty.Read("以血还血");
    Rarity = AbstractCard_1.CardRarity.UNCOMMON;
    Target = AbstractCard_1.CardTarget.ENEMY;
    Type = AbstractCard_1.CardType.ATTACK;
    Damage = 18;
    Energy = 4;
    Magic = 4;
    constructor() {
        super();
        DungeonManager_1.default.MessageManager.Add(CardEnterHandMessage_1.CardEnterHandMessage.Id, this.CardEnterHand);
        DungeonManager_1.default.MessageManager.Add(CardRemoveFromHandMessage_1.CardRemoveFromHandMessage.Id, this.CardRemoveFromHand);
        DungeonManager_1.default.MessageManager.Add(OnPreBattleMessage_1.OnPreBattleMessage.Id, this.OnPreBattle);
    }
    OnPreBattle(msg) {
        this.Energy = this.Magic;
    }
    CardEnterHand(msg) {
        DungeonManager_1.default.MessageManager.Add(OnDamageAfterMessage_1.OnDamageAfterMessage.Id, this.OnDamageAfter);
    }
    CardRemoveFromHand(msg) {
        DungeonManager_1.default.MessageManager.Remove(OnDamageAfterMessage_1.OnDamageAfterMessage.Id, this.OnDamageAfter);
    }
    OnDamageAfter(msg) {
        this.Energy--;
    }
    Use(player, monster) {
        this.AddToBot(new DamageAction_1.default(monster, new DamageInfo_1.default(player, this.Damage), AttackEffect_1.AttackEffect.SLASH_HEAVY));
    }
    Upgrade() {
        if (!this.IsUpgraded()) {
            this.UpgradeName();
            this.UpgradeDamage(4);
            this.UpgradeMagic(3);
            this.UpgradeTimes++;
        }
    }
    CanUpgrade() {
        return this.IsUpgraded();
    }
}
exports.default = BloodForBlood;
//# sourceMappingURL=BloodForBlood.js.map