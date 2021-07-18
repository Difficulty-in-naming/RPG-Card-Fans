import {AbstractPower, PowerType} from "mods/ModTheSpire/Scripts/Power/AbstractPower";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import {StringHelper} from "mods/ModTheSpire/Scripts/StringHelper";
import {SoundMaster} from "mods/ModTheSpire/Scripts/Audio/SoundMaster";
import {PreModifyBlockMessage} from "mods/ModTheSpire/Scripts/Events/PreModifyBlockMessage";

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