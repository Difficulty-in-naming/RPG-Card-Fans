"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardTarget = exports.CardRarity = exports.CardType = exports.CardTags = exports.CardColor = void 0;
const uuid_tool_1 = require("../../../../ThirdParty/uuid-tool");
const DungeonManager_1 = require("../DungeonManager");
const ModTheSpire_Common_1 = require("../Gen/View/ModTheSpire_Common");
const StringHelper_1 = require("../StringHelper");
const global_1 = require("../global");
class AbstractCard {
    //唯一ID.用于标志哪些卡牌升级.或者针对某张卡牌做特殊操作
    UUID;
    //卡牌标签(攻击,初始卡牌)
    Tags;
    //升级次数
    UpgradeTimes = 0;
    //消耗能量
    Energy = 0;
    //是否消耗
    Exhaust = false;
    //是否虚无
    Ethereal = false;
    //卡牌渲染组件
    RenderUrl = ModTheSpire_Common_1.View_Card.Url;
    //伤害
    Damage = 0;
    //格挡
    Block = 0;
    //特殊值
    Magic = 0;
    //临时卡牌,主要用于双发后.打出的卡牌第二次自动消耗.并且不会进入消耗牌堆中
    Temp = false;
    //显示能量消耗球
    DisplayOrb = true;
    //是否可以使用
    CantUse = false;
    //正在被打出
    IsUsed = false;
    get View() {
        return global_1.S.CommonCardViewPool.Pop();
    }
    constructor() {
        this.UUID = uuid_tool_1.UuidTool.newUuid();
    }
    Use(p, t) { }
    //可不可以升级
    CanUpgrade() { return true; }
    Upgrade() { }
    Clone(newUuid = true) {
        let serialize = JSON.stringify(this);
        if (newUuid)
            serialize["UUID"] = uuid_tool_1.UuidTool.newUuid();
        return JSON.parse(serialize);
    }
    NewInstance() {
        return new this.constructor();
    }
    AddToBot(action) { DungeonManager_1.default.ActionManager.AddToBottom(action); }
    AddToTop(action) { DungeonManager_1.default.ActionManager.AddToTop(action); }
    GetDesc() {
        return StringHelper_1.StringHelper.FormatCardString(this);
    }
    //是否已经升级
    IsUpgraded() {
        return this.UpgradeTimes > 0;
    }
    SuperFlash() {
        this.View.GetTransition("SuperFlash").Play();
    }
    UpgradeName() {
        this.Name += "+";
    }
    UpgradeDamage(amount) {
        this.Damage += amount;
    }
    UpgradeMagic(amount) {
        this.Magic += amount;
    }
    UpgradeBlock(amount) {
        this.Block += amount;
    }
    UpgradeEnergy(amount) {
        this.Energy += amount;
    }
}
exports.default = AbstractCard;
var CardColor;
(function (CardColor) {
    CardColor["RED"] = "red";
    CardColor["GREEN"] = "green";
    CardColor["BLUE"] = "blue";
    CardColor["PURPLE"] = "purple";
    CardColor["COLORLESS"] = "colorless";
    CardColor["CURSE"] = "curse";
})(CardColor = exports.CardColor || (exports.CardColor = {}));
var CardTags;
(function (CardTags) {
    CardTags[CardTags["HEALING"] = 1] = "HEALING";
    CardTags[CardTags["STRIKE"] = 2] = "STRIKE";
    CardTags[CardTags["EMPTY"] = 3] = "EMPTY";
    CardTags[CardTags["STARTER_DEFEND"] = 4] = "STARTER_DEFEND";
    CardTags[CardTags["STARTER_STRIKE"] = 5] = "STARTER_STRIKE";
})(CardTags = exports.CardTags || (exports.CardTags = {}));
var CardType;
(function (CardType) {
    CardType["ATTACK"] = "attack";
    CardType["SKILL"] = "skill";
    CardType["POWER"] = "power";
    CardType["STATUS"] = "status";
    CardType["CURSE"] = "curse";
})(CardType = exports.CardType || (exports.CardType = {}));
var CardRarity;
(function (CardRarity) {
    CardRarity["BASIC"] = "basic";
    CardRarity["SPECIAL"] = "special";
    CardRarity["COMMON"] = "common";
    CardRarity["UNCOMMON"] = "uncommon";
    CardRarity["RARE"] = "rare";
    CardRarity["CURSE"] = "curse";
})(CardRarity = exports.CardRarity || (exports.CardRarity = {}));
var CardTarget;
(function (CardTarget) {
    CardTarget[CardTarget["ENEMY"] = 0] = "ENEMY";
    CardTarget[CardTarget["ALL_ENEMY"] = 1] = "ALL_ENEMY";
    CardTarget[CardTarget["SELF"] = 2] = "SELF";
    CardTarget[CardTarget["NONE"] = 3] = "NONE";
    CardTarget[CardTarget["SELF_AND_ENEMY"] = 4] = "SELF_AND_ENEMY";
    CardTarget[CardTarget["ALL"] = 5] = "ALL";
})(CardTarget = exports.CardTarget || (exports.CardTarget = {}));
//# sourceMappingURL=AbstractCard.js.map