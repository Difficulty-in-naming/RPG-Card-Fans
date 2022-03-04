"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HpBlockBrokenEffect = void 0;
const AbstractEffect_1 = require("./AbstractEffect");
const ModTheSpire_Effect_1 = require("../Gen/View/ModTheSpire_Effect");
class HpBlockBrokenEffect extends AbstractEffect_1.AbstractEffect {
    _X;
    _Y;
    Com;
    constructor(_X, _Y) {
        super();
        this._X = _X;
        this._Y = _Y;
        this.Com = ModTheSpire_Effect_1.View_HpBlockBrokenEffect.CreateInstance();
        this.Com.SetPosition(_X, _Y, 0);
    }
}
exports.HpBlockBrokenEffect = HpBlockBrokenEffect;
//# sourceMappingURL=HpBlockBrokenEffect.js.map