import { CardGroup, CardGroupType } from "../../Cards/CardGroup";
import DamageInfo from "../../DataDefine/DamageInfo";
import DungeonManager from "../../DungeonManager";
import { OnHurtMessage } from "../../Events/OnHurtMessage";
import { OnHurtAfterMessage } from "../../Events/OnHurtAfterMessage";
import { OnHurtBeforeMessage } from "../../Events/OnHurtBeforeMessage";
import { AbstractPotion } from "../../Potion/AbstractPotion";
import AbstractRelic from "../../Relics/AbstractRelic";
import { CombatRoom } from "../../Room/CombatRoom";
import AbstractCreature from "../AbstractCreature";
import { PlayerInfo } from "./PlayerInfo";
import { AbstractBlight } from "../../Blight/AbstractBlight";

export class AbstractPlayer extends AbstractCreature
{
    //我的牌库
    public MasterDeck = new CardGroup(CardGroupType.MASTER_DECK);
    //抽牌堆
    public DrawPile = new CardGroup(CardGroupType.DRAW_PILE);
    //手牌
    public Hand = new CardGroup(CardGroupType.HAND);
    //弃牌堆
    public DiscardPile = new CardGroup(CardGroupType.DISCARD_PILE);
    //药
    public Potion : Array<AbstractPotion>
    //药槽
    public PotionSlots = 3;
    //遗物
    public Relic = Array<AbstractRelic>();
    //荒疫
    public Blight = Array<AbstractBlight>();
    constructor(public CharacterInfo : PlayerInfo) {
        super();
        this.DisplayObject = CharacterInfo.Loader.Create();
        this.IsPlayer = true;
    }
    
    public HasRelic(Id:string) : AbstractRelic{
        return this.Relic.find(t1=>t1.Id == Id);
    }

    public GainEnergy(energy : number)
    {
        let room = DungeonManager.Inst.CurrentRoom;
        if(room instanceof CombatRoom){
            room.CurrentEnergy += energy;
        }
    }
    
    Update() {
    }

    public HasBlight(key : string) : boolean{
        return this.Blight.find((value)=>value.Id == key) != null;
    }
    Damage(info: DamageInfo) {
        DungeonManager.MessageManager.Send(OnHurtBeforeMessage.Id,new OnHurtBeforeMessage(info,this));
        DungeonManager.MessageManager.Send(OnHurtMessage.Id,new OnHurtMessage(info,this));
        DungeonManager.MessageManager.Send(OnHurtAfterMessage.Id,new OnHurtAfterMessage(info,this));
    }
}