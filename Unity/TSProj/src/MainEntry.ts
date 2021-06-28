import * as core from 'csharp';
import {UI} from "./Core/Module/UI/UIKit";
import UIKit = UI.UIKit;
import {Log} from "./Core/Module/Log/Log";
export interface UnityBridge {
    OnUpdate();
    OnDestroy();
}

export default class MainEntry{
    BindTo: any;
    private static BridgeList : Set<UnityBridge> = new Set<UnityBridge>();
    constructor(bindTo:any){
        this.BindTo = bindTo;
        this.BindTo.JsUpdate = MainEntry.onUpdate;
        this.BindTo.JsOnDestroy = MainEntry.onDestroy;
    }

    public static RegisterEntry(bridge:UnityBridge)
    {
        MainEntry.BridgeList.add(bridge);
    }
    
    public static RemoveEntry(bridge:UnityBridge){
        MainEntry.BridgeList.delete(bridge);
    }
    
    private static onUpdate()
    {
        MainEntry.BridgeList.forEach(value => {
            value.OnUpdate();
        })
        UIKit.Inst().OnUpdate();
    }

    private static onDestroy()
    {
        MainEntry.BridgeList.forEach(value => {
            value.OnDestroy();
        })
        UIKit.Inst().OnDestroy();
    }
}

export function init(monoBehaviour: core.UnityEngine.MonoBehaviour): void
{
    new MainEntry(monoBehaviour);
}

