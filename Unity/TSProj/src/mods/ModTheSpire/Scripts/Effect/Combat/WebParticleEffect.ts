import { FairyGUI } from "csharp";
import {AbstractEffect} from "mods/ModTheSpire/Scripts/Effect/AbstractEffect";
import {View_WebParticleEffect} from "mods/ModTheSpire/Scripts/Gen/View/ModTheSpire_Effect";

export class WebParticleEffect extends AbstractEffect{
    public Loader : FairyGUI.GComponent;
    public constructor(private _X:number,private _Y:number) {
        super();
        this.Loader = <FairyGUI.GComponent>View_WebParticleEffect.CreateInstance();
        this.Loader.GetTransition("t0").Play();
        this.Loader.SetPosition(_X,_Y,0);
    }
    
    public Update() {
        super.Update();
        if(this.Duration >= 1){
            this.Loader.Dispose();
            this.IsDone = true;
        }
    }
}