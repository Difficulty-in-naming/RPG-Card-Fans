/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import {UIKit} from "../../../../../Core/Module/UI/UIKit";
import {FairyGUI} from "csharp";
import { UIBase } from "../../../../../Core/Module/UI/UIBase";
import { ViewInfo } from "../../../../../Core/Module/UI/ViewInfo";
export class View_ScrollPage extends UIBase
{
    public Boss : FairyGUI.GComponent;
    public static Url = new ViewInfo("ModTheSpire_Map","ScrollPage")
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
        let url : string = View_ScrollPage.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_ScrollPage.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.Boss = this.View.GetChild("Boss") as FairyGUI.GComponent;
    }
}
export class View_NormalRoom extends UIBase
{
    public outline : FairyGUI.GLoader;
    public Down : FairyGUI.Transition;
    public static Url = new ViewInfo("ModTheSpire_Map","NormalRoom")
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
        let url : string = View_NormalRoom.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_NormalRoom.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.outline = this.View.GetChild("outline") as FairyGUI.GLoader;
        this.Down = this.View.GetTransition("Down") as FairyGUI.Transition;
    }
}
export class View_Map extends UIBase
{
    public Scroll : FairyGUI.GComponent;
    public Title : FairyGUI.GTextField;
    public List : FairyGUI.GList;
    public static Url = new ViewInfo("ModTheSpire_Map","Map")
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
        let url : string = View_Map.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_Map.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.Scroll = this.View.GetChild("Scroll") as FairyGUI.GComponent;
        this.Title = this.View.GetChild("Title") as FairyGUI.GTextField;
        this.List = this.View.GetChild("List") as FairyGUI.GList;
    }
}
export class View_BossRoom extends UIBase
{
    public outline : FairyGUI.GLoader;
    public Default : FairyGUI.Transition;
    public Hover : FairyGUI.Transition;
    public Down : FairyGUI.Transition;
    public static Url = new ViewInfo("ModTheSpire_Map","BossRoom")
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
        let url : string = View_BossRoom.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_BossRoom.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.outline = this.View.GetChild("outline") as FairyGUI.GLoader;
        this.Default = this.View.GetTransition("Default") as FairyGUI.Transition;
        this.Hover = this.View.GetTransition("Hover") as FairyGUI.Transition;
        this.Down = this.View.GetTransition("Down") as FairyGUI.Transition;
    }
}