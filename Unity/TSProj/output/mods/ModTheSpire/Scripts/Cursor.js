"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cursor = void 0;
const csharp_1 = require("csharp");
class Cursor {
    loader;
    constructor() {
        this.loader = csharp_1.FairyGUI.UIObjectFactory.NewObject(csharp_1.FairyGUI.ObjectType.Loader);
        this.loader.url = "ui://Cursor/gold2";
        this.loader.autoSize = true;
        this.loader.touchable = false;
        csharp_1.FairyGUI.GRoot.inst.AddChild(this.loader);
        this.loader.sortingOrder = 10000;
    }
    Update() {
        let pos = csharp_1.FairyGUI.GRoot.inst.GlobalToLocal(csharp_1.FairyGUI.Stage.inst.GetTouchPosition(-1));
        this.loader.SetPosition(pos.x, pos.y, 0);
    }
}
exports.Cursor = Cursor;
//# sourceMappingURL=Cursor.js.map