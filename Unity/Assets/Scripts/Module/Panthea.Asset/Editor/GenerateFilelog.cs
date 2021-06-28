using System.Collections.Generic;
using System.IO;
using Force.Crc32;
using Newtonsoft.Json;
using Panthea.Asset;
using UnityEditor;
using UnityEditor.Build.Pipeline;
using UnityEditor.Build.Pipeline.Injector;
using UnityEditor.Build.Pipeline.Interfaces;

namespace Panthea.Editor.Asset
{
    public class GenerateFileLog: IBuildTask
    {
#pragma warning disable 649
        [InjectContext(ContextUsage.In)]
        private IBuildParameters m_Parameters;

        [InjectContext(ContextUsage.In)]
        private IBundleWriteData m_WriteData;

        [InjectContext(ContextUsage.In)]
        private IBundleBuildContent m_Content;

        [InjectContext]
        private IBundleBuildResults m_Results;

        [InjectContext(ContextUsage.In, true)]
        private IProgressTracker m_Tracker;

        [InjectContext(ContextUsage.In, true)]
        private IBuildCache m_Cache;
#pragma warning restore 649

        private string mStreamingAssets = AssetsConfig.StreamingAssets;
        private readonly Dictionary<string, AssetFileLog> mSave = new Dictionary<string, AssetFileLog>();

        public ReturnCode Run()
        {
            var outputFolder = BuildPreference.Instance.OutputPath;

            foreach (var node in m_Content.BundleLayout)
            {
                string[] files = new string[node.Value.Count];
                for (var index = 0; index < node.Value.Count; index++)
                {
                    GUID sub = node.Value[index];
                    string file = PathUtils.FormatFilePath(AssetDatabase.GUIDToAssetPath(sub.ToString()));
                    string path = PathUtils.RemoveFileExtension(file.Replace("Assets/Res/", ""));
                    files[index] = path.ToLower();
                }

                string filePath = outputFolder + "/" + node.Key;
                var fileInfo = new FileInfo(filePath);
                var crc = Crc32CAlgorithm.Compute(filePath);
                var dependencies = m_Results.BundleInfos[node.Key].Dependencies;
                mSave.Add(node.Key, new AssetFileLog(crc, TimeUtils.GetUtcTimeStamp(), node.Key, files, dependencies));
            }

            var json = JsonConvert.SerializeObject(mSave);
            File.WriteAllText(mStreamingAssets + "/" + AssetsManager.kFileInfo, json);

            return ReturnCode.Success;
        }

        public int Version => 1;
    }
}