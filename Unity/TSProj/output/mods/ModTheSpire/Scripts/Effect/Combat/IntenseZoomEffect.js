"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntenseZoomEffect = void 0;
const Color_1 = require("../../DataDefine/Color");
const DungeonManager_1 = require("../../DungeonManager");
const AbstractEffect_1 = require("../AbstractEffect");
const BorderFlashEffect_1 = require("./BorderFlashEffect");
class IntenseZoomEffect extends AbstractEffect_1.AbstractEffect {
    _X;
    _Y;
    _IsBlack;
    constructor(_X, _Y, _IsBlack) {
        super();
        this._X = _X;
        this._Y = _Y;
        this._IsBlack = _IsBlack;
    }
    Update() {
        super.Update();
        DungeonManager_1.default.EffectManager.Play(new BorderFlashEffect_1.BorderFlashEffect(this._IsBlack ? Color_1.default.Black : Color_1.default.Gold, this._IsBlack));
        for (let i = 0; i < 10; i++) {
            DungeonManager_1.default.EffectManager.Play(new IntenseZoomEffect(this._X, this._Y, this._IsBlack));
        }
        this.IsDone = true;
    }
}
exports.IntenseZoomEffect = IntenseZoomEffect;
//# sourceMappingURL=IntenseZoomEffect.js.map