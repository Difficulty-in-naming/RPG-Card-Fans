"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalcDamageValueMessage = void 0;
//计算伤害
class CalcDamageValueMessage {
    info;
    source;
    target;
    static Id = "CalcDamageValue";
    constructor(info, source, target) {
        this.info = info;
        this.source = source;
        this.target = target;
    }
}
exports.CalcDamageValueMessage = CalcDamageValueMessage;
//# sourceMappingURL=CalcDamageValueMessage.js.map