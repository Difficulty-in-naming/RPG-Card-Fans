"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HpBlockBrokenEffect = void 0;
var AbstractEffect_1 = require("../Effect/AbstractEffect");
var ModTheSpire_Effect_1 = require("../Gen/View/ModTheSpire_Effect");
class HpBlockBrokenEffect extends AbstractEffect_1.AbstractEffect {
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