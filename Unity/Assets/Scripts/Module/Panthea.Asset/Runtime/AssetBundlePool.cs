using System;
using System.Collections.Generic;
using Cysharp.Threading.Tasks;
using Panthea.Asset;
using UnityEngine;

namespace Panthea.Asset
{
    /// <summary>
    /// AssetBundle数据缓存池.
    /// </summary>
    public class AssetBundlePool
    {
        private Dictionary<string, AssetBundleRequest> Pool = new Dictionary<string, AssetBundleRequest>();
        private Dictionary<AssetBundleRequest, string> Lookup = new Dictionary<AssetBundleRequest, string>();

        /// <summary>
        /// 等待加载的列表,因为可能在同一帧当中多次请求同一个AB.第二次的时候我们判断是否在等待列表中.如果在的话我们就一直等到等待列表被移除以后返回结果
        /// </summary>
        private Dictionary<string, UniTaskCompletionSource> WaitList = new Dictionary<string, UniTaskCompletionSource>();

        private ABFileTrack mFileLog;

        public AssetBundlePool(ABFileTrack filelog)
        {
            mFileLog = filelog;
        }

        private AssetBundleRequest internal_Get(ABFileTrack.RedirectAsset path)
        {
            if (Pool.TryGetValue(path.Info.Path, out AssetBundleRequest value))
            {
                return value;
            }

            return null;
        }

        private List<UniTask> LoadDependencies(ABFileTrack.RedirectAsset path)
        {
            if (path.Info.Dependencies == null || path.Info.Dependencies.Length == 0)
            {
                return null;
            }

            List<UniTask> tasks = new List<UniTask>();
            foreach (var node in path.Info.Dependencies)
            {
                var directPath = mFileLog.GetABInfo(node);
                if (directPath == null)
                {
                    throw new AssetBundleNotFound(node);
                }
                else
                {
                    tasks.Add(GetAsync(directPath));
                }
            }

            return tasks;
        }

        private async UniTask<AssetBundleRequest> internal_Load(ABFileTrack.RedirectAsset path)
        {
            List<UniTask> tasks = LoadDependencies(path);
            string address;
            AssetBundleCreateRequest ab;
            if (!path.Include)
            {
                address = AssetsConfig.AssetBundlePersistentDataPath + "/" + path.Info.Path;
                ab = AssetBundle.LoadFromFileAsync(address);
            }
            else
            {
                ab = AssetBundle.LoadFromFileAsync(AssetsConfig.StreamingAssets + "/" + path.Info.Path);
            }

            await ab;
            var assetBundle = ab.assetBundle;
            var request = new AssetBundleRequest(assetBundle, path.Info);
            Pool.Add(path.Info.Path, request);
            Lookup.Add(request, path.Info.Path);
            if (WaitList.TryGetValue(path.Info.Path, out UniTaskCompletionSource ucs))
            {
                ucs.TrySetResult();
                WaitList.Remove(path.Info.Path);
            }

            if (tasks != null)
            {
                await UniTask.WhenAll(tasks);
            }

            return request;
        }

        public async UniTask<AssetBundleRequest> GetAsync(ABFileTrack.RedirectAsset abPath)
        {
            try
            {
                if (WaitList.TryGetValue(abPath.Info.Path, out UniTaskCompletionSource waitTask))
                {
                    await waitTask.Task;
                }

                var ab = internal_Get(abPath);
                if (ab != null)
                {
                    return ab;
                }
                else
                {
                    UniTaskCompletionSource ucs = new UniTaskCompletionSource();
                    WaitList.Add(abPath.Info.Path, ucs);
                    var task = internal_Load(abPath);
                    return await task;
                }
            }
            catch (Exception e)
            {
                Debug.LogError(e);
                return null;
            }
        }

        public AssetBundleRequest GetSync(ABFileTrack.RedirectAsset abPath)
        {
            var ab = internal_Get(abPath);
            return ab;
        }

        public void Release(ABFileTrack.RedirectAsset path)
        {
            var ab = internal_Get(path);
            if (ab != null)
            {
                ab.AssetBundle.Unload(true);
                Pool.Remove(path.Info.Path);
                Lookup.Remove(ab);
            }
        }

        public void Release(AssetBundleRequest ab)
        {
            if (ab != null)
            {
                if (Lookup.TryGetValue(ab, out string value))
                {
                    Lookup.Remove(ab);
                    Pool.Remove(value);
                    ab.Unload(true);
                }
            }
        }

        public void UnloadAllAssetBundle()
        {
            List<AssetBundleRequest> temp = new List<AssetBundleRequest>(Lookup.Keys);
            foreach (var node in temp)
            {
                if (!node.Persistence)
                {
                    Release(node);
                }
            }
        }

        public Dictionary<string, AssetBundleRequest> GetLoadedAssetBundle()
        {
            return new Dictionary<string, AssetBundleRequest>(Pool);
        }
    }
}