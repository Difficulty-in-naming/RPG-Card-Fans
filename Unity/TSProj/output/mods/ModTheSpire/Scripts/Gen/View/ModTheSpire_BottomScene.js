"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
exports.View_BottomScene = void 0;
var UIKit_1 = require("../../../../../Core/Module/UI/UIKit");
var UIBase_1 = require("../../../../../Core/Module/UI/UIBase");
var ViewInfo_1 = require("../../../../../Core/Module/UI/ViewInfo");
class View_BottomScene extends UIBase_1.UIBase {
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
        let url = View_BottomScene.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_BottomScene.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.midWall = this.View.GetChild("midWall");
        this.mod1 = this.View.GetChild("mod1");
        this.mod2 = this.View.GetChild("mod2");
        this.CeilingMod6 = this.View.GetChild("CeilingMod6");
        this.CeilingMod1 = this.View.GetChild("CeilingMod1");
        this.CeilingMod4 = this.View.GetChild("CeilingMod4");
        this.CeilingMod5 = this.View.GetChild("CeilingMod5");
        this.CeilingMod3 = this.View.GetChild("CeilingMod3");
        this.CeilingMod2 = this.View.GetChild("CeilingMod2");
        this.DustHolder = this.View.GetChild("DustHolder");
    }
}
exports.View_BottomScene = View_BottomScene;
View_BottomScene.Url = new ViewInfo_1.ViewInfo("ModTheSpire_BottomScene", "BottomScene");
//# sourceMappingURL=ModTheSpire_BottomScene.js.map