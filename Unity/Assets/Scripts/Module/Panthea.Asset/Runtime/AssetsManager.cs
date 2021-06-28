using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Cysharp.Threading.Tasks;
using UnityEngine;
using Object = UnityEngine.Object;

namespace Panthea.Asset
{
    public class AssetsManager: IAssetsLocator
    {
        public const string kFileInfo = "file_info.json";
        private AssetBundleDownloader ABDownloader;
        private AssetBundleRuntime Runtime;
        private ABFileTrack mAbFileTrack;

        public AssetsManager(ABFileTrack fileTrack, AssetBundleRuntime runtime, AssetBundleDownloader downloader)
        {
            mAbFileTrack = fileTrack;
            Runtime = runtime;
            ABDownloader = downloader;
        }

        /// <summary>
        /// 根据本地列表检测需要下载得文件内容
        /// </summary>
        /// <returns></returns>
        public async Task<List<AssetFileLog>> FetchDownloadList()
        {
            return await ABDownloader.FetchDownloadList();
        }

        public async UniTask Download(List<AssetFileLog> filelogs, IProgress<float> progress = null)
        {
            await ABDownloader.Download(filelogs, progress);
        }

        public async UniTask<T> Load<T>(string filePath) where T : Object
        {
            try
            {
                return await Runtime.LoadAssetAsync<T>(filePath.ToLower());
            }
            catch (Exception e)
            {
                Debug.LogError(e);
                return default;
            }
        }

        public async UniTask<Dictionary<string, List<Object>>> LoadAll(string abPath)
        {
            try
            {
                return await Runtime.LoadAllAssetAsync(abPath.ToLower());
            }
            catch (Exception e)
            {
                Debug.LogError(e);
                return default;
            }
        }

        public T LoadSync<T>(string filePath) where T : Object
        {
            return Runtime.LoadAssetSync<T>(filePath.ToLower());
        }

        public Dictionary<string, List<Object>> LoadAllSync(string path)
        {
            return Runtime.LoadAllAssetSync(path.ToLower());
        }

        public async UniTask<AssetBundleRequest> LoadAssetBundle(string filePath)
        {
            try
            {
                return await Runtime.LoadAssetBundleByFilePath(filePath.ToLower());
            }
            catch (Exception e)
            {
                Debug.LogError(e);
                return default;
            }
        }

        public async UniTask<AssetBundleRequest> LoadAssetBundleFromABKey(string abPath)
        {
            try
            {
                return await Runtime.LoadAssetBundleByABPath(abPath.ToLower());
            }
            catch (Exception e)
            {
                Debug.LogError(e);
                return default;
            }
        }

        public void ReleaseAssetBundle(string filePath)
        {
            try
            {
                Runtime.ReleaseAssetBundle(filePath.ToLower());
            }
            catch (Exception e)
            {
                Debug.LogError(e);
            }
        }

        public void ReleaseAssetBundleFromABKey(string abPath)
        {
            try
            {
                Runtime.ReleaseAssetBundleFromABKey(abPath.ToLower());
            }
            catch (Exception e)
            {
                Debug.LogError(e);
            }
        }

        public void ReleaseInstance<TObject>(TObject obj) where TObject : Object
        {
            Runtime.ReleaseInstance(obj);
        }

        public async UniTask<UnityObject> Instantiate(string filePath, Vector3? position = null, Vector3? rotation = null, Transform parent = null)
        {
            try
            {
                var go = await Runtime.Instantiate(filePath.ToLower(), position, rotation, parent);
                if (go == null)
                {
                    return null;
                }
                else
                {
                    return new UnityObject(go);
                }
            }
            catch (Exception e)
            {
                Debug.LogError(e);
                return default;
            }
        }

        public void UnloadAllAssetBundle()
        {
            Runtime.UnloadAllAssetBundle();
        }

        public List<string> GetFilterAssetBundle(string[] path)
        {
            return mAbFileTrack.GetFilterAssetBundle(path);
        }

        public string[] GetDepenciences(string abPath)
        {
            var info = mAbFileTrack.GetABInfo(abPath);
            if (info != null)
            {
                return info.Info.Dependencies;
            }

            return null;
        }

        public Dictionary<string, AssetBundleRequest> GetLoadedAssetBundle()
        {
            return Runtime.GetLoadedAssetBundle();
        }

        public string[] GetAllNameInBundle(string abPath)
        {
            return mAbFileTrack.GetABInfo(abPath + AssetsConfig.Suffix).Info.Files;
        }
    }
}