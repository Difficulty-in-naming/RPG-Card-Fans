#if UNITY_EDITOR
using System;
using System.Collections.Generic;
using System.IO;
using Cysharp.Threading.Tasks;
using UnityEditor;
using UnityEngine;
using Object = UnityEngine.Object;

namespace Panthea.Asset
{
    public class EDITOR_AssetsManager: IAssetsLocator
    {
        public Dictionary<string, Dictionary<Type, Object>> Cached = new Dictionary<string, Dictionary<Type, Object>>();

        public async UniTask<T> Load<T>(string filePath) where T : Object
        {
            string packPath = "Assets/Res/";
            filePath = filePath.ToLower();
            var type = typeof (T);
            if (Cached.TryGetValue(filePath, out var getter))
            {
                if (getter.TryGetValue(type, out var result))
                {
                    if (result != null)
                    {
                        return (T) result;
                    }
                }
            }

            string dir = "Assets/Res/" + Path.GetDirectoryName(filePath);
            var allAssetGuids = AssetDatabase.FindAssets("t:" + type.Name, new[] { dir });
            for (int i = 0; i < allAssetGuids.Length; i++)
            {
                var assetPath = AssetDatabase.GUIDToAssetPath(allAssetGuids[i]);
                int lastIndexOf = assetPath.IndexOf(packPath);
                if (lastIndexOf == -1)
                {
                    continue;
                }

                string tempAssetPath = assetPath.Substring(lastIndexOf + packPath.Length);
                tempAssetPath = PathUtils.RemoveFileExtension(tempAssetPath);
                if (tempAssetPath.Equals(filePath, StringComparison.OrdinalIgnoreCase))
                {
                    var obj = AssetDatabase.LoadAssetAtPath<T>(assetPath);
                    if (!Cached.TryGetValue(filePath, out var dict))
                    {
                        dict = Cached[filePath] = new Dictionary<Type, Object>();
                    }

                    dict[typeof (T)] = obj;
                    return obj;
                }
            }

            return null;
        }

        public async UniTask<Dictionary<string, List<Object>>> LoadAll(string path)
        {
            string packPath = "Res/";
            DirectoryInfo dir = new DirectoryInfo(Application.dataPath + "/" + packPath + path.Replace(AssetsConfig.Suffix, ""));
            Dictionary<string, List<Object>> objects = new Dictionary<string, List<Object>>();
            foreach (var node in dir.GetFiles())
            {
                var p = PathUtils.FullPathToUnityPath(node.FullName);
                var obj = AssetDatabase.LoadAssetAtPath<Object>(p);
                if (obj != null)
                {
                    var key = Path.GetFileNameWithoutExtension(p);
                    if (!objects.TryGetValue(key, out var list))
                    {
                        list = new List<Object>();
                        objects.Add(key, list);
                    }

                    list.Add(obj);
                }
            }

            return objects;
        }

        public T LoadSync<T>(string filePath) where T : Object
        {
            return Load<T>(filePath).AsTask().Result;
        }

        public Dictionary<string, List<Object>> LoadAllSync(string path)
        {
            return LoadAll(path).AsTask().Result;
        }

        public async UniTask<AssetBundleRequest> LoadAssetBundle(string filePath)
        {
            return null;
        }

        public async UniTask<AssetBundleRequest> LoadAssetBundleFromABKey(string abPath)
        {
            return null;
        }

        public void ReleaseAssetBundle(string filePath)
        {
            return;
        }

        public void ReleaseAssetBundleFromABKey(string abPath)
        {
            return;
        }

        public void ReleaseInstance<TObject>(TObject obj) where TObject : Object
        {
            return;
        }

        public async UniTask<UnityObject> Instantiate(string filePath, Vector3? position = null, Vector3? rotation = null, Transform parent = null)
        {
            var go = await Load<GameObject>(filePath);
            var obj = Object.Instantiate(go, parent);
            var transform = obj.transform;
            if (position.HasValue)
            {
                transform.localPosition = position.Value;
            }

            if (rotation.HasValue)
            {
                transform.localEulerAngles = rotation.Value;
            }

            return new UnityObject(obj);
        }

        public void UnloadAllAssetBundle()
        {
            return;
        }

        public List<string> GetFilterAssetBundle(string[] path)
        {
            return new List<string>(path);
        }

        public string[] GetDepenciences(string path)
        {
            return new string[0];
        }

        public Dictionary<string, AssetBundleRequest> GetLoadedAssetBundle()
        {
            return new Dictionary<string, AssetBundleRequest>();
        }
        
        public string[] GetAllNameInBundle(string abPath)
        {
            string packPath = "Res/";
            DirectoryInfo dir = new DirectoryInfo(Application.dataPath + "/" + packPath + abPath.Replace(AssetsConfig.Suffix, ""));
            Dictionary<string, List<Object>> objects = new Dictionary<string, List<Object>>();
            List<string> files = new List<string>();
            foreach (var node in dir.GetFiles())
            {
                var p = PathUtils.FullPathToUnityPath(node.FullName);
                var obj = AssetDatabase.LoadAssetAtPath<Object>(p);
                if (obj != null)
                {
                    files.Add(PathUtils.RemoveFileExtension(PathUtils.FullPathToUnityPath(node.FullName).Remove(0, "Assets/Res/".Length)));
                }
            }

            return files.ToArray();
        }
    }
}
#endif