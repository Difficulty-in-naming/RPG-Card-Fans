"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmallLaserEffect = void 0;
const csharp_1 = require("csharp");
const Mathf_1 = require("../../../../../Core/Module/Math/Mathf");
const Color_1 = require("../../DataDefine/Color");
const FileHelper_1 = require("../../FileHelper");
const UIHelper_1 = require("../../UI/UIHelper");
const AbstractEffect_1 = require("../AbstractEffect");
class SmallLaserEffect extends AbstractEffect_1.AbstractEffect {
    _sX;
    _sY;
    _dX;
    _dY;
    Loader1;
    Loader2;
    _rotation;
    _scale = 1;
    constructor(_sX, _sY, _dX, _dY) {
        super();
        this._sX = _sX;
        this._sY = _sY;
        this._dX = _dX;
        this._dY = _dY;
        this.Loader1 = UIHelper_1.default.CreateGLoader();
        this.Loader2 = UIHelper_1.default.CreateGLoader();
        this.Loader1.url = this.Loader2.url = FileHelper_1.default.FormatPath("Vfx/combat/laserThin");
        let dst = Mathf_1.Mathf.Distance(_sX, _sY, _dX, _dY);
        this.Loader1.color = this.Loader2.color = Color_1.default.Cyan.UnityColor;
        this._rotation = Mathf_1.Mathf.Atan2(_dX - _sX, _dY - _sY);
        this._rotation *= Mathf_1.Mathf.Rad2Deg;
        this._rotation = -this._rotation + 90;
        this.Loader1.blendMode = this.Loader2.blendMode = csharp_1.FairyGUI.BlendMode.Add;
        this.Loader1.TweenFade(1, 0.5).SetEase(csharp_1.FairyGUI.EaseType.QuadOut);
        this.Loader1.TweenFade(0, 0.5).SetEase(csharp_1.FairyGUI.EaseType.BounceIn).SetDelay(0.5);
        this.Loader2.TweenFade(1, 0.5).SetEase(csharp_1.FairyGUI.EaseType.QuadOut);
        this.Loader2.TweenFade(0, 0.5).SetEase(csharp_1.FairyGUI.EaseType.BounceIn).SetDelay(0.5);
        this.Loader1.rotation = this.Loader2.rotation = this._rotation;
    }
    Update() {
        super.Update();
        if (this.Duration >= 1) {
            this.IsDone = true;
            this.Loader1.Dispose();
            this.Loader2.Dispose();
            this.Loader2.height = Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(50, 91));
            this.Loader2.scaleX = this._scale + Mathf_1.Mathf.RandomRange(-0.02, 0.02);
            this.Loader1.scaleX = this._scale + Mathf_1.Mathf.RandomRange(-0.01, 0.01);
        }
    }
}
exports.SmallLaserEffect = SmallLaserEffect;
//# sourceMappingURL=SmallLaserEffect.js.map