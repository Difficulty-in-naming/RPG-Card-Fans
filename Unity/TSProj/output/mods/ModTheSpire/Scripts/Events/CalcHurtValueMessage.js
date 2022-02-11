"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalcHurtValueMessage = void 0;
//计算伤害
class CalcHurtValueMessage {
    info;
    source;
    target;
    static Id = "CalcDamageValueMessage";
    constructor(info, source, target) {
        this.info = info;
        this.source = source;
        this.target = target;
    }
}
exports.CalcHurtValueMessage = CalcHurtValueMessage;
//# sourceMappingURL=CalcHurtValueMessage.js.map