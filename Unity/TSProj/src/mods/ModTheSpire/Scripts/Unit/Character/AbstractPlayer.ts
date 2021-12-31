import AbstractCard from "../../Cards/AbstractCard";
import { CardGroup, CardGroupType } from "../../Cards/CardGroup";
import DamageInfo from "../../DataDefine/DamageInfo";
import DungeonManager from "../../DungeonManager";
import { OnHurt } from "../../Events/OnHurt";
import { OnHurtAfter } from "../../Events/OnHurtAfter";
import { OnHurtBefore } from "../../Events/OnHurtBefore";
import { AbstractPotion } from "../../Potion/AbstractPotion";
import AbstractRelic from "../../Relics/AbstractRelic";
import AbstractCreature from "../AbstractCreature";
import { PlayerInfo } from "./PlayerInfo";

export class AbstractPlayer extends AbstractCreature
{
    //进阶等级
    public AdvanceLevel : number;
    //我的牌库
    public MasterDeck = new CardGroup(CardGroupType.MASTER_DECK);
    //抽牌堆
    public DrawPile = new CardGroup(CardGroupType.DRAW_PILE);
    //手牌
    public Hand = new CardGroup(CardGroupType.HAND);
    //弃牌堆
    public DiscardPile = new CardGroup(CardGroupType.HAND);
    //手牌
    public Hand = new CardGroup(CardGroupType.HAND);
    //手牌
    public Hand = new CardGroup(CardGroupType.HAND);
    //药
    public Potion : Array<AbstractPotion>
    //药槽
    public PotionSlots = 3;
    //遗物
    public Relic = Array<AbstractRelic>()
    constructor(public CharacterInfo : PlayerInfo) {
        super();
        this.DisplayObject = CharacterInfo.Loader.Create();
        this.IsPlayer = true;
    }
    
    public HasRelic(Id:string) : AbstractRelic{
        return this.Relic.find(t1=>t1.Id == Id);
    }
    
    Update() {
    }

    Damage(info: DamageInfo) {
        DungeonManager.MessageManager.Send(OnHurtBefore.Id,new OnHurtBefore(info,this));
        DungeonManager.MessageManager.Send(OnHurt.Id,new OnHurt(info,this));
        DungeonManager.MessageManager.Send(OnHurtAfter.Id,new OnHurtAfter(info,this));
    }
}