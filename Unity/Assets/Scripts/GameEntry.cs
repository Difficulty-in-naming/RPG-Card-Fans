using System;
using System.IO;
using Cysharp.Threading.Tasks;
using Puerts;
using UnityEngine;
using UnityEngine.LowLevel;

public class GameEntry : MonoBehaviour
{
    public bool IsDeveloper = false;
    public bool DebugScript = false;                    // 是否开启调试
    public int debugPort = 43990;                   // 调试端口号
    public JsEnv jsEnv;                             // 定义 jsEnv
    public Action JsUpdate;
    public Action JsOnDestroy;
    private PuertsLoader loader;
    private HotReloadTypeScripts hotReloadComponent;
    public static GameEntry Inst { get; private set; }
    void Start()
    {
        Inst = this;
        var loop = PlayerLoop.GetCurrentPlayerLoop();
        PlayerLoopHelper.Initialize(ref loop);
        UnityLifeCycleKit.Inst = gameObject.AddComponent<UnityBehaviour>();
        var dataPath = Application.dataPath;
        var path = dataPath.Remove(dataPath.Length - "Assets".Length, "Assets".Length) + "TsProj/output/";
        loader = new PuertsLoader(path);
        jsEnv = new JsEnv(loader,debugPort);        // 实例化 js 虚拟机
        if (IsDeveloper)
        {
            hotReloadComponent = new HotReloadTypeScripts(Application.streamingAssetsPath,jsEnv);
        }
        RunScript();
    }

    public void RegisterUpdate(Action action)
    {
        JsUpdate = action;
    }

    public void RegisterDestory(Action action)
    {
        JsOnDestroy = action;
    }
    
    private async void RunScript()
    {
        if (DebugScript)
        {
            // 启用调试
            await jsEnv.WaitDebuggerAsync();
        }
        jsEnv.Eval("openSourceMap = require('OpenSourceMap.js.txt')");
        jsEnv.Eval("entry = require('MainEntry'); ");
        var files = Directory.GetFiles(loader.debugRoot, "Entry.js", SearchOption.AllDirectories);
        foreach (var node in files)
        {
            var jsPath =
                PathUtils.FormatFilePath(PathUtils.RemoveFileExtension(node.Replace(Application.streamingAssetsPath + Path.DirectorySeparatorChar, "./")));
            jsEnv.Eval($"require('{jsPath}');");
        }
    }

    void Update()
    {
        jsEnv.Tick();
        if (JsUpdate != null) JsUpdate();
    }
}
