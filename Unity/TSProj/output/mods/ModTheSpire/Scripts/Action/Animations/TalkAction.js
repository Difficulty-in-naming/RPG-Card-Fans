"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TalkAction = void 0;
var Async_1 = require("../../../../../Core/Async");
var DungeonManager_1 = require("../../DungeonManager");
var SpeechBubble_1 = require("../../Effect/Combat/SpeechBubble");
var AbstractGameAction_1 = require("../AbstractGameAction");
class TalkAction extends AbstractGameAction_1.default {
    constructor(X, Y, Text, FlipX, Interval = 2, BubbleDuration = 2) {
        super();
        this.X = X;
        this.Y = Y;
        this.Text = Text;
        this.FlipX = FlipX;
        this.Interval = Interval;
        this.BubbleDuration = BubbleDuration;
        this.Type = AbstractGameAction_1.ActionType.TEXT;
    }
    async Update() {
        DungeonManager_1.default.EffectManager.Play(new SpeechBubble_1.SpeechBubble(this.X, this.Y, this.Text, this.BubbleDuration, this.FlipX));
        await Async_1.default.Delay(this.Interval);
        return true;
    }
}
exports.TalkAction = TalkAction;
//# sourceMappingURL=TalkAction.js.map