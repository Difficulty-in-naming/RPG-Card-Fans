"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmokeBombEffect = void 0;
var SoundMaster_1 = require("../../Audio/SoundMaster");
var DungeonManager_1 = require("../../DungeonManager");
var AbstractEffect_1 = require("../AbstractEffect");
var SmokeBlurEffect_1 = require("./SmokeBlurEffect");
class SmokeBombEffect extends AbstractEffect_1.AbstractEffect {
    constructor(X, Y) {
        super();
        this.X = X;
        this.Y = Y;
    }
    Update() {
        super.Update();
        if (this.Duration == 0) {
            SoundMaster_1.SoundMaster.PlayVoice("ATTACK_WHIFF_2");
            for (let i = 0; i < 90; i++) {
                DungeonManager_1.default.EffectManager.Play(new SmokeBlurEffect_1.SmokeBlurEffect(this.X, this.Y));
            }
        }
        if (this.Duration >= 0.2) {
            SoundMaster_1.SoundMaster.PlayVoice("ATTACK_WHIFF_2");
            this.IsDone = true;
        }
    }
}
exports.SmokeBombEffect = SmokeBombEffect;
//# sourceMappingURL=SmokeBombEffect.js.map