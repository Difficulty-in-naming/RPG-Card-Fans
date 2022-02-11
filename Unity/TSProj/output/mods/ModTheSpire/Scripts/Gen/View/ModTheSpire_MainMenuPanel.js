"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
exports.View_Button1 = exports.View_MainMenuPanel = void 0;
const UIKit_1 = require("../../../../../Core/Module/UI/UIKit");
const UIBase_1 = require("../../../../../Core/Module/UI/UIBase");
const ViewInfo_1 = require("../../../../../Core/Module/UI/ViewInfo");
class View_MainMenuPanel extends UIBase_1.UIBase {
    List;
    Cancel;
    Confirm;
    Close;
    static Url = new ViewInfo_1.ViewInfo("ModTheSpire_MainMenuPanel", "MainMenuPanel");
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
        let url = View_MainMenuPanel.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_MainMenuPanel.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.List = this.View.GetChild("List");
        this.Cancel = this.View.GetChild("Cancel");
        this.Confirm = this.View.GetChild("Confirm");
        this.Close = this.View.GetTransition("Close");
    }
}
exports.View_MainMenuPanel = View_MainMenuPanel;
class View_Button1 extends UIBase_1.UIBase {
    Style;
    description;
    t0;
    t1;
    Enter;
    static Url = new ViewInfo_1.ViewInfo("ModTheSpire_MainMenuPanel", "Button1");
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
        let url = View_Button1.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_Button1.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.Style = this.View.GetController("Style");
        this.description = this.View.GetChild("description");
        this.t0 = this.View.GetTransition("t0");
        this.t1 = this.View.GetTransition("t1");
        this.Enter = this.View.GetTransition("Enter");
    }
}
exports.View_Button1 = View_Button1;
//# sourceMappingURL=ModTheSpire_MainMenuPanel.js.map