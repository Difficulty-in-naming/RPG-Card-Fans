"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DamageModification = exports.WrapDamage = void 0;
var DamageType_1 = require("./DamageType");
class WrapDamage {
    constructor(Source, Damage, Type) {
        this.Source = Source;
        this.Damage = Damage;
        this.Type = Type;
    }
}
exports.WrapDamage = WrapDamage;
class DamageModification {
    constructor(Damage) {
        this.Damage = Damage;
    }
}
exports.DamageModification = DamageModification;
class DamageInfo {
    constructor(unit, damage, type = DamageType_1.DamageType.NORMAL) {
        //伤害修改列表
        this.Modify = new Array();
        this.Unit = unit;
        this.Origin = new WrapDamage(unit, damage, type);
        this.Modify.push(new DamageModification(this.Origin));
    }
    //伤害类型
    get DamageType() {
        return this.Modify.last().Damage.Type;
    }
    //最终伤害
    get TotalDamage() {
        let num = 0;
        this.Modify.forEach(t1 => num += t1.Damage.Damage);
        return num;
    }
    AddModify(damage) {
        this.Modify.push(new DamageModification(damage));
    }
}
exports.default = DamageInfo;
//# sourceMappingURL=DamageInfo.js.map