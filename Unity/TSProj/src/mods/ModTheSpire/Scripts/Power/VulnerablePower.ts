import { ReducePowerAction } from "../Action/Common/ReducePowerAction";
import { RemoveSpecificPowerAction } from "../Action/Common/RemoveSpecificPowerAction";
import { WrapDamage } from "../DataDefine/DamageInfo";
import { DamageType } from "../DataDefine/DamageType";
import DungeonManager from "../DungeonManager";
import { AtEndOfTurnMessage } from "../Events/AtEndOfTurnMessage";
import { CalcDamageValueMessage } from "../Events/CalcDamageValueMessage";
import FileHelper from "../FileHelper";
import { LocalizationProperty } from "../Gen/DB/Localization";
import { PaperCrane } from "../Relics/PaperCrane";
import { StringHelper } from "../StringHelper";
import { AbstractPlayer } from "../Unit/Character/AbstractPlayer";
import { AbstractPower, PowerType } from "./AbstractPower";

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