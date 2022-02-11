"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalcFinalDamageValueMessage = void 0;
//计算伤害结束
class CalcFinalDamageValueMessage {
    info;
    source;
    target;
    static Id = "CalcFinalDamageValue";
    constructor(info, source, target) {
        this.info = info;
        this.source = source;
        this.target = target;
    }
}
exports.CalcFinalDamageValueMessage = CalcFinalDamageValueMessage;
//# sourceMappingURL=CalcFinalDamageValueMessage.js.map