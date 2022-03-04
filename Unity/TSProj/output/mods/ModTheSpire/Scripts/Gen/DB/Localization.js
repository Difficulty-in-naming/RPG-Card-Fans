"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalizationProperty = void 0;
const ConfigAssetManager_1 = require("../../../../../Core/Module/Config/ConfigAssetManager");
const Settings_1 = require("../../../../../Core/Settings");
class LocalizationProperty {
    // Id
    Id;
    // 中文
    Chinese;
    static Read(id) {
        let c = ConfigAssetManager_1.ConfigAssetManager.Read("ModTheSpire_Localization", id);
        if (!c)
            return id;
        let result = c[Settings_1.default.Inst().Language];
        if (!result)
            return id;
        return result;
    }
    static ReadDict() {
        // @ts-ignore
        let dirName = __dirname;
        return ConfigAssetManager_1.ConfigAssetManager.ReadDict("ModTheSpire_Localization");
    }
}
exports.LocalizationProperty = LocalizationProperty;
//# sourceMappingURL=Localization.js.map