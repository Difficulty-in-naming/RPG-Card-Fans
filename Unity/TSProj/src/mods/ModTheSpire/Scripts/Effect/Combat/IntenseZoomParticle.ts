import { FairyGUI } from "csharp";
import { Mathf } from "../../../../../Core/Module/Math/Mathf";
import { TimeKit } from "../../../../../Core/Utils/TimeKit";
import Color from "../../DataDefine/Color";
import FileHelper from "../../FileHelper";
import UIHelper from "../../UI/UIHelper";
import { AbstractEffect } from "../AbstractEffect";

export class IntenseZoomParticle extends AbstractEffect{
    public Loader:FairyGUI.GLoader;
    private _FlickerDuration:number;
    private constructor(private _X,private _Y,private _IsBlack) {
        super();
        let i = Mathf.RandomRange(0,3);
        this.Loader = UIHelper.CreateGLoader()
        this.Loader.url = FileHelper.FormatPath("Vfx/cone" + (i == 0 ? "8" :(i == 1 ? "5" : "6"))); 
        this.Loader.SetPosition(_X,_Y,0);
        this.Loader.color = _IsBlack ? Color.Black.UnityColor : Color.Gold.UnityColor;
        if(!_IsBlack)
            this.Loader.blendMode = FairyGUI.BlendMode.Add;
        this.Randomize();
    }
    
    Pow2Out(a:number) : number{
        return Math.pow(a - 1.0, 2) * (2 % 2 == 0 ? -1 : 1) + 1.0;
    }
    
    Randomize(){
        this.Loader.rotation = Mathf.RandomRange(0,360);
        let offsetX = Mathf.RandomRange(200,600) * (2 - (1.5 - this.Duration));
        this.Loader.SetPosition(this._X + offsetX,this._Y,0);
        this.Loader.SetPivot(this.Loader.texture.width / offsetX,0.5);
        if(this._IsBlack)
            this.Loader.alpha = Mathf.RandomRange(0.5,1) * this.Pow2Out(1.5-this.Duration / 1.5);
        else
            this.Loader.alpha = Mathf.RandomRange(0.2,0.7) * this.Pow2Out(1.5-this.Duration / 1.5);
    }
    
    Update() {
        super.Update();
        this._FlickerDuration -= TimeKit.DeltaTime;
        if(this._FlickerDuration < 0){
            this.Randomize();
            this._FlickerDuration = Mathf.RandomRange(0,0.05);
        }
        if(this.Duration >= 1.5)
            this.IsDone = true;
    }
}