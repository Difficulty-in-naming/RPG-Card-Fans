"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealEffect = void 0;
const Mathf_1 = require("../../../../../Core/Module/Math/Mathf");
const AbstractEffect_1 = require("../AbstractEffect");
const SoundMaster_1 = require("../../Audio/SoundMaster");
const DungeonManager_1 = require("../../DungeonManager");
const HealNumberEffect_1 = require("./HealNumberEffect");
const HealVerticalLineEffect_1 = require("./HealVerticalLineEffect");
class HealEffect extends AbstractEffect_1.AbstractEffect {
    Effect;
    X_JITTER = 120.0;
    Y_JITTER = 120.0;
    OFFSET_Y = -50.0;
    constructor(X, Y, Amount) {
        super();
        let roll = Mathf_1.Mathf.RandomRange(0, 3);
        if (roll == 0) {
            SoundMaster_1.SoundMaster.PlayVoice("HEAL_1");
        }
        else if (roll == 1) {
            SoundMaster_1.SoundMaster.PlayVoice("HEAL_2");
        }
        else {
            SoundMaster_1.SoundMaster.PlayVoice("HEAL_3");
        }
        DungeonManager_1.default.EffectManager.Play(new HealNumberEffect_1.HealNumberEffect(X, Y, Amount));
        for (let i = 0; i < 18; ++i) {
            DungeonManager_1.default.EffectManager.Play(new HealVerticalLineEffect_1.HealVerticalLineEffect(X + Mathf_1.Mathf.RandomRange(-this.X_JITTER * 1.5, this.X_JITTER * 1.5), Y + this.OFFSET_Y + Mathf_1.Mathf.RandomRange(-this.Y_JITTER, this.Y_JITTER)));
        }
    }
}
exports.HealEffect = HealEffect;
//# sourceMappingURL=HealEffect.js.map