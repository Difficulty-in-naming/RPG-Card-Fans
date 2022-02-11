"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DamageModification = exports.WrapDamage = void 0;
const DamageType_1 = require("./DamageType");
class WrapDamage {
    Source;
    Damage;
    Type;
    constructor(Source, Damage, Type) {
        this.Source = Source;
        this.Damage = Damage;
        this.Type = Type;
    }
}
exports.WrapDamage = WrapDamage;
class DamageModification {
    Damage;
    constructor(Damage) {
        this.Damage = Damage;
    }
}
exports.DamageModification = DamageModification;
class DamageInfo {
    //伤害来源单位
    Unit;
    //原始伤害
    Origin;
    //伤害修改列表
    Modify = new Array();
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
    constructor(unit, damage, type = DamageType_1.DamageType.NORMAL) {
        this.Unit = unit;
        this.Origin = new WrapDamage(unit, damage, type);
        this.Modify.push(new DamageModification(this.Origin));
    }
    AddModify(damage) {
        this.Modify.push(new DamageModification(damage));
    }
}
exports.default = DamageInfo;
//# sourceMappingURL=DamageInfo.js.map