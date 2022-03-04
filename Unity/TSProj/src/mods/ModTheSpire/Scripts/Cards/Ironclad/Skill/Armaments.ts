import GainBlockAction from "../../../Action/Common/GainBlockAction";
import { ArmamentsAction } from "../../../Action/Unique/ArmamentsAction";
import FileHelper from "../../../FileHelper";
import { LocalizationProperty } from "../../../Gen/DB/Localization";
import AbstractCreature from "../../../Unit/AbstractCreature";
import { AbstractPlayer } from "../../../Unit/Character/AbstractPlayer";
import { AbstractMonster } from "../../../Unit/Monster/AbstractMonster";
import AbstractCard, { CardColor, CardRarity, CardTarget, CardType, CardTags } from "../../AbstractCard";

export class Armaments extends AbstractCard
{
    Color: CardColor = CardColor.RED;
    Desc: string = LocalizationProperty.Read("武装描述");
    Icon: string = FileHelper.FormatPath("cards/red/skill/armaments.png");
    Name: string = LocalizationProperty.Read("武装");
    Rarity: CardRarity = CardRarity.COMMON;
    Target: CardTarget = CardTarget.SELF;
    Type: CardType = CardType.SKILL;
    Block = 5;
    Energy = 1;
    
    Use(player: AbstractPlayer, monster: AbstractCreature) {
        super.Use(player, monster);
        this.AddToBot(new GainBlockAction(player,this.Block));
        this.AddToBot(new ArmamentsAction(this.IsUpgraded()));//TODO UI未完成
    }

    Upgrade()
    {
        if(!this.IsUpgraded()){
            this.UpgradeName();
            this.UpgradeBlock(3);
        }
    }
}