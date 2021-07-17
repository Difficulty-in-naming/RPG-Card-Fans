import {AbstractPower, PowerType} from "mods/ModTheSpire/Scripts/Power/AbstractPower";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import {StringHelper} from "mods/ModTheSpire/Scripts/StringHelper";
import {AtEndOfTurnMessage} from "mods/ModTheSpire/Scripts/Events/AtEndOfTurnMessage";
import {ApplyPowerAction} from "mods/ModTheSpire/Scripts/Action/Common/ApplyPowerAction";
import {StrengthPower} from "mods/ModTheSpire/Scripts/Power/StrengthPower";
import {OnDeathMessage} from "mods/ModTheSpire/Scripts/Events/OnDeathMessage";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {SoundMaster} from "mods/ModTheSpire/Scripts/Audio/SoundMaster";
import {VulnerablePower} from "mods/ModTheSpire/Scripts/Power/VulnerablePower";

export class SporeCloudPower extends AbstractPower{
    Icon: string = FileHelper.FormatPath("Powers/sporeCloud.png");
    Id: string = "Spore Cloud";
    Name: string = LocalizationProperty.Read("能力-孢子云");

    get Type(): PowerType {
        return PowerType.Buff;
    }

    public constructor(private amt:number) {
        super();
    }

    GetDescription(...args: any[]): string {
        return StringHelper.FormatColorString(LocalizationProperty.Read("能力-孢子云描述")).format(this.Amount);
    }

    protected OnDeath(msg: OnDeathMessage) {
        super.OnDeath(msg);
        if(DungeonManager.Inst.CurrentRoom.Monsters.AreMonstersBasicallyDead())
            return;
        SoundMaster.PlayVoice("SPORE_CLOUD_RELEASE");
        this.Flash(true);
        this.AddToTop(new ApplyPowerAction(msg.source,this.Owner,new VulnerablePower(),this.amt));
    }
}