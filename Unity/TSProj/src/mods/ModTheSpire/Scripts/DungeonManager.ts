import QueueMessageKit from "../../../Core/Module/Event/QueueMessageKit";
import { ObserverMessageKit } from "../../../Core/ObserverMessageKit";
import { AbstractBlight } from "./Blight/AbstractBlight";
import { AbstractDungeon } from "./Dungeon/AbstractDungeon";
import EffectKit from "./Effect/EffectKit";
import { AbstractRoom } from "./Room/AbstractRoom";
import { AbstractPlayer } from "./Unit/Character/AbstractPlayer";
import { PlayerInfo } from "./Unit/Character/PlayerInfo";

//DungeonManager类似于一次游戏的管理器.

//每次开始游戏都会重置局部变量.
export default class DungeonManager {
    //region 静态变量
    public static Inst: DungeonManager;
    public static ActionManager = new QueueMessageKit();
    public static MessageManager = new ObserverMessageKit();
    public static EffectManager = new EffectKit();
    //endregion
    
    //region局部变量
    //本局游戏操作的角色
    public Player : AbstractPlayer;
    //本局游戏爬塔楼层
    public FloorNum = 0;
    //灾祸池
    public BlightPool :Array<AbstractBlight>
    //本局游戏种子
    public Seed:string;
    //进阶等级
    public AdvanceLevel:number = 0;
    //是否是无尽模式
    private _IsEndless : boolean;
    //当前房间
    private _CurrentRoom:AbstractRoom;
    //当前章节地牢
    private _CurrentDungeon : AbstractDungeon;
    get CurrentDungeon(): AbstractDungeon {
        return this._CurrentDungeon;
    }

    set CurrentDungeon(value: AbstractDungeon) {
        if(this._CurrentDungeon != null)
            this._CurrentDungeon.Dispose();
        this._CurrentDungeon = value;
        this._CurrentDungeon.Init();
    }

    get CurrentRoom(): AbstractRoom {
        return this._CurrentRoom;
    }

    set CurrentRoom(value: AbstractRoom) {
        this._CurrentRoom = value;
        this._CurrentRoom.Enter();
    }

    get IsEndless(): boolean {
        return this._IsEndless;
    }

    set IsEndless(value: boolean) {
        if(this.FloorNum == 0)
            this._IsEndless = value;
    }
    //endregion
    
    //开始一局新的游戏
    public static NewGame(player:PlayerInfo, seed:string){
        let manager = new DungeonManager();
        manager.Player = new AbstractPlayer(player);
        manager.Seed = seed;
        manager.FloorNum = 0;
        this.Inst = manager;
    }
    
    public Update(){
        if(this.Player)
            this.Player.Update()
    }
}