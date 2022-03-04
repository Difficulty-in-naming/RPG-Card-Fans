import Async from "../../../../../Core/Async";
import { SoundMaster } from "../../Audio/SoundMaster";
import AbstractCard from "../../Cards/AbstractCard";
import DungeonManager from "../../DungeonManager";
import { ExhaustCardEffect } from "../../Effect/ExhaustCardEffect";
import AbstractGameAction from "../AbstractGameAction";

export class ShowCardAndPoofAction extends AbstractGameAction{
    public constructor(public Card : AbstractCard) {
        super();
    }

    async Update(): Promise<boolean> {
        DungeonManager.EffectManager.Play(new ExhaustCardEffect(this.Card));
        await Async.Delay(200);
        return true;
    }
} 