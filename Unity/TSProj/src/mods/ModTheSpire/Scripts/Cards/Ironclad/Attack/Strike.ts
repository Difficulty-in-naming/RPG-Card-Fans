import AbstractCard, {CardColor, CardRarity, CardTags, CardTarget, CardType} from "../../AbstractCard";
import DamageInfo from "../../../DataDefine/DamageInfo";
import {AttackEffect} from "../../../DataDefine/AttackEffect";
import {AbstractPlayer} from "mods/ModTheSpire/Scripts/Unit/Character/AbstractPlayer";
import {AbstractMonster} from "mods/ModTheSpire/Scripts/Unit/Monster/AbstractMonster";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import DamageAction from "mods/ModTheSpire/Scripts/Action/Common/DamageAction";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";

export default class Strike extends AbstractCard
{
    Color: CardColor = CardColor.RED;
    Desc: string = LocalizationProperty.Read("打击描述");
    Icon: string = FileHelper.FormatPath("cards/red/attack/strike");
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