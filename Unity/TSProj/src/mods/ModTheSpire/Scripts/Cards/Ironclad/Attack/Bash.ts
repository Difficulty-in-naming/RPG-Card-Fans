import { ApplyPowerAction } from "../../../Action/Common/ApplyPowerAction";
import DamageAction from "../../../Action/Common/DamageAction";
import { AttackEffect } from "../../../DataDefine/AttackEffect";
import DamageInfo from "../../../DataDefine/DamageInfo";
import { DamageType } from "../../../DataDefine/DamageType";
import FileHelper from "../../../FileHelper";
import { LocalizationProperty } from "../../../Gen/DB/Localization";
import { VulnerablePower } from "../../../Power/VulnerablePower";
import AbstractCreature from "../../../Unit/AbstractCreature";
import { AbstractPlayer } from "../../../Unit/Character/AbstractPlayer";
import { AbstractMonster } from "../../../Unit/Monster/AbstractMonster";
import AbstractCard, { CardColor, CardRarity, CardTarget, CardType, CardTags } from "../../AbstractCard";

export default class Bash extends AbstractCard
{
    Color: CardColor = CardColor.RED;
    Desc: string = LocalizationProperty.Read("痛击描述");
    Icon: string = FileHelper.FormatPath("cards/red/attack/bash.png")
    Name: string = LocalizationProperty.Read("痛击");
    Rarity: CardRarity = CardRarity.BASIC;
    Target: CardTarget = CardTarget.ENEMY;
    Type: CardType = CardType.ATTACK;
    Damage = 8;
    Energy = 0;
    Magic = 2;
    Use(player: AbstractPlayer, monster: AbstractCreature) {
        super.Use(player, monster);
        this.AddToBot(new DamageAction(monster, new DamageInfo(player, this.Damage), AttackEffect.BLUNT_HEAVY));
        this.AddToBot(new ApplyPowerAction(monster, player, new VulnerablePower(),this.Magic));
    }

    Upgrade()
    {
        if(!this.IsUpgraded()){
            this.UpgradeName();
            this.UpgradeDamage(2);
            this.UpgradeMagic(1);
            this.UpgradeTimes++;
        }
    }

    public CanUpgrade(): boolean {
        return this.IsUpgraded();
    }
}