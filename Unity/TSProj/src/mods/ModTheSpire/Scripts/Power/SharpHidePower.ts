import {AbstractPower, PowerType} from "mods/ModTheSpire/Scripts/Power/AbstractPower";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import {StringHelper} from "mods/ModTheSpire/Scripts/StringHelper";
import {OnHurtBefore} from "mods/ModTheSpire/Scripts/Events/OnHurtBefore";
import DamageAction from "mods/ModTheSpire/Scripts/Action/Common/DamageAction";
import AbstractCard, {CardType} from "mods/ModTheSpire/Scripts/Cards/AbstractCard";
import DamageInfo from "mods/ModTheSpire/Scripts/DataDefine/DamageInfo";
import {DamageType} from "mods/ModTheSpire/Scripts/DataDefine/DamageType";
import {AttackEffect} from "mods/ModTheSpire/Scripts/DataDefine/AttackEffect";

export class SharpHidePower extends AbstractPower{
    public static Id = "Sharp Hide";
    Icon: string = FileHelper.FormatPath("Powers/sharpHide.png");
    Id: string = "Sharp Hide";
    Name: string = LocalizationProperty.Read("能力-锋利外壳");
    get Type(): PowerType {
        return PowerType.Buff;
    }

    GetDescription(...args: any[]): string {
        return StringHelper.FormatColorString(LocalizationProperty.Read("能力-锋利外壳描述").format(this.Amount));
    }

    protected OnHurtAfter(msg: OnHurtBefore) {
        super.OnHurtAfter(msg);
        if(this.Owner.IsDeadOrEscaped || this.Owner.IsDying){
            return;
        }
        if(msg.Damage.Modify[0].Damage.Source instanceof AbstractCard) {
            let card = <AbstractCard>msg.Damage.Modify[0].Damage.Source;
            if(card.Type == CardType.ATTACK) {
                this.Flash();
                this.AddToBot(new DamageAction(msg.Damage.Unit,new DamageInfo(this.Owner,this.Amount,DamageType.THORNS),AttackEffect.SLASH_HORIZONTAL));
            }
        }
    }
}