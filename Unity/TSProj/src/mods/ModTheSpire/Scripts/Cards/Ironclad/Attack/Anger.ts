import AbstractCard, {CardColor, CardRarity, CardTags, CardTarget, CardType} from "../../AbstractCard";
import AbstractPlayer from "../../../Character/AbstractPlayer";
import AbstractMonster from "../../../Monster/AbstractMonster";
import DamageAction from "../../../Action/Damage";
import DamageInfo from "../../../DataDefine/DamageInfo";
import {AttackEffect} from "../../../DataDefine/AttackEffect";

export default class Strike extends AbstractCard
{
    Tags = CardTags.STRIKE;
    Damage = 6;

    constructor() {
        super("愤怒","愤怒描述","mods/mod_the_spire/res/cards/red/attack/anger",CardType.ATTACK,CardRarity.COMMON,CardTarget.ENEMY,CardColor.RED);
    }

    Use(player: AbstractPlayer, monster: AbstractMonster) {
        super.Use(player, monster);
        this.AddToBot(new DamageAction(monster,new DamageInfo(player,this.Damage),AttackEffect.BLUNT_HEAVY))
    }

    Upgrade()
    {
        if(!this.IsUpgraded()){
            this.Name += "+";
            this.Damage += 3;
        }
    }
}