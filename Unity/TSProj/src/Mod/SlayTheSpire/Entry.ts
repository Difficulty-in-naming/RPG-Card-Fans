//Mod的入口必须命名为Entry

//这里我们继承UnityBridge这样我们就可以更新我们的游戏逻辑了.也可以不继承
import {MainEntry, UnityBridge} from "../../MainEntry";
import {UI} from "../../Core/Module/UI/UIKit";
import UIKit = UI.UIKit;
import {UI_Title} from "./UI/ViewModel/UI_Title";
import {Log} from "../../Core/Module/Log/Log";
export class Entry implements UnityBridge
{
    constructor() 
    {
        let hello = UI_Title.CreatePanel();
        MainEntry.RegisterEntry(this);
    }
    OnUpdate() 
    {
        Log.Print("aaaa");
    }
    OnDestroy() {
    }
}
new Entry();