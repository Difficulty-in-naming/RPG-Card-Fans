import GainBlockAction from "../../../Action/Common/GainBlockAction";
import FileHelper from "../../../FileHelper";
import { LocalizationProperty } from "../../../Gen/DB/Localization";
import AbstractCreature from "../../../Unit/AbstractCreature";
import { AbstractPlayer } from "../../../Unit/Character/AbstractPlayer";
import { AbstractMonster } from "../../../Unit/Monster/AbstractMonster";
import AbstractCard, { CardColor, CardRarity, CardTarget, CardType, CardTags } from "../../AbstractCard";

export class Defend extends AbstractCard
{
    Color: CardColor = CardColor.RED;
    Desc: string = LocalizationProperty.Read("防御描述");
    Icon: string = FileHelper.FormatPath("cards/red/skill/defend.png");
    Name: string = LocalizationProperty.Read("防御");
    Rarity: CardRarity = CardRarity.BASIC;
    Target: CardTarget = CardTarget.SELF;
    Type: CardType = CardType.SKILL;
    Tags = CardTags.STARTER_DEFEND;
    Block = 5;
    Energy = 1;
    
    Use(player: AbstractPlayer, monster: AbstractCreature) {
        super.Use(player, monster);
        this.AddToBot(new GainBlockAction(player,this.Block));
    }

    Upgrade()
    {
        if(!this.IsUpgraded()){
            this.UpgradeName();
            this.UpgradeBlock(3);
        }
    }
}