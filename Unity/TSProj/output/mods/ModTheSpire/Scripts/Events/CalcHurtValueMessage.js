"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalcHurtValueMessage = void 0;
//计算伤害
class CalcHurtValueMessage {
    constructor(info, source, target) {
        this.info = info;
        this.source = source;
        this.target = target;
    }
}
exports.CalcHurtValueMessage = CalcHurtValueMessage;
CalcHurtValueMessage.Id = "CalcDamageValueMessage";
//# sourceMappingURL=CalcHurtValueMessage.js.map