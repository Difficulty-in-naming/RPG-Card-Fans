import AbstractPlayer from "../Character/AbstractPlayer";
import AbstractMonster from "../Monster/AbstractMonster";
import QueueMessageKit, {IGameAction} from "../../../../Core/QueueMessageKit";
import {StringHelper} from "../StringHelper";
import {UuidTool} from "../../../../Core/Module/UUID";
import { FairyGUI } from "csharp";
import {View_Card} from "../Gen/View/ModTheSpire_Common";
export default class AbstractCard
{
    //唯一ID.用于标志哪些卡牌升级.或者针对某张卡牌做特殊操作
    public UUID : string;
    public Name : string;
    //⚠警告!!不要在外部使用这个变量,这个变量是未被格式化的！,请使用GetDesc()
    public Desc : string = "";
    public Icon : string;
    //卡牌标签(攻击,初始卡牌)
    public Tags : CardTags;
    //卡牌类型(攻击,技能,能力)
    public Type : CardType;
    //卡牌稀有度
    public Rarity : CardRarity;
    //卡牌目标
    public Target : CardTarget;
    //卡牌颜色
    public Color : CardColor;
    //升级次数
    public UpgradeTimes : number = 0;
    public RenderCom = View_Card.Url;
    public Damage : number = 0;
    public Block : number = 0;
    public Magic : number = 0;
    public constructor(name:string,desc:string,icon:string,type:CardType,rarity:CardRarity,target:CardTarget,color:CardColor)
    {
        this.Name = name;
        this.Icon = icon;
        this.Desc = desc;
        this.Type = type;
        this.Rarity = rarity;
        this.Target = target;
        this.Color = color;
        this.UUID = UuidTool.newUuid();
    }
    
    public Use(player : AbstractPlayer,monster : AbstractMonster){}
    public Upgrade(){}
    public Clone(newUuid : boolean = true) : this
    {
        let serialize = JSON.stringify(this);
        if(newUuid)
            serialize["UUID"] = UuidTool.newUuid();
        return JSON.parse(serialize);
    }
    public NewInstance() : this{
        return new (this.constructor as any)();
    }
    protected AddToBot(action : IGameAction){QueueMessageKit.Inst().AddToBottom(action);}
    protected AddToTop(action : IGameAction){QueueMessageKit.Inst().AddToTop(action);}
    
    public GetDesc(){
        return StringHelper.FormatCardString(this);
    }
    
    //是否已经升级
    public IsUpgraded() : boolean
    {
        return this.UpgradeTimes > 0;
    }
}

export enum CardColor{
    RED = "Red",
    GREEN = "Green",
    BLUE = "Blue",
    PURPLE = "Purple",
    COLORLESS = "Colorless",
    CURSE = "Curse"
}

export enum CardTags{
    HEALING = 1 << 0,
    STRIKE = 2 << 0,
    EMPTY = 3 << 0,
    STARTER_DEFEND = 4 << 0,
    STARTER_STRIKE = 5 << 0
}

export enum CardType {
    ATTACK= "Attack",
    SKILL = "Skill",
    POWER = "Power",
    STATUS = "Status",
    CURSE = "Curse",
}

export enum CardRarity {
    BASIC = "Basic",
    SPECIAL = "Special",
    COMMON = "Common",
    UNCOMMON = "Uncommon",
    RARE = "Rare",
    CURSE = "Curse",
}

export enum CardTarget {
    ENEMY,
    ALL_ENEMY,
    SELF,
    NONE,
    SELF_AND_ENEMY,
    ALL
}