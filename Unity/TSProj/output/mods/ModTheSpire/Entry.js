"use strict";
//Mod的入口必须命名为Entry
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entry = void 0;
//这里我们继承UnityBridge这样我们就可以更新我们的游戏逻辑了.也可以不继承
var MainEntry_1 = require("../../MainEntry");
var FileHelper_1 = require("./Scripts/FileHelper");
var Log_1 = require("../../Core/Module/Log/Log");
class Entry {
    constructor() {
        /*         this.LoadConfig();
                AllPlayer.push(new Ironclad());
                AllPlayer.push(new Defect());
                AllPlayer.push(new TheSilent());
                AllPlayer.push(new Watcher());
                MainEntry.Inst().RegisterEntry(this);
                //let hello = UI_Title.CreatePanel();
                DungeonManager.NewGame(new Ironclad(),"11")
                DungeonManager.Inst.CurrentDungeon = new Exordium();
                DungeonManager.Inst.CurrentRoom = new CombatRoom();
                this.Cursor = new Cursor(); */
        MainEntry_1.MainEntry.Inst().RegisterEntry(this);
    }
    LoadConfig() {
        FileHelper_1.default.LoadConfig();
    }
    OnUpdate() {
        Log_1.Log.Print("!hello world");
        // this.Cursor.Update();
        // EffectKit.Inst().Update();
        // if(DungeonManager.Inst){
        //     DungeonManager.Inst.Update();
        // }
    }
    OnDestroy() {
    }
}
exports.Entry = Entry;
new Entry();
//# sourceMappingURL=Entry.js.map