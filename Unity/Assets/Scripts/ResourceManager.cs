using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Threading.Tasks;
using Cysharp.Threading.Tasks;
using Spine;
using Spine.Unity;
using UnityEngine;
using UnityEngine.Networking;

public class ResourcesManager
{
    private static Dictionary<string, Object> Cache = new Dictionary<string, Object>();
    private static Color32[] CacheColorTemp = new Color32[4096 * 4096];

    private static Object TryGetRes(string path)
    {
        if (Cache.TryGetValue(path, out var value))
        {
            return value;
        }
        return null;
    }
    
    public static Texture2D LoadTexture(string path)
    {
        var get = TryGetRes(path);
        if (get != null)
            return (Texture2D)get;
        var tex = new Texture2D(0,0, TextureFormat.ARGB32, false);
        var bytes = File.ReadAllBytes(path);
        tex.LoadImage(bytes,true);
        Cache[path] = tex;
        return tex;
    }
    
    public static async Task<Texture> LoadTextureAsync(string path)
    {
        var get = TryGetRes(path);
        if (get != null)
            return (Texture)get;
        var request = UnityWebRequestTexture.GetTexture(path);
        await request.SendWebRequest();
        var handler = (DownloadHandlerTexture) request.downloadHandler;
        Cache[path] = handler.texture;
        return handler.texture;
    }

    public static async Task<AudioClip> LoadAudioClip(string path)
    {
        var get = TryGetRes(path);
        if (get != null)
            return (AudioClip)get;
        var request = UnityWebRequest.Get(path);
        await request.SendWebRequest();
        var handler = (DownloadHandlerAudioClip) request.downloadHandler;
        Cache[path] = handler.audioClip;
        return handler.audioClip;
    }

    public static SkeletonDataAsset LoadSpine(string atlasPath,string skeletonPath,params string[] texturePath)
    {
        var atlasText = new TextAsset(LoadText(atlasPath));
        var skeletonJson = new TextAsset(LoadText(skeletonPath));
        var textures = new Texture2D[texturePath.Length];
        for (var index = 0; index < texturePath.Length; index++)
        {
            var node = texturePath[index];
            textures[index] = LoadTexture(node);
            textures[index].name = Path.GetFileNameWithoutExtension(node);
        }
        var runtimeAtlasAsset = SpineAtlasAsset.CreateRuntimeInstance(atlasText, textures, Shader.Find("Spine/Skeleton"), true);
        SkeletonDataAsset runtimeSkeletonDataAsset = SkeletonDataAsset.CreateRuntimeInstance(skeletonJson, runtimeAtlasAsset, true);
        return runtimeSkeletonDataAsset;
    }
    
    public static string LoadText(string path)
    {
        var text = File.ReadAllText(path);
        return text;
    }

    public static byte[] LoadData(string path)
    {
        var bytes = File.ReadAllBytes(path);
        return bytes;
    }
}
