import AbstractGameAction from "mods/ModTheSpire/Scripts/Action/AbstractGameAction";
import {AbstractMonster} from "mods/ModTheSpire/Scripts/Unit/Monster/AbstractMonster";
import Async from "Core/Async";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {OnSpawnMonsterMessage} from "mods/ModTheSpire/Scripts/Events/OnSpawnMonsterMessage";
import {MinionPower} from "mods/ModTheSpire/Scripts/Power/MinionPower";

export class SpawnMonsterAction extends AbstractGameAction{
    public constructor(public monster : AbstractMonster,public isMinion:boolean) {
        super();
    }
    
    public async Update(): Promise<boolean> {
        if(this.Duration == 0){
            DungeonManager.MessageManager.Send(OnSpawnMonsterMessage.Id,new OnSpawnMonsterMessage(this.monster));
            this.monster.Initialize();
            if(this.isMinion){
                this.monster.AddPower(new MinionPower(),this.monster);
            }
        }
        await Async.Delay(100);
        return true;
    }
}