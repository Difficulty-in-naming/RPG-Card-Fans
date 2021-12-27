import { AttackEffect } from "../../DataDefine/AttackEffect";
import Color from "../../DataDefine/Color";
import DamageInfo from "../../DataDefine/DamageInfo";
import { DamageType } from "../../DataDefine/DamageType";
import DungeonManager from "../../DungeonManager";
import EffectKit from "../../Effect/EffectKit";
import { FlashAtkImgEffect } from "../../Effect/FlashAtkImgEffect";
import { NotifyPowerDescerptionChanged } from "../../Events/NotifyPowerDescerptionChanged";
import { PoisonPower } from "../../Power/PoisonPower";
import { RoomPhase } from "../../Room/AbstractRoom";
import AbstractCreature from "../../Unit/AbstractCreature";
import AbstractGameAction from "../AbstractGameAction";
import { WaitAction } from "../Utility/WaitAction";


export class PoisonLoseHpAction extends AbstractGameAction {
    public constructor(private Target:AbstractCreature,private Source:AbstractCreature,private Amount:number,private Effect:AttackEffect) {
        super();
    }

    async Update(): Promise<boolean> {
        if(DungeonManager.Inst.CurrentRoom.Phase != RoomPhase.Combat){
            return true;
        }
        if(this.Duration == 0 && this.Target.Health > 0){
            EffectKit.Inst().Play(new FlashAtkImgEffect(this.Target.X,this.Target.Y,this.Effect));
        }
        if(this.Duration >= 0.33){
            if(this.Target.Health > 0){
                this.Target.TintEffect.From = Color.Chartreuse.Clone();
                this.Target.TintEffect.ChangeColor(Color.White.Clone());
                this.Target.Damage(new DamageInfo(this.Source,this.Amount,DamageType.HP_LOSS));
            }
            let power = this.Target.GetPower(PoisonPower.PowerID);
            if(power){
                power.Amount-=1;
                if(power.Amount == 0){
                    this.Target.RemovePower(PoisonPower.PowerID);
                }
                else{
                    DungeonManager.MessageManager.Send(NotifyPowerDescerptionChanged.Id,new NotifyPowerDescerptionChanged(power.Id));
                }
            }
            this.AddToTop(new WaitAction(100));
        }

    }
}