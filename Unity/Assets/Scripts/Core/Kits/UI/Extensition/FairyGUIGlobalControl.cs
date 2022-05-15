using System.Collections;
using System.Collections.Generic;
using FairyGUI;
using UnityEngine;

public class FairyGUIPatch
{
    [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.BeforeSceneLoad)]
    private static void Init()
    {
        //设定加载指定的GLoader
        UIObjectFactory.SetLoaderExtension(typeof (XUILoader));
    }
}