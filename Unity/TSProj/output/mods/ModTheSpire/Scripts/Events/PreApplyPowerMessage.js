"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreApplyPowerMessage = void 0;
class PreApplyPowerMessage {
    Power;
    Target;
    Source;
    StackAmount;
    static Id = "PreApplyPowerMessage";
    constructor(Power, Target, Source, StackAmount) {
        this.Power = Power;
        this.Target = Target;
        this.Source = Source;
        this.StackAmount = StackAmount;
    }
}
exports.PreApplyPowerMessage = PreApplyPowerMessage;
//# sourceMappingURL=PreApplyPowerMessage.js.map