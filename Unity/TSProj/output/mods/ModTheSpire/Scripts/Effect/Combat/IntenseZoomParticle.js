"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntenseZoomParticle = void 0;
const csharp_1 = require("csharp");
const Mathf_1 = require("../../../../../Core/Module/Math/Mathf");
const TimeKit_1 = require("../../../../../Core/Utils/TimeKit");
const Color_1 = require("../../DataDefine/Color");
const FileHelper_1 = require("../../FileHelper");
const UIHelper_1 = require("../../UI/UIHelper");
const AbstractEffect_1 = require("../AbstractEffect");
class IntenseZoomParticle extends AbstractEffect_1.AbstractEffect {
    _X;
    _Y;
    _IsBlack;
    Loader;
    _FlickerDuration;
    constructor(_X, _Y, _IsBlack) {
        super();
        this._X = _X;
        this._Y = _Y;
        this._IsBlack = _IsBlack;
        let i = Mathf_1.Mathf.RandomRange(0, 3);
        this.Loader = UIHelper_1.default.CreateGLoader();
        this.Loader.url = FileHelper_1.default.FormatPath("Vfx/cone" + (i == 0 ? "8" : (i == 1 ? "5" : "6")));
        this.Loader.SetPosition(_X, _Y, 0);
        this.Loader.color = _IsBlack ? Color_1.default.Black.UnityColor : Color_1.default.Gold.UnityColor;
        if (!_IsBlack)
            this.Loader.blendMode = csharp_1.FairyGUI.BlendMode.Add;
        this.Randomize();
    }
    Pow2Out(a) {
        return Math.pow(a - 1.0, 2) * (2 % 2 == 0 ? -1 : 1) + 1.0;
    }
    Randomize() {
        this.Loader.rotation = Mathf_1.Mathf.RandomRange(0, 360);
        let offsetX = Mathf_1.Mathf.RandomRange(200, 600) * (2 - (1.5 - this.Duration));
        this.Loader.SetPosition(this._X + offsetX, this._Y, 0);
        this.Loader.SetPivot(this.Loader.texture.width / offsetX, 0.5);
        if (this._IsBlack)
            this.Loader.alpha = Mathf_1.Mathf.RandomRange(0.5, 1) * this.Pow2Out(1.5 - this.Duration / 1.5);
        else
            this.Loader.alpha = Mathf_1.Mathf.RandomRange(0.2, 0.7) * this.Pow2Out(1.5 - this.Duration / 1.5);
    }
    Update() {
        super.Update();
        this._FlickerDuration -= TimeKit_1.TimeKit.DeltaTime;
        if (this._FlickerDuration < 0) {
            this.Randomize();
            this._FlickerDuration = Mathf_1.Mathf.RandomRange(0, 0.05);
        }
        if (this.Duration >= 1.5)
            this.IsDone = true;
    }
}
exports.IntenseZoomParticle = IntenseZoomParticle;
//# sourceMappingURL=IntenseZoomParticle.js.map