"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoutAction = void 0;
const DungeonManager_1 = require("../../DungeonManager");
const MegaSpeechBubble_1 = require("../../Effect/Combat/MegaSpeechBubble");
const AbstractPlayer_1 = require("../../Unit/Character/AbstractPlayer");
const AbstractGameAction_1 = require("../AbstractGameAction");
class ShoutAction extends AbstractGameAction_1.default {
    _Source;
    _Text;
    _Duration;
    _BubbleDuration;
    Type = AbstractGameAction_1.ActionType.TEXT;
    constructor(_Source, _Text, _Duration = 0.5, _BubbleDuration = 3) {
        super();
        this._Source = _Source;
        this._Text = _Text;
        this._Duration = _Duration;
        this._BubbleDuration = _BubbleDuration;
    }
    async Update() {
        let hitBox = this._Source.GetHitBox();
        DungeonManager_1.default.EffectManager.Play(new MegaSpeechBubble_1.MegaSpeechBubble(hitBox.CX, hitBox.CY, this._Text, this._BubbleDuration, !(this._Source instanceof AbstractPlayer_1.AbstractPlayer)));
        return super.Update();
    }
}
exports.ShoutAction = ShoutAction;
//# sourceMappingURL=ShoutAction.js.map