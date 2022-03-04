import DamageAction from "../Action/Common/DamageAction";
import AbstractCard, { CardType } from "../Cards/AbstractCard";
import { AttackEffect } from "../DataDefine/AttackEffect";
import DamageInfo from "../DataDefine/DamageInfo";
import { DamageType } from "../DataDefine/DamageType";
import { OnHurtBeforeMessage } from "../Events/OnHurtBeforeMessage";
import FileHelper from "../FileHelper";
import { LocalizationProperty } from "../Gen/DB/Localization";
import { StringHelper } from "../StringHelper";
import { AbstractPower, PowerType } from "./AbstractPower";

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

    protected OnHurtAfter(msg: OnHurtBeforeMessage) {
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