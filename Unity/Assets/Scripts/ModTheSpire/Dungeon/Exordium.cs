using System;
using System.Collections.Generic;
using ModTheSpire.Unit.Monster;
using UnityEngine;
using Random = UnityEngine.Random;

namespace ModTheSpire.Dungeon
{
    public class Exordium : AbstractDungeon
    {
    /*public string Name { get; } = LocalizationProperty.Read("塔底");
    public override int ActNum { get; } = 1;

    public override void Init()
    {
        base.Init();
        if(DungeonManager.Inst.IsEndless){
            if(DungeonManager.Inst.FloorNum <= 1){
                DungeonManager.Inst.BlightPool = new List<AbstractBlight>();
            }
        }
        else
            DungeonManager.Inst.BlightPool = new List<AbstractBlight>();
        var scene = UI_BottomScene.CreatePanel();
        Scene = scene;
        scene.View.visible = false;
        MediaManager.PlayMusic(FileHelper.FormatPath(Random.value < 0.5 ? "Audio/music/STS_Level1_NewMix_v1.ogg" : "Audio/music/STS_Level1-2_v2.ogg"));
    }

    protected override void InitializeLevelSpecificChances(RoomChance chance){
        chance.ShopRoomChance = 0.05f;
        chance.RestRoomChance = 0.12f;
        chance.TreasureRoomChance = 0.0f;
        chance.EventRoomChance = 0.22f;
        chance.EliteRoomChance = 0.08f;
        chance.SmallChestChance = 50;
        chance.MediumChestChance = 33;
        chance.LargeChestChance = 17;
        chance.CommonRelicChance = 50;
        chance.UncommonRelicChance = 33;
        chance.RareRelicChance = 17;
        chance.ColorlessRareChance = 0.3f;
        chance.CardUpgradedChance = 0.0f;
    }

    protected override void InitializeWeakEnemies(Dictionary<string, Func<List<MonsterInfo>>> enemies) {
        enemies.set(Cultist_Model.Id,()=>new Array(new Cultist_Model(0,0)));
        enemies.set(JawWorm_Model.Id,()=>new Array(new JawWorm_Model(0,0)));
        enemies.set("2 Louse",()=>{
            let array = new Array<MonsterInfo>();
            for(let i = 0;i<2;i++){
                this.GetLouse(array);
            }
            return array;
        });
        enemies.set("Small Slimes",()=>{
            let array = new Array<MonsterInfo>();
            if(Mathf.Random(this.MiscRng) < 0.5) {
                array.push(new SpikeSlime_S_Model(0,0));
                array.push(new AcidSlime_M_Model(0,0));
            }
            else {
                array.push(new AcidSlime_S_Model(0, 0));
                array.push(new SpikeSlime_M_Model(0,0));
            }
            return array;
        });
        //MonsterInfo.NormalizeWeights(enemies);
    }

    protected override void InitializeStrongEnemies(Dictionary<string, Func<List<MonsterInfo>>> enemies) {
        enemies.set(BlueSlaver_Model.Id,()=>new Array(new BlueSlaver_Model(0,0)));
        enemies.set("Gremlin Gang", ()=>{
            let pool = new Array<string>();
            let result = new Array<MonsterInfo>();
            let position = new Array<{x:number,y:number}>();
            position.push({x:1,y:1});
            position.push({x:2,y:2});
            position.push({x:3,y:3});
            position.push({x:4,y:4});
            pool.push(GremlinWarrior_Model.Id);
            pool.push(GremlinWarrior_Model.Id);
            pool.push(GremlinThief_Model.Id);
            pool.push(GremlinThief_Model.Id);
            pool.push(GremlinFat_Model.Id);
            pool.push(GremlinFat_Model.Id);
            pool.push(GremlinTsundere_Model.Id);
            pool.push(GremlinWizard_Model.Id);
            for(let i = 0;i<5;i++){
                let index = Math.trunc(Mathf.RandomRange(0,pool.length - 1,this.MiscRng));
                let index2 = Math.trunc(Mathf.RandomRange(0,position.length - 1,this.MiscRng));
                let key = pool[index];
                let getPos = position[index2];
                pool.splice(index,1);
                position.splice(index,1);
                if(key == GremlinWarrior_Model.Id){
                    result.push(new GremlinWarrior_Model(getPos.x,getPos.y));
                }else if(key == GremlinThief_Model.Id){
                    result.push(new GremlinThief_Model(getPos.x,getPos.y));
                }else if(key == GremlinFat_Model.Id){
                    result.push(new GremlinFat_Model(getPos.x,getPos.y));
                }else if(key == GremlinTsundere_Model.Id){
                    result.push(new GremlinTsundere_Model(getPos.x,getPos.y));
                }else if(key == GremlinWizard_Model.Id){
                    result.push(new GremlinWizard_Model(getPos.x,getPos.y));
                }
            }
            return result;
        });
        enemies.set(Looter_Model.Id,()=>new Array(new Looter_Model(0,0)));
        enemies.set("Large Slime",()=>{
            if(Mathf.Random(this.MiscRng) < 0.5){
                return new Array(new AcidSlime_L_Model(0,0));
            }
            return new Array(new SpikeSlime_L_Model(0,0));
        });
        enemies.set("Lots of Slimes", ()=>{
            let pool = new Array<string>();
            let result = new Array<MonsterInfo>();
            let position = new Array<{x:number,y:number}>();
            position.push({x:1,y:1});
            position.push({x:2,y:2});
            position.push({x:3,y:3});
            position.push({x:4,y:4});
            position.push({x:5,y:5});
            pool.push(SpikeSlime_S_Model.Id);
            pool.push(SpikeSlime_S_Model.Id);
            pool.push(SpikeSlime_S_Model.Id);
            pool.push(AcidSlime_S_Model.Id);
            pool.push(AcidSlime_S_Model.Id);
            for(let i = 0;i<5;i++){
                let index = Math.trunc(Mathf.RandomRange(0,pool.length - 1,this.MiscRng));
                let getPos = position[index];
                let key = pool[index];
                pool.splice(index,1);
                position.splice(index,1);
                if(key == SpikeSlime_S_Model.Id){
                    result.push(new SpikeSlime_S_Model(getPos.x,getPos.y));
                }else if(key == AcidSlime_S_Model.Id){
                    result.push(new AcidSlime_S_Model(getPos.x,getPos.y));
                }
            }
            return result;
        });
        enemies.set("Exordium Thugs",()=>{
            let result = new Array<MonsterInfo>();
            result.push(this.GetWeakMonster());
            result.push(this.GetStrongMonster());
            return result;
        });
        enemies.set("Exordium Wildlife",()=>{
            let result = new Array<MonsterInfo>();
            result.push(this.GetStrongMonster());
            result.push(this.GetWeakMonster());
            return result;
        });
        enemies.set(RedSlaver_Model.Id,()=>new Array(new RedSlaver_Model(0,0)));
        enemies.set("3 Louse", ()=>{
            let array = new Array<MonsterInfo>();
            for(let i = 0;i<3;i++){
                this.GetLouse(array);
            }
            return array;
        });
        enemies.set("2 Fungi Beasts", ()=> [new FungiBeast_Model(0,0),new FungiBeast_Model(0,0)]);
        //MonsterInfo.NormalizeWeights(enemies);
    }

    protected override void InitializeElites(Dictionary<string, Func<List<MonsterInfo>>> enemies) {
        enemies.set(GremlinNob_Model.Id, ()=>new Array(new GremlinNob_Model(0,0)));
        enemies.set(Lagavulin_Model.Id, ()=>new Array(new Lagavulin_Model(0,0)));
        enemies.set("3 Sentries", ()=>{
            let array = new Array<MonsterInfo>();
            for(let i = 0;i<3;i++){
                array.push(new Sentry_Model(0,0));
            }
            return array;
        });
        //MonsterInfo.NormalizeWeights(enemies);
    }

    protected override void InitializeBoss(Dictionary<string, Func<List<MonsterInfo>>> enemies) {
        enemies.set(TheGuardian_Model.Id,()=>new Array(new TheGuardian_Model(0,0)));
        enemies.set(Hexaghost_Model.Id,()=>new Array(new Hexaghost_Model(0,0)));
        enemies.set(SlimeBoss_Model.Id,()=>new Array(new SlimeBoss_Model(0,0)));
    }
    
    private void MonsterInfo GetWeakMonster() {
        let pool = new Array<MonsterInfo>();
        pool.push(new JawWorm_Model(0,0));
        pool.push(new Cultist_Model(0,0));
        return pool[Math.trunc(Mathf.RandomRange(0,pool.length,this.MiscRng))];
    }
    
    private void MonsterInfo GetStrongMonster() {
        let pool = new Array<MonsterInfo>();
        pool.push(new Looter_Model(0,0));
        pool.push(new BlueSlaver_Model(0,0));
        pool.push(new RedSlaver_Model(0,0));
        pool.push(new FungiBeast_Model(0,0));
        return pool[Math.trunc(Mathf.RandomRange(0,pool.length,this.MiscRng))];
    }

    private void GetLouse(MonsterInfo[] array) {
        if (Mathf.Random(this.MiscRng) < 0.5)
            array.push(new LouseNormal_Model(0, 0));
        else
            array.push(new LouseDefensive_Model(0, 0));
    }

    protected override void  InitializeRelicList(List<string> relics) {
    }

    protected override void  InitializeEventList(List<string> events) {
        events.Add("Big Fish");
        events.Add("The Cleric");
        events.Add("Dead Adventurer");
        events.Add("Golden Idol");
        events.Add("Golden Wing");
        events.Add("World of Goop");
        events.Add("Liars Game");
        events.Add("Living Wall");
        events.Add("Mushrooms");
        events.Add("Scrap Ooze");
        events.Add("Shining Light");
    }

    protected override void  InitializeShrineList(List<string> events) {
        events.Add("Match and Keep!");
        events.Add("Golden Shrine");
        events.Add("Transmorgrifier");
        events.Add("Purifier");
        events.Add("Upgrade Shrine");
        events.Add("Wheel of Change");
    }*/
    public override int ActNum { get; }
    protected override void InitializeRelicList(List<string> relics)
    {
        throw new NotImplementedException();
    }

    protected override void InitializeEventList(List<string> events)
    {
        throw new NotImplementedException();
    }

    protected override void InitializeShrineList(List<string> events)
    {
        throw new NotImplementedException();
    }

    protected override void InitializeLevelSpecificChances(RoomChance chance)
    {
        throw new NotImplementedException();
    }

    protected override void InitializeWeakEnemies(Dictionary<string, Func<List<MonsterInfo>>> enemies)
    {
        throw new NotImplementedException();
    }

    protected override void InitializeStrongEnemies(Dictionary<string, Func<List<MonsterInfo>>> enemies)
    {
        throw new NotImplementedException();
    }

    protected override void InitializeElites(Dictionary<string, Func<List<MonsterInfo>>> enemies)
    {
        throw new NotImplementedException();
    }

    protected override void InitializeBoss(Dictionary<string, Func<List<MonsterInfo>>> enemies)
    {
        throw new NotImplementedException();
    }
    }
}