import {ResourcesManager, Spine} from "csharp";
import {ILoader} from "mods/ModTheSpire/Scripts/Loader/ILoader";
import {SpineCharacterDisplay} from "mods/ModTheSpire/Scripts/Loader/SpineCharacterDisplay";

//注意该Loader仅支持Json格式的配置文件.无法使用.bytes的配置文件
export class SpineLoader implements ILoader{
    private readonly TexturePath:string[];
    constructor(private AtlasPath:string,private SkeletonPath:string,...texturePath:string[]) {
        this.TexturePath = texturePath;
    }
    
    Create(): SpineCharacterDisplay {
        let data = ResourcesManager.LoadSpine(this.AtlasPath, this.SkeletonPath, ...this.TexturePath);
        let runtimeSkeletonAnimation = Spine.Unity.SkeletonAnimation.NewSkeletonAnimationGameObject(data);
        runtimeSkeletonAnimation.Initialize(false);
        return new SpineCharacterDisplay(runtimeSkeletonAnimation);
    }
}