﻿import {IScene} from "mods/ModTheSpire/Scripts/Dungeon/IScene";
import Rand from "Core/Module/RandomGenerator";
import {MapRoomNode} from "mods/ModTheSpire/Scripts/Room/MapRoomNode";
import {MapGenerator} from "mods/ModTheSpire/Scripts/Room/MapGenerator";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {MonsterInfo} from "mods/ModTheSpire/Scripts/Unit/Monster/MonsterInfo";
import {Mathf} from "Core/Module/Math/Mathf";
import {MonsterGroup} from "mods/ModTheSpire/Scripts/Unit/Monster/MonsterGroup";

export class RoomChance{
    ShopRoomChance : number;
    RestRoomChance : number;
    TreasureRoomChance : number;
    EventRoomChance : number;
    EliteRoomChance : number;
    SmallChestChance : number;
    MediumChestChance : number;
    LargeChestChance : number;
    CommonRelicChance : number;
    UncommonRelicChance : number;
    RareRelicChance : number;
    ColorlessRareChance : number;
    CardUpgradedChance : number;
}

//请使用DungeonManager加载该类型.
//不要在constructor中修改其他类型的内容.
//尽量使用Init替代constructor
export abstract class AbstractDungeon{
    public Name:string;
    public Rng : Rand;
    //怪物随机种子
    public EnemiesRng : Rand;
    //杂项种子
    public MiscRng : Rand;
    //AI种子
    public AIRng : Rand;
    MapInfo : Array<Array<MapRoomNode>>;
    Scene : IScene;
    RoomChance:RoomChance;
    //当前章节,用于保证种子唯一.保证各章节生成的房间内容一致
    abstract get ActNum() : number;
    //当前章节的所有低难度敌人
    private WeakEnemiesPool:Map<string,()=>Array<MonsterInfo>>
    //当前章节的所有高强度敌人
    private StrongEnemiesPool:Map<string,()=>Array<MonsterInfo>>
    //当前章节的所有精英敌人
    private ElitePool:Map<string,()=>Array<MonsterInfo>>
    //当前章节的所有Boss敌人
    private BossPool:Map<string,()=>Array<MonsterInfo>>
    //随机的低难度敌人
    private WeakEnemiesList:Array<Array<MonsterInfo>>
    //随机的高难度敌人
    private StrongEnemiesList:Array<Array<MonsterInfo>>
    //随机的精英敌人
    private EliteList:Array<Array<MonsterInfo>>
    //随机的Boss敌人
    private BossList:Array<Array<MonsterInfo>>
    //事件列表
    public EventList:Array<string>;
    //事件列表(唯一)
    public ShrineList:Array<string>;
    //遗物列表
    public RelicList:Array<string>;
    //楼层高度,和DungeonManager.Inst.FloorNum不同.这个只计算当前章节的楼层.
    private FloorNum;
    Init(){
        this.Rng = new Rand(DungeonManager.Inst.Seed + this.ActNum);
        this.EnemiesRng = new Rand(DungeonManager.Inst.Seed + this.ActNum + "Enemies");
        this.MiscRng = new Rand(DungeonManager.Inst.Seed + this.ActNum + "Misc");
        this.AIRng = new Rand(DungeonManager.Inst.Seed + this.ActNum + "AI");
        this.MapInfo = MapGenerator.Generate(7,15,6);
        this.InitializeRelicList(this.RelicList);
        this.InitializeEventList(this.EventList);
        this.InitializeShrineList(this.ShrineList);
        this.InitializeLevelSpecificChances(this.RoomChance);
        this.InitializeWeakEnemies(this.WeakEnemiesPool);
        this.InitializeStrongEnemies(this.StrongEnemiesPool);
        this.InitializeElites(this.ElitePool);
        this.InitializeBoss(this.BossPool);
        this.InitEnemies(this.WeakEnemiesPool,this.WeakEnemiesList);
        this.InitEnemies(this.StrongEnemiesPool,this.StrongEnemiesList);
        this.InitEnemies(this.ElitePool,this.EliteList);
        this.InitEnemies(this.BossPool,this.BossList);
    }
    Dispose(){}
    //当前章节会出现的遗物
    protected abstract InitializeRelicList(relics:Array<string>)
    //限定当前章节才会出现的事件
    protected abstract InitializeEventList(events:Array<string>)
    //限定当前章节才会出现的事件(且全局游戏仅会出现一次)
    protected abstract InitializeShrineList(events:Array<string>)
    //当前章节房间出现概率
    protected abstract InitializeLevelSpecificChances(chance:RoomChance)
    //当前章节出现的低难度敌人
    protected abstract InitializeWeakEnemies(enemies:Map<string,()=>Array<MonsterInfo>>)
    //当前章节出现的高难度敌人
    protected abstract InitializeStrongEnemies(enemies:Map<string,()=>Array<MonsterInfo>>)
    //当前章节出现的精英敌人
    protected abstract InitializeElites(enemies:Map<string,()=>Array<MonsterInfo>>)
    //当前章节出现的Boss
    protected abstract InitializeBoss(enemies:Map<string,()=>Array<MonsterInfo>>)
    //在Init当中需要调用这个函数.避免玩家走不同路线出现的怪物的次序不一样的问题.
    private InitEnemies(pool:Map<string,()=>Array<MonsterInfo>>,list:Array<Array<MonsterInfo>>){
        let array = Array.from(pool);
        if(array.length == 1){
            list.fill(array[0][1](),0,8);
        }
        let lastKey:string;
        while(array.length < 8) {
            let x = array[Mathf.Floor(Mathf.RandomRange(0,array.length,this.EnemiesRng))]
            if(!lastKey)
                lastKey = x[0];
            if(x[0] != lastKey)
                list.push(x[1]());
        }
    }
    public GetEnemies(isElite : boolean){
        if(!isElite){
            if(this.FloorNum < 6){
                if(this.WeakEnemiesList.length == 0){
                    this.InitEnemies(this.WeakEnemiesPool,this.WeakEnemiesList);
                }
            }
            else{
                if(this.StrongEnemiesList.length == 0){
                    this.InitEnemies(this.StrongEnemiesPool,this.StrongEnemiesList);
                }
            }
        }
        else{
            if(this.EliteList.length == 0){
                this.InitEnemies(this.ElitePool,this.EliteList);
            }
        }
    }
}