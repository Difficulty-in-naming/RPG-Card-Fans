"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerExpireTextEffect = void 0;
var Mathf_1 = require("../../../../../Core/Module/Math/Mathf");
var Color_1 = require("../../DataDefine/Color");
var DungeonManager_1 = require("../../DungeonManager");
var ModTheSpire_Effect_1 = require("../../Gen/View/ModTheSpire_Effect");
var LocalSettings_1 = require("../../Saves/LocalSettings");
var AbstractEffect_1 = require("../AbstractEffect");
var FlyingSpikeEffect_1 = require("./FlyingSpikeEffect");
class PowerExpireTextEffect extends AbstractEffect_1.AbstractEffect {
    constructor(X, Y, msg, icon) {
        super();
        this.X = X;
        this.Y = Y;
        this.msg = msg;
        this.icon = icon;
        this.Interval = 2;
        this.SpikeEffectTriggered = false;
        this.TextEffect = ModTheSpire_Effect_1.View_PowerExpireTextEffect.CreateInstance();
        this.TextEffect.GetTransition("t0").Play();
    }
    Update() {
        super.Update();
        if (this.Duration >= this.Interval * 0.2 && !LocalSettings_1.LocalSettings.Inst().DisableEffects && !this.SpikeEffectTriggered) {
            this.SpikeEffectTriggered = true;
            for (let i = 0; i < 10; i++) {
                DungeonManager_1.default.EffectManager.Play(new FlyingSpikeEffect_1.FlyingSpikeEffect(this.TextEffect, Mathf_1.Mathf.RandomRange(-20, 0) + 64, Mathf_1.Mathf.RandomRange(20, 108), 0, Mathf_1.Mathf.RandomRange(-80, -120), undefined, Color_1.default.BlueText.Clone()));
            }
            for (let i = 0; i < 10; i++) {
                DungeonManager_1.default.EffectManager.Play(new FlyingSpikeEffect_1.FlyingSpikeEffect(this.TextEffect, Mathf_1.Mathf.RandomRange(20, 0) + 64, Mathf_1.Mathf.RandomRange(20, 108), 0, Mathf_1.Mathf.RandomRange(80, 120), undefined, Color_1.default.BlueText.Clone()));
            }
        }
        if (this.Duration >= this.Interval) {
            this.IsDone = true;
            return;
        }
    }
}
exports.PowerExpireTextEffect = PowerExpireTextEffect;
//# sourceMappingURL=PowerExpireTextEffect.js.map