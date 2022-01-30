import { ApplyPowerAction } from "../../../Action/Common/ApplyPowerAction";
import DamageAction from "../../../Action/Common/DamageAction";
import { AttackEffect } from "../../../DataDefine/AttackEffect";
import DamageInfo from "../../../DataDefine/DamageInfo";
import { DamageType } from "../../../DataDefine/DamageType";
import FileHelper from "../../../FileHelper";
import { LocalizationProperty } from "../../../Gen/DB/Localization";
import { NoDrawPower } from "../../../Power/NoDrawPower";
import { VulnerablePower } from "../../../Power/VulnerablePower";
import { AbstractPlayer } from "../../../Unit/Character/AbstractPlayer";
import { AbstractMonster } from "../../../Unit/Monster/AbstractMonster";
import AbstractCard, { CardColor, CardRarity, CardTarget, CardType, CardTags } from "../../AbstractCard";

export default class BattleTrance extends AbstractCard
{
    Color: CardColor = CardColor.RED;
    Desc: string = LocalizationProperty.Read("战斗专注描述");
    Icon: string = FileHelper.FormatPath("cards/red/skill/battle_trance.png")
    Name: string = LocalizationProperty.Read("战斗专注");
    Rarity: CardRarity = CardRarity.UNCOMMON;
    Target: CardTarget = CardTarget.SELF;
    Type: CardType = CardType.SKILL;
    Magic = 3;
    Use(player: AbstractPlayer, monster: AbstractMonster) {
        super.Use(player, monster);
        this.AddToBot(new DrawCardAction(p, this.magicNumber));
        this.AddToBot(new ApplyPowerAction(player, player, new NoDrawPower(player)));
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