import { FairyGUI } from "csharp";
import { UuidTool } from "uuid-tool";
import { IGameAction } from "../../../../Core/Module/Event/IGameAction";
import { UIKit } from "../../../../Core/Module/UI/UIKit";
import DungeonManager from "../DungeonManager";
import { View_Card } from "../Gen/View/ModTheSpire_Common";
import { StringHelper } from "../StringHelper";
import { AbstractPlayer } from "../Unit/Character/AbstractPlayer";
import { AbstractMonster } from "../Unit/Monster/AbstractMonster";

export default abstract class AbstractCard
{
    //唯一ID.用于标志哪些卡牌升级.或者针对某张卡牌做特殊操作
    public UUID : string;
    public abstract Name : string;
    //⚠警告!!不要在外部使用这个变量,这个变量是未被格式化的！,请使用GetDesc()
    protected abstract Desc : string;
    //图标
    public abstract Icon : string;
    //卡牌标签(攻击,初始卡牌)
    public Tags : CardTags;
    //卡牌类型(攻击,技能,能力)
    public abstract Type : CardType;
    //卡牌稀有度
    public abstract Rarity : CardRarity;
    //卡牌目标
    public abstract Target : CardTarget;
    //卡牌颜色
    public abstract Color : CardColor;
    //升级次数
    public UpgradeTimes : number = 0;
    //消耗能量
    public Energy : number = 0;
    //是否消耗
    public Exhaust:boolean = false;
    //是否虚无
    public Ethereal:boolean = false;
    //卡牌渲染组件
    public RenderUrl = View_Card.Url;
    //伤害
    public Damage : number = 0;
    //格挡
    public Block : number = 0;
    //特殊值
    public Magic : number = 0;
    public get View(): FairyGUI.GComponent {
        
    }
    public constructor()
    {
        this.UUID = UuidTool.newUuid();
    }
    public Use(player : AbstractPlayer, monster : AbstractMonster){}
    //可不可以升级
    public abstract CanUpgrade() : boolean;
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
    protected AddToBot(action : IGameAction){DungeonManager.ActionManager.AddToBottom(action);}
    protected AddToTop(action : IGameAction){DungeonManager.ActionManager.AddToTop(action);}
    public GetDesc(){
        return StringHelper.FormatCardString(this);
    }
    //是否已经升级
    public IsUpgraded() : boolean
    {
        return this.UpgradeTimes > 0;
    }

    public SuperFlash(){
        this.View.GetTransition("SuperFlash").Play();
    }
}

export enum CardColor{
    RED = "red",
    GREEN = "green",
    BLUE = "blue",
    PURPLE = "purple",
    COLORLESS = "colorless",
    CURSE = "curse"
}

export enum CardTags{
    HEALING = 1 << 0,
    STRIKE = 2 << 0,
    EMPTY = 3 << 0,
    STARTER_DEFEND = 4 << 0,
    STARTER_STRIKE = 5 << 0
}

export enum CardType {
    ATTACK= "attack",
    SKILL = "skill",
    POWER = "power",
    STATUS = "status",
    CURSE = "curse",
}

export enum CardRarity {
    BASIC = "basic",
    SPECIAL = "special",
    COMMON = "common",
    UNCOMMON = "uncommon",
    RARE = "rare",
    CURSE = "curse",
}

export enum CardTarget {
    ENEMY,
    ALL_ENEMY,
    SELF,
    NONE,
    SELF_AND_ENEMY,
    ALL
}