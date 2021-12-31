"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractPlayer = void 0;
const CardGroup_1 = require("../../Cards/CardGroup");
const DungeonManager_1 = require("../../DungeonManager");
const OnHurt_1 = require("../../Events/OnHurt");
const OnHurtAfter_1 = require("../../Events/OnHurtAfter");
const OnHurtBefore_1 = require("../../Events/OnHurtBefore");
const AbstractCreature_1 = require("../AbstractCreature");
class AbstractPlayer extends AbstractCreature_1.default {
    CharacterInfo;
    //进阶等级
    AdvanceLevel;
    //我的牌库
    MasterDeck = new CardGroup_1.CardGroup(CardGroup_1.CardGroupType.MASTER_DECK);
    //抽牌堆
    DrawPile = new CardGroup_1.CardGroup(CardGroup_1.CardGroupType.DRAW_PILE);
    //手牌
    Hand = new CardGroup_1.CardGroup(CardGroup_1.CardGroupType.HAND);
    //药
    Potion;
    //药槽
    PotionSlots = 3;
    //遗物
    Relic = Array();
    constructor(CharacterInfo) {
        super();
        this.CharacterInfo = CharacterInfo;
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