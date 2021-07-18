import {AbstractPower, PowerType} from "mods/ModTheSpire/Scripts/Power/AbstractPower";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {PaperCrane} from "mods/ModTheSpire/Scripts/Relics/PaperCrane";
import {StringHelper} from "mods/ModTheSpire/Scripts/StringHelper";
import {AtEndOfTurnMessage} from "mods/ModTheSpire/Scripts/Events/AtEndOfTurnMessage";
import {RemoveSpecificPowerAction} from "mods/ModTheSpire/Scripts/Action/Common/RemoveSpecificPowerAction";
import {ReducePowerAction} from "mods/ModTheSpire/Scripts/Action/Common/ReducePowerAction";
import {OnHurtBefore} from "mods/ModTheSpire/Scripts/Events/OnHurtBefore";
import {DamageType} from "mods/ModTheSpire/Scripts/DataDefine/DamageType";
import {AbstractPlayer} from "mods/ModTheSpire/Scripts/Unit/Character/AbstractPlayer";
import {WrapDamage} from "mods/ModTheSpire/Scripts/DataDefine/DamageInfo";
import {CalcDamageValueMessage} from "mods/ModTheSpire/Scripts/Events/CalcDamageValueMessage";

export class VulnerablePower extends AbstractPower{
    Icon: string = FileHelper.FormatPath("Powers/vulnerable.png");
    Id: string = "Vulnerable";
    Name: string = LocalizationProperty.Read("能力-易伤");
    get Type(): PowerType {
        return PowerType.Debuff;
    }

    GetDescription(...args: any[]): string {
        let effect = 25;
        if(DungeonManager.Inst.Player.HasRelic(PaperCrane.Id))
            effect = 40;
        return StringHelper.FormatColorString(LocalizationProperty.Read("能力-易伤描述")).format(effect,this.Amount);
    }

    protected AtEndOfTurn(msg: AtEndOfTurnMessage) {
        super.AtEndOfTurn(msg);
        if(this.Amount == 0){
            this.AddToBot(new RemoveSpecificPowerAction(this.Owner,this.Owner,this));
        }else{
            this.AddToBot(new ReducePowerAction(this.Owner,this.Owner,this,1));
        }
        return;
    }

    protected CalcFinalHurtValue(msg: CalcDamageValueMessage) {
        super.CalcFinalHurtValue(msg);
        if(msg.info.DamageType == DamageType.NORMAL){
            let player = <AbstractPlayer>this.Owner;
            if(player){
                if(player.HasRelic("Odd Mushroom")){
                    msg.info.AddModify(new WrapDamage(this,msg.info.TotalDamage * 0.25));
                    return;
                }
            }
        }
        msg.info.AddModify(new WrapDamage(this,msg.info.TotalDamage * 0.5));
    }
}