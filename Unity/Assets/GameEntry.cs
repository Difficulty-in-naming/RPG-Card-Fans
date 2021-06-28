using System;
using System.IO;
using Puerts;
using UnityEngine;

public class GameEntry : MonoBehaviour
{
    public bool isDebug = false;                    // 是否开启调试
    public int debugPort = 43990;                   // 调试端口号
    public JsEnv jsEnv;                             // 定义 jsEnv
    public Action JsUpdate;
    public Action JsOnDestroy;
    private PuertsLoader loader;
    public delegate void ModuleInit(GameEntry monoBehaviour);
    void Start(){
        loader = new PuertsLoader(Application.streamingAssetsPath);
        jsEnv = new JsEnv(loader,debugPort);        // 实例化 js 虚拟机
        RunScript();
    }

    private async void RunScript()
    {
        //jsEnv.Eval("x = require('./source-map-support/source-map-support');x.install();");

        if (isDebug)
        {
            // 启用调试
            await jsEnv.WaitDebuggerAsync();
        }

        var init = jsEnv.Eval<ModuleInit>("entry = require('MainEntry'); entry.init;");
        init(this);
        var files = Directory.GetFiles(Application.streamingAssetsPath, "Entry.js", SearchOption.AllDirectories);
        foreach (var node in files)
        {
            var jsPath =
                PathUtils.FormatFilePath(PathUtils.RemoveFileExtension(node.Replace(
                    Application.streamingAssetsPath + Path.DirectorySeparatorChar + "Scripts" +
                    Path.DirectorySeparatorChar, "./")));
            jsEnv.Eval($"require('{jsPath}');");
        }
    }

    void Update()
    {
        jsEnv.Tick();
        if (JsUpdate != null) JsUpdate();

    }

    /*public Texture2D cursorTexture;
    public CursorMode cursorMode = CursorMode.Auto;
    public Vector2 hotSpot = Vector2.zero;
    public Vector2 CursorSize = new Vector2(16, 16);
    void Start()
     
    {
        //Cursor.visible = false;
        //Cursor.SetCursor(cursorTexture, hotSpot, cursorMode);
        
    }

    void OnGUI()
    {
        GUI.DrawTexture(
            new Rect(Event.current.mousePosition.x - CursorSize.x,
                Event.current.mousePosition.y - CursorSize.y, CursorSize.x, CursorSize.y), cursorTexture);
    }*/
}
