using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Cysharp.Threading.Tasks;
using UnityEngine;
using UnityEngine.Networking;

public class ResourcesManager
{
    private static Dictionary<string, Object> Cache = new Dictionary<string, Object>();

    private static Object TryGetRes(string path)
    {
        if (Cache.TryGetValue(path, out var value))
        {
            return value;
        }
        return null;
    }
    
    public static async Task<Texture> LoadTexture(string path)
    {
        var get = TryGetRes(path);
        if (get != null)
            return (Texture)get;
        var request = UnityWebRequestTexture.GetTexture(path);
        await request.SendWebRequest();
        var handler = (DownloadHandlerTexture) request.downloadHandler;
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
        return handler.audioClip;
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
