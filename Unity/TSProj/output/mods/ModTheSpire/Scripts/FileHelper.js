"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.basePath = void 0;
const ConfigAssetManager_1 = require("../../../Core/Module/Config/ConfigAssetManager");
const csharp_1 = require("csharp");
// @ts-ignore
exports.basePath = "mods/ModTheSpire/";
class FileHelper {
    constructor() {
    }
    static LoadConfig() {
        ConfigAssetManager_1.ConfigAssetManager.Load("ModTheSpire_Localization", csharp_1.UnityEngine.Application.persistentDataPath + "/" + exports.basePath + "DB/Localization.json");
    }
    static FormatPath(file) {
        return exports.basePath + "Res/" + file;
    }
    static FormatPath2(file) {
        return csharp_1.UnityEngine.Application.persistentDataPath + "/" + exports.basePath + "/Res/" + file;
    }
}
exports.default = FileHelper;
//# sourceMappingURL=FileHelper.js.map