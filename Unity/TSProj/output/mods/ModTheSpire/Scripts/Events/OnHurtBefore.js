"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnHurtBefore = void 0;
class OnHurtBefore {
    Damage;
    target;
    static Id = "PlayerOnHurtBefore";
    constructor(Damage, target) {
        this.Damage = Damage;
        this.target = target;
    }
}
exports.OnHurtBefore = OnHurtBefore;
//# sourceMappingURL=OnHurtBefore.js.map