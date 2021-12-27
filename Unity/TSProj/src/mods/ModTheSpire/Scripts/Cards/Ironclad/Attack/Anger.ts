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