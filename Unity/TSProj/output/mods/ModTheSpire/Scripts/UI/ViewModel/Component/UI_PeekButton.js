"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UI_HandCardSelectScreen = void 0;
const TimeKit_1 = require("../../../../../../Core/Utils/TimeKit");
const Color_1 = require("../../../DataDefine/Color");
const DungeonManager_1 = require("../../../DungeonManager");
const LightFlareParticleEffect_1 = require("../../../Effect/LightFlareParticleEffect");
const ModTheSpire_Common_1 = require("../../../Gen/View/ModTheSpire_Common");
class UI_HandCardSelectScreen extends ModTheSpire_Common_1.View_PeekButton {
    ButtonView;
    ParticleTimer;
    OnInit(...args) {
        this.ButtonView = this.View;
    }
    OnUpdate() {
        if (this.ButtonView.selected) {
            this.ParticleTimer -= TimeKit_1.TimeKit.DeltaTime;
            if (this.ParticleTimer < 0.0) {
                this.ParticleTimer = 0.2;
                DungeonManager_1.default.EffectManager.Play(new LightFlareParticleEffect_1.LightFlareParticleEffect(this.ButtonView.x, this.ButtonView.y, Color_1.default.Sky));
                DungeonManager_1.default.EffectManager.Play(new LightFlareParticleEffect_1.LightFlareParticleEffect(this.ButtonView.x, this.ButtonView.y, Color_1.default.White));
            }
        }
    }
}
exports.UI_HandCardSelectScreen = UI_HandCardSelectScreen;
//# sourceMappingURL=UI_PeekButton.js.map