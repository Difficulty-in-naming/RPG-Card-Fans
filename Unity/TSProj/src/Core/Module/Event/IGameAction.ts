import { ActionType } from "../../../mods/ModTheSpire/Scripts/Action/AbstractGameAction";

export interface IGameAction{
    Duration : number;
    Type : ActionType;
    Init();
    Update() : Promise<boolean>;
}