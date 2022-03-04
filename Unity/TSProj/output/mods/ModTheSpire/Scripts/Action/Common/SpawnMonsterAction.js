"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpawnMonsterAction = void 0;
const Async_1 = require("../../../../../Core/Async");
const DungeonManager_1 = require("../../DungeonManager");
const OnSpawnMonsterMessage_1 = require("../../Events/OnSpawnMonsterMessage");
const MinionPower_1 = require("../../Power/MinionPower");
const AbstractGameAction_1 = require("../AbstractGameAction");
class SpawnMonsterAction extends AbstractGameAction_1.default {
    monster;
    isMinion;
    constructor(monster, isMinion) {
        super();
        this.monster = monster;
        this.isMinion = isMinion;
    }
    async Update() {
        if (this.Duration == 0) {
            DungeonManager_1.default.MessageManager.Send(OnSpawnMonsterMessage_1.OnSpawnMonsterMessage.Id, new OnSpawnMonsterMessage_1.OnSpawnMonsterMessage(this.monster));
            this.monster.Initialize();
            if (this.isMinion) {
                this.monster.AddPower(new MinionPower_1.MinionPower(), this.monster);
            }
        }
        await Async_1.default.Delay(100);
        return true;
    }
}
exports.SpawnMonsterAction = SpawnMonsterAction;
//# sourceMappingURL=SpawnMonsterAction.js.map