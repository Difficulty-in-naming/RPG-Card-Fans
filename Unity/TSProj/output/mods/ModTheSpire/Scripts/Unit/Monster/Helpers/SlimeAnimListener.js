"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlimeAnimListener = void 0;
var csharp_1 = require("csharp");
var Mathf_1 = require("../../../../../../Core/Module/Math/Mathf");
function SlimeAnimListener(trackEntry) {
    let roll = Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(1, 5));
    csharp_1.MediaManager.PlayVoice(`Audio/sound/SOTE_SFX_SlimeBlink_${roll}_v2.ogg`);
}
exports.SlimeAnimListener = SlimeAnimListener;
//# sourceMappingURL=SlimeAnimListener.js.map