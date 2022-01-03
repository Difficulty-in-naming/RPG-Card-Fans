"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HexaghostOrb = void 0;
var Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
var UIHelper_1 = require("../../../../UI/UIHelper");
class HexaghostOrb {
    constructor(_X, _Y, _Index) {
        this._X = _X;
        this._Y = _Y;
        this._X += Mathf_1.Mathf.RandomRange(-10, 10);
        this._Y += Mathf_1.Mathf.RandomRange(-10, 10);
        this.Loader = UIHelper_1.default.CreateGLoader();
        this.Loader.alpha = 0;
    }
    SetActive(active) {
        this.Loader.visible = active;
    }
    GetActive() {
        return this.Loader.visible;
    }
    Update() {
    }
}
exports.HexaghostOrb = HexaghostOrb;
//# sourceMappingURL=HexaghostOrb.js.map