"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebEffect = void 0;
const TimeKit_1 = require("../../../../../Core/Utils/TimeKit");
const DungeonManager_1 = require("../../DungeonManager");
const AbstractEffect_1 = require("../AbstractEffect");
const WebLineEffect_1 = require("./WebLineEffect");
const WebParticleEffect_1 = require("./WebParticleEffect");
class WebEffect extends AbstractEffect_1.AbstractEffect {
    _Target;
    _X;
    _Y;
    _Timer = 0.1;
    _Count = 0;
    constructor(_Target, _X, _Y) {
        super();
        this._Target = _Target;
        this._X = _X;
        this._Y = _Y;
    }
    Update() {
        this._Timer -= TimeKit_1.TimeKit.DeltaTime;
        if (this._Timer < 0) {
            this._Timer += 0.1;
            switch (this._Count) {
                case 0: {
                    DungeonManager_1.default.EffectManager.Play(new WebLineEffect_1.WebLineEffect(this._X, this._Y, true));
                    DungeonManager_1.default.EffectManager.Play(new WebLineEffect_1.WebLineEffect(this._X, this._Y, true));
                    DungeonManager_1.default.EffectManager.Play(new WebParticleEffect_1.WebParticleEffect(this._X - 90, this._Y - 10));
                    break;
                }
                case 1: {
                    DungeonManager_1.default.EffectManager.Play(new WebLineEffect_1.WebLineEffect(this._X, this._Y, true));
                    DungeonManager_1.default.EffectManager.Play(new WebLineEffect_1.WebLineEffect(this._X, this._Y, true));
                    break;
                }
                case 2: {
                    DungeonManager_1.default.EffectManager.Play(new WebLineEffect_1.WebLineEffect(this._X, this._Y, true));
                    DungeonManager_1.default.EffectManager.Play(new WebLineEffect_1.WebLineEffect(this._X, this._Y, true));
                    DungeonManager_1.default.EffectManager.Play(new WebParticleEffect_1.WebParticleEffect(this._X + 70, this._Y + 80));
                    break;
                }
                case 4: {
                    DungeonManager_1.default.EffectManager.Play(new WebParticleEffect_1.WebParticleEffect(this._X + 30, this._Y - 100));
                    break;
                }
            }
            this._Count++;
        }
        if (this.Duration >= 1) {
            this.IsDone = true;
            return;
        }
    }
}
exports.WebEffect = WebEffect;
//# sourceMappingURL=WebEffect.js.map