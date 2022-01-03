"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerDebuffEffect = void 0;
var ModTheSpire_Effect_1 = require("../../Gen/View/ModTheSpire_Effect");
var AbstractEffect_1 = require("../AbstractEffect");
class PowerDebuffEffect extends AbstractEffect_1.AbstractEffect {
    constructor(X, Y, Msg) {
        super();
        this.X = X;
        this.Y = Y;
        this.Msg = Msg;
        let effect = ModTheSpire_Effect_1.View_PowerDebuffEffect.CreateInstance();
        effect.text = Msg;
        effect.SetPosition(X, Y, 0);
        let transition = effect.GetTransition("t0");
        transition.Play(1, 0, () => {
            this.IsDone = true;
        });
    }
}
exports.PowerDebuffEffect = PowerDebuffEffect;
//# sourceMappingURL=PowerDeBuffEffect.js.map