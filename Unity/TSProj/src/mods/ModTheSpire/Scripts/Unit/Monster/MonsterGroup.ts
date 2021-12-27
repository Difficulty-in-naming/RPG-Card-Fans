import { Mathf } from "../../../../../Core/Module/Math/Mathf";
import DungeonManager from "../../DungeonManager";
import { AbstractMonster } from "./AbstractMonster";
import { Intent } from "./Intent";

export class MonsterGroup{
    public Monsters = new Array<AbstractMonster>();
    public constructor(...monsters:Array<AbstractMonster>) {
        this.Monsters = monsters;
    }

    public AreMonstersBasicallyDead() : boolean {
        return this.GetAliveMonstersCount() == 0;
    }
    
    public GetAliveMonstersCount():number{
        let aliveCount = 0;
        for (let i = 0; i < this.Monsters.length; i++) {
            let m = this.Monsters[i];
            if(m.IsDying || m.IsEscaping) continue;
            aliveCount++;
        }
        return aliveCount;
    }
    
    public Random(){
        let vaildMonster = this.Monsters.filter(t1=>!t1.IsDying && t1.Intent != Intent.ESCAPE && !t1.IsDeadOrEscaped)
        let random = Mathf.Floor(Mathf.RandomRange(0,vaildMonster.length,DungeonManager.Inst.CurrentDungeon.AIRng));
        return vaildMonster[random];
    }
    
    public IndexOf(m : AbstractMonster) : number{
        return this.Monsters.indexOf(m);
    }
}