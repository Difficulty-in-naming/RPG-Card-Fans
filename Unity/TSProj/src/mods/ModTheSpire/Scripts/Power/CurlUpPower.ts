import GainBlockAction from "../Action/Common/GainBlockAction";
import { RemoveSpecificPowerAction } from "../Action/Common/RemoveSpecificPowerAction";
import { DamageType } from "../DataDefine/DamageType";
import { OnDamageAfterMessage } from "../Events/OnDamageAfterMessage";
import FileHelper from "../FileHelper";
import { LocalizationProperty } from "../Gen/DB/Localization";
import { StringHelper } from "../StringHelper";
import { AbstractPower, PowerType } from "./AbstractPower";


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

    protected OnDamageAfter(msg: OnDamageAfterMessage) {
        super.OnDamageAfter(msg);
        if(!this.Triggered && msg.info.TotalDamage <this.Owner.Health && msg.info.TotalDamage > 0 && msg.info.DamageType == DamageType.NORMAL){
            this.Flash();
            this.Triggered = true;
            this.AddToBot(new GainBlockAction(this.Owner,this.Amount));
            this.AddToBot(new RemoveSpecificPowerAction(this.Owner,this.Owner,this));
        }
    }
}