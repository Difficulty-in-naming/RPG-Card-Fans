/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import {UI} from "../../../../../Core/Module/UI/UIKit";
import ViewInfo = UI.ViewInfo;
import UIKit = UI.UIKit;
import UIBase = UI.UIBase;
import {FairyGUI} from "csharp";
export class View_CharacterButton extends UIBase
{
    public t0 : FairyGUI.Transition;
    public t1 : FairyGUI.Transition;
    public t2 : FairyGUI.Transition;
    public static Url = new ViewInfo("ModTheSpire_SelectCharacter","CharacterButton")
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
        let url : string = View_CharacterButton.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_CharacterButton.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.t0 = this.View.GetTransition("t0") as FairyGUI.Transition;
        this.t1 = this.View.GetTransition("t1") as FairyGUI.Transition;
        this.t2 = this.View.GetTransition("t2") as FairyGUI.Transition;
    }
}
export class View_SelectCharacter extends UIBase
{
    public ShowAdvance : FairyGUI.Controller;
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
    public AdvanceLevelGroup : FairyGUI.GGroup;
    public AdvanceSettings : FairyGUI.GGroup;
    public CharName : FairyGUI.GTextField;
    public Health : FairyGUI.GTextField;
    public Gold : FairyGUI.GTextField;
    public CharDesc : FairyGUI.GTextField;
    public Relic : FairyGUI.GLoader;
    public RelicName : FairyGUI.GTextField;
    public RelicDesc : FairyGUI.GRichTextField;
    public UnlockTip : FairyGUI.GTextField;
    public CharGroup : FairyGUI.GGroup;
    public static Url = new ViewInfo("ModTheSpire_SelectCharacter","SelectCharacter")
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
        let url : string = View_SelectCharacter.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_SelectCharacter.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.ShowAdvance = this.View.GetController("ShowAdvance") as FairyGUI.Controller;
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
        this.AdvanceLevelGroup = this.View.GetChild("AdvanceLevelGroup") as FairyGUI.GGroup;
        this.AdvanceSettings = this.View.GetChild("AdvanceSettings") as FairyGUI.GGroup;
        this.CharName = this.View.GetChild("CharName") as FairyGUI.GTextField;
        this.Health = this.View.GetChild("Health") as FairyGUI.GTextField;
        this.Gold = this.View.GetChild("Gold") as FairyGUI.GTextField;
        this.CharDesc = this.View.GetChild("CharDesc") as FairyGUI.GTextField;
        this.Relic = this.View.GetChild("Relic") as FairyGUI.GLoader;
        this.RelicName = this.View.GetChild("RelicName") as FairyGUI.GTextField;
        this.RelicDesc = this.View.GetChild("RelicDesc") as FairyGUI.GRichTextField;
        this.UnlockTip = this.View.GetChild("UnlockTip") as FairyGUI.GTextField;
        this.CharGroup = this.View.GetChild("CharGroup") as FairyGUI.GGroup;
    }
}