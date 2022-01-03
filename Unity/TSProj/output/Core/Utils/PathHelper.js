"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var csharp_1 = require("csharp");
class PathHelper {
    //格式化文件路径
    static FormatFilePath(filePath) {
        filePath = filePath.replace(/\\/g, "/");
        //filePath = filePath.replace(/\/\//g,"/");
        return filePath;
    }
    // 格式化文件路径并将路径截取到Mod文件夹
    static FullPathToModPath(filePath) {
        filePath = this.FormatFilePath(filePath);
        return filePath = filePath.replace(csharp_1.UnityEngine.Application.persistentDataPath + "/Mod/", "");
    }
    //删除文件名扩展名称
    static RemoveFileExtension(filePath) {
        return filePath.split('.')[0];
    }
    //获取文件名称
    static GetFileName(filePath) {
        return filePath.split('/').pop();
    }
    //获取无扩展名称文件名
    static GetFileNameWithoutExtension(filePath) {
        return this.RemoveFileExtension(this.GetFileName(filePath));
    }
    //获取文件夹路径
    static GetDirPath(filePath) {
        filePath = this.FormatFilePath(filePath);
        filePath = filePath.substring(0, filePath.lastIndexOf('/'));
        return filePath;
    }
    static GetModName(filePath) {
        filePath = this.FormatFilePath(filePath);
        let split = filePath.split('/');
        if (split.length > 0) {
            return split[1];
        }
        return "";
    }
}
exports.default = PathHelper;
//# sourceMappingURL=PathHelper.js.map