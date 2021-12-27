"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntenseZoomEffect = void 0;
var Color_1 = require("../../DataDefine/Color");
var DungeonManager_1 = require("../../DungeonManager");
var AbstractEffect_1 = require("../AbstractEffect");
var BorderFlashEffect_1 = require("./BorderFlashEffect");
class IntenseZoomEffect extends AbstractEffect_1.AbstractEffect {
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