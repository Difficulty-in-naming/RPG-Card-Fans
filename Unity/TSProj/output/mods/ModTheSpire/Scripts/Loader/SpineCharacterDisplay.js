"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpineCharacterDisplay = void 0;
var csharp_1 = require("csharp");
var Rect_1 = require("../../../../Core/Define/Rect");
var Color_1 = require("../DataDefine/Color");
var ModTheSpire_Combat_1 = require("../Gen/View/ModTheSpire_Combat");
var ViewComponent_HealthBar_1 = require("../UI/ViewComponent/ViewComponent_HealthBar");
class SpineCharacterDisplay {
    constructor(animation) {
        this._Self = animation;
        this._CacheGameObject = animation.gameObject;
        this._CacheTransform = animation.transform;
        this.UnitComponent = ModTheSpire_Combat_1.View_UnitWrap.CreateInstance();
        this._Wrap = new csharp_1.FairyGUI.GoWrapper();
        this._Wrap.SetWrapTarget(animation.gameObject, true);
        this.UnitComponent.GetChild("ModelLoader").asGraph.SetNativeObject(this._Wrap);
        this.HealthComponent = new ViewComponent_HealthBar_1.ViewComponent_HealthBar(this.UnitComponent.GetChild("HealthBar").asProgress);
        this.Bounds = this.UnitComponent.GetChild("Bounds").asGraph;
        this.Bounds.SetPivot(0.5, 0.5, true);
        this.Rotation = 0;
        this.ScaleX = 1;
        this.ScaleY = 1;
        this.SortingOrder = 0;
        this.X = 0;
        this.Y = 0;
        this.Visible = true;
        this.Color = Color_1.default.White;
    }
    get FlipX() {
        return this.Self.Skeleton.ScaleX == -1;
    }
    set FlipX(value) {
        value ? this.Self.Skeleton.ScaleX = -1 : 1;
    }
    get FlipY() {
        return this.Self.Skeleton.ScaleY == -1;
    }
    set FlipY(value) {
        value ? this.Self.Skeleton.ScaleY = -1 : 1;
    }
    get Visible() {
        return this._Visible;
    }
    set Visible(value) {
        this._Visible = value;
        this._CacheGameObject.SetActive(value);
    }
    get Rotation() {
        return this._Rotation;
    }
    set Rotation(value) {
        this._Rotation = value;
        this._Wrap.rotation = value;
    }
    get ScaleX() {
        return this._ScaleX;
    }
    set ScaleX(value) {
        this._ScaleX = value;
        this._Wrap.scaleX = value;
    }
    get ScaleY() {
        return this._ScaleY;
    }
    set ScaleY(value) {
        this._ScaleY = value;
        this._Wrap.scaleY = value;
    }
    get Self() {
        return this._Self;
    }
    get SortingOrder() {
        return this._SortingOrder;
    }
    set SortingOrder(value) {
        this._SortingOrder = value;
        this.UnitComponent.sortingOrder = value;
    }
    get X() {
        return this._X;
    }
    set X(value) {
        this._X = value;
        this._Wrap.x = value;
    }
    get Y() {
        return this._Y;
    }
    set Y(value) {
        this._Y = value;
        this._Wrap.y = value;
    }
    get Color() {
        return this._Color;
    }
    set Color(value) {
        this._Color = value;
        csharp_1.Spine.Unity.SkeletonExtensions.SetColor(this.Self.Skeleton, value.UnityColor());
    }
    AddAnimation(animation, loop = false, delay = 0) {
        this._Self.AnimationState.AddAnimation(0, animation, loop, delay);
    }
    SetAnimation(animation, loop = false) {
        this._Self.AnimationName = animation;
        return this._Self.AnimationState.SetAnimation(0, animation, loop);
    }
    Dispose() {
        this.UnitComponent.Dispose();
        this._Wrap.Dispose();
        csharp_1.UnityEngine.Object.Destroy(this._Self.gameObject);
    }
    SetParent(object) {
        if (object) {
            object.AddChild(this.UnitComponent);
        }
    }
    PlayFastAttack() {
        if (!(this.UnitComponent.GetTransition("Jump").playing || this.UnitComponent.GetTransition("Hop").playing)) {
            let transition = this.UnitComponent.GetTransition("FastAttack");
            if (!transition.playing)
                transition.Play();
        }
    }
    PlayHop() {
        if (!(this.UnitComponent.GetTransition("Jump").playing)) {
            let transition = this.UnitComponent.GetTransition("Hop");
            if (!transition.playing)
                transition.Play();
        }
    }
    PlayJump() {
        if (!(this.UnitComponent.GetTransition("Hop").playing)) {
            let transition = this.UnitComponent.GetTransition("Jump");
            if (!transition.playing)
                transition.Play();
        }
    }
    PlaySlowAttack() {
        if (!(this.UnitComponent.GetTransition("Jump").playing || this.UnitComponent.GetTransition("Hop").playing)) {
            let transition = this.UnitComponent.GetTransition("SlowAttack");
            if (!transition.playing)
                transition.Play();
        }
    }
    PlaySlowShake(duration) {
        if (!(this.UnitComponent.GetTransition("Jump").playing || this.UnitComponent.GetTransition("Hop").playing)) {
            let transition = this.UnitComponent.GetTransition("SlowShake");
            if (!transition.playing) {
                transition.Play(duration / 0.1, 0, null);
            }
        }
    }
    PlayFastShake(duration) {
        if (!(this.UnitComponent.GetTransition("Jump").playing || this.UnitComponent.GetTransition("Hop").playing)) {
            let transition = this.UnitComponent.GetTransition("FastShake");
            if (!transition.playing)
                transition.Play(duration / 0.1, 0, null);
        }
    }
    PlayStagger() {
        if (!(this.UnitComponent.GetTransition("Jump").playing || this.UnitComponent.GetTransition("Hop").playing)) {
            let transition = this.UnitComponent.GetTransition("Stagger");
            if (!transition.playing)
                transition.Play();
        }
    }
    SetHitBox(rect) {
        if (rect.X)
            this.Bounds.x = rect.X;
        if (rect.Y)
            this.Bounds.y = rect.Y;
        if (rect.Width)
            this.Bounds.width = rect.Width;
        if (rect.Height)
            this.Bounds.height = rect.Height;
    }
    GetHitBox() {
        return new Rect_1.Rect(this.Bounds.x, this.Bounds.y, this.Bounds.width, this.Bounds.height);
    }
}
exports.SpineCharacterDisplay = SpineCharacterDisplay;
//# sourceMappingURL=SpineCharacterDisplay.js.map