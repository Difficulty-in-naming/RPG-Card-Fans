import { WrapDamage } from "../DataDefine/DamageInfo";
import { CalcDamageValueMessage } from "../Events/CalcDamageValueMessage";
import { OnDamageBefore } from "../Events/OnDamageBefore";
import FileHelper from "../FileHelper";
import { LocalizationProperty } from "../Gen/DB/Localization";
import { StringHelper } from "../StringHelper";
import { AbstractPower, PowerType } from "./AbstractPower";

export class StrengthPower extends AbstractPower{
    Name: string = LocalizationProperty.Read("能力-力量");
    Icon: string = FileHelper.FormatPath("Powers/strength.png");
    Id: string = "Strength";
    get Type(){return this.Amount >= 0 ? PowerType.Buff : PowerType.Debuff}
    GetDescription(...args: any[]): string {
        if(this.Amount >= 0){
            return StringHelper.FormatColorString(LocalizationProperty.Read("能力-力量(提升)")).format(this.Amount);
        }
        return StringHelper.FormatColorString(LocalizationProperty.Read("能力-力量(下降)")).format(this.Amount);
    }
    //TODO
    protected CalcDamageValue(msg: CalcDamageValueMessage) {
        super.CalcDamageValue(msg);
        msg.info.AddModify(new WrapDamage(this,this.Amount))
    }
    
    protected OnDamageBefore(msg: OnDamageBefore) {
        super.OnDamageBefore(msg);
        msg.info.AddModify(new WrapDamage(this,this.Amount))
    }
}