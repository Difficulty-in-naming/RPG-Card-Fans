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
    abstract Phase:RoomPhase;
    abstract Enter();
}