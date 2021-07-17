import {AbstractPower, PowerType} from "mods/ModTheSpire/Scripts/Power/AbstractPower";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import {StringHelper} from "mods/ModTheSpire/Scripts/StringHelper";
import {AtEndOfTurnMessage} from "mods/ModTheSpire/Scripts/Events/AtEndOfTurnMessage";
import {RemoveSpecificPowerAction} from "mods/ModTheSpire/Scripts/Action/Common/RemoveSpecificPowerAction";
import {ReducePowerAction} from "mods/ModTheSpire/Scripts/Action/Common/ReducePowerAction";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {PreModifyBlockMessage} from "mods/ModTheSpire/Scripts/Events/PreModifyBlockMessage";

export class FrailPower extends AbstractPower{
    Icon: string = FileHelper.FormatPath("Powers/frail.png");
    Id: string = "Frail";
    Name: string = LocalizationProperty.Read("能力-脆弱");
    get Type(): PowerType {
        return PowerType.Debuff;
    }

    GetDescription(...args: any[]): string {
        return StringHelper.FormatColorString(LocalizationProperty.Read("能力-脆弱描述")).format(this.Amount);
    }

    OnInit() {
        super.OnInit();
        DungeonManager.MessageManager.Add(PreModifyBlockMessage.Id,this.PreModifyBlock);
    }

    OnRemove() {
        super.OnRemove();
        DungeonManager.MessageManager.Remove(PreModifyBlockMessage.Id,this.PreModifyBlock);
    }

    PreModifyBlock(msg:PreModifyBlockMessage){
        msg.block *= 0.75;
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
}