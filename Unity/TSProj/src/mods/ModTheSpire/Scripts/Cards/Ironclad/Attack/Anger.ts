import AbstractCard, {CardColor, CardRarity, CardTags, CardTarget, CardType} from "../../AbstractCard";
import DamageInfo from "../../../DataDefine/DamageInfo";
import {AttackEffect} from "../../../DataDefine/AttackEffect";
import {AbstractPlayer} from "mods/ModTheSpire/Scripts/Unit/Character/AbstractPlayer";
import {AbstractMonster} from "mods/ModTheSpire/Scripts/Unit/Monster/AbstractMonster";
import DamageAction from "mods/ModTheSpire/Scripts/Action/Common/DamageAction";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";

export default class Strike extends AbstractCard
{
    Color: CardColor = CardColor.RED;
    Desc: string = LocalizationProperty.Read("愤怒描述");
    Icon: string = FileHelper.FormatPath("cards/red/attack/anger.png")
    Name: string = LocalizationProperty.Read("愤怒");
    Rarity: CardRarity = CardRarity.COMMON;
    Target: CardTarget = CardTarget.ENEMY;
    Type: CardType = CardType.ATTACK;
    Tags = CardTags.STRIKE;
    Damage = 6;
    Energy = 0;

    Use(player: AbstractPlayer, monster: AbstractMonster) {
        super.Use(player, monster);
        this.AddToBot(new DamageAction(monster,new DamageInfo(player,this.Damage),AttackEffect.BLUNT_HEAVY))
        //this.AddToBot(new VFXAction(player,new VerticalAuraParticleEffect(Color.FireBrick,player.)))
    }

    Upgrade()
    {
        if(!this.IsUpgraded()){
            this.Name += "+";
            this.Damage += 3;
        }
    }
}