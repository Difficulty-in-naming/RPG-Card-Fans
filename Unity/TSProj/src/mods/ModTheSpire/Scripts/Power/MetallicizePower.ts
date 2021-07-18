import {AbstractPower, PowerType} from "mods/ModTheSpire/Scripts/Power/AbstractPower";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import {StringHelper} from "mods/ModTheSpire/Scripts/StringHelper";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {OnUseCardMessage} from "mods/ModTheSpire/Scripts/Events/OnUseCardMessage";
import {CardType} from "mods/ModTheSpire/Scripts/Cards/AbstractCard";
import {ApplyPowerAction} from "mods/ModTheSpire/Scripts/Action/Common/ApplyPowerAction";
import {StrengthPower} from "mods/ModTheSpire/Scripts/Power/StrengthPower";
import {SoundMaster} from "mods/ModTheSpire/Scripts/Audio/SoundMaster";
import {AtEndOfTurnPreEndTurnCardsMessage} from "mods/ModTheSpire/Scripts/Events/AtEndOfTurnPreEndTurnCardsMessage";
import GainBlockAction from "mods/ModTheSpire/Scripts/Action/Common/GainBlockAction";

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