using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Panthea.Asset;
using UnityEditor;
//using UnityEditor.AddressableAssets.Settings;
using UnityEditor.Build.Pipeline;
using UnityEditor.Build.Pipeline.Interfaces;
using UnityEditor.Build.Pipeline.Tasks;
using UnityEngine;

namespace Panthea.Editor.Asset
{
    public class BuildContent: AResPipeline
    {
        /*protected AddressableAssetSettings AddressableBuilder;

        public BuildContent(AddressableAssetSettings settings)
        {
            AddressableBuilder = settings;
        }*/

        public override Task Do()
        {
            #if ENABLE_ADDRESSABLE
            bool hasBuilderMode = false;
            for (var index = 0; index < AddressableBuilder.DataBuilders.Count; index++)
            {
                var node = AddressableBuilder.DataBuilders[index];
                if (node is XAssetBundleBuildMode)
                {
                    AddressableBuilder.ActivePlayerDataBuilderIndex = index;
                    hasBuilderMode = true;
                    break;
                }
            }

            if (!hasBuilderMode)
            {
                XAssetBundleBuildMode asset = ScriptableObject.CreateInstance<XAssetBundleBuildMode>();
                AssetDatabase.CreateAsset(asset, "Assets/AddressableAssetsData/DataBuilders/XFrameworkBuild.asset");
                AssetDatabase.SaveAssets();
                AddressableBuilder.AddDataBuilder(asset, false);
                AddressableBuilder.SetDataBuilderAtIndex(0, asset, false);
                AddressableBuilder.ActivePlayerDataBuilderIndex = 0;
            }

            AddressableAssetSettings.BuildPlayerContent();
            return Task.CompletedTask;
            #else
            var preference = BuildPreference.Instance;
            var buildTasks = RuntimeDataBuildTasks();
            IBundleBuildResults results;
            var lzmaFile = new List<AssetBundleBuild>();
            var lz4File = new List<AssetBundleBuild>();
            var uncompressFile = new List<AssetBundleBuild>();
            var dict = preference.Groups.ToDictionary(t1 => t1.name);
            foreach (var node in dict)
            {
                if (node.Value.PackingMode == BuildObject.BundlePackingMode.PackSeparately)
                {
                    foreach (var file in node.Value.Files)
                    {
                        var build = new AssetBundleBuild { assetBundleName = node.Key.Replace("-", "/") + file.Key + AssetsConfig.Suffix };
                        build.assetNames = new[] { AssetDatabase.GUIDToAssetPath(file.GUID) };
                        build.addressableNames = new[] { file.Key };
                        if(node.Value.CompressionMode == BuildObject.BundleCompressionMode.LZMA)
                            lzmaFile.Add(build);
                        else if (node.Value.CompressionMode == BuildObject.BundleCompressionMode.LZ4)
                            lz4File.Add(build);
                        else
                            uncompressFile.Add(build);
                    }
                }
                else
                {
                    var build = new AssetBundleBuild { assetBundleName = node.Key.Replace("-", "/") + AssetsConfig.Suffix };
                    var assetsName = new List<string>();
                    var addressableName = new List<string>();

                    foreach (var file in node.Value.Files)
                    {
                        assetsName.Add(AssetDatabase.GUIDToAssetPath(file.GUID));
                        addressableName.Add(file.Key);
                    }

                    build.addressableNames = addressableName.ToArray();
                    build.assetNames = assetsName.ToArray();
                    if(node.Value.CompressionMode == BuildObject.BundleCompressionMode.LZMA)
                        lzmaFile.Add(build);
                    else if (node.Value.CompressionMode == BuildObject.BundleCompressionMode.LZ4)
                        lz4File.Add(build);
                    else
                        uncompressFile.Add(build);
                }
            }
            var outputPath = preference.OutputPath;
            if (lzmaFile.Count > 0)
                BuildBundle(outputPath, lzmaFile, BuildCompression.LZMA, buildTasks);
            if (lz4File.Count > 0)
                BuildBundle(outputPath, lz4File, BuildCompression.LZ4, buildTasks);
            if (uncompressFile.Count > 0)
                BuildBundle(outputPath, uncompressFile, BuildCompression.Uncompressed, buildTasks);
#endif
            return Task.CompletedTask;
        }

        private static void BuildBundle(string outputPath, List<AssetBundleBuild> lzmaFile,BuildCompression compression, IList<IBuildTask> buildTasks)
        {
            IBundleBuildResults results;
            var buildParams = new BundleBuildParameters(EditorUserBuildSettings.activeBuildTarget, EditorUserBuildSettings.selectedBuildTargetGroup,
                outputPath);
            buildParams.BundleCompression = compression;
            var exitCode = ContentPipeline.BuildAssetBundles(buildParams, new BundleBuildContent(lzmaFile), out results, buildTasks);
            if (exitCode < ReturnCode.Success)
            {
                throw new Exception("SBP Error" + exitCode);
            }
        }

        private static IList<IBuildTask> RuntimeDataBuildTasks()
        {
            var buildTasks = new List<IBuildTask>();

            // Setup
            //buildTasks.Add(new SwitchToBuildPlatform());
            //buildTasks.Add(new RebuildSpriteAtlasCache());

            // Player Scripts
            //buildTasks.Add(new BuildPlayerScripts());

            // Dependency
            buildTasks.Add(new CalculateSceneDependencyData());
            buildTasks.Add(new CalculateAssetDependencyData());
            //buildTasks.Add(new AddHashToBundleNameTask());
            buildTasks.Add(new StripUnusedSpriteSources());
            buildTasks.Add(new CreateBuiltInShadersBundle("UnityBuiltInShaders.bundle"));

            // Packing
            buildTasks.Add(new GenerateBundlePacking());
            buildTasks.Add(new UpdateBundleObjectLayout());

            buildTasks.Add(new GenerateBundleCommands());
            buildTasks.Add(new GenerateSubAssetPathMaps());
            buildTasks.Add(new GenerateBundleMaps());

            // Writing
            buildTasks.Add(new WriteSerializedFiles());
            buildTasks.Add(new ArchiveAndCompressBundles());

            //XAssetsFramework Need
            buildTasks.Add(new DeleteUnusedAssetBundle());
            buildTasks.Add(new GenerateFileLog());
            return buildTasks;
        }
    }
}