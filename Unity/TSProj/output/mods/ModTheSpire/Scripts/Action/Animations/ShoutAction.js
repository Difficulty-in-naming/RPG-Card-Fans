"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoutAction = void 0;
var DungeonManager_1 = require("../../DungeonManager");
var MegaSpeechBubble_1 = require("../../Effect/Combat/MegaSpeechBubble");
var AbstractPlayer_1 = require("../../Unit/Character/AbstractPlayer");
var AbstractGameAction_1 = require("../AbstractGameAction");
class ShoutAction extends AbstractGameAction_1.default {
    constructor(_Source, _Text, _Duration = 0.5, _BubbleDuration = 3) {
        super();
        this._Source = _Source;
        this._Text = _Text;
        this._Duration = _Duration;
        this._BubbleDuration = _BubbleDuration;
        this.Type = AbstractGameAction_1.ActionType.TEXT;
    }
    async Update() {
        let hitBox = this._Source.GetHitBox();
        DungeonManager_1.default.EffectManager.Play(new MegaSpeechBubble_1.MegaSpeechBubble(hitBox.CX, hitBox.CY, this._Text, this._BubbleDuration, !(this._Source instanceof AbstractPlayer_1.AbstractPlayer)));
        return super.Update();
    }
}
exports.ShoutAction = ShoutAction;
//# sourceMappingURL=ShoutAction.js.map