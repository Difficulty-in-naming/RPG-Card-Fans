import { FairyGUI } from "csharp";
import { Mathf } from "../../../../../Core/Module/Math/Mathf";
import { TimeKit } from "../../../../../Core/Utils/TimeKit";
import { View_CleaveEffect } from "../../Gen/View/ModTheSpire_Effect";
import { AbstractEffect } from "../AbstractEffect";


export class CleaveEffect extends AbstractEffect{
    private Loader:FairyGUI.GComponent;
    private StallTimer:number;
    private Scale:number;
    public constructor(private _X : number,private _Y:number) {
        super();
        this.Loader.SetPosition(_X,_Y,0);
        this.Loader = <FairyGUI.GComponent>View_CleaveEffect.CreateInstance();
        this.Loader.rotation = Mathf.RandomRange(-5,1);
        this.Scale = 1.2;
        this.Loader.SetScale(this.Scale,this.Scale)
        this.StallTimer = Mathf.RandomRange(0,0.2);
    }
    Update() {
        super.Update();
        if(this.StallTimer > 0){
            this.StallTimer -= TimeKit.DeltaTime;
            return;
        }
        this.Scale+= 0.005;
        this.Loader.SetScale(this.Scale,this.Scale);
        this.Loader.rotation += Mathf.RandomRange(-0.5,0.5);
    }
}