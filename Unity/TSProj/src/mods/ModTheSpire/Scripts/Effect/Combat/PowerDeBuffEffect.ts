import { FairyGUI } from "csharp";
import { View_PowerDebuffEffect } from "../../Gen/View/ModTheSpire_Effect";
import { AbstractEffect } from "../AbstractEffect";

export class PowerDebuffEffect extends AbstractEffect{
    public constructor(public X: number,public Y:number,public Msg:string) {
        super();
        let effect = <FairyGUI.GComponent>View_PowerDebuffEffect.CreateInstance();
        effect.text = Msg;
        effect.SetPosition(X,Y,0);
        let transition = effect.GetTransition("t0");
        transition.Play(1,0,()=>{
            this.IsDone = true;
        });
    }
}