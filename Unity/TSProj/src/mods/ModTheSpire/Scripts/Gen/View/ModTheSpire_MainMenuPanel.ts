/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import {UIKit} from "../../../../../Core/Module/UI/UIKit";
import { UIBase } from "../../../../../Core/Module/UI/UIBase";
import { ViewInfo } from "../../../../../Core/Module/UI/ViewInfo";
import {FairyGUI} from "csharp";
export class View_MainMenuPanel extends UIBase
{
    public List : FairyGUI.GList;
    public Cancel : FairyGUI.GButton;
    public Confirm : FairyGUI.GButton;
    public Close : FairyGUI.Transition;
    public static Url = new ViewInfo("ModTheSpire_MainMenuPanel","MainMenuPanel")
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
        let url : string = View_MainMenuPanel.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_MainMenuPanel.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.List = this.View.GetChild("List") as FairyGUI.GList;
        this.Cancel = this.View.GetChild("Cancel") as FairyGUI.GButton;
        this.Confirm = this.View.GetChild("Confirm") as FairyGUI.GButton;
        this.Close = this.View.GetTransition("Close") as FairyGUI.Transition;
    }
}
export class View_Button1 extends UIBase
{
    public Style : FairyGUI.Controller;
    public description : FairyGUI.GTextField;
    public t0 : FairyGUI.Transition;
    public t1 : FairyGUI.Transition;
    public Enter : FairyGUI.Transition;
    public static Url = new ViewInfo("ModTheSpire_MainMenuPanel","Button1")
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
        let url : string = View_Button1.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_Button1.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.Style = this.View.GetController("Style") as FairyGUI.Controller;
        this.description = this.View.GetChild("description") as FairyGUI.GTextField;
        this.t0 = this.View.GetTransition("t0") as FairyGUI.Transition;
        this.t1 = this.View.GetTransition("t1") as FairyGUI.Transition;
        this.Enter = this.View.GetTransition("Enter") as FairyGUI.Transition;
    }
}