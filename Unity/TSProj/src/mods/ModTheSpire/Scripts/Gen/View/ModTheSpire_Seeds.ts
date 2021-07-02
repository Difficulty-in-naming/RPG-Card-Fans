/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import {UI} from "../../../../../Core/Module/UI/UIKit";
import ViewInfo = UI.ViewInfo;
import UIKit = UI.UIKit;
import UIBase = UI.UIBase;
import {FairyGUI} from "csharp";
export class View_Seeds extends UIBase
{
    public Input : FairyGUI.GComponent;
    public Yes : FairyGUI.GButton;
    public No : FairyGUI.GButton;
    public static Url = new ViewInfo("ModTheSpire_Seeds","Seeds")
    public static CreatePanel(...args) : UIBase
    {
        let url : string = this.Url.toString() + "." + this.name;
        let panel : UIBase = UIKit.Inst().Get(url);
        if(!panel)
        {
            panel = new this;
            UIKit.Inst().CreatePanel(this.Url,panel,args);
        }
        return panel;
    }
    public static CreateInstance() : FairyGUI.GObject
    {
        return UIKit.Inst().CreateInstance(this.Url);
    }
    public static GetInstance() : UIBase
    {
        let url : string = View_Seeds.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_Seeds.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.Input = this.View.GetChild("Input") as FairyGUI.GComponent;
        this.Yes = this.View.GetChild("Yes") as FairyGUI.GButton;
        this.No = this.View.GetChild("No") as FairyGUI.GButton;
    }
}