"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtEndOfTurnMessage = void 0;
class AtEndOfTurnMessage {
    IsPlayer;
    unit;
    static Id = "AtEndOfTurnMessage";
    constructor(IsPlayer, unit) {
        this.IsPlayer = IsPlayer;
        this.unit = unit;
    }
}
exports.AtEndOfTurnMessage = AtEndOfTurnMessage;
//# sourceMappingURL=AtEndOfTurnMessage.js.map