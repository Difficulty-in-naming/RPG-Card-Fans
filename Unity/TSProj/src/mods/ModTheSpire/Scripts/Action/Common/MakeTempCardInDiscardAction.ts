import AbstractGameAction, {ActionType} from "mods/ModTheSpire/Scripts/Action/AbstractGameAction";
import AbstractCard from "mods/ModTheSpire/Scripts/Cards/AbstractCard";
import EffectKit from "mods/ModTheSpire/Scripts/Effect/EffectKit";
import {ShowCardAndAddToDiscardEffect} from "mods/ModTheSpire/Scripts/Effect/ShowCardAndAddToDiscardEffect";
import Async from "Core/Async";

export class MakeTempCardInDiscardAction extends AbstractGameAction
{
    public constructor(private card : AbstractCard, private amount = 1, private sameUUID = false) {
        super();
        this.Type = ActionType.CARD_MANIPULATION; 
    }

    async Update(): Promise<boolean> {
        for (let i = 0; i < this.amount; i++) {
            EffectKit.Inst().Play(new ShowCardAndAddToDiscardEffect(this.card.Clone()))
        }
        await Async.Delay(0.5);
        return true;
    }
}