"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightFlareParticleEffect = void 0;
const Mathf_1 = require("../../../../Core/Module/Math/Mathf");
const UIHelper_1 = require("../UI/UIHelper");
const AbstractEffect_1 = require("./AbstractEffect");
const EffectKit_1 = require("./EffectKit");
class LightFlareParticleEffect extends AbstractEffect_1.AbstractEffect {
    X;
    Y;
    Color;
    Speed;
    SpeedStart;
    SpeedTarget;
    Rotation;
    WaveIntensity;
    WaveSpeed;
    Scale;
    Loader;
    constructor(X, Y, Color) {
        super();
        this.X = X;
        this.Y = Y;
        this.Color = Color;
        this.Duration = 2;
        this.Speed = this.SpeedStart = Mathf_1.Mathf.RandomRange(200, 300);
        Color.A = 0;
        this.order = EffectKit_1.EffectOrder.TOP;
        this.Rotation = Mathf_1.Mathf.Random() * 360;
        this.SpeedTarget = Mathf_1.Mathf.RandomRange(0.1, 0.5);
        this.WaveIntensity = Mathf_1.Mathf.RandomRange(5, 10);
        this.WaveSpeed = Mathf_1.Mathf.RandomRange(-20, 20);
        this.Scale = Mathf_1.Mathf.RandomRange(0.2, 1);
        this.Loader = UIHelper_1.default.CreateGLoader();
        //Todo this.Loader.url = 
    }
    Update() {
    }
}
exports.LightFlareParticleEffect = LightFlareParticleEffect;
//# sourceMappingURL=PlayerTurnEffect.js.map