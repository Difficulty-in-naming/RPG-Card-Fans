import AbstractCard from "../../Cards/AbstractCard";
import Color from "../../DataDefine/Color";
import DamageInfo from "../../DataDefine/DamageInfo";
import { DamageType } from "../../DataDefine/DamageType";
import DungeonManager from "../../DungeonManager";
import EffectKit from "../../Effect/EffectKit";
import { FlashAtkImgEffect } from "../../Effect/FlashAtkImgEffect";
import { NotifyPowerDescerptionChanged } from "../../Events/NotifyPowerDescerptionChanged";
import { PoisonPower } from "../../Power/PoisonPower";
import { RoomPhase } from "../../Room/AbstractRoom";
import { AbstractPlayer } from "../../Unit/Character/AbstractPlayer";
import AbstractGameAction, { ActionType } from "../AbstractGameAction";
import { WaitAction } from "../Utility/WaitAction";


export class ArmamentsAction extends AbstractGameAction {
    private p : AbstractPlayer;
    private cannotUpgrade : Array<AbstractCard> = new Array<AbstractCard>();
    public constructor(private upgraded : boolean) {
        super();
        this.Type = ActionType.CARD_MANIPULATION;
        this.p = DungeonManager.Inst.Player
    }

    async Update(): Promise<boolean> {
        if(this.upgraded){
            this.p.Hand.Group.forEach((item)=>{
                if(item.CanUpgrade()){
                    item.Upgrade();
                    item.SuperFlash();
                }
            })
            return true;
        }
        this.p.Hand.Group.forEach((item)=>{
            if(!item.CanUpgrade()){
                this.cannotUpgrade.push(item);
            }
        });
        if(this.p.Hand.Group.length - this.cannotUpgrade.length == 1)
        {
            this.p.Hand.Group.forEach((item)=>{
                if(item.CanUpgrade()){
                    item.Upgrade();
                    item.SuperFlash();
                }
            });
            return true;
        }
    } 
}