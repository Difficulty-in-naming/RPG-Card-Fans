import { ReducePowerAction } from "../Action/Common/ReducePowerAction";
import { RemoveSpecificPowerAction } from "../Action/Common/RemoveSpecificPowerAction";
import DungeonManager from "../DungeonManager";
import { PreApplyPowerMessage } from "../Events/PreApplyPowerMessage";
import FileHelper from "../FileHelper";
import { LocalizationProperty } from "../Gen/DB/Localization";
import { StringHelper } from "../StringHelper";
import { AbstractPower, PowerType } from "./AbstractPower";


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