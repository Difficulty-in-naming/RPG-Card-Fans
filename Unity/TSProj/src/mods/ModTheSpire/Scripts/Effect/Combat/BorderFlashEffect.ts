import {AbstractEffect} from "mods/ModTheSpire/Scripts/Effect/AbstractEffect";
import Color from "mods/ModTheSpire/Scripts/DataDefine/Color";
import {View_BorderFlashEffect} from "mods/ModTheSpire/Scripts/Gen/View/ModTheSpire_Effect";
import { FairyGUI } from "csharp";

export class BorderFlashEffect extends AbstractEffect{
    public Loader:FairyGUI.GComponent
    public constructor(private _Color:Color,private _Additive?:boolean) {
        super();
        this.Loader = <FairyGUI.GComponent>View_BorderFlashEffect.CreateInstance();
        this.Loader.GetTransition("t0").Play();
        let image = this.Loader.GetChild("n0").asImage;
        image.color = _Color.UnityColor();
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