import AbstractCard, {CardColor, CardRarity, CardTags, CardTarget, CardType} from "../../AbstractCard";
import AbstractPlayer from "../../../Character/AbstractPlayer";
import AbstractMonster from "../../../Monster/AbstractMonster";
import DamageAction from "../../../Action/Damage";
import DamageInfo from "../../../DataDefine/DamageInfo";
import {AttackEffect} from "../../../DataDefine/AttackEffect";

export default class Strike extends AbstractCard
{
    Tags = CardTags.STRIKE | CardTags.STARTER_STRIKE;
    Damage = 6;
    
    constructor() {
        super("打击","打击描述","mods/mod_the_spire/res/cards/red/attack/strike",CardType.ATTACK,CardRarity.BASIC,CardTarget.ENEMY,CardColor.RED);
    }
    
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