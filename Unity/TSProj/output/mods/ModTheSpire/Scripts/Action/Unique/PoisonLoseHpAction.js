"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoisonLoseHpAction = void 0;
var Color_1 = require("../../DataDefine/Color");
var DamageInfo_1 = require("../../DataDefine/DamageInfo");
var DamageType_1 = require("../../DataDefine/DamageType");
var DungeonManager_1 = require("../../DungeonManager");
var EffectKit_1 = require("../../Effect/EffectKit");
var FlashAtkImgEffect_1 = require("../../Effect/FlashAtkImgEffect");
var NotifyPowerDescerptionChanged_1 = require("../../Events/NotifyPowerDescerptionChanged");
var PoisonPower_1 = require("../../Power/PoisonPower");
var AbstractRoom_1 = require("../../Room/AbstractRoom");
var AbstractGameAction_1 = require("../AbstractGameAction");
var WaitAction_1 = require("../Utility/WaitAction");
class PoisonLoseHpAction extends AbstractGameAction_1.default {
    constructor(Target, Source, Amount, Effect) {
        super();
        this.Target = Target;
        this.Source = Source;
        this.Amount = Amount;
        this.Effect = Effect;
    }
    async Update() {
        if (DungeonManager_1.default.Inst.CurrentRoom.Phase != AbstractRoom_1.RoomPhase.Combat) {
            return true;
        }
        if (this.Duration == 0 && this.Target.Health > 0) {
            EffectKit_1.default.Inst().Play(new FlashAtkImgEffect_1.FlashAtkImgEffect(this.Target.X, this.Target.Y, this.Effect));
        }
        if (this.Duration >= 0.33) {
            if (this.Target.Health > 0) {
                this.Target.TintEffect.From = Color_1.default.Chartreuse.Clone();
                this.Target.TintEffect.ChangeColor(Color_1.default.White.Clone());
                this.Target.Damage(new DamageInfo_1.default(this.Source, this.Amount, DamageType_1.DamageType.HP_LOSS));
            }
            let power = this.Target.GetPower(PoisonPower_1.PoisonPower.PowerID);
            if (power) {
                power.Amount -= 1;
                if (power.Amount == 0) {
                    this.Target.RemovePower(PoisonPower_1.PoisonPower.PowerID);
                }
                else {
                    DungeonManager_1.default.MessageManager.Send(NotifyPowerDescerptionChanged_1.NotifyPowerDescerptionChanged.Id, new NotifyPowerDescerptionChanged_1.NotifyPowerDescerptionChanged(power.Id));
                }
            }
            this.AddToTop(new WaitAction_1.WaitAction(100));
        }
    }
}
exports.PoisonLoseHpAction = PoisonLoseHpAction;
//# sourceMappingURL=PoisonLoseHpAction.js.map