"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightFlareEffect = void 0;
const csharp_1 = require("csharp");
const Mathf_1 = require("../../../../Core/Module/Math/Mathf");
const Color_1 = require("../DataDefine/Color");
const UIHelper_1 = require("../UI/UIHelper");
const AbstractEffect_1 = require("./AbstractEffect");
class LightFlareEffect extends AbstractEffect_1.AbstractEffect {
    X;
    Y;
    Loader;
    Interval;
    static RenderGreen;
    constructor(X, Y, parent = null) {
        super();
        this.X = X;
        this.Y = Y;
        this.Loader = UIHelper_1.default.CreateGLoader();
        if (parent)
            parent.AddChildAt(this.Loader, 0);
        this.Interval = Mathf_1.Mathf.RandomRange(2, 3);
        this.Loader.url = "ui://ModTheSpire_Effect/lightFlare" + Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(1, 3));
        this.Loader.SetPivot(0.5, 0.5, true);
        this.Loader.SetPosition(X, Y, 0);
        let scale = Mathf_1.Mathf.RandomRange(7, 10.5);
        this.Loader.SetScale(scale, scale);
        this.Loader.color = LightFlareEffect.RenderGreen ?
            new Color_1.default(Mathf_1.Mathf.RandomRange(153, 255), Mathf_1.Mathf.RandomRange(77, 153), Mathf_1.Mathf.RandomRange(0, 77)).UnityColor :
            new Color_1.default(Mathf_1.Mathf.RandomRange(26, 77), Mathf_1.Mathf.RandomRange(128, 230), Mathf_1.Mathf.RandomRange(26, 77)).UnityColor;
        this.Loader.alpha = 0.1;
        this.Loader.TweenFade(0, this.Interval).SetEase(csharp_1.FairyGUI.EaseType.SineInOut);
        this.Loader.blendMode = csharp_1.FairyGUI.BlendMode.Add;
    }
    Update() {
        if (this.Duration >= this.Interval) {
            this.IsDone = true;
            this.Loader.Dispose();
        }
    }
}
exports.LightFlareEffect = LightFlareEffect;
//# sourceMappingURL=LightFlareEffect.js.map