import { AbstractEffect } from "./AbstractEffect";
import AbstractCard from "../Cards/AbstractCard";
import { SoundMaster } from "../Audio/SoundMaster";
import DungeonManager from "../DungeonManager";
import { ExhaustBlurEffect } from "./ExhaustBlurEffect";
import { ExhaustEmberEffect } from "./ExhaustEmberEffect";


export class ExhaustCardEffect extends AbstractEffect
{
    public constructor(public Card : AbstractCard) {
        super();
    }

    public Update(): void {
        if(this.Duration == 0){
            SoundMaster.PlayVoice("CARD_EXHAUST",0.2);
            for (let index = 0; index < 90; index++) {
                DungeonManager.EffectManager.Play(new ExhaustBlurEffect(this.Card.View.x,this.Card.View.y));
            }
            for (let index = 0; index < 50; index++) {
                DungeonManager.EffectManager.Play(new ExhaustEmberEffect(this.Card.View.x,this.Card.View.y));
            }
        }
        else if(this.Duration >= 1)
        {
            this.IsDone = true;
            return;
        }
    }
}