"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorderFlashEffect = void 0;
const csharp_1 = require("csharp");
const ModTheSpire_Effect_1 = require("../../Gen/View/ModTheSpire_Effect");
const AbstractEffect_1 = require("../AbstractEffect");
class BorderFlashEffect extends AbstractEffect_1.AbstractEffect {
    _Color;
    _Additive;
    Loader;
    constructor(_Color, _Additive) {
        super();
        this._Color = _Color;
        this._Additive = _Additive;
        this.Loader = ModTheSpire_Effect_1.View_BorderFlashEffect.CreateInstance();
        this.Loader.GetTransition("t0").Play();
        let image = this.Loader.GetChild("n0").asImage;
        image.color = _Color.UnityColor();
        if (_Additive == true)
            image.blendMode = csharp_1.FairyGUI.BlendMode.Add;
    }
    Update() {
        super.Update();
        if (this.Duration >= 1) {
            this.IsDone = true;
            this.Loader.Dispose();
        }
    }
}
exports.BorderFlashEffect = BorderFlashEffect;
//# sourceMappingURL=BorderFlashEffect.js.map