"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReducePowerAction = void 0;
var Async_1 = require("../../../../../Core/Async");
var AbstractGameAction_1 = require("../AbstractGameAction");
class ReducePowerAction extends AbstractGameAction_1.default {
    constructor(Target, Source, power, Amount) {
        super();
        this.Target = Target;
        this.Source = Source;
        this.power = power;
        this.Amount = Amount;
    }
    async Update() {
        if (this.Duration == 0) {
            let reduceMe;
            if (this.power) {
                if (typeof this.power === 'string') {
                    reduceMe = this.Target.GetPower(this.power);
                }
                else {
                    reduceMe = this.power;
                }
                if (reduceMe) {
                    reduceMe.Amount -= this.Amount;
                }
            }
        }
        await Async_1.default.Delay(0.25);
        return true;
    }
}
exports.ReducePowerAction = ReducePowerAction;
//# sourceMappingURL=ReducePowerAction.js.map