import AbstractGameAction from "mods/ModTheSpire/Scripts/Action/AbstractGameAction";
import AbstractCreature from "mods/ModTheSpire/Scripts/Unit/AbstractCreature";
import {AttackEffect} from "mods/ModTheSpire/Scripts/DataDefine/AttackEffect";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {RoomPhase} from "mods/ModTheSpire/Scripts/Room/AbstractRoom";
import EffectKit from "mods/ModTheSpire/Scripts/Effect/EffectKit";
import {FlashAtkImgEffect} from "mods/ModTheSpire/Scripts/Effect/FlashAtkImgEffect";
import Color from "mods/ModTheSpire/Scripts/DataDefine/Color";
import DamageInfo from "mods/ModTheSpire/Scripts/DataDefine/DamageInfo";
import {DamageType} from "mods/ModTheSpire/Scripts/DataDefine/DamageType";
import {PoisonPower} from "mods/ModTheSpire/Scripts/Power/PoisonPower";
import {ObserverMessageKit} from "Core/ObserverMessageKit";
import {NotifyPowerDescerptionChanged} from "mods/ModTheSpire/Scripts/Events/NotifyPowerDescerptionChanged";
import {WaitAction} from "mods/ModTheSpire/Scripts/Action/Utility/WaitAction";

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
            this.AddToTop(new WaitAction(0.1));
        }

    }
}