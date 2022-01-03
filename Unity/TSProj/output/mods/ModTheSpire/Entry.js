"use strict";
//Mod的入口必须命名为Entry
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entry = void 0;
//这里我们继承UnityBridge这样我们就可以更新我们的游戏逻辑了.也可以不继承
var MainEntry_1 = require("../../MainEntry");
var Ironclad_1 = require("./Scripts/Unit/Character/Ironclad");
var Defect_1 = require("./Scripts/Unit/Character/Defect");
var TheSilent_1 = require("./Scripts/Unit/Character/TheSilent");
var Watcher_1 = require("./Scripts/Unit/Character/Watcher");
var FileHelper_1 = require("./Scripts/FileHelper");
var EffectKit_1 = require("./Scripts/Effect/EffectKit");
var Cursor_1 = require("../../mods/ModTheSpire/Scripts/Cursor");
var DungeonManager_1 = require("../../mods/ModTheSpire/Scripts/DungeonManager");
var PlayerInfo_1 = require("../../mods/ModTheSpire/Scripts/Unit/Character/PlayerInfo");
var Exordium_1 = require("../../mods/ModTheSpire/Scripts/Dungeon/Exordium");
var UI_Title_1 = require("../../mods/ModTheSpire/Scripts/UI/ViewModel/UI_Title");
var CombatRoom_1 = require("../../mods/ModTheSpire/Scripts/Room/CombatRoom");
class Entry {
    constructor() {
        this.LoadConfig();
        PlayerInfo_1.AllPlayer.push(new Ironclad_1.default());
        PlayerInfo_1.AllPlayer.push(new Defect_1.default());
        PlayerInfo_1.AllPlayer.push(new TheSilent_1.default());
        PlayerInfo_1.AllPlayer.push(new Watcher_1.default());
        MainEntry_1.MainEntry.Inst().RegisterEntry(this);
        let hello = UI_Title_1.UI_Title.CreatePanel();
        DungeonManager_1.default.NewGame(new Ironclad_1.default(), "11");
        DungeonManager_1.default.Inst.CurrentDungeon = new Exordium_1.Exordium();
        DungeonManager_1.default.Inst.CurrentRoom = new CombatRoom_1.CombatRoom();
        this.Cursor = new Cursor_1.Cursor();
        MainEntry_1.MainEntry.Inst().RegisterEntry(this);
    }
    LoadConfig() {
        FileHelper_1.default.LoadConfig();
    }
    OnUpdate() {
        this.Cursor.Update();
        EffectKit_1.default.Inst().Update();
        if (DungeonManager_1.default.Inst) {
            DungeonManager_1.default.Inst.Update();
        }
    }
    OnDestroy() {
    }
}
exports.Entry = Entry;
new Entry();
//# sourceMappingURL=Entry.js.map