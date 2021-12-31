"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GainBlockRandomMonsterAction = void 0;
const Async_1 = require("../../../../../Core/Async");
const AttackEffect_1 = require("../../DataDefine/AttackEffect");
const DungeonManager_1 = require("../../DungeonManager");
const FlashAtkImgEffect_1 = require("../../Effect/FlashAtkImgEffect");
const AbstractGameAction_1 = require("../AbstractGameAction");
class GainBlockRandomMonsterAction extends AbstractGameAction_1.default {
    Source;
    Amount;
    Type = AbstractGameAction_1.ActionType.BLOCK;
    constructor(Source, Amount) {
        super();
        this.Source = Source;
        this.Amount = Amount;
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