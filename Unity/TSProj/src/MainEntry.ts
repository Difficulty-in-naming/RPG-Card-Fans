import { UIKit } from "./Core/Module/UI/UIKit";
import {TimeKit} from "./Core/Utils/TimeKit";
import { GameEntry, MediaManager } from 'csharp';
import { Log } from "./Core/Module/Log/Log";
import * as TWEEN from "./ThirdParty/@tweenjs/tween"

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
        GameEntry.Inst.RegisterUpdate(()=>this.onUpdate());
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
