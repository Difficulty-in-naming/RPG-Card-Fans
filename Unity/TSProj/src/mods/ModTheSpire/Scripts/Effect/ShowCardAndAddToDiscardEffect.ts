import AbstractCard from "../Cards/AbstractCard";
import { AbstractEffect } from "./AbstractEffect";


export class ShowCardAndAddToDiscardEffect extends AbstractEffect
{
    public constructor(public card : AbstractCard) {
        super();
    }
}