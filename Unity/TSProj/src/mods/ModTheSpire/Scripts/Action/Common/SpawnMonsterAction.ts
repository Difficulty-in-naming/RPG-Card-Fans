import Async from "../../../../../Core/Async";
import DungeonManager from "../../DungeonManager";
import { OnSpawnMonsterMessage } from "../../Events/OnSpawnMonsterMessage";
import { MinionPower } from "../../Power/MinionPower";
import { AbstractMonster } from "../../Unit/Monster/AbstractMonster";
import AbstractGameAction from "../AbstractGameAction";

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