import {AbstractPower, PowerType} from "mods/ModTheSpire/Scripts/Power/AbstractPower";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import {StringHelper} from "mods/ModTheSpire/Scripts/StringHelper";
import {OnDamageAfter} from "mods/ModTheSpire/Scripts/Events/OnDamageAfter";
import {DamageType} from "mods/ModTheSpire/Scripts/DataDefine/DamageType";
import {ReducePowerAction} from "mods/ModTheSpire/Scripts/Action/Common/ReducePowerAction";
import {RemoveSpecificPowerAction} from "mods/ModTheSpire/Scripts/Action/Common/RemoveSpecificPowerAction";

export class ModeShiftPower extends AbstractPower{
    public static Id = "ModeShift"; 
    Icon: string = FileHelper.FormatPath("Powers/modeShift.png");
    Id: string = "ModeShift";
    Name: string = LocalizationProperty.Read("能力-形态转换");
    CanRemove = false;
    get Type(): PowerType {
        return PowerType.Special;
    }

    GetDescription(...args: any[]): string {
        return StringHelper.FormatColorString(LocalizationProperty.Read("能力-形态转换描述")).format(this.Amount);
    }

    public constructor(shiftFunc:Function) {
        super();
    }
    
    protected OnDamageAfter(msg: OnDamageAfter) {
        super.OnDamageAfter(msg);
        if(msg.info.DamageType != DamageType.THORNS) {
            if(this.Amount - msg.info.TotalDamage <= 0){
                this.AddToBot(new RemoveSpecificPowerAction(this.Owner,this.Owner,this));
            }else{
                this.AddToBot(new ReducePowerAction(this.Owner,this.Owner,this,msg.info.TotalDamage));
            }
        }
    }
}