/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import {UIKit} from "../../../../../Core/Module/UI/UIKit";
import {FairyGUI} from "csharp";
import { UIBase } from "../../../../../Core/Module/UI/UIBase";
import { ViewInfo } from "../../../../../Core/Module/UI/ViewInfo";
export class View_MasterDeckView extends UIBase
{
    public c1 : FairyGUI.Controller;
    public Menu : FairyGUI.GList;
    public List : FairyGUI.GList;
    public desc : FairyGUI.GTextField;
    public Enter : FairyGUI.Transition;
    public static Url = new ViewInfo("ModTheSpire_MasterDeckView","MasterDeckView")
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
        let url : string = View_MasterDeckView.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_MasterDeckView.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.c1 = this.View.GetController("c1") as FairyGUI.Controller;
        this.Menu = this.View.GetChild("Menu") as FairyGUI.GList;
        this.List = this.View.GetChild("List") as FairyGUI.GList;
        this.desc = this.View.GetChild("desc") as FairyGUI.GTextField;
        this.Enter = this.View.GetTransition("Enter") as FairyGUI.Transition;
    }
}
export class View_TitleButton extends UIBase
{
    public SortingType : FairyGUI.Controller;
    public Hover : FairyGUI.Transition;
    public static Url = new ViewInfo("ModTheSpire_MasterDeckView","TitleButton")
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
        let url : string = View_TitleButton.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_TitleButton.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.SortingType = this.View.GetController("SortingType") as FairyGUI.Controller;
        this.Hover = this.View.GetTransition("Hover") as FairyGUI.Transition;
    }
}
export class View_Card extends UIBase
{
    public Inner : FairyGUI.GComponent;
    public static Url = new ViewInfo("ModTheSpire_MasterDeckView","Card")
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
        let url : string = View_Card.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_Card.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.Inner = this.View.GetChild("Inner") as FairyGUI.GComponent;
    }
}