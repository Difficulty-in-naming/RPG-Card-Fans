"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnUseCardBeforeMessage = void 0;
class OnUseCardBeforeMessage {
    Source;
    Target;
    Card;
    Action;
    static Id = "OnUseCardBeforeMessage";
    CanUse = true;
    constructor(Source, Target, Card, Action) {
        this.Source = Source;
        this.Target = Target;
        this.Card = Card;
        this.Action = Action;
    }
}
exports.OnUseCardBeforeMessage = OnUseCardBeforeMessage;
//# sourceMappingURL=OnUseCardBeforeMessage.js.map