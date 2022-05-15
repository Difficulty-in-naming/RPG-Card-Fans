import { UIKit } from '../../../../../Core/Module/UI/UIKit';
import { S } from '../../global';
import { ViewInfo } from '../../../../../Core/Module/UI/ViewInfo';
import { UIBase } from '../../../../../Core/Module/UI/UIBase';
export class EnergyManager
{
    private UI : UIBase;
    public constructor(public EnergyMaster : number,private viewInfo : ViewInfo){}
    private _CurEnergy: number;
    public get CurEnergy(): number {
        return this._CurEnergy;
    }
    public set CurEnergy(value: number) {
        this._CurEnergy = value;
    }
    private _MaxEnergy: number;
    public get MaxEnergy(): number {
        return this._MaxEnergy;
    }
    public set MaxEnergy(value: number) {
        this._MaxEnergy = value;
    }
    public Prep(){
        this.CurEnergy = this.EnergyMaster;
        this.UI = S.UIKit.Get(this.viewInfo.toString());
    }

    public Recharge(){

    }
}