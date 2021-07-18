import {AbstractPower, PowerType} from "mods/ModTheSpire/Scripts/Power/AbstractPower";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import {StringHelper} from "mods/ModTheSpire/Scripts/StringHelper";
import {CalcDamageValueMessage} from "mods/ModTheSpire/Scripts/Events/CalcDamageValueMessage";
import {WrapDamage} from "mods/ModTheSpire/Scripts/DataDefine/DamageInfo";
import {OnDamageBefore} from "mods/ModTheSpire/Scripts/Events/OnDamageBefore";

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