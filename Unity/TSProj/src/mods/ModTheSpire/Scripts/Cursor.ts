import { FairyGUI } from "csharp";

export class Cursor{
    public loader;
    constructor() {
        this.loader = <FairyGUI.GLoader>FairyGUI.UIObjectFactory.NewObject(FairyGUI.ObjectType.Loader);
        this.loader.url = "ui://Cursor/gold2";
        this.loader.autoSize = true;
        this.loader.touchable = false;
        FairyGUI.GRoot.inst.AddChild(this.loader);
        this.loader.sortingOrder = 10000;
    }
    
    Update(){
        let pos = FairyGUI.GRoot.inst.GlobalToLocal(FairyGUI.Stage.inst.GetTouchPosition(-1));
        this.loader.SetPosition(pos.x,pos.y,0);
    }
}