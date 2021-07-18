import {AbstractPower, PowerType} from "mods/ModTheSpire/Scripts/Power/AbstractPower";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import {StringHelper} from "mods/ModTheSpire/Scripts/StringHelper";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {PreApplyPowerMessage} from "mods/ModTheSpire/Scripts/Events/PreApplyPowerMessage";
import {RemoveSpecificPowerAction} from "mods/ModTheSpire/Scripts/Action/Common/RemoveSpecificPowerAction";
import {ReducePowerAction} from "mods/ModTheSpire/Scripts/Action/Common/ReducePowerAction";

export class ArtifactPower extends AbstractPower{
    public static PowerID = "Artifact";
    Name: string = LocalizationProperty.Read("能力-人工制品");
    Icon = FileHelper.FormatPath("Powers/artifact.png");
    Id = ArtifactPower.PowerID;
    get Type() : PowerType {return PowerType.Buff;}

    GetDescription(...args: any[]): string {
        return StringHelper.FormatColorString(LocalizationProperty.Read("能力-人工制品描述")).format(this.Amount);
    }
    
    OnInit() {
        super.OnInit();
        DungeonManager.MessageManager.Add(PreApplyPowerMessage.Id,this.PreApplyPower);   
    }
    
    OnRemove() {
        super.OnRemove();
        DungeonManager.MessageManager.Remove(PreApplyPowerMessage.Id,this.PreApplyPower);
    }

    PreApplyPower(msg:PreApplyPowerMessage){
        msg.StackAmount = 0;
        if(this.Amount == 0){
            this.AddToBot(new RemoveSpecificPowerAction(this.Owner,this.Owner,this));
        }else{
            this.AddToBot(new ReducePowerAction(this.Owner,this.Owner,this,1));
        }
    }
}