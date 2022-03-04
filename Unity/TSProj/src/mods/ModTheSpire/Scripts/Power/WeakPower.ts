import { ReducePowerAction } from "../Action/Common/ReducePowerAction";
import { RemoveSpecificPowerAction } from "../Action/Common/RemoveSpecificPowerAction";
import { WrapDamage } from "../DataDefine/DamageInfo";
import DungeonManager from "../DungeonManager";
import { AtEndOfTurnMessage } from "../Events/AtEndOfTurnMessage";
import { CalcDamageValueMessage } from "../Events/CalcDamageValueMessage";
import { OnDamageAfterMessage } from "../Events/OnDamageAfterMessage";
import FileHelper from "../FileHelper";
import { LocalizationProperty } from "../Gen/DB/Localization";
import { PaperCrane } from "../Relics/PaperCrane";
import { StringHelper } from "../StringHelper";
import { AbstractPower, PowerType } from "./AbstractPower";

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

    protected OnDamageAfter(msg: OnDamageAfterMessage) {
        super.OnDamageAfter(msg);
        let effect = 0.25;
        if(DungeonManager.Inst.Player.HasRelic(PaperCrane.Id))
            effect = 0.40;
        msg.info.AddModify(new WrapDamage(this,-msg.info.TotalDamage * effect));
    }
}