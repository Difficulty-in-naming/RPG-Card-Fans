"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
exports.View_Card = exports.View_TitleButton = exports.View_MasterDeckView = void 0;
const UIKit_1 = require("../../../../../Core/Module/UI/UIKit");
const UIBase_1 = require("../../../../../Core/Module/UI/UIBase");
const ViewInfo_1 = require("../../../../../Core/Module/UI/ViewInfo");
class View_MasterDeckView extends UIBase_1.UIBase {
    c1;
    Menu;
    List;
    desc;
    Enter;
    static Url = new ViewInfo_1.ViewInfo("ModTheSpire_MasterDeckView", "MasterDeckView");
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
        let url = View_MasterDeckView.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_MasterDeckView.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.c1 = this.View.GetController("c1");
        this.Menu = this.View.GetChild("Menu");
        this.List = this.View.GetChild("List");
        this.desc = this.View.GetChild("desc");
        this.Enter = this.View.GetTransition("Enter");
    }
}
exports.View_MasterDeckView = View_MasterDeckView;
class View_TitleButton extends UIBase_1.UIBase {
    SortingType;
    Hover;
    static Url = new ViewInfo_1.ViewInfo("ModTheSpire_MasterDeckView", "TitleButton");
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
        let url = View_TitleButton.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_TitleButton.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.SortingType = this.View.GetController("SortingType");
        this.Hover = this.View.GetTransition("Hover");
    }
}
exports.View_TitleButton = View_TitleButton;
class View_Card extends UIBase_1.UIBase {
    Inner;
    static Url = new ViewInfo_1.ViewInfo("ModTheSpire_MasterDeckView", "Card");
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
        let url = View_Card.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_Card.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.Inner = this.View.GetChild("Inner");
    }
}
exports.View_Card = View_Card;
//# sourceMappingURL=ModTheSpire_MasterDeckView.js.map