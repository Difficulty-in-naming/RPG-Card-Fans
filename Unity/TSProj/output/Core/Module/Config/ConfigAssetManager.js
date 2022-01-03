"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigAssetManager = void 0;
var csharp_1 = require("csharp");
class ConfigAssetManager {
    static Load(uuid, path) {
        let json = null;
        try {
            json = csharp_1.System.IO.File.ReadAllText(path, csharp_1.System.Text.Encoding.UTF8);
            if (!json) {
                return;
            }
        }
        catch (e) {
            throw ("找不到文件:" + path + "\n" + e);
        }
        let map = new Map();
        let deserialize = JSON.parse(json);
        for (let key in deserialize) {
            map.set(key, deserialize[key]);
        }
        this.KeyValue.set(uuid, map);
    }
    static Release() {
        this.KeyValue.clear();
        this.KeyValue = null;
    }
    static Read(uuid, id, throwException = true) {
        if (this.KeyValue.has(uuid)) {
            let map = this.KeyValue.get(uuid);
            if (map.has(id)) {
                return map.get(id);
            }
        }
        //if(throwException)
        //    Log.Print("Id:" + id + "不存在");
    }
    static ReadDict(modName) {
        if (this.KeyValue.has(modName)) {
            return this.KeyValue[modName];
        }
        return this.KeyValue;
    }
}
exports.ConfigAssetManager = ConfigAssetManager;
ConfigAssetManager.KeyValue = new Map();
//# sourceMappingURL=ConfigAssetManager.js.map