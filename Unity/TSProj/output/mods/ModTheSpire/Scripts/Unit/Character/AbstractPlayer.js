"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractPlayer = void 0;
const CardGroup_1 = require("../../Cards/CardGroup");
const DungeonManager_1 = require("../../DungeonManager");
const OnHurtMessage_1 = require("../../Events/OnHurtMessage");
const OnHurtAfterMessage_1 = require("../../Events/OnHurtAfterMessage");
const OnHurtBeforeMessage_1 = require("../../Events/OnHurtBeforeMessage");
const CombatRoom_1 = require("../../Room/CombatRoom");
const AbstractCreature_1 = require("../AbstractCreature");
class AbstractPlayer extends AbstractCreature_1.default {
    CharacterInfo;
    //我的牌库
    MasterDeck = new CardGroup_1.CardGroup(CardGroup_1.CardGroupType.MASTER_DECK);
    //抽牌堆
    DrawPile = new CardGroup_1.CardGroup(CardGroup_1.CardGroupType.DRAW_PILE);
    //手牌
    Hand = new CardGroup_1.CardGroup(CardGroup_1.CardGroupType.HAND);
    //弃牌堆
    DiscardPile = new CardGroup_1.CardGroup(CardGroup_1.CardGroupType.DISCARD_PILE);
    //药
    Potion;
    //药槽
    PotionSlots = 3;
    //遗物
    Relic = Array();
    //荒疫
    Blight = Array();
    constructor(CharacterInfo) {
        super();
        this.CharacterInfo = CharacterInfo;
        this.DisplayObject = CharacterInfo.Loader.Create();
        this.IsPlayer = true;
    }
    HasRelic(Id) {
        return this.Relic.find(t1 => t1.Id == Id);
    }
    GainEnergy(energy) {
        let room = DungeonManager_1.default.Inst.CurrentRoom;
        if (room instanceof CombatRoom_1.CombatRoom) {
            room.CurrentEnergy += energy;
        }
    }
    Update() {
    }
    HasBlight(key) {
        return this.Blight.find((value) => value.Id == key) != null;
    }
    Damage(info) {
        DungeonManager_1.default.MessageManager.Send(OnHurtBeforeMessage_1.OnHurtBeforeMessage.Id, new OnHurtBeforeMessage_1.OnHurtBeforeMessage(info, this));
        DungeonManager_1.default.MessageManager.Send(OnHurtMessage_1.OnHurtMessage.Id, new OnHurtMessage_1.OnHurtMessage(info, this));
        DungeonManager_1.default.MessageManager.Send(OnHurtAfterMessage_1.OnHurtAfterMessage.Id, new OnHurtAfterMessage_1.OnHurtAfterMessage(info, this));
    }
}
exports.AbstractPlayer = AbstractPlayer;
//# sourceMappingURL=AbstractPlayer.js.map