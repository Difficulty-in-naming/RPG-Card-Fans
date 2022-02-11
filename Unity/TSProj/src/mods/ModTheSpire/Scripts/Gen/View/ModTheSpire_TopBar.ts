/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import {UIKit} from "../../../../../Core/Module/UI/UIKit";
import { UIBase } from "../../../../../Core/Module/UI/UIBase";
import { ViewInfo } from "../../../../../Core/Module/UI/ViewInfo";
import {FairyGUI} from "csharp";
export class View_KeySlots extends UIBase
{
    public Green : FairyGUI.GImage;
    public Blue : FairyGUI.GImage;
    public Red : FairyGUI.GImage;
    public static Url = new ViewInfo("ModTheSpire_TopBar","KeySlots")
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
        let url : string = View_KeySlots.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_KeySlots.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.Green = this.View.GetChild("Green") as FairyGUI.GImage;
        this.Blue = this.View.GetChild("Blue") as FairyGUI.GImage;
        this.Red = this.View.GetChild("Red") as FairyGUI.GImage;
    }
}
export class View_TopBar extends UIBase
{
    public Slots : FairyGUI.GComponent;
    public PlayerName : FairyGUI.GTextField;
    public ClassName : FairyGUI.GTextField;
    public Health : FairyGUI.GComponent;
    public Gold : FairyGUI.GComponent;
    public PotionList : FairyGUI.GList;
    public Map : FairyGUI.GComponent;
    public Deck : FairyGUI.GComponent;
    public Settings : FairyGUI.GComponent;
    public RelicList : FairyGUI.GList;
    public AdvanceLevel : FairyGUI.GTextField;
    public Advance : FairyGUI.GGroup;
    public static Url = new ViewInfo("ModTheSpire_TopBar","TopBar")
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
        let url : string = View_TopBar.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_TopBar.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.Slots = this.View.GetChild("Slots") as FairyGUI.GComponent;
        this.PlayerName = this.View.GetChild("PlayerName") as FairyGUI.GTextField;
        this.ClassName = this.View.GetChild("ClassName") as FairyGUI.GTextField;
        this.Health = this.View.GetChild("Health") as FairyGUI.GComponent;
        this.Gold = this.View.GetChild("Gold") as FairyGUI.GComponent;
        this.PotionList = this.View.GetChild("PotionList") as FairyGUI.GList;
        this.Map = this.View.GetChild("Map") as FairyGUI.GComponent;
        this.Deck = this.View.GetChild("Deck") as FairyGUI.GComponent;
        this.Settings = this.View.GetChild("Settings") as FairyGUI.GComponent;
        this.RelicList = this.View.GetChild("RelicList") as FairyGUI.GList;
        this.AdvanceLevel = this.View.GetChild("AdvanceLevel") as FairyGUI.GTextField;
        this.Advance = this.View.GetChild("Advance") as FairyGUI.GGroup;
    }
}
export class View_Health extends UIBase
{
    public Health : FairyGUI.GTextField;
    public static Url = new ViewInfo("ModTheSpire_TopBar","Health")
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
        let url : string = View_Health.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_Health.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.Health = this.View.GetChild("Health") as FairyGUI.GTextField;
    }
}
export class View_Gold extends UIBase
{
    public Gold : FairyGUI.GTextField;
    public static Url = new ViewInfo("ModTheSpire_TopBar","Gold")
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
        let url : string = View_Gold.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_Gold.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.Gold = this.View.GetChild("Gold") as FairyGUI.GTextField;
    }
}
export class View_Map extends UIBase
{
    public t0 : FairyGUI.Transition;
    public t1 : FairyGUI.Transition;
    public static Url = new ViewInfo("ModTheSpire_TopBar","Map")
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
        this.t0 = this.View.GetTransition("t0") as FairyGUI.Transition;
        this.t1 = this.View.GetTransition("t1") as FairyGUI.Transition;
    }
}
export class View_Deck extends UIBase
{
    public Number : FairyGUI.GTextField;
    public t0 : FairyGUI.Transition;
    public t1 : FairyGUI.Transition;
    public static Url = new ViewInfo("ModTheSpire_TopBar","Deck")
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
        let url : string = View_Deck.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_Deck.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.Number = this.View.GetChild("Number") as FairyGUI.GTextField;
        this.t0 = this.View.GetTransition("t0") as FairyGUI.Transition;
        this.t1 = this.View.GetTransition("t1") as FairyGUI.Transition;
    }
}
export class View_Settings extends UIBase
{
    public t0 : FairyGUI.Transition;
    public t1 : FairyGUI.Transition;
    public static Url = new ViewInfo("ModTheSpire_TopBar","Settings")
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
        let url : string = View_Settings.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_Settings.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.t0 = this.View.GetTransition("t0") as FairyGUI.Transition;
        this.t1 = this.View.GetTransition("t1") as FairyGUI.Transition;
    }
}
export class View_HeartCom extends UIBase
{
    public button : FairyGUI.Controller;
    public Heal : FairyGUI.Transition;
    public static Url = new ViewInfo("ModTheSpire_TopBar","HeartCom")
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
        let url : string = View_HeartCom.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_HeartCom.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.button = this.View.GetController("button") as FairyGUI.Controller;
        this.Heal = this.View.GetTransition("Heal") as FairyGUI.Transition;
    }
}