import GainBlockAction from "../../../Action/Common/GainBlockAction";
import { ArmamentsAction } from "../../../Action/Unique/ArmamentsAction";
import FileHelper from "../../../FileHelper";
import { LocalizationProperty } from "../../../Gen/DB/Localization";
import { AbstractPlayer } from "../../../Unit/Character/AbstractPlayer";
import { AbstractMonster } from "../../../Unit/Monster/AbstractMonster";
import AbstractCard, { CardColor, CardRarity, CardTarget, CardType, CardTags } from "../../AbstractCard";
import { ApplyPowerAction } from '../../../Action/Common/ApplyPowerAction';
import { BarricadePower } from '../../../Power/BarricadePower';
import AbstractCreature from "../../../Unit/AbstractCreature";

export class Barricade extends AbstractCard
{
    Color: CardColor = CardColor.RED;
    Desc: string = LocalizationProperty.Read("壁垒描述");
    Icon: string = FileHelper.FormatPath("cards/red/power/barricade.png");
    Name: string = LocalizationProperty.Read("壁垒");
    Rarity: CardRarity = CardRarity.RARE;
    Target: CardTarget = CardTarget.SELF;
    Type: CardType = CardType.POWER;
    Energy = 3;
    
    Use(player: AbstractPlayer, monster: AbstractCreature) {
        super.Use(player, monster);
        if(player.GetPower(BarricadePower.PowerID))
        {
            return;
        }
        this.AddToBot(new ApplyPowerAction(player,player,new BarricadePower()))
    }

    Upgrade()
    {
        if(!this.IsUpgraded()){
            this.UpgradeName();
            this.UpgradeEnergy(-1);
            this.UpgradeTimes++;
        }
    }
}