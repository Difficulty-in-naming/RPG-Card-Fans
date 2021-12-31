"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
exports.View_Holder = exports.View_Title = void 0;
const UIKit_1 = require("../../../../../Core/Module/UI/UIKit");
const UIBase_1 = require("../../../../../Core/Module/UI/UIBase");
const ViewInfo_1 = require("../../../../../Core/Module/UI/ViewInfo");
class View_Title extends UIBase_1.UIBase {
    DustHolder;
    MidCloudHolder;
    TopCloudHolder;
    Start;
    Compendium;
    Statistics;
    Settings;
    Exit;
    Logo;
    MainMenuEnter;
    static Url = new ViewInfo_1.ViewInfo("ModTheSpire_Title", "Title");
    static CreatePanel(...args) {
        let url = this.Url.toString() + "." + this.name;
        let panel = UIKit_1.UIKit.Inst().Get(url);
        if (!panel) {
            panel = new this;
            UIKit_1.UIKit.Inst().CreatePanel(this.Url, panel, args);
        }
        return panel;
    }
    static CreateInstance() {
        return UIKit_1.UIKit.Inst().CreateInstance(this.Url);
    }
    static GetInstance() {
        let url = View_Title.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_Title.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.DustHolder = this.View.GetChild("DustHolder");
        this.MidCloudHolder = this.View.GetChild("MidCloudHolder");
        this.TopCloudHolder = this.View.GetChild("TopCloudHolder");
        this.Start = this.View.GetChild("Start");
        this.Compendium = this.View.GetChild("Compendium");
        this.Statistics = this.View.GetChild("Statistics");
        this.Settings = this.View.GetChild("Settings");
        this.Exit = this.View.GetChild("Exit");
        this.Logo = this.View.GetTransition("Logo");
        this.MainMenuEnter = this.View.GetTransition("MainMenuEnter");
    }
}
exports.View_Title = View_Title;
class View_Holder extends UIBase_1.UIBase {
    TopCloudHolder;
    static Url = new ViewInfo_1.ViewInfo("ModTheSpire_Title", "Holder");
    static CreatePanel(...args) {
        let url = this.Url.toString() + "." + this.name;
        let panel = UIKit_1.UIKit.Inst().Get(url);
        if (!panel) {
            panel = new this;
            UIKit_1.UIKit.Inst().CreatePanel(this.Url, panel, args);
        }
        return panel;
    }
    static CreateInstance() {
        return UIKit_1.UIKit.Inst().CreateInstance(this.Url);
    }
    static GetInstance() {
        let url = View_Holder.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_Holder.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.TopCloudHolder = this.View.GetChild("TopCloudHolder");
    }
}
exports.View_Holder = View_Holder;
//# sourceMappingURL=ModTheSpire_Title.js.map