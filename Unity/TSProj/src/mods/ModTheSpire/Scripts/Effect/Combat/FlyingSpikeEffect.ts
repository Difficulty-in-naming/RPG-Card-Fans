import { FairyGUI } from "csharp";
import { Mathf } from "../../../../../Core/Module/Math/Mathf";
import { View_FlyingSpikeEffect } from "../../Gen/View/ModTheSpire_Effect";
import { AbstractEffect } from "../AbstractEffect";
import Color from "../../../../../mods/ModTheSpire/Scripts/DataDefine/Color";

export class FlyingSpikeEffect extends AbstractEffect{
    public Effect:FairyGUI.GComponent
    public constructor(parent:FairyGUI.GComponent,public X:number,public Y:number,public StartingRotation,public endX:number,public endY:number,public Color:Color) {
        super();
        this.Effect = <FairyGUI.GComponent>View_FlyingSpikeEffect.CreateInstance();
        parent.AddChild(this.Effect);
        this.Effect.SetPosition(X,Y,0);
        this.Effect.rotation = StartingRotation + Mathf.RandomRange(-5,5);
        let transition = this.Effect.GetTransition("t0");
        transition.SetValue("StartPosition",this.X,this.Y);
        transition.SetValue("EndPosition",this.endX,this.endY);
        this.IsDone = true;
        transition.Play();
    }
}