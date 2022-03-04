import FileHelper from "../../../FileHelper";
import { LocalizationProperty } from "../../../Gen/DB/Localization";
import { AbstractPlayer } from "../../../Unit/Character/AbstractPlayer";
import { AbstractMonster } from "../../../Unit/Monster/AbstractMonster";
import AbstractCard, { CardColor, CardRarity, CardTarget, CardType, CardTags } from "../../AbstractCard";
import { ApplyPowerAction } from '../../../Action/Common/ApplyPowerAction';
import {VulnerablePower} from "../../../Power/VulnerablePower";
import { BerserkPower } from "../../../Power/BerserkPower";
import AbstractCreature from "../../../Unit/AbstractCreature";
export class Berserk extends AbstractCard
{
    Color: CardColor = CardColor.RED;
    Desc: string = LocalizationProperty.Read("狂暴描述");
    Icon: string = FileHelper.FormatPath("cards/red/power/berserk.png");
    Name: string = LocalizationProperty.Read("狂暴");
    Rarity: CardRarity = CardRarity.RARE;
    Target: CardTarget = CardTarget.SELF;
    Type: CardType = CardType.POWER;
    Energy = 0;
    Magic = 2;

    Use(player: AbstractPlayer, monster: AbstractCreature) {
        this.AddToBot(new ApplyPowerAction(player, player, new VulnerablePower(),this.Magic));
        this.AddToBot(new ApplyPowerAction(player, player, new BerserkPower(1), 1));
    }
1
    Upgrade()
    {
        if(!this.IsUpgraded()){
            this.UpgradeName();
            this.UpgradeEnergy(-1);
            this.UpgradeTimes++;
        }
    }
}