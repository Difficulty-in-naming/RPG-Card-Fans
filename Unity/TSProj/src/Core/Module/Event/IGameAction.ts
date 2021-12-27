export interface IGameAction{
    Duration : number;
    Init();
    Update() : Promise<boolean>;
}