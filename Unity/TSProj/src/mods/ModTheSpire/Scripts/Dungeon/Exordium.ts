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
import {Cultist} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/Cultist";
import {JawWorm} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/JawWorm";
import {LouseNormal} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/LouseNormal";
import {LouseDefensive} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/LouseDefensive";
import {SpikeSlime_S} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/SpikeSlime_S";
import {AcidSlime_M} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/AcidSlime_M";
import {AcidSlime_S} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/AcidSlime_S";
import {SpikeSlime_M} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/SpikeSlime_M";
import {BlueSlaver} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/BlueSlaver";
import {GremlinWizard} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/GremlinWizard";
import {GremlinWarrior} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/GremlinWarrior";
import {GremlinTsundere} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/GremlinTsundere";
import {GremlinFat} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/GremlinFat";
import {GremlinThief} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/GremlinThief";
import {Looter} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/Looter";
import {AcidSlime_L_Model} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/AcidSlime_L_Model";
import {SpikeSlime_L} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/SpikeSlime_L";
import {RedSlaver} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/RedSlaver";
import {FungiBeast} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/FungiBeast";
import {GremlinNob} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/GremlinNob";
import {Lagavulin} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/Lagavulin";
import {Sentry} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/Sentry";
import {TheGuardian} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/TheGuardian";
import {Hexaghost} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/Hexaghost";
import {SlimeBoss} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/SlimeBoss";

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
        enemies.set(Cultist.Id,()=>new Array(new Cultist(0,0)));
        enemies.set(JawWorm.Id,()=>new Array(new JawWorm(0,0)));
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
                array.push(new SpikeSlime_S(0,0));
                array.push(new AcidSlime_M(0,0));
            }
            else {
                array.push(new AcidSlime_S(0, 0));
                array.push(new SpikeSlime_M(0,0));
            }
            return array;
        });
        //MonsterInfo.NormalizeWeights(enemies);
    }

    InitializeStrongEnemies(enemies:Map<string,()=>Array<MonsterInfo>>) {
        enemies.set(BlueSlaver.Id,()=>new Array(new BlueSlaver(0,0)));
        enemies.set("Gremlin Gang", ()=>{
            let pool = new Array<string>();
            let result = new Array<MonsterInfo>();
            let position = new Array<{x:number,y:number}>();
            position.push({x:1,y:1});
            position.push({x:2,y:2});
            position.push({x:3,y:3});
            position.push({x:4,y:4});
            pool.push(GremlinWarrior.Id);
            pool.push(GremlinWarrior.Id);
            pool.push(GremlinThief.Id);
            pool.push(GremlinThief.Id);
            pool.push(GremlinFat.Id);
            pool.push(GremlinFat.Id);
            pool.push(GremlinTsundere.Id);
            pool.push(GremlinWizard.Id);
            while(result.length <= 4){
                let index = Mathf.RandomRange(0,pool.length - 1,this.MiscRng);
                let key = pool[index];
                pool.splice(index,1);
                let getPos = position[result.length];
                if(key == GremlinWarrior.Id){
                    result.push(new GremlinWarrior(getPos.x,getPos.y));
                }else if(key == GremlinThief.Id){
                    result.push(new GremlinThief(getPos.x,getPos.y));
                }else if(key == GremlinFat.Id){
                    result.push(new GremlinFat(getPos.x,getPos.y));
                }else if(key == GremlinTsundere.Id){
                    result.push(new GremlinTsundere(getPos.x,getPos.y));
                }else if(key == GremlinWizard.Id){
                    result.push(new GremlinWizard(getPos.x,getPos.y));
                }
            }
            return result;
        });
        enemies.set(Looter.Id,()=>new Array(new Looter(0,0)));
        enemies.set("Large Slime",()=>{
            if(Mathf.Random(this.MiscRng) < 0.5){
                return new Array(new AcidSlime_L_Model(0,0));
            }
            return new Array(new SpikeSlime_L(0,0));
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
            pool.push(SpikeSlime_S.Id);
            pool.push(SpikeSlime_S.Id);
            pool.push(SpikeSlime_S.Id);
            pool.push(AcidSlime_S.Id);
            pool.push(AcidSlime_S.Id);
            while(result.length <= 4){
                let index = Mathf.RandomRange(0,pool.length - 1,this.MiscRng);
                let key = pool[index];
                pool.splice(index,1);
                let getPos = position[result.length];
                if(key == SpikeSlime_S.Id){
                    result.push(new SpikeSlime_S(getPos.x,getPos.y));
                }else if(key == AcidSlime_S.Id){
                    result.push(new AcidSlime_S(getPos.x,getPos.y));
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
        enemies.set(RedSlaver.Id,()=>new Array(new RedSlaver(0,0)));
        enemies.set("3 Louse", ()=>{
            let array = new Array<MonsterInfo>();
            for(let i = 0;i<3;i++){
                this.GetLouse(array);
            }
            return array;
        });
        enemies.set("2 Fungi Beasts", ()=> [new FungiBeast(0,0),new FungiBeast(0,0)]);
        //MonsterInfo.NormalizeWeights(enemies);
    }

    InitializeElites(enemies:Map<string,()=>Array<MonsterInfo>>) {
        enemies.set(GremlinNob.Id, ()=>new Array(new GremlinNob(0,0)));
        enemies.set(Lagavulin.Id, ()=>new Array(new Lagavulin(0,0)));
        enemies.set("3 Sentries", ()=>{
            let array = new Array<MonsterInfo>();
            for(let i = 0;i<3;i++){
                array.push(new Sentry(0,0));
            }
            return array;
        });
        //MonsterInfo.NormalizeWeights(enemies);
    }

    protected InitializeBoss(enemies: Map<string,()=>Array<MonsterInfo>>) {
        enemies.set(TheGuardian.Id,()=>new Array(new TheGuardian(0,0)));
        enemies.set(Hexaghost.Id,()=>new Array(new Hexaghost(0,0)));
        enemies.set(SlimeBoss.Id,()=>new Array(new SlimeBoss(0,0)));
    }
    
    private GetWeakMonster() : MonsterInfo{
        let pool = new Array<MonsterInfo>();
        pool.push(new JawWorm(0,0));
        pool.push(new Cultist(0,0));
        return pool[Mathf.RandomRange(0,pool.length - 1,this.MiscRng)];
    }
    
    private GetStrongMonster() : MonsterInfo{
        let pool = new Array<MonsterInfo>();
        pool.push(new Looter(0,0));
        pool.push(new BlueSlaver(0,0));
        pool.push(new RedSlaver(0,0));
        pool.push(new FungiBeast(0,0));
        return pool[Mathf.RandomRange(0,pool.length - 1,this.MiscRng)];
    }

    private GetLouse(array: MonsterInfo[]) {
        if (Mathf.Random(this.MiscRng) < 0.5)
            array.push(new LouseNormal(0, 0));
        else
            array.push(new LouseDefensive(0, 0));
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