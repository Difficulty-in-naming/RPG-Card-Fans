"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exordium = void 0;
const csharp_1 = require("csharp");
const Mathf_1 = require("../../../../Core/Module/Math/Mathf");
const DungeonManager_1 = require("../DungeonManager");
const FileHelper_1 = require("../FileHelper");
const Localization_1 = require("../Gen/DB/Localization");
const UI_BottomScene_1 = require("../UI/ViewModel/UI_BottomScene");
const AcidSlime_L_Model_1 = require("../Unit/Monster/Model/TheBottom/AcidSlime_L_Model");
const AcidSlime_M_Model_1 = require("../Unit/Monster/Model/TheBottom/AcidSlime_M_Model");
const AcidSlime_S_Model_1 = require("../Unit/Monster/Model/TheBottom/AcidSlime_S_Model");
const BlueSlaver_Model_1 = require("../Unit/Monster/Model/TheBottom/BlueSlaver_Model");
const Cultist_Model_1 = require("../Unit/Monster/Model/TheBottom/Cultist_Model");
const FungiBeast_Model_1 = require("../Unit/Monster/Model/TheBottom/FungiBeast_Model");
const GremlinFat_Model_1 = require("../Unit/Monster/Model/TheBottom/GremlinFat_Model");
const GremlinNob_Model_1 = require("../Unit/Monster/Model/TheBottom/GremlinNob_Model");
const GremlinThief_Model_1 = require("../Unit/Monster/Model/TheBottom/GremlinThief_Model");
const GremlinTsundere_Model_1 = require("../Unit/Monster/Model/TheBottom/GremlinTsundere_Model");
const GremlinWarrior_Model_1 = require("../Unit/Monster/Model/TheBottom/GremlinWarrior_Model");
const GremlinWizard_Model_1 = require("../Unit/Monster/Model/TheBottom/GremlinWizard_Model");
const Hexaghost_Model_1 = require("../Unit/Monster/Model/TheBottom/Hexaghost_Model");
const JawWorm_Model_1 = require("../Unit/Monster/Model/TheBottom/JawWorm_Model");
const Lagavulin_Model_1 = require("../Unit/Monster/Model/TheBottom/Lagavulin_Model");
const Looter_Model_1 = require("../Unit/Monster/Model/TheBottom/Looter_Model");
const LouseDefensive_Model_1 = require("../Unit/Monster/Model/TheBottom/LouseDefensive_Model");
const LouseNormal_Model_1 = require("../Unit/Monster/Model/TheBottom/LouseNormal_Model");
const RedSlaver_Model_1 = require("../Unit/Monster/Model/TheBottom/RedSlaver_Model");
const Sentry_Model_1 = require("../Unit/Monster/Model/TheBottom/Sentry_Model");
const SlimeBoss_Model_1 = require("../Unit/Monster/Model/TheBottom/SlimeBoss_Model");
const SpikeSlime_L_Model_1 = require("../Unit/Monster/Model/TheBottom/SpikeSlime_L_Model");
const SpikeSlime_M_Model_1 = require("../Unit/Monster/Model/TheBottom/SpikeSlime_M_Model");
const SpikeSlime_S_Model_1 = require("../Unit/Monster/Model/TheBottom/SpikeSlime_S_Model");
const TheGuardian_Model_1 = require("../Unit/Monster/Model/TheBottom/TheGuardian_Model");
const AbstractDungeon_1 = require("./AbstractDungeon");
class Exordium extends AbstractDungeon_1.AbstractDungeon {
    Name = Localization_1.LocalizationProperty.Read("塔底");
    Init() {
        super.Init();
        if (DungeonManager_1.default.Inst.IsEndless) {
            if (DungeonManager_1.default.Inst.FloorNum <= 1) {
                DungeonManager_1.default.Inst.BlightPool = new Array();
            }
        }
        else
            DungeonManager_1.default.Inst.BlightPool = new Array();
        let scene = UI_BottomScene_1.UI_BottomScene.CreatePanel();
        this.Scene = scene;
        scene.View.visible = false;
        csharp_1.MediaManager.PlayMusic(FileHelper_1.default.FormatPath(Mathf_1.Mathf.Random() < 0.5 ? "Audio/music/STS_Level1_NewMix_v1.ogg" : "Audio/music/STS_Level1-2_v2.ogg"));
    }
    InitializeLevelSpecificChances(chance) {
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
    InitializeWeakEnemies(enemies) {
        enemies.set(Cultist_Model_1.Cultist_Model.Id, () => new Array(new Cultist_Model_1.Cultist_Model(0, 0)));
        enemies.set(JawWorm_Model_1.JawWorm_Model.Id, () => new Array(new JawWorm_Model_1.JawWorm_Model(0, 0)));
        enemies.set("2 Louse", () => {
            let array = new Array();
            for (let i = 0; i < 2; i++) {
                this.GetLouse(array);
            }
            return array;
        });
        enemies.set("Small Slimes", () => {
            let array = new Array();
            if (Mathf_1.Mathf.Random(this.MiscRng) < 0.5) {
                array.push(new SpikeSlime_S_Model_1.SpikeSlime_S_Model(0, 0));
                array.push(new AcidSlime_M_Model_1.AcidSlime_M_Model(0, 0));
            }
            else {
                array.push(new AcidSlime_S_Model_1.AcidSlime_S_Model(0, 0));
                array.push(new SpikeSlime_M_Model_1.SpikeSlime_M_Model(0, 0));
            }
            return array;
        });
        //MonsterInfo.NormalizeWeights(enemies);
    }
    InitializeStrongEnemies(enemies) {
        enemies.set(BlueSlaver_Model_1.BlueSlaver_Model.Id, () => new Array(new BlueSlaver_Model_1.BlueSlaver_Model(0, 0)));
        enemies.set("Gremlin Gang", () => {
            let pool = new Array();
            let result = new Array();
            let position = new Array();
            position.push({ x: 1, y: 1 });
            position.push({ x: 2, y: 2 });
            position.push({ x: 3, y: 3 });
            position.push({ x: 4, y: 4 });
            pool.push(GremlinWarrior_Model_1.GremlinWarrior_Model.Id);
            pool.push(GremlinWarrior_Model_1.GremlinWarrior_Model.Id);
            pool.push(GremlinThief_Model_1.GremlinThief_Model.Id);
            pool.push(GremlinThief_Model_1.GremlinThief_Model.Id);
            pool.push(GremlinFat_Model_1.GremlinFat_Model.Id);
            pool.push(GremlinFat_Model_1.GremlinFat_Model.Id);
            pool.push(GremlinTsundere_Model_1.GremlinTsundere_Model.Id);
            pool.push(GremlinWizard_Model_1.GremlinWizard_Model.Id);
            while (result.length <= 4) {
                let index = Mathf_1.Mathf.RandomRange(0, pool.length - 1, this.MiscRng);
                let key = pool[index];
                pool.splice(index, 1);
                let getPos = position[result.length];
                if (key == GremlinWarrior_Model_1.GremlinWarrior_Model.Id) {
                    result.push(new GremlinWarrior_Model_1.GremlinWarrior_Model(getPos.x, getPos.y));
                }
                else if (key == GremlinThief_Model_1.GremlinThief_Model.Id) {
                    result.push(new GremlinThief_Model_1.GremlinThief_Model(getPos.x, getPos.y));
                }
                else if (key == GremlinFat_Model_1.GremlinFat_Model.Id) {
                    result.push(new GremlinFat_Model_1.GremlinFat_Model(getPos.x, getPos.y));
                }
                else if (key == GremlinTsundere_Model_1.GremlinTsundere_Model.Id) {
                    result.push(new GremlinTsundere_Model_1.GremlinTsundere_Model(getPos.x, getPos.y));
                }
                else if (key == GremlinWizard_Model_1.GremlinWizard_Model.Id) {
                    result.push(new GremlinWizard_Model_1.GremlinWizard_Model(getPos.x, getPos.y));
                }
            }
            return result;
        });
        enemies.set(Looter_Model_1.Looter_Model.Id, () => new Array(new Looter_Model_1.Looter_Model(0, 0)));
        enemies.set("Large Slime", () => {
            if (Mathf_1.Mathf.Random(this.MiscRng) < 0.5) {
                return new Array(new AcidSlime_L_Model_1.AcidSlime_L_Model(0, 0));
            }
            return new Array(new SpikeSlime_L_Model_1.SpikeSlime_L_Model(0, 0));
        });
        enemies.set("Lots of Slimes", () => {
            let pool = new Array();
            let result = new Array();
            let position = new Array();
            position.push({ x: 1, y: 1 });
            position.push({ x: 2, y: 2 });
            position.push({ x: 3, y: 3 });
            position.push({ x: 4, y: 4 });
            position.push({ x: 5, y: 5 });
            pool.push(SpikeSlime_S_Model_1.SpikeSlime_S_Model.Id);
            pool.push(SpikeSlime_S_Model_1.SpikeSlime_S_Model.Id);
            pool.push(SpikeSlime_S_Model_1.SpikeSlime_S_Model.Id);
            pool.push(AcidSlime_S_Model_1.AcidSlime_S_Model.Id);
            pool.push(AcidSlime_S_Model_1.AcidSlime_S_Model.Id);
            while (result.length <= 4) {
                let index = Mathf_1.Mathf.RandomRange(0, pool.length - 1, this.MiscRng);
                let key = pool[index];
                pool.splice(index, 1);
                let getPos = position[result.length];
                if (key == SpikeSlime_S_Model_1.SpikeSlime_S_Model.Id) {
                    result.push(new SpikeSlime_S_Model_1.SpikeSlime_S_Model(getPos.x, getPos.y));
                }
                else if (key == AcidSlime_S_Model_1.AcidSlime_S_Model.Id) {
                    result.push(new AcidSlime_S_Model_1.AcidSlime_S_Model(getPos.x, getPos.y));
                }
            }
            return result;
        });
        enemies.set("Exordium Thugs", () => {
            let result = new Array();
            result.push(this.GetWeakMonster());
            result.push(this.GetStrongMonster());
            return result;
        });
        enemies.set("Exordium Wildlife", () => {
            let result = new Array();
            result.push(this.GetStrongMonster());
            result.push(this.GetWeakMonster());
            return result;
        });
        enemies.set(RedSlaver_Model_1.RedSlaver_Model.Id, () => new Array(new RedSlaver_Model_1.RedSlaver_Model(0, 0)));
        enemies.set("3 Louse", () => {
            let array = new Array();
            for (let i = 0; i < 3; i++) {
                this.GetLouse(array);
            }
            return array;
        });
        enemies.set("2 Fungi Beasts", () => [new FungiBeast_Model_1.FungiBeast_Model(0, 0), new FungiBeast_Model_1.FungiBeast_Model(0, 0)]);
        //MonsterInfo.NormalizeWeights(enemies);
    }
    InitializeElites(enemies) {
        enemies.set(GremlinNob_Model_1.GremlinNob_Model.Id, () => new Array(new GremlinNob_Model_1.GremlinNob_Model(0, 0)));
        enemies.set(Lagavulin_Model_1.Lagavulin_Model.Id, () => new Array(new Lagavulin_Model_1.Lagavulin_Model(0, 0)));
        enemies.set("3 Sentries", () => {
            let array = new Array();
            for (let i = 0; i < 3; i++) {
                array.push(new Sentry_Model_1.Sentry_Model(0, 0));
            }
            return array;
        });
        //MonsterInfo.NormalizeWeights(enemies);
    }
    InitializeBoss(enemies) {
        enemies.set(TheGuardian_Model_1.TheGuardian_Model.Id, () => new Array(new TheGuardian_Model_1.TheGuardian_Model(0, 0)));
        enemies.set(Hexaghost_Model_1.Hexaghost_Model.Id, () => new Array(new Hexaghost_Model_1.Hexaghost_Model(0, 0)));
        enemies.set(SlimeBoss_Model_1.SlimeBoss_Model.Id, () => new Array(new SlimeBoss_Model_1.SlimeBoss_Model(0, 0)));
    }
    GetWeakMonster() {
        let pool = new Array();
        pool.push(new JawWorm_Model_1.JawWorm_Model(0, 0));
        pool.push(new Cultist_Model_1.Cultist_Model(0, 0));
        return pool[Mathf_1.Mathf.RandomRange(0, pool.length - 1, this.MiscRng)];
    }
    GetStrongMonster() {
        let pool = new Array();
        pool.push(new Looter_Model_1.Looter_Model(0, 0));
        pool.push(new BlueSlaver_Model_1.BlueSlaver_Model(0, 0));
        pool.push(new RedSlaver_Model_1.RedSlaver_Model(0, 0));
        pool.push(new FungiBeast_Model_1.FungiBeast_Model(0, 0));
        return pool[Mathf_1.Mathf.RandomRange(0, pool.length - 1, this.MiscRng)];
    }
    GetLouse(array) {
        if (Mathf_1.Mathf.Random(this.MiscRng) < 0.5)
            array.push(new LouseNormal_Model_1.LouseNormal_Model(0, 0));
        else
            array.push(new LouseDefensive_Model_1.LouseDefensive_Model(0, 0));
    }
    InitializeRelicList(relics) {
    }
    InitializeEventList(events) {
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
    InitializeShrineList(events) {
        events.push("Match and Keep!");
        events.push("Golden Shrine");
        events.push("Transmorgrifier");
        events.push("Purifier");
        events.push("Upgrade Shrine");
        events.push("Wheel of Change");
    }
    get ActNum() {
        return 1;
    }
}
exports.Exordium = Exordium;
//# sourceMappingURL=Exordium.js.map