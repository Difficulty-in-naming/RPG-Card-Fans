"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CleaveEffect = void 0;
const Mathf_1 = require("../../../../../Core/Module/Math/Mathf");
const TimeKit_1 = require("../../../../../Core/Utils/TimeKit");
const ModTheSpire_Effect_1 = require("../../Gen/View/ModTheSpire_Effect");
const AbstractEffect_1 = require("../AbstractEffect");
class CleaveEffect extends AbstractEffect_1.AbstractEffect {
    _X;
    _Y;
    Loader;
    StallTimer;
    Scale;
    constructor(_X, _Y) {
        super();
        this._X = _X;
        this._Y = _Y;
        this.Loader.SetPosition(_X, _Y, 0);
        this.Loader = ModTheSpire_Effect_1.View_CleaveEffect.CreateInstance();
        this.Loader.rotation = Mathf_1.Mathf.RandomRange(-5, 1);
        this.Scale = 1.2;
        this.Loader.SetScale(this.Scale, this.Scale);
        this.StallTimer = Mathf_1.Mathf.RandomRange(0, 0.2);
    }
    Update() {
        super.Update();
        if (this.StallTimer > 0) {
            this.StallTimer -= TimeKit_1.TimeKit.DeltaTime;
            return;
        }
        this.Scale += 0.005;
        this.Loader.SetScale(this.Scale, this.Scale);
        this.Loader.rotation += Mathf_1.Mathf.RandomRange(-0.5, 0.5);
    }
}
exports.CleaveEffect = CleaveEffect;
//# sourceMappingURL=CleaveEffect.js.map