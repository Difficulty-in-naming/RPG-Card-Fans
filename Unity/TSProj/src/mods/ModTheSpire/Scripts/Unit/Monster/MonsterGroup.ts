import {AbstractMonster} from "mods/ModTheSpire/Scripts/Unit/Monster/AbstractMonster";

export class MonsterGroup{
    public Monsters = new Array<AbstractMonster>();
    public constructor(...monsters:Array<AbstractMonster>) {
        this.Monsters = monsters;
    }

    public AreMonstersBasicallyDead() : boolean {
        for (let i = 0; i < this.Monsters.length; i++) {
            let m = this.Monsters[i];
            if(m.IsDying || m.IsEscaping) continue;
            return false;
        }
        return true;
    }
}