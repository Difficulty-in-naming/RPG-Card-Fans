"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TorchSize = exports.InteractableTorchEffect = void 0;
const csharp_1 = require("csharp");
const TimeKit_1 = require("../../../../Core/Utils/TimeKit");
const UIHelper_1 = require("../UI/UIHelper");
const AbstractEffect_1 = require("./AbstractEffect");
const EffectKit_1 = require("./EffectKit");
const LightFlareEffect_1 = require("./LightFlareEffect");
const TorchParticleEffect_1 = require("./TorchParticleEffect");
class InteractableTorchEffect extends AbstractEffect_1.AbstractEffect {
    X;
    Y;
    Size;
    Loader;
    Component;
    Activated = true;
    ParticleTimer = 0;
    constructor(X, Y, Size = TorchSize.M) {
        super();
        this.X = X;
        this.Y = Y;
        this.Size = Size;
        this.Component = UIHelper_1.default.CreateGComponent();
        this.Loader = UIHelper_1.default.CreateGLoader();
        this.Component.AddChild(this.Loader);
        this.Loader.url = "ui://ModTheSpire_Effect/torch";
        this.Component.EnsureBoundsCorrect();
        this.Component.SetPosition(X, Y, 0);
        this.Loader.alpha = 0.4;
        this.Loader.SetScale(Size, Size);
        this.Loader.gameObjectName = Size.toString();
        this.Loader.onClick.Set(() => {
            this.Activated = !this.Activated;
            if (this.Activated)
                csharp_1.MediaManager.PlayVoice("Audio/sound/attack_fire.ogg");
            else
                csharp_1.MediaManager.PlayVoice("Audio/sound/scene_torch_extinguish.ogg");
        });
    }
    Update() {
        if (this.Activated) {
            this.ParticleTimer -= TimeKit_1.TimeKit.DeltaTime;
            if (this.ParticleTimer <= 0) {
                this.ParticleTimer = 0.1;
                switch (this.Size) {
                    case TorchSize.S:
                        EffectKit_1.default.Inst().Play(new TorchParticleEffect_1.TorchParticleEffect(11, 0, this.Component));
                        EffectKit_1.default.Inst().Play(new LightFlareEffect_1.LightFlareEffect(-220, -250, this.Component));
                        break;
                    case TorchSize.M:
                        EffectKit_1.default.Inst().Play(new TorchParticleEffect_1.TorchParticleEffect(13, 10, this.Component));
                        EffectKit_1.default.Inst().Play(new LightFlareEffect_1.LightFlareEffect(-220, -250, this.Component));
                        break;
                    case TorchSize.L:
                        EffectKit_1.default.Inst().Play(new TorchParticleEffect_1.TorchParticleEffect(15, 5, this.Component));
                        EffectKit_1.default.Inst().Play(new LightFlareEffect_1.LightFlareEffect(-220, -250, this.Component));
                        break;
                }
            }
        }
    }
    Dispose() {
        this.Component.Dispose();
    }
}
exports.InteractableTorchEffect = InteractableTorchEffect;
var TorchSize;
(function (TorchSize) {
    TorchSize[TorchSize["S"] = 1.6] = "S";
    TorchSize[TorchSize["M"] = 2] = "M";
    TorchSize[TorchSize["L"] = 2.4] = "L";
})(TorchSize = exports.TorchSize || (exports.TorchSize = {}));
//# sourceMappingURL=InteractableTorchEffect.js.map