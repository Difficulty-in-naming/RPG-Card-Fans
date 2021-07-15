import * as core from 'csharp';
import {UI} from "Core/Module/UI/UIKit";
import UIKit = UI.UIKit;
import QueueMessageKit from "./Core/QueueMessageKit";
import {TimeKit} from "Core/Utils/TimeKit";
import * as TWEEN from "Core/Module/Tween";
import { MediaManager } from 'csharp';
export interface UnityBridge {
    OnUpdate();
    OnDestroy();
}

export class MainEntry{
    private static inst: MainEntry;
    public static Inst(): MainEntry {
        if (!MainEntry.inst) {
            MainEntry.inst = new MainEntry();
        }
        return MainEntry.inst;
    }
    private constructor() {
        MediaManager.Init();
        core.GameEntry.Inst.RegisterUpdate(()=>this.onUpdate());
        //core.GameEntry.Inst.RegisterDestory(()=>this.onDestroy());
    }    
    
    private BridgeList : Set<UnityBridge> = new Set<UnityBridge>();

    public RegisterEntry(bridge:UnityBridge)
    {
        this.BridgeList.add(bridge);
    }
    
    public RemoveEntry(bridge:UnityBridge){
        this.BridgeList.delete(bridge);
    }
    
    private onUpdate()
    {
        TimeKit.Update();
        TWEEN.update();
        this.BridgeList.forEach(value => {
            value.OnUpdate();
        });
        UIKit.Inst().OnUpdate();
    }

/*    private onDestroy()
    {
        this.BridgeList.forEach(value => {
            value.OnDestroy();
        });
        (<UIKit>UIKit.Inst()).OnDestroy();
    }*/
}

MainEntry.Inst();
