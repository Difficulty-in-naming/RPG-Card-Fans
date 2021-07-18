import {AbstractPower, PowerType} from "mods/ModTheSpire/Scripts/Power/AbstractPower";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import {StringHelper} from "mods/ModTheSpire/Scripts/StringHelper";
import {OnDamageAfter} from "mods/ModTheSpire/Scripts/Events/OnDamageAfter";
import {DamageType} from "mods/ModTheSpire/Scripts/DataDefine/DamageType";
import GainBlockAction from "mods/ModTheSpire/Scripts/Action/Common/GainBlockAction";
import {RemoveSpecificPowerAction} from "mods/ModTheSpire/Scripts/Action/Common/RemoveSpecificPowerAction";

export class CurlUpPower extends AbstractPower{
    public static Id = "Curl Up";
    Icon: string = FileHelper.FormatPath("Powers/minion.png");
    Id: string = "Curl Up";
    Name: string = LocalizationProperty.Read("能力-蜷身");
    private Triggered = false;
    get Type(): PowerType {
        return PowerType.Buff;
    }

    GetDescription(...args: any[]): string {
        return StringHelper.FormatColorString(LocalizationProperty.Read("能力-蜷身描述")).format(this.Amount);
    }

    protected OnDamageAfter(msg: OnDamageAfter) {
        super.OnDamageAfter(msg);
        if(!this.Triggered && msg.info.TotalDamage <this.Owner.Health && msg.info.TotalDamage > 0 && msg.info.DamageType == DamageType.NORMAL){
            this.Flash();
            this.Triggered = true;
            this.AddToBot(new GainBlockAction(this.Owner,this.Amount));
            this.AddToBot(new RemoveSpecificPowerAction(this.Owner,this.Owner,this));
        }
    }
}