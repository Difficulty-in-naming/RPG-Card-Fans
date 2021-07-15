import {AbstractEffect} from "mods/ModTheSpire/Scripts/Effect/AbstractEffect";
import AbstractCard from "../Cards/AbstractCard";

export class ShowCardAndAddToDiscardEffect extends AbstractEffect
{
    public constructor(public card : AbstractCard) {
        super();
    }
}