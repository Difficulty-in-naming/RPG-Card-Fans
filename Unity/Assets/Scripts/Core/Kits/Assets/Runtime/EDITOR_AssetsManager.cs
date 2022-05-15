#pragma warning disable CS1998
#if UNITY_EDITOR
using System;
using System.Collections.Generic;
using System.IO;
using Core.Utils;
using Cysharp.Threading.Tasks;
using UnityEditor;
using UnityEngine;
using Object = UnityEngine.Object;

namespace Panthea.Asset
{
    public class EDITOR_AssetsManager: IAssetsLocator
    {
        private readonly Dictionary<string, Dictionary<Type, Object>> mCached = new();
        private const string PackPath = "Res/";
        private const string SearchPath = "Assets/Res/";
        public async UniTask<T> Load<T>(string filePath) where T : Object
        {
            filePath = filePath.ToLower();
            var type = typeof (T);
            if (mCached.TryGetValue(filePath, out var getter))
            {
                if (getter.TryGetValue(type, out var result))
                {
                    if (result != null)
                    {
                        return (T) result;
                    }
                }
            }

            string dir = SearchPath + Path.GetDirectoryName(filePath);
            var allAssetGuids = AssetDatabase.FindAssets("t:" + type.Name, new[] { dir });
            for (int i = 0; i < allAssetGuids.Length; i++)
            {
                var assetPath = AssetDatabase.GUIDToAssetPath(allAssetGuids[i]);
                int lastIndexOf = assetPath.IndexOf(SearchPath, StringComparison.Ordinal);
                if (lastIndexOf == -1)
                {
                    continue;
                }

                string tempAssetPath = assetPath.Substring(lastIndexOf + SearchPath.Length);
                if (tempAssetPath.Equals(filePath, StringComparison.OrdinalIgnoreCase))
                {
                    var obj = AssetDatabase.LoadAssetAtPath<T>(assetPath);
                    if (!mCached.TryGetValue(filePath, out var dict))
                    {
                        dict = mCached[filePath] = new Dictionary<Type, Object>();
                    }

                    dict[typeof (T)] = obj;
                    return obj;
                }
            }

            return null;
        }

        public async UniTask<Dictionary<string, List<Object>>> LoadAll(string path)
        {
            DirectoryInfo dir = new DirectoryInfo(Application.dataPath + "/" + PackPath + path.Replace(AssetsConfig.Suffix, ""));
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
        }

        public void ReleaseAssetBundleFromABKey(string abPath)
        {
        }

        public void ReleaseInstance<TObject>(TObject obj) where TObject : Object
        {
        }

        public async UniTask<GameObject> Instantiate(string filePath, Vector3? position = null, Vector3? rotation = null, Transform parent = null)
        {
            var go = await Load<GameObject>(filePath);
            if (go == null)
                return null;
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

            return obj;
        }

        public void UnloadAllAssetBundle()
        {
        }

        public List<string> GetFilterAssetBundle(string[] path)
        {
            return new List<string>(path);
        }

        public string[] GetDependencies(string path)
        {
            return Array.Empty<string>();
        }

        public Dictionary<string, AssetBundleRequest> GetLoadedAssetBundle()
        {
            return new Dictionary<string, AssetBundleRequest>();
        }
        
        public string[] GetAllNameInBundle(string abPath)
        {
            DirectoryInfo dir = new DirectoryInfo(Application.dataPath + "/" + PackPath + abPath.Replace(AssetsConfig.Suffix, ""));
            if (!dir.Exists)
                return Array.Empty<string>();
            List<string> files = new List<string>();
            foreach (var node in dir.GetFiles())
            {
                var p = PathUtils.FullPathToUnityPath(node.FullName);
                var obj = AssetDatabase.LoadAssetAtPath<Object>(p);
                if (obj != null)
                {
                    files.Add(PathUtils.RemoveFileExtension(PathUtils.FullPathToUnityPath(node.FullName).Remove(0, SearchPath.Length)));
                }
            }

            return files.ToArray();
        }

        public bool Exists(string filePath)
        {
            return SpExists(filePath);
        }

        public Shader GetShader(string shaderName)
        {
            var shader = Load<Shader>("Shader/" + shaderName);
            shader.Forget();
            return shader.AsTask().Result;
        }

        //主要给编辑器用的.不需要New Editor_AssetsManager就可以检测文件是否合法
        public static bool SpExists(string filePath)
        {
            var fileName = Path.GetFileName(filePath);
            filePath = filePath.Remove(filePath.Length - fileName.Length);
            var dir = Application.dataPath + "/Res/" + filePath;
            if (Directory.Exists(dir))
            {
                var files = Directory.GetFiles(dir,fileName + ".*");
                return files.Length != 0;
            }

            return false;
        }
    }
}
#endif
#pragma warning restore CS1998