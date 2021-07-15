import AbstractGameAction from "mods/ModTheSpire/Scripts/Action/AbstractGameAction";
import AbstractCreature from "mods/ModTheSpire/Scripts/Unit/AbstractCreature";
import {AbstractPower} from "mods/ModTheSpire/Scripts/Power/AbstractPower";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {PowerExpireTextEffect} from "mods/ModTheSpire/Scripts/Effect/Combat/PowerExpireTextEffect";
import Async from "Core/Async";

export class RemoveSpecificPowerAction extends AbstractGameAction{
    public constructor(public Target:AbstractCreature,public Source:AbstractCreature,public power:AbstractPower|string) {
        super();
    }

    async Update(): Promise<boolean> {
        if(this.Target.IsDeadOrEscaped)
            return true;
        let removeMe:AbstractPower;
        if(typeof this.power === 'string'){
            removeMe = this.Target.GetPower(<string>this.power);
        } else{
            removeMe = <AbstractPower>this.power;
            if(!this.Target.GetPower(removeMe?.Id)){
                removeMe = undefined;
            }
        }
        if(removeMe){
            DungeonManager.EffectManager.Play(new PowerExpireTextEffect(this.Target.Bounds.x,this.Target.Bounds.height,removeMe.Name,removeMe.Icon));
            this.Target.RemovePower(removeMe.Id);
            await Async.Delay(100);
            return true;
        }
        else{
            return true;
        }
    }
}