import {AEffect} from "./AEffect";
import AbstractCard from "../Cards/AbstractCard";

export class ShowCardAndAddToDiscardEffect extends AEffect
{
    public constructor(public card : AbstractCard) {
        super();
    }
}