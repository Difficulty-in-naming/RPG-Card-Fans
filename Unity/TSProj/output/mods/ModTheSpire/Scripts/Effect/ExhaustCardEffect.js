"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExhaustCardEffect = void 0;
const AbstractEffect_1 = require("./AbstractEffect");
const SoundMaster_1 = require("../Audio/SoundMaster");
const DungeonManager_1 = require("../DungeonManager");
const ExhaustBlurEffect_1 = require("./ExhaustBlurEffect");
const ExhaustEmberEffect_1 = require("./ExhaustEmberEffect");
class ExhaustCardEffect extends AbstractEffect_1.AbstractEffect {
    Card;
    constructor(Card) {
        super();
        this.Card = Card;
    }
    Update() {
        if (this.Duration == 0) {
            SoundMaster_1.SoundMaster.PlayVoice("CARD_EXHAUST", 0.2);
            for (let index = 0; index < 90; index++) {
                DungeonManager_1.default.EffectManager.Play(new ExhaustBlurEffect_1.ExhaustBlurEffect(this.Card.View.x, this.Card.View.y));
            }
            for (let index = 0; index < 50; index++) {
                DungeonManager_1.default.EffectManager.Play(new ExhaustEmberEffect_1.ExhaustEmberEffect(this.Card.View.x, this.Card.View.y));
            }
        }
        else if (this.Duration >= 1) {
            this.IsDone = true;
            return;
        }
    }
}
exports.ExhaustCardEffect = ExhaustCardEffect;
//# sourceMappingURL=ExhaustCardEffect.js.map