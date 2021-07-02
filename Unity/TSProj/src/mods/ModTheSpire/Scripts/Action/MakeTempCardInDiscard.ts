import ModTheSpireAction, {ActionType} from "./ModTheSpireAction";
import AbstractCard from "../Cards/AbstractCard";
import Async from "../../../../Core/Async";
import EffectKit from "../Effect/EffectKit";
import {ShowCardAndAddToDiscardEffect} from "../Effect/ShowCardAndAddToDiscardEffect";

export class MakeTempCardInDiscardAction extends ModTheSpireAction
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