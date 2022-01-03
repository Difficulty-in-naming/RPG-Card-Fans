"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("csharp");
class SaveHelper {
    static Save(obj, path) {
        let serialize = JSON.stringify(obj);
        core.System.IO.File.WriteAllText(core.UnityEngine.Application.persistentDataPath + "/" + path, serialize);
    }
    static Load(path) {
        if (!core.System.IO.File.Exists(path))
            return undefined;
        return JSON.parse(core.System.IO.File.ReadAllText(path));
    }
}
exports.default = SaveHelper;
//# sourceMappingURL=SaveHelper.js.map