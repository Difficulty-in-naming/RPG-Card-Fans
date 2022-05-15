using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using UnityEditor.Build.Reporting;

namespace Panthea.Editor.Asset
{
    public class IgnoreFolder : AResPipeline
    {
        public List<string> BuildFiles;

        public IgnoreFolder(List<string> buildFiles)
        {
            BuildFiles = buildFiles;
        }
        public override Task Do()
        {
            for (var index = BuildFiles.Count - 1; index >= 0; index--)
            {
                var node = BuildFiles[index];
                if (node.IndexOf("__DD_",StringComparison.OrdinalIgnoreCase) != -1)
                {
                    BuildFiles.RemoveAt(index);
                }
            }
            return Task.CompletedTask;
        }
    }
}