"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCardAction = void 0;
const Async_1 = require("../../../../../Core/Async");
const AbstractCard_1 = require("../../Cards/AbstractCard");
const DungeonManager_1 = require("../../DungeonManager");
const OnUseCardBeforeMessage_1 = require("../../Events/OnUseCardBeforeMessage");
const OnUseCardMessage_1 = require("../../Events/OnUseCardMessage");
const GameSettings_1 = require("../../Game/GameSettings");
const AbstractGameAction_1 = require("../AbstractGameAction");
const ShowCardAction_1 = require("./ShowCardAction");
const ShowCardAndPoofAction_1 = require("./ShowCardAndPoofAction");
class UseCardAction extends AbstractGameAction_1.default {
    Card;
    Target;
    ExhaustCard;
    ReboundCard;
    CanUse;
    Source;
    constructor(Card, Target = null) {
        super();
        this.Card = Card;
        this.Target = Target;
        let message = new OnUseCardBeforeMessage_1.OnUseCardBeforeMessage(this.Source, this.Target, this.Card, this);
        DungeonManager_1.default.MessageManager.Send(OnUseCardBeforeMessage_1.OnUseCardBeforeMessage.Id, message);
        if (!this.CanUse)
            return;
        if (Card.Exhaust) {
            this.ExhaustCard = true;
            this.Type = AbstractGameAction_1.ActionType.EXHAUST;
        }
        else {
            this.ExhaustCard = false;
            this.Type = AbstractGameAction_1.ActionType.USE;
        }
        this.Source = DungeonManager_1.default.Inst.Player;
    }
    async Update() {
        if (this.Duration == 0) {
            this.Card.Use(this.Source, this.Target);
            DungeonManager_1.default.MessageManager.Send(OnUseCardMessage_1.OnUseCardMessage.Id, new OnUseCardMessage_1.OnUseCardMessage(this.Source, this.Target, this.Card));
            if (this.Card.Temp) {
                this.AddToTop(new ShowCardAndPoofAction_1.ShowCardAndPoofAction(this.Card));
                return true;
            }
            if (this.Card.Type == AbstractCard_1.CardType.POWER) {
                this.AddToTop(new ShowCardAction_1.ShowCardAction(this.Card));
                if (GameSettings_1.GameSettings.FastMode) {
                    await Async_1.default.Delay(100);
                }
                else {
                    await Async_1.default.Delay(700);
                }
                return true;
            }
            if (!this.ExhaustCard) {
                if (this.ReboundCard) {
                }
            }
        }
    }
    MoveToDeck() {
    }
}
exports.UseCardAction = UseCardAction;
//# sourceMappingURL=UseCardAction.js.map