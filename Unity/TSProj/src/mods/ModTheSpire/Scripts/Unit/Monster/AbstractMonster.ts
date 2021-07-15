import AbstractCreature from "../AbstractCreature";
import {MonsterInfo} from "mods/ModTheSpire/Scripts/Unit/Monster/MonsterInfo";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {Mathf} from "Core/Module/Math/Mathf";
import {Intent} from "mods/ModTheSpire/Scripts/Unit/Monster/Intent";
import DamageInfo from "mods/ModTheSpire/Scripts/DataDefine/DamageInfo";

export abstract class AbstractMonster extends AbstractCreature
{
    public MoveName:string;
    public MoveIndex:number;
    //行动历史
    private MoveHistory = new Array<number>();
    //伤害列表,不同难度填充的伤害内容不一样
    protected DamageInfo = new Array<DamageInfo>()
    constructor(public MonsterInfo:MonsterInfo) {
        super();
        this.DisplayObject = this.MonsterInfo.Loader.Create();
        this.Initialize();
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
    public SetMove(moveIndex:number,intent:Intent,options:{damage?:number,multiplier?:number,moveName?:string}){
        this.MoveName = options.moveName;
        if(moveIndex != -1)
            this.MoveHistory.push(moveIndex);
        this.MoveIndex = moveIndex;
    }
    //敌人死亡回调
    Die(){};
}