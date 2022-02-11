"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TalkAction = void 0;
const Async_1 = require("../../../../../Core/Async");
const DungeonManager_1 = require("../../DungeonManager");
const SpeechBubble_1 = require("../../Effect/Combat/SpeechBubble");
const AbstractGameAction_1 = require("../AbstractGameAction");
class TalkAction extends AbstractGameAction_1.default {
    X;
    Y;
    Text;
    FlipX;
    Interval;
    BubbleDuration;
    Type = AbstractGameAction_1.ActionType.TEXT;
    constructor(X, Y, Text, FlipX, Interval = 2, BubbleDuration = 2) {
        super();
        this.X = X;
        this.Y = Y;
        this.Text = Text;
        this.FlipX = FlipX;
        this.Interval = Interval;
        this.BubbleDuration = BubbleDuration;
    }
    async Update() {
        DungeonManager_1.default.EffectManager.Play(new SpeechBubble_1.SpeechBubble(this.X, this.Y, this.Text, this.BubbleDuration, this.FlipX));
        await Async_1.default.Delay(this.Interval);
        return true;
    }
}
exports.TalkAction = TalkAction;
//# sourceMappingURL=TalkAction.js.map