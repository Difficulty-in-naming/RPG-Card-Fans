import DamageAction from "../../../Action/Common/DamageAction";
import { AttackEffect } from "../../../DataDefine/AttackEffect";
import DamageInfo from "../../../DataDefine/DamageInfo";
import DungeonManager from "../../../DungeonManager";
import { CardEnterHandMessage } from "../../../Events/CardEnterHandMessage";
import { CardRemoveFromHandMessage } from "../../../Events/CardRemoveFromHandMessage";
import { OnDamageAfterMessage } from "../../../Events/OnDamageAfterMessage";
import { OnPreBattleMessage } from "../../../Events/OnPreBattleMessage";
import FileHelper from "../../../FileHelper";
import { LocalizationProperty } from "../../../Gen/DB/Localization";
import AbstractCreature from "../../../Unit/AbstractCreature";
import { AbstractPlayer } from "../../../Unit/Character/AbstractPlayer";
import { AbstractMonster } from "../../../Unit/Monster/AbstractMonster";
import AbstractCard, { CardColor, CardRarity, CardTarget, CardType, CardTags } from "../../AbstractCard";

export default class BloodForBlood extends AbstractCard
{
    Color: CardColor = CardColor.RED;
    Desc: string = LocalizationProperty.Read("以血还血描述");
    Icon: string = FileHelper.FormatPath("cards/red/attack/blood_for_blood.png")
    Name: string = LocalizationProperty.Read("以血还血");
    Rarity: CardRarity = CardRarity.UNCOMMON;
    Target: CardTarget = CardTarget.ENEMY;
    Type: CardType = CardType.ATTACK;
    Damage = 18;
    Energy = 4;
    Magic = 4;
    constructor(){
        super();
        DungeonManager.MessageManager.Add(CardEnterHandMessage.Id,this.CardEnterHand)
        DungeonManager.MessageManager.Add(CardRemoveFromHandMessage.Id,this.CardRemoveFromHand)
        DungeonManager.MessageManager.Add(OnPreBattleMessage.Id,this.OnPreBattle)
    }
    OnPreBattle(msg : OnPreBattleMessage){ 
        this.Energy = this.Magic;
    }
    CardEnterHand(msg : CardEnterHandMessage){ 
        DungeonManager.MessageManager.Add(OnDamageAfterMessage.Id,this.OnDamageAfter)
    }

    CardRemoveFromHand(msg : CardRemoveFromHandMessage){
        DungeonManager.MessageManager.Remove(OnDamageAfterMessage.Id,this.OnDamageAfter)
    }

    OnDamageAfter(msg : OnDamageAfterMessage){
        this.Energy--;
    }

    Use(player: AbstractPlayer, monster: AbstractCreature) {
        this.AddToBot(new DamageAction(monster,new DamageInfo(player,this.Damage),AttackEffect.SLASH_HEAVY))
    }

    Upgrade()
    {
        if(!this.IsUpgraded()){
            this.UpgradeName();
            this.UpgradeDamage(4);
            this.UpgradeMagic(3);
            this.UpgradeTimes++;
        }
    }

    public CanUpgrade(): boolean {
        return this.IsUpgraded();
    }
}