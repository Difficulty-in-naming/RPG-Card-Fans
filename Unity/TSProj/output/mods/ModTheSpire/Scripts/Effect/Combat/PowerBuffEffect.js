"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerBuffEffect = void 0;
const ModTheSpire_Effect_1 = require("../../Gen/View/ModTheSpire_Effect");
const AbstractEffect_1 = require("../AbstractEffect");
class PowerBuffEffect extends AbstractEffect_1.AbstractEffect {
    X;
    Y;
    Msg;
    constructor(X, Y, Msg) {
        super();
        this.X = X;
        this.Y = Y;
        this.Msg = Msg;
        let effect = ModTheSpire_Effect_1.View_PowerBuffEffect.CreateInstance();
        effect.text = Msg;
        effect.SetPosition(X, Y, 0);
        let transition = effect.GetTransition("t0");
        transition.Play(1, 0, () => {
            this.IsDone = true;
        });
    }
}
exports.PowerBuffEffect = PowerBuffEffect;
//# sourceMappingURL=PowerBuffEffect.js.map