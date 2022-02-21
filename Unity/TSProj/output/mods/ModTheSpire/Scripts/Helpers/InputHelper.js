"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputHelper = void 0;
const csharp_1 = require("csharp");
const Vector2_1 = require("../../../../Core/Define/Vector2");
class InputHelper {
    static get MouseScreenPoistion() {
        let pos = csharp_1.UnityEngine.Input.mousePosition;
        return new Vector2_1.Vector2(pos.x, pos.y);
    }
    static get MouseUIPoistion() {
        let pos = csharp_1.FairyGUI.GRoot.inst.GlobalToLocal(csharp_1.FairyGUI.Stage.inst.GetTouchPosition(-1));
        return new Vector2_1.Vector2(pos.x, pos.y);
    }
    static GetMouseButtonUp(button) {
        return csharp_1.UnityEngine.Input.GetMouseButtonUp(button);
    }
    static GetMouseButtonDown(button) {
        return csharp_1.UnityEngine.Input.GetMouseButtonDown(button);
    }
    static GetMouseButton(button) {
        return csharp_1.UnityEngine.Input.GetMouseButton(button);
    }
    static GetKey(button) {
        return csharp_1.UnityEngine.Input.GetKey(button);
    }
    static GetKeyDown(button) {
        return csharp_1.UnityEngine.Input.GetKeyDown(button);
    }
    static GetKeyUp(button) {
        return csharp_1.UnityEngine.Input.GetKeyUp(button);
    }
}
exports.InputHelper = InputHelper;
//# sourceMappingURL=InputHelper.js.map