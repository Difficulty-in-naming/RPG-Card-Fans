using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Cysharp.Threading.Tasks;
using Panthea.Asset;
using Spine.Unity;
using UnityEngine;
using UnityEngine.Networking;

namespace Core.Kits.Res
{
    public class ResKit
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

        public static GameObject LoadPrefabFromInternal(string path)
        {
            var x = Object.Instantiate(Resources.Load<GameObject>(path));
            return x;
        }

        public static Texture2D LoadTexture(string path)
        {
            var get = TryGetRes(path);
            if (get != null)
                return (Texture2D)get;
            var tex = new Texture2D(0, 0);
            tex.alphaIsTransparency = true;
            var bytes = File.ReadAllBytes(path);
            tex.LoadImage(bytes);
            tex.filterMode = FilterMode.Trilinear;
            tex.Apply(false, false);
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
            var handler = (DownloadHandlerTexture)request.downloadHandler;
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
            var handler = (DownloadHandlerAudioClip)request.downloadHandler;
            Cache[path] = handler.audioClip;
            return handler.audioClip;
        }

        public static SkeletonDataAsset LoadSpine(string atlasPath, string skeletonPath, params string[] texturePath)
        {
            var atlasText = AssetsKit.Inst.LoadSync<TextAsset>(atlasPath);
            var skeletonJson = AssetsKit.Inst.LoadSync<TextAsset>(skeletonPath);
            var textures = new Texture2D[texturePath.Length];
            for (var index = 0; index < texturePath.Length; index++)
            {
                var node = texturePath[index];
                textures[index] = AssetsKit.Inst.LoadSync<Texture2D>(node);
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
}