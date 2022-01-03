"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlyingSpikeEffect = void 0;
var Mathf_1 = require("../../../../../Core/Module/Math/Mathf");
var ModTheSpire_Effect_1 = require("../../Gen/View/ModTheSpire_Effect");
var AbstractEffect_1 = require("../AbstractEffect");
class FlyingSpikeEffect extends AbstractEffect_1.AbstractEffect {
    constructor(parent, X, Y, StartingRotation, endX, endY, Color) {
        super();
        this.X = X;
        this.Y = Y;
        this.StartingRotation = StartingRotation;
        this.endX = endX;
        this.endY = endY;
        this.Color = Color;
        this.Effect = ModTheSpire_Effect_1.View_FlyingSpikeEffect.CreateInstance();
        parent.AddChild(this.Effect);
        this.Effect.SetPosition(X, Y, 0);
        this.Effect.rotation = StartingRotation + Mathf_1.Mathf.RandomRange(-5, 5);
        let transition = this.Effect.GetTransition("t0");
        transition.SetValue("StartPosition", this.X, this.Y);
        transition.SetValue("EndPosition", this.endX, this.endY);
        this.IsDone = true;
        transition.Play();
    }
}
exports.FlyingSpikeEffect = FlyingSpikeEffect;
//# sourceMappingURL=FlyingSpikeEffect.js.map