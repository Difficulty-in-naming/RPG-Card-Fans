import Async from "../../../../../Core/Async";
import AbstractCard, { CardType } from "../../Cards/AbstractCard";
import DungeonManager from "../../DungeonManager";
import { OnUseCardAfterMessage } from "../../Events/OnUseCardAfterMessage";
import { OnUseCardBeforeMessage } from "../../Events/OnUseCardBeforeMessage";
import { OnUseCardMessage } from "../../Events/OnUseCardMessage";
import { GameSettings } from "../../Game/GameSettings";
import AbstractCreature from "../../Unit/AbstractCreature";
import { AbstractPlayer } from "../../Unit/Character/AbstractPlayer";
import AbstractGameAction, { ActionType } from "../AbstractGameAction";
import { ShowCardAction } from "./ShowCardAction";
import { ShowCardAndPoofAction } from "./ShowCardAndPoofAction";

export class UseCardAction extends AbstractGameAction{
    public ExhaustCard : boolean;
    public ReboundCard : boolean;
    public CanUse : boolean;
    private Source : AbstractPlayer;
    constructor(private Card:AbstractCard,private Target:AbstractCreature = null) {
        super();
        let message = new OnUseCardBeforeMessage(this.Source,this.Target,this.Card,this);
        DungeonManager.MessageManager.Send(OnUseCardBeforeMessage.Id,message);
        if(!this.CanUse)
            return;
        if(Card.Exhaust)
        {
            this.ExhaustCard = true;
            this.Type = ActionType.EXHAUST;
        }
        else{
            this.ExhaustCard = false;
            this.Type = ActionType.USE;
        }
        this.Source = DungeonManager.Inst.Player;
    }
    async Update(): Promise<boolean> {
        if(this.Duration == 0){
            this.Card.Use(this.Source,this.Target);
            DungeonManager.MessageManager.Send(OnUseCardMessage.Id,new OnUseCardMessage(this.Source,this.Target,this.Card));
            if(this.Card.Temp){
                this.AddToTop(new ShowCardAndPoofAction(this.Card));
                return true;
            }
            if(this.Card.Type == CardType.POWER){
                this.AddToTop(new ShowCardAction(this.Card))
                if(GameSettings.FastMode){
                    await Async.Delay(100);
                }
                else{
                    await Async.Delay(700);
                }
                return true;
            }
            if(!this.ExhaustCard){
                if(this.ReboundCard){
                    
                }
            }
        }
    }

    private MoveToDeck(){

    }
}