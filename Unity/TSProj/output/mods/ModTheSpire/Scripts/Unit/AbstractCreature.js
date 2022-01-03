"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rect_1 = require("../../../../Core/Define/Rect");
var DungeonManager_1 = require("../DungeonManager");
var TintEffect_1 = require("../Effect/TintEffect");
var PostModifyBlockMessage_1 = require("../Events/PostModifyBlockMessage");
var PowerRemovedMessage_1 = require("../Events/PowerRemovedMessage");
var PreModifyBlockMessage_1 = require("../Events/PreModifyBlockMessage");
class AbstractCreature {
    constructor() {
        //能力列表
        this.Powers = new Array();
        //region重载Display内容
        //颜色过渡动画
        this.TintEffect = new TintEffect_1.default();
    }
    //是否离场或死亡
    get IsDeadOrEscaped() {
        return this.IsEscaped && this.IsDead;
    }
    get MaxHealth() {
        return this._MaxHealth;
    }
    set MaxHealth(value) {
        this._MaxHealth = value;
        this.HealthComponent.Max = value;
    }
    get Health() {
        return this._Health;
    }
    set Health(value) {
        this._Health = value;
        this.HealthComponent.Value = value;
    }
    get Block() {
        return this._Block;
    }
    set Block(value) {
        let msg = new PreModifyBlockMessage_1.PreModifyBlockMessage(value);
        DungeonManager_1.default.MessageManager.Send(PreModifyBlockMessage_1.PreModifyBlockMessage.Id, msg);
        this._Block = msg.block;
        DungeonManager_1.default.MessageManager.Send(PostModifyBlockMessage_1.PostModifyBlockMessage.Id, new PostModifyBlockMessage_1.PostModifyBlockMessage(msg.block));
    }
    get X() { return this.DisplayObject.X; }
    set X(value) { this.DisplayObject.X = value; }
    get Y() { return this.DisplayObject.Y; }
    set Y(value) { this.DisplayObject.Y = value; }
    get Rotation() { return this.DisplayObject.Rotation; }
    set Rotation(value) { this.DisplayObject.Rotation = value; }
    get ScaleX() { return this.DisplayObject.ScaleX; }
    set ScaleX(value) { this.DisplayObject.ScaleX = value; }
    get ScaleY() { return this.DisplayObject.ScaleY; }
    set ScaleY(value) { this.DisplayObject.ScaleY = value; }
    get FlipX() { return this.DisplayObject.FlipX; }
    set FlipX(value) { this.DisplayObject.FlipX = value; }
    get FlipY() { return this.DisplayObject.FlipY; }
    set FlipY(value) { this.DisplayObject.FlipY = value; }
    get SortingOrder() { return this.DisplayObject.SortingOrder; }
    set SortingOrder(value) { this.DisplayObject.SortingOrder = value; }
    get Visible() { return this.DisplayObject.Visible; }
    set Visible(value) { this.DisplayObject.Visible = value; }
    get Color() { return this.DisplayObject.Color; }
    set Color(value) { this.DisplayObject.Color = value; }
    get Bounds() { return this.DisplayObject.Bounds; }
    //如果想要重写这个组件.你需要抄下所有ViewComponent_HealthBar的所有方法名称和参数.否则某些方法调用时会抛出错误
    get HealthComponent() { return this.DisplayObject.HealthComponent; }
    get PowerListComponent() { return this.DisplayObject.UnitComponent.GetChild("PowerList"); }
    get NameComponent() { return this.DisplayObject.UnitComponent.GetChild("DisplayName"); }
    SetAnimation(animation, loop) { this.DisplayObject.SetAnimation(animation, loop); }
    AddAnimation(animation, loop, delay) { this.DisplayObject.AddAnimation(animation, loop, delay); }
    SetHitBox(x, y, width, height) { this.DisplayObject.SetHitBox(new Rect_1.Rect(x, y, width, height)); }
    GetHitBox() { return this.DisplayObject.GetHitBox(); }
    PlayFastAttack() { this.DisplayObject.PlayFastAttack(); }
    PlaySlowAttack() { this.DisplayObject.PlaySlowAttack(); }
    PlayHop() { this.DisplayObject.PlayHop(); }
    PlayJump() { this.DisplayObject.PlayJump(); }
    PlayFastShake(duration) { this.DisplayObject.PlayFastShake(duration); }
    PlaySlowShake(duration) { this.DisplayObject.PlaySlowShake(duration); }
    PlayStagger() { this.DisplayObject.PlayStagger(); }
    //endregion
    //受到伤害
    Damage(info) { }
    ;
    //获取Power的实例
    GetPower(id) {
        let result = this.Powers.find((t1) => t1.Id == id);
        return result;
    }
    AddPower(power, source) {
        power.Owner = this;
        power.Source = source;
        this.Powers.push(power);
    }
    RemovePower(id) {
        for (let i = 0; i < this.Powers.length; i++) {
            if (this.Powers[i].Id == id) {
                this.Powers.splice(i, 1);
                this.Powers[i].OnRemove();
                DungeonManager_1.default.MessageManager.Send(PowerRemovedMessage_1.PowerRemovedMessage.Id, new PowerRemovedMessage_1.PowerRemovedMessage(this.Powers[i], this));
                break;
            }
        }
    }
    Escape() { }
    AddToBot(action) { DungeonManager_1.default.ActionManager.AddToBottom(action); }
    AddToTop(action) { DungeonManager_1.default.ActionManager.AddToTop(action); }
    Update() {
        this.TintEffect.Update();
    }
}
exports.default = AbstractCreature;
//# sourceMappingURL=AbstractCreature.js.map