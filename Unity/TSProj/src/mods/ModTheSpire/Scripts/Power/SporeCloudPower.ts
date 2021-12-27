import { ApplyPowerAction } from "../Action/Common/ApplyPowerAction";
import { SoundMaster } from "../Audio/SoundMaster";
import DungeonManager from "../DungeonManager";
import { OnDeathMessage } from "../Events/OnDeathMessage";
import FileHelper from "../FileHelper";
import { LocalizationProperty } from "../Gen/DB/Localization";
import { StringHelper } from "../StringHelper";
import { AbstractPower, PowerType } from "./AbstractPower";
import { VulnerablePower } from "./VulnerablePower";

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