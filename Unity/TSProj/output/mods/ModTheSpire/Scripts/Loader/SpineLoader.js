"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpineLoader = void 0;
const csharp_1 = require("csharp");
const SpineCharacterDisplay_1 = require("./SpineCharacterDisplay");
//注意该Loader仅支持Json格式的配置文件.无法使用.bytes的配置文件
class SpineLoader {
    AtlasPath;
    SkeletonPath;
    TexturePath;
    constructor(AtlasPath, SkeletonPath, ...texturePath) {
        this.AtlasPath = AtlasPath;
        this.SkeletonPath = SkeletonPath;
        this.TexturePath = texturePath;
    }
    Create() {
        let data = csharp_1.ResourcesManager.LoadSpine(this.AtlasPath, this.SkeletonPath, ...this.TexturePath);
        let runtimeSkeletonAnimation = csharp_1.Spine.Unity.SkeletonAnimation.NewSkeletonAnimationGameObject(data);
        runtimeSkeletonAnimation.Initialize(false);
        return new SpineCharacterDisplay_1.SpineCharacterDisplay(runtimeSkeletonAnimation);
    }
}
exports.SpineLoader = SpineLoader;
//# sourceMappingURL=SpineLoader.js.map