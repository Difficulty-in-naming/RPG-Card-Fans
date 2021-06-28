/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import {UI} from "../../../../Core/Module/UI/UIKit";
import ViewInfo = UI.ViewInfo;
import UIKit = UI.UIKit;
import UIBase = UI.UIBase;
import {FairyGUI} from "csharp"
export class View_MainMenuPanel extends UIBase
{
    public List : FairyGUI.GList;
    public Cancel : FairyGUI.GButton;
    public static Url = new ViewInfo("ModTheSpire_MainMenuPanel","MainMenuPanel")
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
        this.List = this.View.GetChild("List") as FairyGUI.GList;
        this.Cancel = this.View.GetChild("Cancel") as FairyGUI.GButton;
    }
}
export class View_Button1 extends UIBase
{
    public description : FairyGUI.GTextField;
    public t0 : FairyGUI.Transition;
    public t1 : FairyGUI.Transition;
    public static Url = new ViewInfo("ModTheSpire_MainMenuPanel","Button1")
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
        this.description = this.View.GetChild("description") as FairyGUI.GTextField;
        this.t0 = this.View.GetTransition("t0") as FairyGUI.Transition;
        this.t1 = this.View.GetTransition("t1") as FairyGUI.Transition;
    }
}
export class View_SelectCharacter extends UIBase
{
    public CharBg : FairyGUI.GLoader;
    public Cancel : FairyGUI.GButton;
    public SelectCharTitle : FairyGUI.GTextField;
    public CharList : FairyGUI.GList;
    public Confirm : FairyGUI.GButton;
    public IsAdvanced : FairyGUI.GButton;
    public AdvanceTip : FairyGUI.GTextField;
    public Left : FairyGUI.GButton;
    public Right : FairyGUI.GButton;
    public Level : FairyGUI.GTextField;
    public AdvanceSettings : FairyGUI.GGroup;
    public CharName : FairyGUI.GTextField;
    public Health : FairyGUI.GTextField;
    public Gold : FairyGUI.GTextField;
    public CharDesc : FairyGUI.GTextField;
    public Relic : FairyGUI.GLoader;
    public RelicName : FairyGUI.GTextField;
    public RelicDesc : FairyGUI.GRichTextField;
    public UnlockTip : FairyGUI.GTextField;
    public static Url = new ViewInfo("ModTheSpire_MainMenuPanel","SelectCharacter")
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
        this.CharBg = this.View.GetChild("CharBg") as FairyGUI.GLoader;
        this.Cancel = this.View.GetChild("Cancel") as FairyGUI.GButton;
        this.SelectCharTitle = this.View.GetChild("SelectCharTitle") as FairyGUI.GTextField;
        this.CharList = this.View.GetChild("CharList") as FairyGUI.GList;
        this.Confirm = this.View.GetChild("Confirm") as FairyGUI.GButton;
        this.IsAdvanced = this.View.GetChild("IsAdvanced") as FairyGUI.GButton;
        this.AdvanceTip = this.View.GetChild("AdvanceTip") as FairyGUI.GTextField;
        this.Left = this.View.GetChild("Left") as FairyGUI.GButton;
        this.Right = this.View.GetChild("Right") as FairyGUI.GButton;
        this.Level = this.View.GetChild("Level") as FairyGUI.GTextField;
        this.AdvanceSettings = this.View.GetChild("AdvanceSettings") as FairyGUI.GGroup;
        this.CharName = this.View.GetChild("CharName") as FairyGUI.GTextField;
        this.Health = this.View.GetChild("Health") as FairyGUI.GTextField;
        this.Gold = this.View.GetChild("Gold") as FairyGUI.GTextField;
        this.CharDesc = this.View.GetChild("CharDesc") as FairyGUI.GTextField;
        this.Relic = this.View.GetChild("Relic") as FairyGUI.GLoader;
        this.RelicName = this.View.GetChild("RelicName") as FairyGUI.GTextField;
        this.RelicDesc = this.View.GetChild("RelicDesc") as FairyGUI.GRichTextField;
        this.UnlockTip = this.View.GetChild("UnlockTip") as FairyGUI.GTextField;
    }
}