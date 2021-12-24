import {AbstractDungeon, RoomChance} from "mods/ModTheSpire/Scripts/Dungeon/AbstractDungeon";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {AbstractBlight} from "mods/ModTheSpire/Scripts/Blight/AbstractBlight";
import {UI_BottomScene} from "mods/ModTheSpire/Scripts/UI/ViewModel/UI_BottomScene";
import { MediaManager } from "csharp";
import {Mathf} from "Core/Module/Math/Mathf";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import {MonsterInfo} from "mods/ModTheSpire/Scripts/Unit/Monster/MonsterInfo";
import {MonsterGroup} from "mods/ModTheSpire/Scripts/Unit/Monster/MonsterGroup";
import {JawWorm_Model} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/JawWorm_Model";
import {LouseNormal_Model} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/LouseNormal_Model";
import {LouseDefensive_Model} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/LouseDefensive_Model";
import {SpikeSlime_S_Model} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/SpikeSlime_S_Model";
import {SpikeSlime_M_Model} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/SpikeSlime_M_Model";
import {GremlinWizard_Model} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/GremlinWizard_Model";
import {GremlinWarrior_Model} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/GremlinWarrior_Model";
import {GremlinTsundere_Model} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/GremlinTsundere_Model";
import {GremlinFat_Model} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/GremlinFat_Model";
import {GremlinThief_Model} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/GremlinThief_Model";
import {Looter_Model} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/Looter_Model";
import {AcidSlime_L_Model} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/AcidSlime_L_Model";
import {SpikeSlime_L_Model} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/SpikeSlime_L_Model";
import {RedSlaver_Model} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/RedSlaver_Model";
import {FungiBeast_Model} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/FungiBeast_Model";
import {GremlinNob_Model} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/GremlinNob_Model";
import {Lagavulin_Model} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/Lagavulin_Model";
import {Sentry_Model} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/Sentry_Model";
import {TheGuardian_Model} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/TheGuardian_Model";
import {Hexaghost_Model} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/Hexaghost_Model";
import {SlimeBoss_Model} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/SlimeBoss_Model";
import {Cultist_Model} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/Cultist_Model";
import {AcidSlime_M_Model} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/AcidSlime_M_Model";
import {AcidSlime_S_Model} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/AcidSlime_S_Model";
import {BlueSlaver_Model} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/BlueSlaver_Model";

export class Exordium extends AbstractDungeon{
    public Name = LocalizationProperty.Read("塔底");
    Init() {
        super.Init();
        if(DungeonManager.Inst.IsEndless){
            if(DungeonManager.Inst.FloorNum <= 1){
                DungeonManager.Inst.BlightPool = new Array<AbstractBlight>();
            }
        }
        else
            DungeonManager.Inst.BlightPool = new Array<AbstractBlight>();
        let scene = UI_BottomScene.CreatePanel();
        this.Scene = scene;
        scene.View.visible = false;
        MediaManager.PlayMusic(FileHelper.FormatPath(Mathf.Random() < 0.5 ? "Audio/music/STS_Level1_NewMix_v1.ogg" : "Audio/music/STS_Level1-2_v2.ogg"));
    }

    InitializeLevelSpecificChances(chance:RoomChance){
        chance.ShopRoomChance = 0.05;
        chance.RestRoomChance = 0.12;
        chance.TreasureRoomChance = 0.0;
        chance.EventRoomChance = 0.22;
        chance.EliteRoomChance = 0.08;
        chance.SmallChestChance = 50;
        chance.MediumChestChance = 33;
        chance.LargeChestChance = 17;
        chance.CommonRelicChance = 50;
        chance.UncommonRelicChance = 33;
        chance.RareRelicChance = 17;
        chance.ColorlessRareChance = 0.3;
        chance.CardUpgradedChance = 0.0;
    }

    InitializeWeakEnemies(enemies:Map<string,()=>Array<MonsterInfo>>) {
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

    InitializeStrongEnemies(enemies:Map<string,()=>Array<MonsterInfo>>) {
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
            while(result.length <= 4){
                let index = Mathf.RandomRange(0,pool.length - 1,this.MiscRng);
                let key = pool[index];
                pool.splice(index,1);
                let getPos = position[result.length];
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
            while(result.length <= 4){
                let index = Mathf.RandomRange(0,pool.length - 1,this.MiscRng);
                let key = pool[index];
                pool.splice(index,1);
                let getPos = position[result.length];
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

    InitializeElites(enemies:Map<string,()=>Array<MonsterInfo>>) {
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

    protected InitializeBoss(enemies: Map<string,()=>Array<MonsterInfo>>) {
        enemies.set(TheGuardian_Model.Id,()=>new Array(new TheGuardian_Model(0,0)));
        enemies.set(Hexaghost_Model.Id,()=>new Array(new Hexaghost_Model(0,0)));
        enemies.set(SlimeBoss_Model.Id,()=>new Array(new SlimeBoss_Model(0,0)));
    }
    
    private GetWeakMonster() : MonsterInfo{
        let pool = new Array<MonsterInfo>();
        pool.push(new JawWorm_Model(0,0));
        pool.push(new Cultist_Model(0,0));
        return pool[Mathf.RandomRange(0,pool.length - 1,this.MiscRng)];
    }
    
    private GetStrongMonster() : MonsterInfo{
        let pool = new Array<MonsterInfo>();
        pool.push(new Looter_Model(0,0));
        pool.push(new BlueSlaver_Model(0,0));
        pool.push(new RedSlaver_Model(0,0));
        pool.push(new FungiBeast_Model(0,0));
        return pool[Mathf.RandomRange(0,pool.length - 1,this.MiscRng)];
    }

    private GetLouse(array: MonsterInfo[]) {
        if (Mathf.Random(this.MiscRng) < 0.5)
            array.push(new LouseNormal_Model(0, 0));
        else
            array.push(new LouseDefensive_Model(0, 0));
    }

    protected InitializeRelicList(relics: Array<string>) {
    }

    protected InitializeEventList(events: Array<string>) {
        events.push("Big Fish");
        events.push("The Cleric");
        events.push("Dead Adventurer");
        events.push("Golden Idol");
        events.push("Golden Wing");
        events.push("World of Goop");
        events.push("Liars Game");
        events.push("Living Wall");
        events.push("Mushrooms");
        events.push("Scrap Ooze");
        events.push("Shining Light");
    }

    protected InitializeShrineList(events: Array<string>) {
        events.push("Match and Keep!");
        events.push("Golden Shrine");
        events.push("Transmorgrifier");
        events.push("Purifier");
        events.push("Upgrade Shrine");
        events.push("Wheel of Change");
    }
    
    get ActNum(): number {
        return 1;
    }
}