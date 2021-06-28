using System.Collections.Generic;
using System.Threading.Tasks;

namespace Panthea.Editor.Asset
{
    public class LowerCasePath: AResPipeline
    {
        public List<string> BuildFiles;

        public LowerCasePath(List<string> buildFiles)
        {
            BuildFiles = buildFiles;
        }

        public override Task Do()
        {
            for (int i = 0; i < BuildFiles.Count; i++)
            {
                BuildFiles[i] = BuildFiles[i].ToLower();
            }

            return Task.CompletedTask;
        }
    }
}