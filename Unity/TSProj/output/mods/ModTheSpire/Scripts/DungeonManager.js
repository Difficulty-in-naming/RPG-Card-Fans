"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QueueMessageKit_1 = require("../../../Core/Module/Event/QueueMessageKit");
var ObserverMessageKit_1 = require("../../../Core/ObserverMessageKit");
var EffectKit_1 = require("./Effect/EffectKit");
var AbstractPlayer_1 = require("./Unit/Character/AbstractPlayer");
//DungeonManager类似于一次游戏的管理器.
//每次开始游戏都会重置局部变量.
class DungeonManager {
    constructor() {
        //本局游戏爬塔楼层
        this.FloorNum = 0;
        //进阶等级
        this.AdvanceLevel = 0;
    }
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
DungeonManager.ActionManager = new QueueMessageKit_1.default();
DungeonManager.MessageManager = new ObserverMessageKit_1.ObserverMessageKit();
DungeonManager.EffectManager = new EffectKit_1.default();
//# sourceMappingURL=DungeonManager.js.map