using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Core.Utils;
using UnityEditor;
using UnityEngine;

namespace Panthea.Editor.Asset
{
    public class BuildGroup: AResPipeline
    {
        public string PackPath;
        protected List<string> BuildFiles;

        public BuildGroup(string packPath, List<string> buildFiles)
        {
            PackPath = packPath;
            BuildFiles = buildFiles;
        }

        public override Task Do()
        {
            Dictionary<string, List<string>> mapping = new Dictionary<string, List<string>>();
            AssetDatabase.StartAssetEditing();
            try
            {
                foreach (var node in BuildFiles)
                {
                    var group = PathUtils.FullPathToAssetbundlePath(Path.GetDirectoryName(node), PackPath);
                    List<string> list;
                    if (!mapping.TryGetValue(group, out list))
                    {
                        list = new List<string>();
                        mapping.Add(group, list);
                    }

                    list.Add(node);
                }
#if ENABLE_ADDRESSABLE
                var schemas = new List<AddressableAssetGroupSchema>();
                //var contentUpdate = ScriptableObject.CreateInstance<ContentUpdateGroupSchema>();
                var bundle = ScriptableObject.CreateInstance<BundledAssetGroupSchema>();
                bundle.Compression = BundledAssetGroupSchema.BundleCompressionMode.LZ4;
                bundle.BundleNaming = BundledAssetGroupSchema.BundleNamingStyle.NoHash;
                bundle.UseAssetBundleCrc = false;
                bundle.UseAssetBundleCache = false;
                //schemas.Add(contentUpdate);
                schemas.Add(bundle);

                foreach (var node in mapping)
                {
                    if (node.Value.Count == 0)
                    {
                        continue;
                    }
#if DEBUG_ADDRESSABLE
            Debug.Log("Create Group :" + node);
#endif
                    var group = AddressableBuilder.FindGroup(node.Key.Replace("/", "-"));
                    if (group == null)
                    {
                        @group = AddressableBuilder.CreateGroup(node.Key, false, false, false, schemas);
                    }
                    else
                    {
                        //检查Schemma
                        if (!group.HasSchema(typeof (BundledAssetGroupSchema)))
                        {
                            @group.AddSchema(bundle);
                        }
                    }

                    foreach (var file in node.Value)
                    {
                        var entry = AddressableBuilder.CreateOrMoveEntry(AssetDatabase.AssetPathToGUID(PathUtils.FullPathToUnityPath(file)), group,
                            false, false);
                        entry.SetAddress(Path.GetFileNameWithoutExtension(file).ToLower(), false);
                    }
                }

                for (int index = AddressableBuilder.groups.Count - 1; index >= 0; index--)
                {
                    var node = AddressableBuilder.groups[index];
                    if (!mapping.ContainsKey(node.name.Replace("-", "/")))
                    {
                        if (node.Default)
                        {
                            continue;
                        }

                        if (node.ReadOnly)
                        {
                            continue;
                        }

                        AddressableBuilder.RemoveGroup(node);
#if DEBUG_ADDRESSABLE
                        Debug.Log("Remove Group " + node.Name);
#endif
                    }
                }
                #else
                var preference = BuildPreference.Instance;
                preference.Groups.RemoveAll(t1 => t1 == null);
                foreach (var node in mapping)
                {
                    if (node.Value.Count == 0)
                    {
                        continue;
                    }
#if DEBUG_ADDRESSABLE
            Debug.Log("Create Group :" + node);
#endif
                    var group = preference.FindGroup(node.Key);
                    if (group == null)
                    {
                        group = ScriptableObject.CreateInstance<BuildObject>();
                        group.name = node.Key;
                        preference.AddGroup(group);
                    }
                    @group.Files.Clear();
                    foreach (var file in node.Value)
                    {
                        @group.Files.Add(new BuildObject.BuildFileKeyValue(Path.GetFileName(file).ToLower(),
                            AssetDatabase.AssetPathToGUID(PathUtils.FullPathToUnityPath(file))));
                    }
                }
                for (int index = preference.Groups.Count - 1; index >= 0; index--)
                {
                    var node = preference.Groups[index];
                    if (!mapping.ContainsKey(node.name.Replace("-", "/")))
                    {
                        preference.RemoveGroup(node);
#if DEBUG_ADDRESSABLE
                        Debug.Log("Remove Group " + node.Name);
#endif
                    }
                }
#endif
                EditorUtility.SetDirty(preference);
                AssetDatabase.SaveAssets();
            }
            catch (Exception e)
            {
                Debug.LogError(e);
            }
            finally
            {
                AssetDatabase.StopAssetEditing();
            }

            return Task.CompletedTask;
        }
    }
}