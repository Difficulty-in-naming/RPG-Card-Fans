"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractDungeon = exports.RoomChance = void 0;
const rand_seed_1 = require("rand-seed");
const Mathf_1 = require("../../../../Core/Module/Math/Mathf");
const DungeonManager_1 = require("../DungeonManager");
const MapGenerator_1 = require("../Room/MapGenerator");
class RoomChance {
    ShopRoomChance;
    RestRoomChance;
    TreasureRoomChance;
    EventRoomChance;
    EliteRoomChance;
    SmallChestChance;
    MediumChestChance;
    LargeChestChance;
    CommonRelicChance;
    UncommonRelicChance;
    RareRelicChance;
    ColorlessRareChance;
    CardUpgradedChance;
}
exports.RoomChance = RoomChance;
//请使用DungeonManager加载该类型.
//不要在constructor中修改其他类型的内容.
//尽量使用Init替代constructor
class AbstractDungeon {
    Name;
    Rng;
    //怪物随机种子
    EnemiesRng;
    //杂项种子
    MiscRng;
    //AI种子
    AIRng;
    //怪物HP种子
    HPRng;
    MapInfo;
    Scene;
    RoomChance;
    //当前章节的所有低难度敌人
    WeakEnemiesPool;
    //当前章节的所有高强度敌人
    StrongEnemiesPool;
    //当前章节的所有精英敌人
    ElitePool;
    //当前章节的所有Boss敌人
    BossPool;
    //随机的低难度敌人
    WeakEnemiesList;
    //随机的高难度敌人
    StrongEnemiesList;
    //随机的精英敌人
    EliteList;
    //随机的Boss敌人
    BossList;
    //事件列表
    EventList;
    //事件列表(唯一)
    ShrineList;
    //遗物列表
    RelicList;
    //楼层高度,和DungeonManager.Inst.FloorNum不同.这个只计算当前章节的楼层.
    FloorNum;
    Init() {
        this.Rng = new rand_seed_1.default(DungeonManager_1.default.Inst.Seed + this.ActNum);
        this.EnemiesRng = new rand_seed_1.default(DungeonManager_1.default.Inst.Seed + this.ActNum + "Enemies");
        this.MiscRng = new rand_seed_1.default(DungeonManager_1.default.Inst.Seed + this.ActNum + "Misc");
        this.AIRng = new rand_seed_1.default(DungeonManager_1.default.Inst.Seed + this.ActNum + "AI");
        this.HPRng = new rand_seed_1.default(DungeonManager_1.default.Inst.Seed + this.ActNum + "HP");
        this.MapInfo = MapGenerator_1.MapGenerator.Generate(7, 15, 6);
        this.InitializeRelicList(this.RelicList);
        this.InitializeEventList(this.EventList);
        this.InitializeShrineList(this.ShrineList);
        this.InitializeLevelSpecificChances(this.RoomChance);
        this.InitializeWeakEnemies(this.WeakEnemiesPool);
        this.InitializeStrongEnemies(this.StrongEnemiesPool);
        this.InitializeElites(this.ElitePool);
        this.InitializeBoss(this.BossPool);
        this.InitEnemies(this.WeakEnemiesPool, this.WeakEnemiesList);
        this.InitEnemies(this.StrongEnemiesPool, this.StrongEnemiesList);
        this.InitEnemies(this.ElitePool, this.EliteList);
        this.InitEnemies(this.BossPool, this.BossList);
    }
    Dispose() { }
    //在Init当中需要调用这个函数.避免玩家走不同路线出现的怪物的次序不一样的问题.
    InitEnemies(pool, list) {
        let array = Array.from(pool);
        if (array.length == 1) {
            list.fill(array[0][1](), 0, 8);
        }
        let lastKey;
        while (array.length < 8) {
            let x = array[Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(0, array.length, this.EnemiesRng))];
            if (!lastKey)
                lastKey = x[0];
            if (x[0] != lastKey)
                list.push(x[1]());
        }
    }
    GetEnemies(isElite) {
        if (!isElite) {
            if (this.FloorNum < 6) {
                if (this.WeakEnemiesList.length == 0) {
                    this.InitEnemies(this.WeakEnemiesPool, this.WeakEnemiesList);
                }
            }
            else {
                if (this.StrongEnemiesList.length == 0) {
                    this.InitEnemies(this.StrongEnemiesPool, this.StrongEnemiesList);
                }
            }
        }
        else {
            if (this.EliteList.length == 0) {
                this.InitEnemies(this.ElitePool, this.EliteList);
            }
        }
    }
}
exports.AbstractDungeon = AbstractDungeon;
//# sourceMappingURL=AbstractDungeon.js.map