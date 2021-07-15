import Color from "mods/ModTheSpire/Scripts/DataDefine/Color";
import {Bounds} from "mods/ModTheSpire/Scripts/DataDefine/Bounds";
import { FairyGUI } from "csharp";
import {View_UnitWrap} from "mods/ModTheSpire/Scripts/Gen/View/ModTheSpire_Common";

export interface IDisplay{
    X:number;
    Y:number;
    Rotation:number;
    ScaleX:number;
    ScaleY:number;
    SortingOrder:number;
    Visible:boolean;
    Color:Color;
    View:View_UnitWrap
    Bounds : FairyGUI.GGraph;
    Self:any;//可以保存自身Object.比如Spine你可以保存SkeletonAnimation.然后在别的地方你可以使用Self做一些特定操作
    Dispose();
    SetParent(object:any);
    PlayAnimation(animation:string,loop?:boolean,delay?:number) : any;
    PlayFastAttack();
    PlaySlowAttack();
    PlayHop();
    PlayJump();
    PlayFastShake();
    PlaySlowShake();
    PlayStagger();
}