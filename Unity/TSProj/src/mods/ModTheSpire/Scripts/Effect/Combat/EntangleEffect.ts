import { FairyGUI } from "csharp";
import {AbstractEffect} from "mods/ModTheSpire/Scripts/Effect/AbstractEffect";
import {View_EntangleEffect} from "mods/ModTheSpire/Scripts/Gen/View/ModTheSpire_Effect";

export class EntangleEffect extends AbstractEffect{
    private Loader: FairyGUI.GComponent;
    public constructor(private _X:number,private _Y:number,private _TargetX:number,private _TargetY:number) {
        super();
        this.Loader = <FairyGUI.GComponent>View_EntangleEffect.CreateInstance();
        this.Loader.SetPosition(_X,_Y,0);
        let transition = this.Loader.GetTransition("t0");
        transition.SetValue("XY",_TargetX,_TargetY);
        transition.Play();
    }
    
    Update() {
        super.Update();
        if(this.Duration >= 1){
            this.IsDone = true;
            this.Loader.Dispose();
        }
    }
}