import AbstractCard from "../../Cards/AbstractCard";
import {AbstractPotion} from "mods/ModTheSpire/Scripts/Potion/AbstractPotion";
import AbstractCreature from "mods/ModTheSpire/Scripts/Unit/AbstractCreature";
import {PlayerInfo} from "mods/ModTheSpire/Scripts/Unit/Character/PlayerInfo";
import DamageInfo from "mods/ModTheSpire/Scripts/DataDefine/DamageInfo";
import {ObserverMessageKit} from "Core/ObserverMessageKit";
import {OnHurt} from "mods/ModTheSpire/Scripts/Events/OnHurt";
import {OnHurtBefore} from "mods/ModTheSpire/Scripts/Events/OnHurtBefore";
import {OnHurtAfter} from "mods/ModTheSpire/Scripts/Events/OnHurtAfter";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import AbstractRelic from "mods/ModTheSpire/Scripts/Relics/AbstractRelic";

export class AbstractPlayer extends AbstractCreature
{
    //进阶等级
    public AdvanceLevel : number;
    //牌堆
    public Pile : Array<AbstractCard>
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