//Mod的入口必须命名为Entry

//这里我们继承UnityBridge这样我们就可以更新我们的游戏逻辑了.也可以不继承
import {MainEntry, UnityBridge} from "../../MainEntry";
import Ironclad from "./Scripts/Unit/Character/Ironclad";
import Defect from "./Scripts/Unit/Character/Defect";
import TheSilent from "./Scripts/Unit/Character/TheSilent";
import Watcher from "./Scripts/Unit/Character/Watcher";
import FileHelper from "./Scripts/FileHelper";
import EffectKit from "./Scripts/Effect/EffectKit";
import {UI_Title} from "mods/ModTheSpire/Scripts/UI/ViewModel/UI_Title";
import {Cursor} from "mods/ModTheSpire/Scripts/Cursor";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {AllPlayer} from "mods/ModTheSpire/Scripts/Unit/Character/PlayerInfo";
import {UI_BottomScene} from "mods/ModTheSpire/Scripts/UI/ViewModel/UI_BottomScene";
import Rand from "Core/Module/RandomGenerator";
import UI_TopBar from "mods/ModTheSpire/Scripts/UI/ViewModel/UI_TopBar";
import {UI_Combat} from "mods/ModTheSpire/Scripts/UI/ViewModel/UI_Combat";
import {Exordium} from "mods/ModTheSpire/Scripts/Dungeon/Exordium";
import { Cysharp } from "csharp";
import {Log} from "Core/Module/Log/Log";
import { $promise } from "puerts";
import Async from "Core/Async";

export class Entry implements UnityBridge
{
    private Cursor:Cursor;
    constructor() 
    {
        this.test();
        return;
        this.LoadConfig();
        AllPlayer.push(new Ironclad());
        AllPlayer.push(new Defect());
        AllPlayer.push(new TheSilent());
        AllPlayer.push(new Watcher());
        MainEntry.Inst().RegisterEntry(this);
        //let hello = UI_Title.CreatePanel();
        DungeonManager.NewGame(new Ironclad(),"11")
        DungeonManager.Inst.CurrentDungeon = new Exordium();
        this.Cursor = new Cursor();
    }
    
    public async test(){
        Log.Print("123123");
    }

    LoadConfig()
    {
        FileHelper.LoadConfig();
    }
    OnUpdate() 
    {
        this.Cursor.Update();
        EffectKit.Inst().Update();
        if(DungeonManager.Inst){
            DungeonManager.Inst.Update();
        }
    }
    OnDestroy() {
    }
}
new Entry();