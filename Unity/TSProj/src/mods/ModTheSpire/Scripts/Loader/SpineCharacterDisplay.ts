import { Spine, FairyGUI, UnityEngine } from "csharp";
import { Rect } from "../../../../Core/Define/Rect";
import Color from "../DataDefine/Color";
import { View_UnitWrap } from "../Gen/View/ModTheSpire_Combat";
import { ViewComponent_HealthBar } from "../UI/ViewComponent/ViewComponent_HealthBar";
import { IDisplay } from "./IDisplay";

export class SpineCharacterDisplay implements IDisplay{
    get FlipX(): boolean {
        return this.Self.Skeleton.ScaleX == -1;
    }

    set FlipX(value: boolean) {
        value ? this.Self.Skeleton.ScaleX = -1 : 1;
    }

    get FlipY(): boolean {
        return this.Self.Skeleton.ScaleY == -1;
    }

    set FlipY(value: boolean) {
        value ? this.Self.Skeleton.ScaleY = -1 : 1;
    }
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
        Spine.Unity.SkeletonExtensions.SetColor(this.Self.Skeleton,value.UnityColor);
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
    private _FlipX: boolean;
    private _FlipY: boolean;
    private readonly _Self: Spine.Unity.SkeletonAnimation;
    UnitComponent:FairyGUI.GComponent;
    HealthComponent: ViewComponent_HealthBar;
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
        this.UnitComponent.GetChild("ModelLoader").asGraph.SetNativeObject(this._Wrap);
        this.HealthComponent = new ViewComponent_HealthBar(this.UnitComponent.GetChild("HealthBar").asProgress);
        this.Bounds = this.UnitComponent.GetChild("Bounds").asGraph;
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

    AddAnimation(animation: string, loop: boolean = false,delay:number = 0) {
        this._Self.AnimationState.AddAnimation(0,animation,loop,delay);
    }

    SetAnimation(animation: string, loop:boolean = false) : any {
        this._Self.AnimationName = animation;
        return this._Self.AnimationState.SetAnimation(0,animation,loop);
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

    PlaySlowShake(duration:number) {
        if(!(this.UnitComponent.GetTransition("Jump").playing || this.UnitComponent.GetTransition("Hop").playing)){
            let transition = this.UnitComponent.GetTransition("SlowShake");
            if(!transition.playing) {
                transition.Play(duration / 0.1,0,null);
            }
        }
    }

    PlayFastShake(duration:number) {
        if(!(this.UnitComponent.GetTransition("Jump").playing || this.UnitComponent.GetTransition("Hop").playing)){
            let transition = this.UnitComponent.GetTransition("FastShake");
            if(!transition.playing)
                transition.Play(duration / 0.1,0,null);
        }
    }

    PlayStagger() {
        if(!(this.UnitComponent.GetTransition("Jump").playing || this.UnitComponent.GetTransition("Hop").playing)){
            let transition = this.UnitComponent.GetTransition("Stagger");
            if(!transition.playing)
                transition.Play();
        }
    }

    SetHitBox(rect:Rect) {
        if(rect.X)
            this.Bounds.x = rect.X;
        if(rect.Y)
            this.Bounds.y = rect.Y;
        if(rect.Width)
            this.Bounds.width = rect.Width;
        if(rect.Height)
            this.Bounds.height = rect.Height;
    }

    GetHitBox():Rect{
        return new Rect(this.Bounds.x,this.Bounds.y,this.Bounds.width,this.Bounds.height);
    }
}