"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalcFinalHurtValueMessage = void 0;
//计算伤害结束
class CalcFinalHurtValueMessage {
    info;
    source;
    target;
    static Id = "CalcFinalHurtValueMessage";
    constructor(info, source, target) {
        this.info = info;
        this.source = source;
        this.target = target;
    }
}
exports.CalcFinalHurtValueMessage = CalcFinalHurtValueMessage;
//# sourceMappingURL=CalcFinalHurtValueMessage.js.map