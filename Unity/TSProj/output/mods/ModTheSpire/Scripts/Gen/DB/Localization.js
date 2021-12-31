"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalizationProperty = void 0;
/********************************
  该脚本是自动生成的请勿手动修改
*********************************/
const PathHelper_1 = require("../../../../../Core/Utils/PathHelper");
const ConfigAssetManager_1 = require("../../../../../Core/Module/Config/ConfigAssetManager");
const Settings_1 = require("../../../../../Core/Settings");
class LocalizationProperty {
    // Id
    Id;
    // 中文
    Chinese;
    static Read(id) {
        // @ts-ignore
        let dirName = __dirname;
        let result = ConfigAssetManager_1.ConfigAssetManager.Read(PathHelper_1.default.GetModName(dirName), id)[Settings_1.default.Inst().Language];
        if (!result)
            return id;
        return result;
    }
    static ReadDict() {
        // @ts-ignore
        let dirName = __dirname;
        return ConfigAssetManager_1.ConfigAssetManager.ReadDict(PathHelper_1.default.GetModName(dirName));
    }
}
exports.LocalizationProperty = LocalizationProperty;
//# sourceMappingURL=Localization.js.map