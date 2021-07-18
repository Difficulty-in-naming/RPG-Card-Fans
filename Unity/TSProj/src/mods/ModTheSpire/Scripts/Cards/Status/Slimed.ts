import AbstractCard, {CardColor, CardRarity, CardTarget, CardType} from "mods/ModTheSpire/Scripts/Cards/AbstractCard";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";

export class Slimed extends AbstractCard{
    Color: CardColor = CardColor.COLORLESS;
    Desc: string = LocalizationProperty.Read("黏液描述");
    Icon: string = FileHelper.FormatPath("cards/status/slimed.png");
    Name: string = LocalizationProperty.Read("黏液");
    Rarity: CardRarity = CardRarity.COMMON;
    Target: CardTarget = CardTarget.SELF;
    Type: CardType = CardType.STATUS;
    Exhaust = true;
}