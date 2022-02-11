"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebParticleEffect = void 0;
const ModTheSpire_Effect_1 = require("../../Gen/View/ModTheSpire_Effect");
const AbstractEffect_1 = require("../AbstractEffect");
class WebParticleEffect extends AbstractEffect_1.AbstractEffect {
    _X;
    _Y;
    Loader;
    constructor(_X, _Y) {
        super();
        this._X = _X;
        this._Y = _Y;
        this.Loader = ModTheSpire_Effect_1.View_WebParticleEffect.CreateInstance();
        this.Loader.GetTransition("t0").Play();
        this.Loader.SetPosition(_X, _Y, 0);
    }
    Update() {
        super.Update();
        if (this.Duration >= 1) {
            this.Loader.Dispose();
            this.IsDone = true;
        }
    }
}
exports.WebParticleEffect = WebParticleEffect;
//# sourceMappingURL=WebParticleEffect.js.map