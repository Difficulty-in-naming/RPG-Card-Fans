"use strict";
//@Patch
Object.defineProperty(exports, "__esModule", { value: true });
exports.P5CardTags = void 0;
var AbstractCard_1 = require("../../ModTheSpire/Scripts/Cards/AbstractCard");
var PatchCardTags;
(function (PatchCardTags) {
    PatchCardTags[PatchCardTags["P5"] = 0] = "P5";
})(PatchCardTags || (PatchCardTags = {}));
exports.P5CardTags = {
    ...AbstractCard_1.CardTags,
    ...PatchCardTags
};
//# sourceMappingURL=AbstractCardPatch.js.map