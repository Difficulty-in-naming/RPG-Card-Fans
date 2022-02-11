"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightFlareParticleEffect = void 0;
const Mathf_1 = require("../../../../Core/Module/Math/Mathf");
const TimeKit_1 = require("../../../../Core/Utils/TimeKit");
const tween_1 = require("../../../../ThirdParty/@tweenjs/tween");
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
    Loader;
    constructor(X, Y, Color) {
        super();
        this.X = X;
        this.Y = Y;
        this.Color = Color;
        this.Speed = this.SpeedStart = Mathf_1.Mathf.RandomRange(200, 300);
        Color.A = 0;
        this.order = EffectKit_1.EffectOrder.BOT;
        this.Rotation = Mathf_1.Mathf.Random() * 360;
        this.SpeedTarget = Mathf_1.Mathf.RandomRange(0.1, 0.5);
        this.WaveIntensity = Mathf_1.Mathf.RandomRange(5, 10);
        this.WaveSpeed = Mathf_1.Mathf.RandomRange(-20, 20);
        this.Loader = UIHelper_1.default.CreateGLoader();
        this.Loader.url = "ui://ModTheSpire_Effect/blurDot";
        let scale = Mathf_1.Mathf.RandomRange(0.2, 1);
        this.Loader.SetScale(scale, scale);
        this.Duration = Mathf_1.Mathf.RandomRange(0.5, 1.1);
        let t = new tween_1.default.Tween({ a: this.SpeedStart }).to({ a: this.SpeedTarget }, this.Duration).easing(tween_1.default.Easing.Circular.In)
            .onUpdate(object => {
            this.X = Mathf_1.Mathf.CosDeg(this.Rotation) * (object.a * TimeKit_1.TimeKit.DeltaTime);
            this.Y = Mathf_1.Mathf.SinDeg(this.Rotation) * (object.a * TimeKit_1.TimeKit.DeltaTime);
            this.Loader.SetPosition(this.X, this.Y, 0);
            this.Rotation += Mathf_1.Mathf.Cos(this.Duration * this.WaveSpeed) * this.WaveIntensity;
            this.Loader.rotation = this.Rotation;
        }).start();
        let t2 = new tween_1.default.Tween({ a: 1 }).to({ a: 0 }, 0.5).easing(tween_1.default.Easing.Sinusoidal.InOut)
            .onUpdate(object => {
            this.Loader.alpha = object.a;
            this.Loader.Dispose();
            this.IsDone = true;
        }).delay(this.Duration - 0.5).start();
    }
}
exports.LightFlareParticleEffect = LightFlareParticleEffect;
//# sourceMappingURL=LightFlareParticleEffect.js.map