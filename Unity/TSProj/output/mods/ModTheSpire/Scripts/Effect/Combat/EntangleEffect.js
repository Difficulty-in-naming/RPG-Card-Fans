"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntangleEffect = void 0;
const ModTheSpire_Effect_1 = require("../../Gen/View/ModTheSpire_Effect");
const AbstractEffect_1 = require("../AbstractEffect");
class EntangleEffect extends AbstractEffect_1.AbstractEffect {
    _X;
    _Y;
    _TargetX;
    _TargetY;
    Loader;
    constructor(_X, _Y, _TargetX, _TargetY) {
        super();
        this._X = _X;
        this._Y = _Y;
        this._TargetX = _TargetX;
        this._TargetY = _TargetY;
        this.Loader = ModTheSpire_Effect_1.View_EntangleEffect.CreateInstance();
        this.Loader.SetPosition(_X, _Y, 0);
        let transition = this.Loader.GetTransition("t0");
        transition.SetValue("XY", _TargetX, _TargetY);
        transition.Play();
    }
    Update() {
        super.Update();
        if (this.Duration >= 1) {
            this.IsDone = true;
            this.Loader.Dispose();
        }
    }
}
exports.EntangleEffect = EntangleEffect;
//# sourceMappingURL=EntangleEffect.js.map