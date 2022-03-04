"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TorchParticleEffect = void 0;
const csharp_1 = require("csharp");
const Mathf_1 = require("../../../../Core/Module/Math/Mathf");
const TimeKit_1 = require("../../../../Core/Utils/TimeKit");
const Color_1 = require("../DataDefine/Color");
const UIHelper_1 = require("../UI/UIHelper");
const AbstractEffect_1 = require("./AbstractEffect");
class TorchParticleEffect extends AbstractEffect_1.AbstractEffect {
    X;
    Y;
    Interval;
    Loader;
    Vy;
    static RenderGreen;
    constructor(X, Y, parent = null) {
        super();
        this.X = X;
        this.Y = Y;
        this.Interval = Mathf_1.Mathf.RandomRange(1.5, 3);
        this.Loader = UIHelper_1.default.CreateGLoader();
        if (parent)
            parent.AddChildAt(this.Loader, 0);
        this.Loader.url = `ui://ModTheSpire_Effect/fire${Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(1, 4))}`;
        this.Loader.SetPivot(0.5, 0.5, true);
        this.Loader.SetPosition(X - Mathf_1.Mathf.RandomRange(-3, 3), Y, 0);
        this.Loader.autoSize = true;
        let scale = Mathf_1.Mathf.RandomRange(1, 2);
        this.Loader.SetScale(scale, scale);
        this.Vy = Mathf_1.Mathf.RandomRange(-100, 0);
        this.Loader.rotation = Mathf_1.Mathf.RandomRange(-20, 20);
        this.Loader.color = TorchParticleEffect.RenderGreen ?
            new Color_1.default(Mathf_1.Mathf.RandomRange(153, 255), Mathf_1.Mathf.RandomRange(77, 153), Mathf_1.Mathf.RandomRange(0, 77)).UnityColor :
            new Color_1.default(Mathf_1.Mathf.RandomRange(26, 77), Mathf_1.Mathf.RandomRange(128, 230), Mathf_1.Mathf.RandomRange(26, 77)).UnityColor;
        this.Loader.TweenFade(0, this.Interval).SetEase(csharp_1.FairyGUI.EaseType.SineInOut);
    }
    Update() {
        super.Update();
        let y = this.Loader.y + this.Vy * TimeKit_1.TimeKit.DeltaTime;
        this.Loader.y = y;
        if (this.Duration >= this.Interval) {
            this.IsDone = true;
            this.Loader.Dispose();
        }
    }
}
exports.TorchParticleEffect = TorchParticleEffect;
//# sourceMappingURL=TorchParticleEffect.js.map