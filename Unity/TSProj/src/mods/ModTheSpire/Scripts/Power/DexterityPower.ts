import { SoundMaster } from "../Audio/SoundMaster";
import { PreModifyBlockMessage } from "../Events/PreModifyBlockMessage";
import FileHelper from "../FileHelper";
import { LocalizationProperty } from "../Gen/DB/Localization";
import { StringHelper } from "../StringHelper";
import { AbstractPower, PowerType } from "./AbstractPower";


export class DexterityPower extends AbstractPower{
    Name: string = LocalizationProperty.Read("能力-敏捷");
    Icon: string = FileHelper.FormatPath("Powers/strength.png");
    Id: string = "Strength";
    get Type(){return this.Amount >= 0 ? PowerType.Buff : PowerType.Debuff}
    GetDescription(...args: any[]): string {
        if(this.Amount >= 0){
            return StringHelper.FormatColorString(LocalizationProperty.Read("能力-敏捷(提升)")).format(this.Amount);
        }
        return StringHelper.FormatColorString(LocalizationProperty.Read("能力-敏捷(下降)")).format(this.Amount);
    }
    public PlayApplyPowerSfx() {
        SoundMaster.PlayVoice("POWER_DEXTERITY", 0.05);
    }
    PreModifyBlock(msg: PreModifyBlockMessage) {
        msg.block += this.Amount;
    }
}