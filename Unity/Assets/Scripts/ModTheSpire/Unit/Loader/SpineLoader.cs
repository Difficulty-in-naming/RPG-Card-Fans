using Core.Kits.Res;

namespace ModTheSpire.Unit.Loader
{
    public class SpineLoader : ILoader
    {
        private readonly string[] TexturePath;
        private string AtlasPath;
        private string SkeletonPath;

        public SpineLoader(string atlasPath, string skeletonPath,params string[] texturePath)
        {
            TexturePath = texturePath;
            AtlasPath = atlasPath;
            SkeletonPath = skeletonPath;
        }

        public IDisplay Create()
        {
            var data = ResKit.LoadSpine(AtlasPath, SkeletonPath, TexturePath);
            var runtimeSkeletonAnimation = Spine.Unity.SkeletonAnimation.NewSkeletonAnimationGameObject(data);
            runtimeSkeletonAnimation.Initialize(false);
            return new SpineCharacterDisplay(runtimeSkeletonAnimation);
        }
    }
}