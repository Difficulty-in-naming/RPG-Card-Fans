"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpawnMonsterAction = void 0;
var Async_1 = require("../../../../../Core/Async");
var DungeonManager_1 = require("../../DungeonManager");
var OnSpawnMonsterMessage_1 = require("../../Events/OnSpawnMonsterMessage");
var MinionPower_1 = require("../../Power/MinionPower");
var AbstractGameAction_1 = require("../AbstractGameAction");
class SpawnMonsterAction extends AbstractGameAction_1.default {
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