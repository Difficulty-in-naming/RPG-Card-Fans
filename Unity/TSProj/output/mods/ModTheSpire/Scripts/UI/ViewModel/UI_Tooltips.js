"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UI_Tooltips = void 0;
var csharp_1 = require("csharp");
var ModTheSpire_Common_1 = require("../../Gen/View/ModTheSpire_Common");
class UI_Tooltips extends ModTheSpire_Common_1.View_Tooltips {
    OnUpdate() {
        super.OnUpdate();
        let pt = csharp_1.FairyGUI.GRoot.inst.GlobalToLocal(csharp_1.FairyGUI.Stage.inst.GetTouchPosition(-1));
        this.View.SetPosition(pt.x + 30, pt.y + 30, 0);
    }
}
exports.UI_Tooltips = UI_Tooltips;
//# sourceMappingURL=UI_Tooltips.js.map