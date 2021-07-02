//Mod的入口必须命名为Entry

//这里我们继承UnityBridge这样我们就可以更新我们的游戏逻辑了.也可以不继承
import {MainEntry, UnityBridge} from "../../MainEntry";
import {AllPlayer} from "./Scripts/Character/AbstractPlayer";
import Ironclad from "./Scripts/Character/Ironclad";
import Defect from "./Scripts/Character/Defect";
import TheSilent from "./Scripts/Character/TheSilent";
import Watcher from "./Scripts/Character/Watcher";
import * as TWEEN from '../../Core/Module/Tween'
import FileHelper from "./Scripts/FileHelper";
import EffectKit from "./Scripts/Effect/EffectKit";
import {ShakeDur, ShakeIntensity, ShakeScreen} from "./Scripts/Effect/ShakeScreen";
import Strike from "./Scripts/Cards/Ironclad/Attack/Strike";
import {Log} from "../../Core/Module/Log/Log";
import {Mathf} from "../../Core/Module/Math/Mathf";
import Async from "../../Core/Async";
import {VerticalAuraParticleEffect} from "./Scripts/Effect/VerticalAuraParticleEffect";
import Color from "./Scripts/DataDefine/Color";
import {UI_Title} from "./Scripts/UI/ViewModel/UI_Title";

export class Entry implements UnityBridge
{
    private tween : any;
    constructor() 
    {
        //EffectKit.Inst().Play(new ShakeScreen(ShakeIntensity.HIGH,ShakeDur.SHORT,{Horizontal: false,Vertical:true}))
        //EffectKit.Inst().Play(new VerticalAuraParticleEffect(Color.Red,0,-500))
        this.LoadConfig();
        AllPlayer.push(new Ironclad());
        AllPlayer.push(new Defect());
        AllPlayer.push(new TheSilent());
        AllPlayer.push(new Watcher());
        MainEntry.Inst().RegisterEntry(this);
        let hello = UI_Title.CreatePanel();
    }

    LoadConfig()
    {
        FileHelper.LoadConfig();
    }
    OnUpdate() 
    {
        EffectKit.Inst().Update();
        TWEEN.update();
    }
    OnDestroy() {
    }
}
new Entry();