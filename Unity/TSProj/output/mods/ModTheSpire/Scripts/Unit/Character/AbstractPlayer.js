"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractPlayer = void 0;
var CardGroup_1 = require("../../Cards/CardGroup");
var DungeonManager_1 = require("../../DungeonManager");
var OnHurt_1 = require("../../Events/OnHurt");
var OnHurtAfter_1 = require("../../Events/OnHurtAfter");
var OnHurtBefore_1 = require("../../Events/OnHurtBefore");
var AbstractCreature_1 = require("../AbstractCreature");
class AbstractPlayer extends AbstractCreature_1.default {
    constructor(CharacterInfo) {
        super();
        this.CharacterInfo = CharacterInfo;
        //我的牌库
        this.MasterDeck = new CardGroup_1.CardGroup(CardGroup_1.CardGroupType.MASTER_DECK);
        //抽牌堆
        this.DrawPile = new CardGroup_1.CardGroup(CardGroup_1.CardGroupType.DRAW_PILE);
        //手牌
        this.Hand = new CardGroup_1.CardGroup(CardGroup_1.CardGroupType.HAND);
        //弃牌堆
        this.DiscardPile = new CardGroup_1.CardGroup(CardGroup_1.CardGroupType.HAND);
        //手牌
        this.Hand = new CardGroup_1.CardGroup(CardGroup_1.CardGroupType.HAND);
        //手牌
        this.Hand = new CardGroup_1.CardGroup(CardGroup_1.CardGroupType.HAND);
        //药槽
        this.PotionSlots = 3;
        //遗物
        this.Relic = Array();
        this.DisplayObject = CharacterInfo.Loader.Create();
        this.IsPlayer = true;
    }
    HasRelic(Id) {
        return this.Relic.find(t1 => t1.Id == Id);
    }
    Update() {
    }
    Damage(info) {
        DungeonManager_1.default.MessageManager.Send(OnHurtBefore_1.OnHurtBefore.Id, new OnHurtBefore_1.OnHurtBefore(info, this));
        DungeonManager_1.default.MessageManager.Send(OnHurt_1.OnHurt.Id, new OnHurt_1.OnHurt(info, this));
        DungeonManager_1.default.MessageManager.Send(OnHurtAfter_1.OnHurtAfter.Id, new OnHurtAfter_1.OnHurtAfter(info, this));
    }
}
exports.AbstractPlayer = AbstractPlayer;
//# sourceMappingURL=AbstractPlayer.js.map