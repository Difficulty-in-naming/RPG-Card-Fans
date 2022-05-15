using System;
using System.Collections.Generic;
using System.Linq;
using ModTheSpire.Unit.Monster;
using UnityEngine;
using Random = System.Random;

namespace ModTheSpire.Dungeon
{
    public class RoomChance{
        public float ShopRoomChance ;
        public float RestRoomChance;
        public float TreasureRoomChance;
        public float EventRoomChance;
        public float EliteRoomChance;
        public float SmallChestChance;
        public float MediumChestChance;
        public float LargeChestChance;
        public float CommonRelicChance;
        public float UncommonRelicChance;
        public float RareRelicChance;
        public float ColorlessRareChance;
        public float CardUpgradedChance;
    }

//请使用DungeonManager加载该类型.
//不要在constructor中修改其他类型的内容.
//尽量使用Init替代constructor
public abstract class AbstractDungeon{
    public string Name;
    public Random Rng;
    ///怪物随机种子
    public Random EnemiesRng;
    ///杂项种子
    public Random MiscRng;
    ///AI种子
    public Random AIRng;
    ///怪物HP种子
    public Random HPRng;
    //List<List<MapRoomNode>> MapInfo;
    protected IScene Scene;
    RoomChance RoomChance;
    //当前章节,用于保证种子唯一.保证各章节生成的房间内容一致
    public abstract int ActNum { get; }
    ///当前章节的所有低难度敌人
    private Dictionary<string, Func<List<MonsterInfo>>> WeakEnemiesPool;
    ///当前章节的所有高强度敌人
    private Dictionary<string, Func<List<MonsterInfo>>> StrongEnemiesPool;
    ///当前章节的所有精英敌人
    private Dictionary<string, Func<List<MonsterInfo>>> ElitePool;
    ///当前章节的所有Boss敌人
    private Dictionary<string, Func<List<MonsterInfo>>> BossPool;
    ///随机的低难度敌人
    private List<List<MonsterInfo>> WeakEnemiesList;
    ///随机的高难度敌人
    private List<List<MonsterInfo>> StrongEnemiesList;
    ///随机的精英敌人
    private List<List<MonsterInfo>> EliteList;
    ///随机的Boss敌人
    private List<List<MonsterInfo>> BossList;
    ///事件列表
    public List<string> EventList;
    ///事件列表(唯一)
    public List<string> ShrineList;
    ///遗物列表
    public List<string> RelicList;
    ///楼层高度,和DungeonManager.Inst.FloorNum不同.这个只计算当前章节的楼层.
    private int FloorNum;
    public virtual void Init()
    {
        var stringHash = DungeonManager.Inst.Seed.GetHashCode();
        this.Rng = new Random(stringHash + this.ActNum);
        this.EnemiesRng = new Random(stringHash + this.ActNum + "Enemies".GetHashCode());
        this.MiscRng = new Random(stringHash + this.ActNum + "Misc".GetHashCode());
        this.AIRng = new Random(stringHash + this.ActNum + "AI".GetHashCode());
        this.HPRng = new Random(stringHash + this.ActNum + "HP".GetHashCode());
        //this.MapInfo = MapGenerator.Generate(7,15,6);
        this.RelicList = new List<string>();
        this.EventList = new List<string>();
        this.ShrineList = new List<string>();
        this.WeakEnemiesList = new List<List<MonsterInfo>>();
        this.StrongEnemiesList = new List<List<MonsterInfo>>();
        this.EliteList = new List<List<MonsterInfo>>();
        this.BossList = new List<List<MonsterInfo>>();
        this.WeakEnemiesPool = new Dictionary<string, Func<List<MonsterInfo>>>();
        this.StrongEnemiesPool = new Dictionary<string, Func<List<MonsterInfo>>>();
        this.ElitePool = new Dictionary<string, Func<List<MonsterInfo>>>();
        this.BossPool = new Dictionary<string, Func<List<MonsterInfo>>>();
        this.RoomChance = new RoomChance();
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
    public virtual void Dispose(){}
    ///当前章节会出现的遗物
    protected abstract void InitializeRelicList(List<string> relics);
    ///限定当前章节才会出现的事件
    protected abstract void InitializeEventList(List<string> events);

    ///限定当前章节才会出现的事件(且全局游戏仅会出现一次)
    protected abstract void InitializeShrineList(List<string> events);

    ///当前章节房间出现概率
    protected abstract void InitializeLevelSpecificChances(RoomChance chance);

    ///当前章节出现的低难度敌人
    protected abstract void InitializeWeakEnemies(Dictionary<string, Func<List<MonsterInfo>>> enemies);

    ///当前章节出现的高难度敌人
    protected abstract void InitializeStrongEnemies(Dictionary<string, Func<List<MonsterInfo>>> enemies);
    ///当前章节出现的精英敌人
    protected abstract void InitializeElites(Dictionary<string,Func<List<MonsterInfo>>> enemies);

    ///当前章节出现的Boss
    protected abstract void InitializeBoss(Dictionary<string, Func<List<MonsterInfo>>> enemies);
    ///在Init当中需要调用这个函数.避免玩家走不同路线出现的怪物的次序不一样的问题.
    private void InitEnemies(Dictionary<string,Func<List<MonsterInfo>>> pool,List<List<MonsterInfo>> list){
        string lastKey = string.Empty;
        for (var index = 0; index < 8; index++)
        {
            var x = pool.ElementAt(Mathf.FloorToInt(this.EnemiesRng.Next(0, pool.Count)));
            if(x.Key != lastKey || pool.Count == 1){
                list.Add(x.Value());
            }
            lastKey = x.Key;
        }
    }
    //public GetEnemies(isElite : boolean){
    //    if(!isElite){
    //        if(this.FloorNum < 6){
    //            if(this.WeakEnemiesList.length == 0){
    //                this.InitEnemies(this.WeakEnemiesPool,this.WeakEnemiesList);
    //            }
    //        }
    //        else{
    //            if(this.StrongEnemiesList.length == 0){
    //                this.InitEnemies(this.StrongEnemiesPool,this.StrongEnemiesList);
    //            }
    //        }
    //    }
    //    else{
    //        if(this.EliteList.length == 0){
    //            this.InitEnemies(this.ElitePool,this.EliteList);
    //        }
    //    }
    //}
}
}