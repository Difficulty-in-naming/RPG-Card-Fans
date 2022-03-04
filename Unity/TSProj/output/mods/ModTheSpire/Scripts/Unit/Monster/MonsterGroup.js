"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonsterGroup = void 0;
const Mathf_1 = require("../../../../../Core/Module/Math/Mathf");
const DungeonManager_1 = require("../../DungeonManager");
const Intent_1 = require("./Intent");
class MonsterGroup {
    Monsters = new Array();
    constructor(...monsters) {
        this.Monsters = monsters;
    }
    AreMonstersBasicallyDead() {
        return this.GetAliveMonstersCount() == 0;
    }
    GetAliveMonstersCount() {
        let aliveCount = 0;
        for (let i = 0; i < this.Monsters.length; i++) {
            let m = this.Monsters[i];
            if (m.IsDying || m.IsEscaping)
                continue;
            aliveCount++;
        }
        return aliveCount;
    }
    Random() {
        let vaildMonster = this.Monsters.filter(t1 => !t1.IsDying && t1.Intent != Intent_1.Intent.ESCAPE && !t1.IsDeadOrEscaped);
        let random = Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(0, vaildMonster.length, DungeonManager_1.default.Inst.CurrentDungeon.AIRng));
        return vaildMonster[random];
    }
    IndexOf(m) {
        return this.Monsters.indexOf(m);
    }
}
exports.MonsterGroup = MonsterGroup;
//# sourceMappingURL=MonsterGroup.js.map