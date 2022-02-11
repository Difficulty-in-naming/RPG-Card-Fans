"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AttackEffect_1 = require("../../DataDefine/AttackEffect");
const DamageInfo_1 = require("../../DataDefine/DamageInfo");
const DamageType_1 = require("../../DataDefine/DamageType");
const DungeonManager_1 = require("../../DungeonManager");
const FlashAtkImgEffect_1 = require("../../Effect/FlashAtkImgEffect");
const GameSettings_1 = require("../../Game/GameSettings");
const AbstractGameAction_1 = require("../AbstractGameAction");
const WaitAction_1 = require("../Utility/WaitAction");
class LoseHPAction extends AbstractGameAction_1.default {
    target;
    source;
    amount;
    effect;
    Type = AbstractGameAction_1.ActionType.DAMAGE;
    constructor(target, source, amount, effect = AttackEffect_1.AttackEffect.NONE) {
        super();
        this.target = target;
        this.source = source;
        this.amount = amount;
        this.effect = effect;
    }
    async Update() {
        if (this.Duration >= 0.33 && this.target.Health > 0) {
            var hitbox = this.target.DisplayObject.GetHitBox();
            DungeonManager_1.default.EffectManager.Play(new FlashAtkImgEffect_1.FlashAtkImgEffect(hitbox.CX, hitbox.CY, this.effect));
            this.target.Damage(new DamageInfo_1.default(this.source, this.amount, DamageType_1.DamageType.HP_LOSS));
            if (DungeonManager_1.default.Inst.CurrentRoom.Monsters.AreMonstersBasicallyDead()) {
                DungeonManager_1.default.ActionManager.ClearPostCombatActions();
            }
            if (!GameSettings_1.GameSettings.FastMode) {
                this.AddToTop(new WaitAction_1.WaitAction(0.1));
            }
            return true;
        }
        return false;
    }
}
exports.default = LoseHPAction;
//# sourceMappingURL=LoseHPAction.js.map