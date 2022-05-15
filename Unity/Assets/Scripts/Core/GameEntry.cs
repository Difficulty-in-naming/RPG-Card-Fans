using System;
using System.Reflection;
using Cysharp.Threading.Tasks;
using DG.Tweening;
using FairyGUI;
using Newtonsoft.Json.Utilities;
using Panthea.Asset;
using Spine.Unity;
using UnityEngine;
using UnityEngine.LowLevel;
using UnityEngine.Rendering;

namespace Core
{
    public class GameEntry : MonoBehaviour
    {
        public static UnityObject Camera { get; private set; }

        private void Start()
        {
            var mainCamera = UnityEngine.Camera.main;
            if (mainCamera == null)
            {
                Log.Error("未在场景中找到主要摄影机Camera.main == null");
                return;
            }
            GraphicsSettings.useScriptableRenderPipelineBatching = true;
            QualitySettings.vSyncCount = 0;
            Camera = new UnityObject(mainCamera.gameObject);
            DOTween.SetTweensCapacity(500, 50);
            AotHelper.EnsureList<int>();
            AotHelper.EnsureDictionary<string,int>();
            AotHelper.EnsureDictionary<string,float>();
#if !UNITY_EDITOR
        Screen.SetResolution((int)(Screen.width * 0.8), (int)(Screen.height * 0.8), true);
#endif
            //Todo 先放在这里
            {
                if (Application.isEditor)
                {
                    Application.runInBackground = true;
                }
                Application.targetFrameRate = 60;
                GRoot.inst.SetContentScaleFactor(GameConfig.ScreenSize.x, GameConfig.ScreenSize.y, UIContentScaler.ScreenMatchMode.MatchWidthOrHeight);
                Screen.sleepTimeout = SleepTimeout.NeverSleep; // 常亮
                DontDestroyOnLoad(StageCamera.main.gameObject);
                DontDestroyOnLoad(gameObject);
                Camera.DontDestoryOnLoad();
                var aspect = Screen.width / (float)Screen.height;
                Camera.GetComponent<Camera>().orthographicSize = aspect < 1.6 ? 4f : 3.3f;
            }

            DoProcess().Forget();
        }

        private async UniTaskVoid DoProcess()
        {
            RegisterUniTaskModule();
            RegisterUpdateModule();
            RegisterAssetBundleModule();
            await RegisterUIModule();
            RegisterAllMod();
        }

        /// <summary>
        /// 初始化UniTask
        /// </summary>
        private void RegisterUniTaskModule()
        {
            var loop = PlayerLoop.GetCurrentPlayerLoop();
            PlayerLoopHelper.Initialize(ref loop);
        }
        
        /// <summary>
        /// 注册Update模块
        /// </summary>
        private void RegisterUpdateModule()
        {
            var go = new GameObject("Unity Behaviour");
            var component = go.AddComponent<UnityBehaviour>();
            UnityLifeCycleKit.Inst = component;
        }
        
        /// <summary>
        /// 注册UI模块
        /// </summary>
        private async UniTask RegisterUIModule()
        {
            var manager = new UIManager();
            await manager.Init();
            UIKit.Inst = manager;
        }

        
        /// <summary>
        /// 注册资源加载模块
        /// </summary>
        private void RegisterAssetBundleModule()
        {
            if (GameConfig.MobileRuntime)
            {
                //注册文件跟踪,正式版本中可能包体内和包体外都会存在AB.我们需要跟踪确认使用哪个路径下的AB
                var fileTrack = new ABFileTrack();
                //注册AssetBundle加载缓存池.加载过的物体会在池中缓存起来.不需要缓存的话取消这个注册就好
                var pool = new AssetBundlePool(fileTrack);
                //注册AssetBundle的引用计数器.当引用计数清零时自动卸载AB
                var counter = new AssetBundleCounter(pool);
                //注册运行时加载AB的支持模块
                var runtime = new AssetBundleRuntime(fileTrack, pool, counter);
                //注册需要使用的下载工具
                var downloader = new UnityWebDownloader();
                //注册确切使用的下载服务器
                IDownloadPlatform downloadPlatform = null;/*new CosDownload(
                "https://restaurant-cn-1253480967.cos.ap-guangzhou.myqcloud.com/resources/" + AssetsConfig.Platform + "/",
                AssetsConfig.AssetBundlePersistentDataPath + "/",
                AssetsConfig.PersistentDataPath + "/resources/");*/
                //使AssetsManager支持下载功能(只是注册S3Download只是注册了服务,但是并没有开启下载功能)
                var abDownloader = new AssetBundleDownloader(fileTrack, downloadPlatform);

                fileTrack.ConfigureDownloadPlatform(downloadPlatform);
                //创建AssetManager,AssetManager可以理解为底层接口的一层包装
                var assetsManager = new AssetsManager(fileTrack, runtime, abDownloader);
                AssetsKit.Inst = assetsManager;
            }
            else
            {
#if UNITY_EDITOR
                //如果编辑器下面可以使用EDITOR_AssetManager.这个使用AssetDatabase加载资源.在编辑器下可以不需要打包,从而快速测试.
                var assetsManager = new EDITOR_AssetsManager();
                AssetsKit.Inst = assetsManager;
#endif
            }
        }
        private void RegisterAllMod()
        {
            foreach (var node in AppDomain.CurrentDomain.GetAssemblies())
            {
                var types = node.GetTypes();
                foreach (var t in types)
                {
                    var entry = t.GetCustomAttribute<ModEntry>();
                    if (entry != null)
                    {
                        var method = t.GetMethod("Initialize", BindingFlags.Public | BindingFlags.Static | BindingFlags.NonPublic);
                        if (method != null)
                            method.Invoke(null,null);
                    }
                }
            }
        }
    }
}