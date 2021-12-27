import { FairyGUI } from "csharp";
import { Rect } from "../../../../Core/Define/Rect";
import Color from "../DataDefine/Color";

export interface IDisplay{
    X:number;
    Y:number;
    Rotation:number;
    ScaleX:number;
    ScaleY:number;
    SortingOrder:number;
    Visible:boolean;
    Color:Color;
    UnitComponent:any;
    Bounds : FairyGUI.GGraph;
    HealthComponent : any;
    Self:any;//可以保存自身Object.比如Spine你可以保存SkeletonAnimation.然后在别的地方你可以使用Self做一些特定操作
    FlipX:boolean;
    FlipY:boolean;
    Dispose();
    SetHitBox(rect:Rect);
    GetHitBox():Rect;
    SetParent(object:any);
    SetAnimation(animation:string, loop?:boolean) : any;
    AddAnimation(animation:string, loop?:boolean,delay?:number):any;
    PlayFastAttack();
    PlaySlowAttack();
    PlayHop();
    PlayJump();
    PlayFastShake(duration:number);
    PlaySlowShake(duration:number);
    PlayStagger();
}