import { Rect } from "../../../../Core/Define/Rect";
import { IGameAction } from "../../../../Core/Module/Event/IGameAction";
import { UIKit } from "../../../../Core/Module/UI/UIKit";
import DamageInfo from "../DataDefine/DamageInfo";
import DungeonManager from "../DungeonManager";
import { HealEffect } from "../Effect/Combat/HealEffect";
import TintEffect from "../Effect/TintEffect";
import { OnHealAfterMessage } from "../Events/OnHealAfterMessage";
import { OnHealBeforeMessage } from "../Events/OnHealBeforeMessage";
import { OnHealToFullHpMessage } from "../Events/OnHealToFullHpMessage";
import { PostModifyBlockMessage } from "../Events/PostModifyBlockMessage";
import { PowerRemovedMessage } from "../Events/PowerRemovedMessage";
import { PreModifyBlockMessage } from "../Events/PreModifyBlockMessage";
import { IDisplay } from "../Loader/IDisplay";
import { AbstractPower } from "../Power/AbstractPower";
import UI_TopBar from "../UI/ViewModel/UI_TopBar";

export default abstract class AbstractCreature{
    //最大生命值
    private _MaxHealth: number;
    //生命值
    private _Health :number;
    //是否是自己操作的角色
    public IsPlayer:boolean;
    //正在死亡
    public IsDying : boolean;
    //已经死亡
    public IsDead: boolean;
    //能力列表
    public Powers = new Array<AbstractPower>();
    //格挡
    private _Block : number;
    //是否正在离场
    IsEscaping: boolean;
    //是否已经离场
    IsEscaped:boolean;
    //是否离场或死亡
    get IsDeadOrEscaped(): boolean {
        return this.IsEscaped && this.IsDead;
    }
    
    get MaxHealth(): number {
        return this._MaxHealth;
    }

    set MaxHealth(value: number) {
        this._MaxHealth = value;
        this.HealthComponent.Max = value;
    }

    get Health(): number {
        return this._Health;
    }

    set Health(value: number) {
        this._Health = value;
        this.HealthComponent.Value = value;
    }

    get Block(): number {
        return this._Block;
    }

    set Block(value: number) {
        let msg = new PreModifyBlockMessage(value);
        DungeonManager.MessageManager.Send(PreModifyBlockMessage.Id,msg);
        this._Block = msg.block;
        DungeonManager.MessageManager.Send(PostModifyBlockMessage.Id,new PostModifyBlockMessage(msg.block));
    }
    
    //region重载Display内容
    //颜色过渡动画
    public TintEffect = new TintEffect();
    public DisplayObject : IDisplay
    public get X() { return this.DisplayObject.X; }
    public set X(value) { this.DisplayObject.X = value; }
    public get Y() { return this.DisplayObject.Y; }
    public set Y(value) { this.DisplayObject.Y = value; }
    public get Rotation() { return this.DisplayObject.Rotation; }
    public set Rotation(value) { this.DisplayObject.Rotation = value; }
    public get ScaleX() { return this.DisplayObject.ScaleX; }
    public set ScaleX(value) { this.DisplayObject.ScaleX = value; }
    public get ScaleY() { return this.DisplayObject.ScaleY; }
    public set ScaleY(value) { this.DisplayObject.ScaleY = value; }
    public get FlipX() { return this.DisplayObject.FlipX; }
    public set FlipX(value) { this.DisplayObject.FlipX = value; }
    public get FlipY() { return this.DisplayObject.FlipY; }
    public set FlipY(value) { this.DisplayObject.FlipY = value; }
    public get SortingOrder() { return this.DisplayObject.SortingOrder; }
    public set SortingOrder(value) { this.DisplayObject.SortingOrder = value; }
    public get Visible() { return this.DisplayObject.Visible; }
    public set Visible(value) { this.DisplayObject.Visible = value; }
    public get Color() { return this.DisplayObject.Color; }
    public set Color(value) { this.DisplayObject.Color = value; }
    public get Bounds(){return this.DisplayObject.Bounds;}
    //如果想要重写这个组件.你需要抄下所有ViewComponent_HealthBar的所有方法名称和参数.否则某些方法调用时会抛出错误
    public get HealthComponent(){return this.DisplayObject.HealthComponent;}
    public get PowerListComponent(){return this.DisplayObject.UnitComponent.GetChild("PowerList");}
    public get NameComponent(){return this.DisplayObject.UnitComponent.GetChild("DisplayName");}
    public SetAnimation(animation:string, loop?:boolean):any{this.DisplayObject.SetAnimation(animation, loop)}
    public AddAnimation(animation:string, loop?:boolean,delay?:number):any{this.DisplayObject.AddAnimation(animation, loop,delay)}
    public SetHitBox(x: number, y: number, width: number, height: number){this.DisplayObject.SetHitBox(new Rect(x,y,width,height));}
    public GetHitBox():Rect{return this.DisplayObject.GetHitBox()}
    public PlayFastAttack(){this.DisplayObject.PlayFastAttack();}
    public PlaySlowAttack(){this.DisplayObject.PlaySlowAttack();}
    public PlayHop(){this.DisplayObject.PlayHop();}
    public PlayJump(){this.DisplayObject.PlayJump();}
    public PlayFastShake(duration:number){this.DisplayObject.PlayFastShake(duration);}
    public PlaySlowShake(duration:number){this.DisplayObject.PlaySlowShake(duration);}
    public PlayStagger(){this.DisplayObject.PlayStagger();}
    //endregion

    //受到伤害
    public Damage(info : DamageInfo){};

    //回復生命
    public Heal(amount : number, showEffect : boolean = true) {
        if (DungeonManager.Inst.IsEndless && this.IsPlayer && DungeonManager.Inst.Player.HasBlight("FullBelly") && (amount /= 2) < 1) 
        {
            amount = 1;
        }
        if (this.IsDying) {
            return;
        }
        var message = new OnHealBeforeMessage(this,amount);
        DungeonManager.MessageManager.Send(OnHealBeforeMessage.Id,message);
        
        this.Health += message.Amount;
        if (this.Health > this.MaxHealth) {
            this.Health = this.MaxHealth;
            DungeonManager.MessageManager.Send(OnHealToFullHpMessage.Id,message);
        }
        if (amount > 0) {
            if (showEffect && this.IsPlayer) {
                UI_TopBar.GetInstance().View.GetChild("Health").asCom.GetChild("n0").asCom.GetTransition("Heal").Play();
                let x = this.DisplayObject.Bounds.x + this.DisplayObject.Bounds.width / 2;
                let y = this.DisplayObject.Bounds.y + this.DisplayObject.Bounds.height;
                DungeonManager.EffectManager.Play(new HealEffect(x, y, message.Amount));
            }
        }
        DungeonManager.MessageManager.Send(OnHealAfterMessage.Id,message);
    }
    //获取Power的实例
    public GetPower(id:string){
        let result = this.Powers.find((t1)=>t1.Id == id)
        return result;
    }
    public AddPower(power:AbstractPower,source:AbstractCreature){
        power.Owner = this;
        power.Source = source;
        this.Powers.push(power);
    }
    public RemovePower(id:string){
        for (let i = 0; i < this.Powers.length; i++) {
            if(this.Powers[i].Id == id){
                this.Powers.splice(i,1);
                this.Powers[i].OnRemove();
                DungeonManager.MessageManager.Send(PowerRemovedMessage.Id,new PowerRemovedMessage(this.Powers[i],this))
                break;
            }
        }
    } 
    protected Escape(){}
    protected AddToBot(action : IGameAction){DungeonManager.ActionManager.AddToBottom(action);}
    protected AddToTop(action : IGameAction){DungeonManager.ActionManager.AddToTop(action);}
    public Update(){
        this.TintEffect.Update();
    }
}