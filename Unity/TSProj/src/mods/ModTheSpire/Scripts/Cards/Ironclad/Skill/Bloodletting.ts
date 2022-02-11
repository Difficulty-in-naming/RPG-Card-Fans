import { ApplyPowerAction } from "../../../Action/Common/ApplyPowerAction";
import DamageAction from "../../../Action/Common/DamageAction";
import GainEnergyAction from "../../../Action/Common/GainEnergyAction";
import LoseHPAction from "../../../Action/Common/LoseHPAction";
import { AttackEffect } from "../../../DataDefine/AttackEffect";
import DamageInfo from "../../../DataDefine/DamageInfo";
import { DamageType } from "../../../DataDefine/DamageType";
import FileHelper from "../../../FileHelper";
import { LocalizationProperty } from "../../../Gen/DB/Localization";
import { NoDrawPower } from "../../../Power/NoDrawPower";
import { VulnerablePower } from "../../../Power/VulnerablePower";
import AbstractCreature from "../../../Unit/AbstractCreature";
import { AbstractPlayer } from "../../../Unit/Character/AbstractPlayer";
import { AbstractMonster } from "../../../Unit/Monster/AbstractMonster";
import AbstractCard, { CardColor, CardRarity, CardTarget, CardType, CardTags } from "../../AbstractCard";

export default class Bloodletting extends AbstractCard
{
    Color: CardColor = CardColor.RED;
    Desc: string = LocalizationProperty.Read("放血描述");
    Icon: string = FileHelper.FormatPath("cards/red/skill/bloodletting.png")
    Name: string = LocalizationProperty.Read("放血");
    Rarity: CardRarity = CardRarity.UNCOMMON;
    Target: CardTarget = CardTarget.SELF;
    Type: CardType = CardType.SKILL;
    Magic = 2;
    Use(p: AbstractPlayer, monster: AbstractCreature) {
        this.AddToBot(new LoseHPAction(p, p, 3));
        this.AddToBot(new GainEnergyAction(this.Magic));
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