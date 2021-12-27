"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalcDamageValueMessage = void 0;
//计算伤害
class CalcDamageValueMessage {
    constructor(info, source, target) {
        this.info = info;
        this.source = source;
        this.target = target;
    }
}
exports.CalcDamageValueMessage = CalcDamageValueMessage;
CalcDamageValueMessage.Id = "CalcDamageValue";
//# sourceMappingURL=CalcDamageValueMessage.js.map