"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoisonLoseHpAction = void 0;
const Color_1 = require("../../DataDefine/Color");
const DamageInfo_1 = require("../../DataDefine/DamageInfo");
const DamageType_1 = require("../../DataDefine/DamageType");
const DungeonManager_1 = require("../../DungeonManager");
const EffectKit_1 = require("../../Effect/EffectKit");
const FlashAtkImgEffect_1 = require("../../Effect/FlashAtkImgEffect");
const NotifyPowerDescerptionChangedMessage_1 = require("../../Events/NotifyPowerDescerptionChangedMessage");
const PoisonPower_1 = require("../../Power/PoisonPower");
const AbstractRoom_1 = require("../../Room/AbstractRoom");
const AbstractGameAction_1 = require("../AbstractGameAction");
const WaitAction_1 = require("../Utility/WaitAction");
class PoisonLoseHpAction extends AbstractGameAction_1.default {
    Target;
    Source;
    Amount;
    Effect;
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
                    DungeonManager_1.default.MessageManager.Send(NotifyPowerDescerptionChangedMessage_1.NotifyPowerDescerptionChangedMessage.Id, new NotifyPowerDescerptionChangedMessage_1.NotifyPowerDescerptionChangedMessage(power.Id));
                }
            }
            this.AddToTop(new WaitAction_1.WaitAction(100));
        }
    }
}
exports.PoisonLoseHpAction = PoisonLoseHpAction;
//# sourceMappingURL=PoisonLoseHpAction.js.map