"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PathHelper_1 = require("./PathHelper");
const csharp_1 = require("csharp");
class IOHelper {
    static GetFiles(dir, searchPattern, searchOption) {
        let array = new Array();
        let files = csharp_1.System.IO.Directory.GetFiles(dir, searchPattern, searchOption);
        let fileNumber = files.Length;
        for (let i = 0; i < fileNumber; i++) {
            array.push(PathHelper_1.default.FormatFilePath(files.get_Item(i)));
        }
        return array;
    }
}
exports.default = IOHelper;
//# sourceMappingURL=IOHelper.js.map