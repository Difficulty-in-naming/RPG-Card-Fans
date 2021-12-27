import { FairyGUI } from "csharp";
import { Mathf } from "../../../../../../../Core/Module/Math/Mathf";
import UIHelper from "../../../../UI/UIHelper";


export class HexaghostOrb
{
    private Loader : FairyGUI.GLoader;
    constructor(public _X: number, public _Y: number, _Index: number) {
        this._X += Mathf.RandomRange(-10,10);
        this._Y += Mathf.RandomRange(-10,10);
        this.Loader = UIHelper.CreateGLoader();
        this.Loader.alpha = 0;
    }
    
    public SetActive(active:boolean){
        this.Loader.visible = active;
    }
    
    public GetActive() : boolean{
        return this.Loader.visible;
    }
    
    public Update(){
        
    }
}