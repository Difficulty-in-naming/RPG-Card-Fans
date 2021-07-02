import AbstractCard, {CardColor, CardRarity, CardTags, CardTarget, CardType} from "../../AbstractCard";
import AbstractPlayer from "../../../Character/AbstractPlayer";
import AbstractMonster from "../../../Monster/AbstractMonster";
import QueueMessageKit from "../../../../../../Core/QueueMessageKit";
import DamageAction from "../../../Action/Damage";
import DamageInfo from "../../../DataDefine/DamageInfo";
import {AttackEffect} from "../../../DataDefine/AttackEffect";
import GainBlockAction from "../../../Action/GainBlock";
export default class Defend extends AbstractCard
{
    Tags = CardTags.STARTER_DEFEND;
    Block = 5;

    constructor() {
        super("防御","防御描述","mods/mod_the_spire/res/cards/red/attack/defend",CardType.SKILL,CardRarity.BASIC,CardTarget.SELF,CardColor.RED);
    }
    Use(player: AbstractPlayer, monster: AbstractMonster) {
        super.Use(player, monster);
        this.AddToBot(new GainBlockAction(player,this.Block));
    }

    Upgrade()
    {
        if(!this.IsUpgraded()){
            this.Name += "+";
            this.Block += 3;
        }
    }
}