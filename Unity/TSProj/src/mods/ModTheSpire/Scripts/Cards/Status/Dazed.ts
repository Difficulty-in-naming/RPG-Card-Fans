import AbstractCard, {CardColor, CardRarity, CardTarget, CardType} from "mods/ModTheSpire/Scripts/Cards/AbstractCard";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";

export class Dazed extends AbstractCard{
    Color: CardColor = CardColor.COLORLESS;
    Desc: string = LocalizationProperty.Read("卡牌-晕眩描述");
    Icon: string = FileHelper.FormatPath("cards/status/dazed.png");
    Name: string = LocalizationProperty.Read("卡牌-晕眩");
    Rarity: CardRarity = CardRarity.COMMON;
    Target: CardTarget = CardTarget.NONE;
    Type: CardType = CardType.STATUS;
    Ethereal = true;
}