import {MonsterGroup} from "mods/ModTheSpire/Scripts/Unit/Monster/MonsterGroup";

export enum RoomPhase{
    Combat,
    Event,
    COMPLETE,
    INCOMPLETE
}

export abstract class AbstractRoom{
    //当前房间怪物列表
    public Monsters:MonsterGroup
    //如果要制作怪物房间.请继承该变量为1.
    public Round = 0;
    abstract Phase:RoomPhase;
    abstract Enter();
    abstract End();
    public AddReward(reward:any){}
}