"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GainBlockRandomMonsterAction = void 0;
var Async_1 = require("../../../../../Core/Async");
var AttackEffect_1 = require("../../DataDefine/AttackEffect");
var DungeonManager_1 = require("../../DungeonManager");
var FlashAtkImgEffect_1 = require("../../Effect/FlashAtkImgEffect");
var AbstractGameAction_1 = require("../AbstractGameAction");
class GainBlockRandomMonsterAction extends AbstractGameAction_1.default {
    constructor(Source, Amount) {
        super();
        this.Source = Source;
        this.Amount = Amount;
        this.Type = AbstractGameAction_1.ActionType.BLOCK;
    }
    async Update() {
        if (this.Duration == 0) {
            let target = DungeonManager_1.default.Inst.CurrentRoom.Monsters.Random();
            if (target) {
                DungeonManager_1.default.EffectManager.Play(new FlashAtkImgEffect_1.FlashAtkImgEffect(target.X, target.Y, AttackEffect_1.AttackEffect.SHIELD));
                target.Block += this.Amount;
            }
        }
        await Async_1.default.Delay(500);
        return true;
    }
}
exports.GainBlockRandomMonsterAction = GainBlockRandomMonsterAction;
//# sourceMappingURL=GainBlockRandomMonsterAction.js.map