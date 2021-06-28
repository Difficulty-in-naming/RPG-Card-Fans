using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEditor;
using UnityEngine;

public class BuildPreference : ScriptableObject
{
    public string OutputPath = Application.streamingAssetsPath;
    [SerializeField]
    public List<BuildObject> Groups = new List<BuildObject>();

    private static BuildPreference mInstance;
    public static BuildPreference Instance
    {
        get
        {
            if (mInstance == null)
                mInstance = AssetDatabase.LoadAssetAtPath<BuildPreference>("Assets/XAssetsData/Preference.asset");
            if (mInstance == null)
            {
                mInstance = CreateInstance<BuildPreference>();
                Directory.CreateDirectory(Application.dataPath + "/XAssetsData/");
                AssetDatabase.CreateAsset(mInstance, "Assets/XAssetsData/Preference.asset");
            }
            return mInstance;
        }
    }

    public BuildObject AddGroup(BuildObject obj)
    {
        Groups.Add(obj);
        var path = obj.name.Replace("/", "-").Replace("\\","-");
        Directory.CreateDirectory(Application.dataPath + "/XAssetsData/Files");
        AssetDatabase.CreateAsset(obj, "Assets/XAssetsData/Files/" + path + ".asset");
        return obj;
    }

    public void RemoveGroup(BuildObject obj)
    {
        if (obj == null)
            return;
        Groups.Remove(obj);
        try
        {
            AssetDatabase.DeleteAsset(AssetDatabase.GetAssetPath(obj));
        }
        catch(Exception e)
        {
            Debug.LogError("删除[Group]" + obj.name + "失败" + "\n" + e);
        }
    }

    public BuildObject FindGroup(string path)
    {
        path = path.Replace("/", "-").Replace("\\","-");
        var findout =  Groups.Find(t1 => t1.name == path);
        var assetPath = AssetDatabase.GetAssetPath(findout);
        if (string.IsNullOrEmpty(assetPath))
            return null;
        return findout;
    }
}
