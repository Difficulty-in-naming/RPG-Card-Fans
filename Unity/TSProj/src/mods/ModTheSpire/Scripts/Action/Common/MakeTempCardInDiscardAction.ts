import Async from "../../../../../Core/Async";
import AbstractCard from "../../Cards/AbstractCard";
import EffectKit from "../../Effect/EffectKit";
import { ShowCardAndAddToDiscardEffect } from "../../Effect/ShowCardAndAddToDiscardEffect";
import AbstractGameAction, { ActionType } from "../AbstractGameAction";

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