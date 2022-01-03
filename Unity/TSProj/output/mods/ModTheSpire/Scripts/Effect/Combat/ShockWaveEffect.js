"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShockWaveType = exports.ShockWaveEffect = void 0;
var csharp_1 = require("csharp");
var Mathf_1 = require("../../../../../Core/Module/Math/Mathf");
var DungeonManager_1 = require("../../DungeonManager");
var AbstractEffect_1 = require("../AbstractEffect");
var ShakeScreen_1 = require("../ShakeScreen");
var BlurWaveChaoticEffect_1 = require("./BlurWaveChaoticEffect");
var BlurWaveEffect_1 = require("./BlurWaveEffect");
class ShockWaveEffect extends AbstractEffect_1.AbstractEffect {
    constructor(_X, _Y, _Color, _ShockWaveType) {
        super();
        this._X = _X;
        this._Y = _Y;
        this._Color = _Color;
        this._ShockWaveType = _ShockWaveType;
    }
    Update() {
        super.Update();
        let speed = Mathf_1.Mathf.RandomRange(1000, 1200);
        switch (this._ShockWaveType) {
            case ShockWaveType.ADDITIVE: {
                for (let i = 0; i < 40; i++) {
                    DungeonManager_1.default.EffectManager.Play(new BlurWaveEffect_1.BlurWaveEffect(this._X, this._Y, this._Color, speed, csharp_1.FairyGUI.BlendMode.Add));
                }
                break;
            }
            case ShockWaveType.NORMAL: {
                for (let i = 0; i < 40; i++) {
                    DungeonManager_1.default.EffectManager.Play(new BlurWaveEffect_1.BlurWaveEffect(this._X, this._Y, this._Color, speed, csharp_1.FairyGUI.BlendMode.Normal));
                }
                break;
            }
            case ShockWaveType.CHAOTIC: {
                DungeonManager_1.default.EffectManager.Play(new ShakeScreen_1.ShakeScreen(ShakeScreen_1.ShakeIntensity.HIGH, ShakeScreen_1.ShakeDur.SHORT, { Vertical: false, Horizontal: true }));
                for (let i = 0; i < 40; i++) {
                    DungeonManager_1.default.EffectManager.Play(new BlurWaveChaoticEffect_1.BlurWaveChaoticEffect(this._X, this._Y, this._Color, speed));
                }
            }
        }
    }
}
exports.ShockWaveEffect = ShockWaveEffect;
var ShockWaveType;
(function (ShockWaveType) {
    ShockWaveType[ShockWaveType["ADDITIVE"] = 0] = "ADDITIVE";
    ShockWaveType[ShockWaveType["NORMAL"] = 1] = "NORMAL";
    ShockWaveType[ShockWaveType["CHAOTIC"] = 2] = "CHAOTIC";
})(ShockWaveType = exports.ShockWaveType || (exports.ShockWaveType = {}));
//# sourceMappingURL=ShockWaveEffect.js.map