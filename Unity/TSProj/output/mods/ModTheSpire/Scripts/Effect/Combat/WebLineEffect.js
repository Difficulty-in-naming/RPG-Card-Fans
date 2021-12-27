"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebLineEffect = void 0;
var csharp_1 = require("csharp");
var Mathf_1 = require("../../../../../Core/Module/Math/Mathf");
var Color_1 = require("../../DataDefine/Color");
var FileHelper_1 = require("../../FileHelper");
var UIHelper_1 = require("../../UI/UIHelper");
var AbstractEffect_1 = require("../AbstractEffect");
class WebLineEffect extends AbstractEffect_1.AbstractEffect {
    constructor(_X, _Y, facingLeft) {
        super();
        this._X = _X;
        this._Y = _Y;
        this.Loader = UIHelper_1.default.CreateGLoader();
        this.Loader.url = FileHelper_1.default.FormatPath("Vfx/horizontal_line.png");
        this.Loader.SetPosition(_X + Mathf_1.Mathf.RandomRange(-20, 20), _Y * 128 + Mathf_1.Mathf.RandomRange(-10, 10), 0);
        this.Loader.rotation = Mathf_1.Mathf.RandomRange(170, 185);
        if (!facingLeft)
            this.Loader.rotation += 180;
        this._Scale = Mathf_1.Mathf.RandomRange(0.8, 1);
        this.Loader.scaleY = this._Scale;
        let g = Mathf_1.Mathf.RandomRange(153, 230);
        let color = new Color_1.default(g, g, g + 26);
        this.Loader.alpha = 0;
        this.Loader.color = color.UnityColor();
        this.Loader.TweenFade(0.8, 0.5).SetEase(csharp_1.FairyGUI.EaseType.SineInOut);
        this.Loader.TweenFade(0.01, 0.5).SetEase(csharp_1.FairyGUI.EaseType.QuartOut).SetDelay(0.5);
        this.Loader.blendMode = csharp_1.FairyGUI.BlendMode.Add;
    }
    Update() {
        if (this.Duration >= 1) {
            this.Loader.Dispose();
            this.IsDone = true;
            return;
        }
        this.Loader.scaleX = this._Scale * 2 * Mathf_1.Mathf.Cos(1 - this.Duration * 16) / 4 + 1.5;
        super.Update();
    }
}
exports.WebLineEffect = WebLineEffect;
//# sourceMappingURL=WebLineEffect.js.map