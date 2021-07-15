import {FairyGUI, Spine, UnityEngine } from "csharp";
import {IDisplay} from "mods/ModTheSpire/Scripts/Loader/IDisplay";
import UIHelper from "mods/ModTheSpire/Scripts/UI/UIHelper";
import Color from "mods/ModTheSpire/Scripts/DataDefine/Color";
import {Log} from "Core/Module/Log/Log";
import {View_UnitWrap} from "mods/ModTheSpire/Scripts/Gen/View/ModTheSpire_Common";

export class SpineCharacterDisplay implements IDisplay{
    get Visible(): boolean {
        return this._Visible;
    }

    set Visible(value: boolean) {
        this._Visible = value;
        this._CacheGameObject.SetActive(value);
    }
    get Rotation(): number {
        return this._Rotation;
    }

    set Rotation(value: number) {
        this._Rotation = value;
        this._Wrap.rotation = value;
    }

    get ScaleX(): number {
        return this._ScaleX;
    }

    set ScaleX(value: number) {
        this._ScaleX = value;
        this._Wrap.scaleX = value;
    }

    get ScaleY(): number {
        return this._ScaleY;
    }

    set ScaleY(value: number) {
        this._ScaleY = value;
        this._Wrap.scaleY = value;
    }

    get Self(): Spine.Unity.SkeletonAnimation {
        return this._Self;
    }

    get SortingOrder(): number {
        return this._SortingOrder;
    }

    set SortingOrder(value: number) {
        this._SortingOrder = value;
        this.UnitComponent.sortingOrder = value;
    }

    get X(): number {
        return this._X;
    }

    set X(value: number) {
        this._X = value;
        this._Wrap.x = value;
    }

    get Y(): number {
        return this._Y;
    }

    set Y(value: number) {
        this._Y = value;
        this._Wrap.y = value;
    }

    get Color(): Color {
        return this._Color;
    }

    set Color(value: Color) {
        this._Color = value;
        Spine.Unity.SkeletonExtensions.SetColor(this.Self.Skeleton,value.UnityColor());
    }
    
    public Bounds: FairyGUI.GGraph;
    private _Rotation: number;
    private _ScaleX: number;
    private _ScaleY: number;
    private _SortingOrder: number;
    private _X: number;
    private _Y: number;
    private _Visible: boolean;
    private _Color: Color;
    private readonly _Self: Spine.Unity.SkeletonAnimation;
    private readonly UnitComponent:FairyGUI.GComponent;
    private readonly _Wrap : FairyGUI.GoWrapper;
    private readonly _CacheGameObject:UnityEngine.GameObject;
    private readonly _CacheTransform:UnityEngine.Transform;
    constructor(animation : Spine.Unity.SkeletonAnimation) {
        this._Self = animation; 
        this._CacheGameObject = animation.gameObject;
        this._CacheTransform = animation.transform;
        this.UnitComponent = <FairyGUI.GComponent>View_UnitWrap.CreateInstance();
        this._Wrap = new FairyGUI.GoWrapper();
        this._Wrap.SetWrapTarget(animation.gameObject,true);
        this.UnitComponent.GetChild("Wrap").asGraph.SetNativeObject(this._Wrap);
        this.Bounds = UIHelper.CreateGGraph();
        this.Bounds.SetPivot(0.5,0.5,true);
        this.Rotation = 0;
        this.ScaleX = 1;
        this.ScaleY = 1;
        this.SortingOrder = 0;
        this.X = 0;
        this.Y = 0;
        this.Visible = true;
        this.Color = Color.White;
    }

    PlayAnimation(animation: string,loop:boolean = false,delay:number = 0) : any {
        this._Self.AnimationName = animation;
        return this._Self.AnimationState.AddAnimation(0,animation,loop,delay);
    }

    Dispose() {
        this.UnitComponent.Dispose();
        this._Wrap.Dispose();
        UnityEngine.Object.Destroy(this._Self.gameObject);
    }

    SetParent(object: FairyGUI.GComponent) {
        if(object){
            object.AddChild(this.UnitComponent);
        }
    }

    PlayFastAttack() {
        if(!(this.UnitComponent.GetTransition("Jump").playing || this.UnitComponent.GetTransition("Hop").playing)) {
            let transition = this.UnitComponent.GetTransition("FastAttack");
            if(!transition.playing)
                transition.Play();
        }
    }

    PlayFastShake() {
        if(!(this.UnitComponent.GetTransition("Jump").playing || this.UnitComponent.GetTransition("Hop").playing)){
            let transition = this.UnitComponent.GetTransition("FastShake");
            if(!transition.playing)
                transition.Play();
        }
    }

    PlayHop() {
        if(!(this.UnitComponent.GetTransition("Jump").playing)){
            let transition = this.UnitComponent.GetTransition("Hop");
            if(!transition.playing)
                transition.Play();
        }
    }

    PlayJump() {
        if(!(this.UnitComponent.GetTransition("Hop").playing)){
            let transition = this.UnitComponent.GetTransition("Jump");
            if(!transition.playing)
                transition.Play();
        }
    }

    PlaySlowAttack() {
        if(!(this.UnitComponent.GetTransition("Jump").playing || this.UnitComponent.GetTransition("Hop").playing)){
            let transition = this.UnitComponent.GetTransition("SlowAttack");
            if(!transition.playing)
                transition.Play();
        }
    }

    PlaySlowShake() {
        if(!(this.UnitComponent.GetTransition("Jump").playing || this.UnitComponent.GetTransition("Hop").playing)){
            let transition = this.UnitComponent.GetTransition("SlowShake");
            if(!transition.playing)
                transition.Play();
        }
    }

    PlayStagger() {
        if(!(this.UnitComponent.GetTransition("Jump").playing || this.UnitComponent.GetTransition("Hop").playing)){
            let transition = this.UnitComponent.GetTransition("Stagger");
            if(!transition.playing)
                transition.Play();
        }
    }
}