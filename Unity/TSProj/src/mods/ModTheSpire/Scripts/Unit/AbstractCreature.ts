import {IDisplay} from "mods/ModTheSpire/Scripts/Loader/IDisplay";
import {AbstractPower} from "mods/ModTheSpire/Scripts/Power/AbstractPower";
import TintEffect from "mods/ModTheSpire/Scripts/Effect/TintEffect";
import DamageInfo from "mods/ModTheSpire/Scripts/DataDefine/DamageInfo";
import {IGameAction} from "Core/QueueMessageKit";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {PowerRemovedMessage} from "mods/ModTheSpire/Scripts/Events/PowerRemovedMessage";
import {PostApplyPowerMessage} from "mods/ModTheSpire/Scripts/Events/PostApplyPowerMessage";
export default abstract class AbstractCreature{
    public IsPlayer:boolean;
    //正在死亡
    public IsDying : boolean;
    //已经死亡
    public IsDead: boolean;
    //最大生命值
    public MaxHealth: number;
    //生命值
    public Health :number;
    //能力列表
    public Powers = new Array<AbstractPower>();
    //格挡
    public Block : number;
    //是否离场
    IsEscaping: boolean;
    //是否离场或死亡
    IsDeadOrEscaped:boolean;
    
    //region重载Display内容
    //颜色过渡动画
    public TintEffect = new TintEffect();
    public DisplayObject : IDisplay
    abstract Damage(info : DamageInfo);
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
    public get SortingOrder() { return this.DisplayObject.SortingOrder; }
    public set SortingOrder(value) { this.DisplayObject.SortingOrder = value; }
    public get Visible() { return this.DisplayObject.Visible; }
    public set Visible(value) { this.DisplayObject.Visible = value; }
    public get Color() { return this.DisplayObject.Color; }
    public set Color(value) { this.DisplayObject.Color = value; }
    public get Bounds(){return this.DisplayObject.Bounds;}
    public PlayAnimation(animation:string,loop?:boolean,delay?:number):any{this.DisplayObject.PlayAnimation(animation, loop, delay)}
    public PlayFastAttack(){this.DisplayObject.PlayFastAttack();}
    public PlaySlowAttack(){this.DisplayObject.PlaySlowAttack();}
    public PlayHop(){this.DisplayObject.PlayHop();}
    public PlayJump(){this.DisplayObject.PlayJump();}
    public PlayFastShake(duration:number){this.DisplayObject.PlayFastShake(duration);}
    public PlaySlowShake(){this.DisplayObject.PlaySlowShake();}
    public PlayStagger(){this.DisplayObject.PlayStagger();}
    //endregion
    
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
    
    protected AddToBot(action : IGameAction){DungeonManager.ActionManager.AddToBottom(action);}
    protected AddToTop(action : IGameAction){DungeonManager.ActionManager.AddToTop(action);}
    public Update(){
        this.TintEffect.Update();
    }
}