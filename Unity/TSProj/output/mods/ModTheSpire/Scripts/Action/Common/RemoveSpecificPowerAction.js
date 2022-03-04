"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveSpecificPowerAction = void 0;
const Async_1 = require("../../../../../Core/Async");
const DungeonManager_1 = require("../../DungeonManager");
const PowerExpireTextEffect_1 = require("../../Effect/Combat/PowerExpireTextEffect");
const AbstractGameAction_1 = require("../AbstractGameAction");
class RemoveSpecificPowerAction extends AbstractGameAction_1.default {
    Target;
    Source;
    power;
    constructor(Target, Source, power) {
        super();
        this.Target = Target;
        this.Source = Source;
        this.power = power;
    }
    async Update() {
        if (this.Target.IsDeadOrEscaped)
            return true;
        let removeMe;
        if (typeof this.power === 'string') {
            removeMe = this.Target.GetPower(this.power);
        }
        else {
            removeMe = this.power;
            if (!this.Target.GetPower(removeMe?.Id)) {
                removeMe = undefined;
            }
        }
        if (removeMe) {
            DungeonManager_1.default.EffectManager.Play(new PowerExpireTextEffect_1.PowerExpireTextEffect(this.Target.Bounds.x, this.Target.Bounds.height, removeMe.Name, removeMe.Icon));
            this.Target.RemovePower(removeMe.Id);
            await Async_1.default.Delay(100);
            return true;
        }
        else {
            return true;
        }
    }
}
exports.RemoveSpecificPowerAction = RemoveSpecificPowerAction;
//# sourceMappingURL=RemoveSpecificPowerAction.js.map