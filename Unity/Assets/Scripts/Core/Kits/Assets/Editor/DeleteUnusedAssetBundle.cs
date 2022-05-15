using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Core.Utils;
using Panthea.Asset;
using UnityEditor;
using UnityEditor.Build.Pipeline;
using UnityEditor.Build.Pipeline.Injector;
using UnityEditor.Build.Pipeline.Interfaces;

namespace Panthea.Editor.Asset
{
    public class DeleteUnusedAssetBundle: IBuildTask
    {
#pragma warning disable 649
        [InjectContext(ContextUsage.In)]
        private IBuildParameters m_Parameters;

        [InjectContext(ContextUsage.In)]
        private IBundleBuildContent m_Content;

#pragma warning restore 649

        public ReturnCode Run()
        {
            var outputFolder = BuildPreference.Instance.OutputPath;
            var groups = BuildPreference.Instance.Groups;
            var hashMap = new Dictionary<string,BuildObject>();
            foreach (var node in groups)
            {
                var dir = node.name.Replace("-", "/");
                if(node.PackingMode == BuildObject.BundlePackingMode.PackTogether)
                    hashMap.Add(dir + AssetsConfig.Suffix, node);
                else
                {
                    foreach (var file in node.Files)
                    {
                        hashMap.Add(dir + "/" + file.Key + AssetsConfig.Suffix, node);
                    }
                }
            }
            var allAssetbundle = Directory.GetFiles(outputFolder + "/", "*" + AssetsConfig.Suffix, SearchOption.AllDirectories);
            foreach (var node in allAssetbundle)
            {
                string path = PathUtils.FormatFilePath(node.Replace(outputFolder + "/", ""));
                if (path.Contains("UnityBuiltInShaders",StringComparison.OrdinalIgnoreCase))
                    continue;
                if (!hashMap.ContainsKey(path))
                {
                    File.Delete(node);
                }
            }

            RemoveEmptyDir(outputFolder + "/");

            return ReturnCode.Success;
        }

        private void RemoveEmptyDir(string path)
        {
            var dir = new DirectoryInfo(path);
            var allDir = dir.GetDirectories();
            var allFile = dir.GetFiles();
            if (allDir.Length != 0)
            {
                foreach (var node in allDir)
                {
                    RemoveEmptyDir(node.FullName);
                }
            }

            if ((allFile.Length == 0 || allFile.All(t1 => t1.Extension == ".meta")) && dir.GetDirectories().Length == 0)
            {
                FileUtil.DeleteFileOrDirectory(PathUtils.FullPathToUnityPath(dir.FullName));
                var metaPath = dir.FullName + ".meta";
                if (File.Exists(metaPath))
                {
                    FileUtil.DeleteFileOrDirectory(PathUtils.FullPathToUnityPath(metaPath));
                }

                return;
            }
        }

        public int Version => 1;
    }
}