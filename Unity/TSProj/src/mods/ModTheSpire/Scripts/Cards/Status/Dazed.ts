import FileHelper from "../../FileHelper";
import { LocalizationProperty } from "../../Gen/DB/Localization";
import AbstractCard, { CardColor, CardRarity, CardTarget, CardType } from "../AbstractCard";

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