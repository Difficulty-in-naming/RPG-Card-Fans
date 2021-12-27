import GainBlockAction from "../Action/Common/GainBlockAction";
import { SoundMaster } from "../Audio/SoundMaster";
import { AtEndOfTurnPreEndTurnCardsMessage } from "../Events/AtEndOfTurnPreEndTurnCardsMessage";
import FileHelper from "../FileHelper";
import { LocalizationProperty } from "../Gen/DB/Localization";
import { StringHelper } from "../StringHelper";
import { AbstractPower, PowerType } from "./AbstractPower";


export class MetallicizePower extends AbstractPower{
    public static Id = "Metallicize";
    Icon: string = FileHelper.FormatPath("Powers/armor.png");
    Id: string = "Metallicize";
    Name: string = LocalizationProperty.Read("能力-金属化");
    get Type(): PowerType {
        return PowerType.Buff;
    }

    GetDescription(...args: any[]): string {
        return StringHelper.FormatColorString(LocalizationProperty.Read("能力-金属化描述")).format(this.Amount);
    }

    PlayApplyPowerSfx() {
        super.PlayApplyPowerSfx();
        SoundMaster.PlayVoice("POWER_METALLICIZE",0.05);
    }

    AtEndOfTurnPreEndTurnCards(msg: AtEndOfTurnPreEndTurnCardsMessage) {
        super.AtEndOfTurnPreEndTurnCards(msg);
        this.Flash();
        this.AddToBot(new GainBlockAction(this.Owner,this.Amount));
    }
}