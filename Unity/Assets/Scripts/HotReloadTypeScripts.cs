using System;
using System.Collections.Generic;
using System.IO;
using Puerts;
using UnityEngine;

public class HotReloadTypeScripts
{
    private string DirPath;
    private JsEnv Env;
    private HashSet<string> NeedReload = new HashSet<string>();
    private float Tick;
    public HotReloadTypeScripts(string dirPath,JsEnv env)
    {
        DirPath = dirPath;
        Env = env;
        FileSystemWatcher watcher = new FileSystemWatcher();
        watcher.Path = dirPath;
        watcher.IncludeSubdirectories = true;
        watcher.NotifyFilter = NotifyFilters.LastWrite;
        watcher.Filter = "*.js";

        watcher.Changed += WatcherOnChanged;
        watcher.EnableRaisingEvents = true;  
    }

    private void WatcherOnChanged(object sender, FileSystemEventArgs e)
    {
        var filePath = PathUtils.FormatFilePath(e.FullPath).Replace(DirPath + "/", "");
        if (NeedReload.Add(filePath))
        {
            Log.Print("热重载:" + filePath);
        }
        //JsEnv.ClearAllModuleCaches();
        //Env.Eval($"require('{filePath}');");
    }

    public void Update()
    {
        Tick += Time.deltaTime;
        if (Tick >= 2)
        {
            if (NeedReload.Count > 0)
            {
                JsEnv.ClearAllModuleCaches();
                foreach(var node in NeedReload)
                    Env.Eval($"require('{node}');");
                NeedReload.Clear();
            }
            Tick = 0;
        }
    }
}
