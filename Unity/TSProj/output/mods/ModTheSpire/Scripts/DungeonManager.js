"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QueueMessageKit_1 = require("../../../Core/Module/Event/QueueMessageKit");
const ObserverMessageKit_1 = require("../../../Core/ObserverMessageKit");
const EffectKit_1 = require("./Effect/EffectKit");
const AbstractPlayer_1 = require("./Unit/Character/AbstractPlayer");
//DungeonManager类似于一次游戏的管理器.
//每次开始游戏都会重置局部变量.
class DungeonManager {
    //region 静态变量
    static Inst;
    static ActionManager = new QueueMessageKit_1.default();
    static MessageManager = new ObserverMessageKit_1.ObserverMessageKit();
    static EffectManager = new EffectKit_1.default();
    //endregion
    //region局部变量
    //本局游戏操作的角色
    Player;
    //本局游戏爬塔楼层
    FloorNum = 0;
    //灾祸池
    BlightPool;
    //本局游戏种子
    Seed;
    //进阶等级
    AdvanceLevel = 0;
    //是否是无尽模式
    _IsEndless;
    //当前房间
    _CurrentRoom;
    //当前章节地牢
    _CurrentDungeon;
    get CurrentDungeon() {
        return this._CurrentDungeon;
    }
    set CurrentDungeon(value) {
        if (this._CurrentDungeon != null)
            this._CurrentDungeon.Dispose();
        this._CurrentDungeon = value;
        this._CurrentDungeon.Init();
    }
    get CurrentRoom() {
        return this._CurrentRoom;
    }
    set CurrentRoom(value) {
        this._CurrentRoom = value;
        this._CurrentRoom.Enter();
    }
    get IsEndless() {
        return this._IsEndless;
    }
    set IsEndless(value) {
        if (this.FloorNum == 0)
            this._IsEndless = value;
    }
    //endregion
    //开始一局新的游戏
    static NewGame(player, seed) {
        let manager = new DungeonManager();
        manager.Player = new AbstractPlayer_1.AbstractPlayer(player);
        manager.Seed = seed;
        manager.FloorNum = 0;
        this.Inst = manager;
    }
    Update() {
        if (this.Player)
            this.Player.Update();
    }
}
exports.default = DungeonManager;
//# sourceMappingURL=DungeonManager.js.map