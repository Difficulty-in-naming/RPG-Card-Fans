import AbstractCard, {CardColor, CardRarity, CardTags, CardTarget, CardType} from "../../AbstractCard";
import {AbstractPlayer} from "mods/ModTheSpire/Scripts/Unit/Character/AbstractPlayer";
import {AbstractMonster} from "mods/ModTheSpire/Scripts/Unit/Monster/AbstractMonster";
import GainBlockAction from "mods/ModTheSpire/Scripts/Action/Common/GainBlockAction";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";

export class Defend extends AbstractCard
{
    Color: CardColor = CardColor.RED;
    Desc: string = LocalizationProperty.Read("防御描述");
    Icon: string = FileHelper.FormatPath("cards/red/attack/defend.png");
    Name: string = LocalizationProperty.Read("防御");
    Rarity: CardRarity = CardRarity.BASIC;
    Target: CardTarget = CardTarget.SELF;
    Type: CardType = CardType.SKILL;
    Tags = CardTags.STARTER_DEFEND;
    Block = 5;
    Energy = 1;
    
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