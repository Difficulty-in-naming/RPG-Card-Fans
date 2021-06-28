/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import {UI} from "../../../../Core/Module/UI/UIKit";
import ViewInfo = UI.ViewInfo;
import UIKit = UI.UIKit;
import UIBase = UI.UIBase;
import {FairyGUI} from "csharp"
export class View_Title extends UIBase
{
    public Start : FairyGUI.GButton;
    public Compendium : FairyGUI.GButton;
    public Statistics : FairyGUI.GButton;
    public Settings : FairyGUI.GButton;
    public Exit : FairyGUI.GButton;
    public Background : FairyGUI.Transition;
    public Logo : FairyGUI.Transition;
    public MainMenuEnter : FairyGUI.Transition;
    public static Url = new ViewInfo("ModTheSpire_Title","Title")
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
        this.Start = this.View.GetChild("Start") as FairyGUI.GButton;
        this.Compendium = this.View.GetChild("Compendium") as FairyGUI.GButton;
        this.Statistics = this.View.GetChild("Statistics") as FairyGUI.GButton;
        this.Settings = this.View.GetChild("Settings") as FairyGUI.GButton;
        this.Exit = this.View.GetChild("Exit") as FairyGUI.GButton;
        this.Background = this.View.GetTransition("Background") as FairyGUI.Transition;
        this.Logo = this.View.GetTransition("Logo") as FairyGUI.Transition;
        this.MainMenuEnter = this.View.GetTransition("MainMenuEnter") as FairyGUI.Transition;
    }
}