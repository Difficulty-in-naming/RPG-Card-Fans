"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextAboveCreatureEffect = void 0;
const ModTheSpire_Effect_1 = require("../Gen/View/ModTheSpire_Effect");
const AbstractEffect_1 = require("./AbstractEffect");
class TextAboveCreatureEffect extends AbstractEffect_1.AbstractEffect {
    x;
    y;
    msg;
    targetColor;
    Interval = 2.2;
    TargetOffestY = 80;
    TextComponent;
    constructor(x, y, msg, targetColor) {
        super();
        this.x = x;
        this.y = y;
        this.msg = msg;
        this.targetColor = targetColor;
        this.TextComponent = ModTheSpire_Effect_1.View_TextAboveEffect.CreateInstance();
        this.TextComponent.SetPosition(x, y, 0);
        this.TextComponent.text = msg;
        let transition = this.TextComponent.GetTransition("t0");
        transition.SetValue("FromColor", targetColor.UnityColor());
        transition.Play(1, 0, () => {
            this.IsDone = true;
        });
    }
}
exports.TextAboveCreatureEffect = TextAboveCreatureEffect;
//# sourceMappingURL=TextAboveCreatureEffect.js.map