import DamageAction from "../../../Action/Common/DamageAction";
import { AttackEffect } from "../../../DataDefine/AttackEffect";
import DamageInfo from "../../../DataDefine/DamageInfo";
import FileHelper from "../../../FileHelper";
import { LocalizationProperty } from "../../../Gen/DB/Localization";
import { AbstractPlayer } from "../../../Unit/Character/AbstractPlayer";
import { AbstractMonster } from "../../../Unit/Monster/AbstractMonster";
import AbstractCard, { CardColor, CardRarity, CardTarget, CardType, CardTags } from "../../AbstractCard";

export default class Strike extends AbstractCard
{
    Color: CardColor = CardColor.RED;
    Desc: string = LocalizationProperty.Read("打击描述");
    Icon: string = FileHelper.FormatPath("cards/red/attack/strike.png");
    Name: string = LocalizationProperty.Read("打击");
    Rarity: CardRarity = CardRarity.BASIC;
    Target: CardTarget = CardTarget.ENEMY;
    Type: CardType = CardType.ATTACK;
    Tags = CardTags.STRIKE | CardTags.STARTER_STRIKE;
    Damage = 6;
    Energy = 1;
    
    Use(player: AbstractPlayer, monster: AbstractMonster) {
        super.Use(player, monster);
        this.AddToBot(new DamageAction(monster,new DamageInfo(player,this.Damage),AttackEffect.SLASH_DIAGONAL))
    }
    
    Upgrade()
    {
        if(!this.IsUpgraded()){
            this.Name += "+";
            this.Damage += 3;
        }
    }
}