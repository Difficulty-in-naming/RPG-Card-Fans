import { Mathf } from "../../../../../Core/Module/Math/Mathf";
import TWEEN from "../../../../../ThirdParty/@tweenjs/tween";
import DamageInfo from "../../DataDefine/DamageInfo";
import DungeonManager from "../../DungeonManager";
import { OnPreBattleMessage } from "../../Events/OnPreBattleMessage";
import AbstractCreature from "../AbstractCreature";
import { Intent } from "./Intent";
import { MonsterInfo } from "./MonsterInfo";

export abstract class AbstractMonster extends AbstractCreature
{
    public MoveName:string;
    public Gold : number;
    public MoveIndex:number;
    public DeathTime:number;
    public Intent:Intent;
    //行动历史
    private MoveHistory = new Array<number>();
    //伤害列表,不同难度填充的伤害内容不一样
    protected DamageInfo = new Array<DamageInfo>()
    constructor(public Info:MonsterInfo) {
        super();
        this.DisplayObject = this.Info.Loader.Create();
        this.Initialize();
        this.RollMove();
    }
    //随机敌人的行为
    public RollMove(){
        this.GetMove(Mathf.Floor(Mathf.RandomRange(0,101,DungeonManager.Inst.CurrentDungeon.AIRng)));
    }
    //获取敌人的最后两次行为是否和传入的行为Index匹配
    public LastTwoMoves(num:number) : boolean{
        let length = this.MoveHistory.length;
        if(length < 2)
            return false;
        return this.MoveHistory[length - 2] == num && this.MoveHistory[length - 1] == num;
    }
    //获取敌人的最后一次行为是否和传入的行为Index匹配
    public LastMove(num:number) : boolean{
        let length = this.MoveHistory.length;
        if(length < 1)
            return false;
        return this.MoveHistory[length - 1] == num;
    }
    //初始化.继承此类的类型不应该使用构造函数.而应该选择使用Initialize作为替代;
    abstract Initialize();
    //敌人的行为逻辑代码
    abstract TakeTurn();
    //获取敌人的下一次行动
    abstract GetMove(num:number);
    //设置敌人的下一次行动
    public SetMove(moveIndex:number,intent:Intent,options?:{damage?:DamageInfo,multiplier?:number,moveName?:string}){
        this.MoveName = options.moveName;
        if(moveIndex != -1)
            this.MoveHistory.push(moveIndex);
        this.MoveIndex = moveIndex;
        this.Intent = intent;
    }
    //敌人死亡回调
    Die(){};
    public Escape(){
        this.HealthComponent.Visible = false;
        this.IsEscaping = true;
        this.DisplayObject.FlipX = true;
        new TWEEN.Tween({x:this.X}).to({x:this.X + 400}).easing(TWEEN.Easing.Linear.None).duration(3000).start().onComplete(()=>{
            this.IsEscaped = true;
            if(DungeonManager.Inst.CurrentRoom.Monsters.AreMonstersBasicallyDead())
                DungeonManager.Inst.CurrentRoom.End();
        });
    }
    PreBattleAction(msg:OnPreBattleMessage){};
}