import { FairyGUI } from "csharp";
import Color from "../../DataDefine/Color";
import { View_BorderFlashEffect } from "../../Gen/View/ModTheSpire_Effect";
import { AbstractEffect } from "../AbstractEffect";

export class BorderFlashEffect extends AbstractEffect{
    public Loader:FairyGUI.GComponent
    public constructor(private _Color:Color,private _Additive?:boolean) {
        super();
        this.Loader = <FairyGUI.GComponent>View_BorderFlashEffect.CreateInstance();
        this.Loader.GetTransition("t0").Play();
        let image = this.Loader.GetChild("n0").asImage;
        image.color = _Color.UnityColor;
        if(_Additive == true)
            image.blendMode = FairyGUI.BlendMode.Add;
    }
    Update() {
        super.Update();
        if(this.Duration >= 1) {
            this.IsDone = true;
            this.Loader.Dispose();
        }
    }
}