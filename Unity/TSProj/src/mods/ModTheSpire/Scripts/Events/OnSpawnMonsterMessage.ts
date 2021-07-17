import {IMessage} from "Core/ObserverMessageKit";
import {AbstractMonster} from "mods/ModTheSpire/Scripts/Unit/Monster/AbstractMonster";

export class OnSpawnMonsterMessage implements IMessage{
    public static readonly Id = "OnSpawnMonster";
    public constructor(public m : AbstractMonster) {
    }
}