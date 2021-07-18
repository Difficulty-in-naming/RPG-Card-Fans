import {AbstractPower, PowerType} from "mods/ModTheSpire/Scripts/Power/AbstractPower";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import {AtEndOfTurnMessage} from "mods/ModTheSpire/Scripts/Events/AtEndOfTurnMessage";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import {StringHelper} from "mods/ModTheSpire/Scripts/StringHelper";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {PaperCrane} from "mods/ModTheSpire/Scripts/Relics/PaperCrane";
import {RemoveSpecificPowerAction} from "mods/ModTheSpire/Scripts/Action/Common/RemoveSpecificPowerAction";
import {ReducePowerAction} from "mods/ModTheSpire/Scripts/Action/Common/ReducePowerAction";
import {CalcDamageValueMessage} from "mods/ModTheSpire/Scripts/Events/CalcDamageValueMessage";
import {WrapDamage} from "mods/ModTheSpire/Scripts/DataDefine/DamageInfo";
import {OnDamageAfter} from "mods/ModTheSpire/Scripts/Events/OnDamageAfter";
import AbstractCreature from "mods/ModTheSpire/Scripts/Unit/AbstractCreature";

export class WeakPower extends AbstractPower{
    Icon: string = FileHelper.FormatPath("Powers/weak.png");
    Id: string = "Weak";
    Name: string = LocalizationProperty.Read("能力-虚弱");
    
    get Type(){
        return PowerType.Debuff;
    }
    
    GetDescription(...args: any[]): string {
        let effect = 25;
        if(DungeonManager.Inst.Player.HasRelic(PaperCrane.Id)) 
            effect = 40;
        return StringHelper.FormatColorString(LocalizationProperty.Read("能力-虚弱描述")).format(effect,this.Amount);
    }

    protected AtEndOfTurn(msg: AtEndOfTurnMessage) {
        super.AtEndOfTurn(msg);
        if(this.Amount == 0){
            this.AddToBot(new RemoveSpecificPowerAction(this.Owner,this.Owner,this));
        }else{
            this.AddToBot(new ReducePowerAction(this.Owner,this.Owner,this,1));
        }
        return
    }
    
    protected CalcFinalDamageValue(msg: CalcDamageValueMessage) {
        super.CalcFinalDamageValue(msg);
        let effect = 0.25;
        if(DungeonManager.Inst.Player.HasRelic(PaperCrane.Id))
            effect = 0.40;
        msg.info.AddModify(new WrapDamage(this,-msg.info.TotalDamage * effect));
    }

    protected OnDamageAfter(msg: OnDamageAfter) {
        super.OnDamageAfter(msg);
        let effect = 0.25;
        if(DungeonManager.Inst.Player.HasRelic(PaperCrane.Id))
            effect = 0.40;
        msg.info.AddModify(new WrapDamage(this,-msg.info.TotalDamage * effect));
    }
}