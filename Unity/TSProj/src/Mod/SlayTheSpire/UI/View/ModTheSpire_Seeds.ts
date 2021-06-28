/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import {UI} from "../../../../Core/Module/UI/UIKit";
import ViewInfo = UI.ViewInfo;
import UIKit = UI.UIKit;
import UIBase = UI.UIBase;
import {FairyGUI} from "csharp"
export class View_Seeds extends UIBase
{
    public Input : FairyGUI.GComponent;
    public Yes : FairyGUI.GButton;
    public No : FairyGUI.GButton;
    public static Url = new ViewInfo("ModTheSpire_Seeds","Seeds")
    public static CreatePanel(...args) : UIBase
    {
        let url : string = this.Url + "_" + this.name;
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
    public Construct()
    {
        this.Input = this.View.GetChild("Input") as FairyGUI.GComponent;
        this.Yes = this.View.GetChild("Yes") as FairyGUI.GButton;
        this.No = this.View.GetChild("No") as FairyGUI.GButton;
    }
}