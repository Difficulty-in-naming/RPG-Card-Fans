using System;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;
using Object = UnityEngine.Object;

//[CreateAssetMenu(fileName = "Data", menuName = "ScriptableObjects/SpawnManagerScriptableObject", order = 1)]
public class BuildObject : ScriptableObject
{
    public enum BundlePackingMode
    {
        PackTogether,
        PackSeparately,
    }
    public enum BundleCompressionMode
    {
        Uncompressed,
        LZ4,
        LZMA
    }

    [Serializable]
    public class BuildFileKeyValue
    {
        public string Key;
        public string GUID;
        public Object Object;
        public BuildFileKeyValue(string key, string guid)
        {
            Key = key;
            GUID = guid;
        }
    }

    public BundleCompressionMode CompressionMode = BundleCompressionMode.LZ4;
    public BundlePackingMode PackingMode = BundlePackingMode.PackTogether;
    public List<BuildFileKeyValue> Files = new List<BuildFileKeyValue>();
}

[CustomEditor(typeof(BuildObject))]
[CanEditMultipleObjects]
public class BuildObject_EDITOR: Editor
{
    public void OnEnable()
    {
        var t = (BuildObject) target;
        foreach (var node in t.Files)
        {
            node.Object = AssetDatabase.LoadAssetAtPath(AssetDatabase.GUIDToAssetPath(node.GUID), typeof (Object)); 
        }
        //t.Object = AssetDatabase.LoadAssetAtPath(AssetDatabase.GUIDToAssetPath(t.GUID), typeof (Object));
    }

    public void OnDisable()
    {
        EditorUtility.SetDirty(this);
        AssetDatabase.SaveAssets();
    }
}