import { FairyGUI } from "csharp";
import { View_PowerBuffEffect } from "../../Gen/View/ModTheSpire_Effect";
import { AbstractEffect } from "../AbstractEffect";

export class PowerBuffEffect extends AbstractEffect{
    public constructor(public X: number,public Y:number,public Msg:string) {
        super();
        let effect = <FairyGUI.GComponent>View_PowerBuffEffect.CreateInstance();
        effect.text = Msg;
        effect.SetPosition(X,Y,0);
        let transition = effect.GetTransition("t0");
        transition.Play(1,0,()=>{
            this.IsDone = true;
        });
    }
}