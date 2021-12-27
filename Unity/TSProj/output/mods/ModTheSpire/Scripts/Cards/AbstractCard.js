"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardTarget = exports.CardRarity = exports.CardType = exports.CardTags = exports.CardColor = void 0;
var uuid_tool_1 = require("uuid-tool");
var DungeonManager_1 = require("../DungeonManager");
var ModTheSpire_Common_1 = require("../Gen/View/ModTheSpire_Common");
var StringHelper_1 = require("../StringHelper");
class AbstractCard {
    constructor() {
        //升级次数
        this.UpgradeTimes = 0;
        //消耗能量
        this.Energy = 0;
        //是否消耗
        this.Exhaust = false;
        //是否虚无
        this.Ethereal = false;
        //卡牌渲染组件
        this.RenderCom = ModTheSpire_Common_1.View_Card.Url;
        //伤害
        this.Damage = 0;
        //格挡
        this.Block = 0;
        //特殊值
        this.Magic = 0;
        this.UUID = uuid_tool_1.UuidTool.newUuid();
    }
    Use(player, monster) { }
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