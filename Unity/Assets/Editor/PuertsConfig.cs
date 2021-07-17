using Puerts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Cysharp.Threading.Tasks;
using DG.Tweening;
using DreamLib.Unity.UI.FairyGUIExtension;
using Manager;
using Panthea.UI;
using Spine;
using Spine.Unity;
using TMPro;
using UnityEngine;
using UnityEngine.Networking;

//1、配置类必须打[Configure]标签
//2、必须放Editor目录
[Configure]
public class PuertsConfig
{
    [Binding]
    static IEnumerable<Type> Bindings
    {
        get
        {
            var list =  new List<Type>()
            {
                typeof(byte[]),
                typeof(string[]),
                typeof(Vector3),
                typeof(Vector2),
                typeof(Time),
                typeof(Transform),
                typeof(Component),
                typeof(GameObject),
                typeof(UnityEngine.Object),
                typeof(Resources),
                typeof(Delegate),
                typeof(System.Object),
                typeof(Type),
                typeof(ParticleSystem),
                typeof(Behaviour),
                typeof(MonoBehaviour),
                typeof(Application),
                typeof(TextAsset),
                typeof(Texture),
                typeof(UnityWebRequest),
                typeof(DownloadHandlerAudioClip),
                typeof(DownloadHandlerTexture),
                typeof(UnityWebRequestTexture),
                typeof(DownloadHandler),
                typeof(Mathf),
                typeof(UnityEngine.Renderer),
                typeof(UnityEngine.MaterialPropertyBlock),
                typeof(UnityEngine.Color),
                typeof(UnityEngine.Color32),
                typeof(Screen),
                typeof(Input),
                typeof(List<>),
                typeof(Dictionary<,>),

                //System
                typeof(System.IO.DirectoryInfo),
                typeof(System.IO.FileInfo),
                typeof(System.IO.Directory),
                typeof(System.IO.File),
                typeof(System.Text.Encoding),
                typeof(Array),
                
                //ThirdParty
                typeof(UniTask),

                typeof(UIKit),
                typeof(GameEntry),
                typeof(MediaManager),
                typeof(ResourcesManager),
                typeof(FairyGUIExtension),
                typeof(SuperText)
            };

            List<string> namespaces = new List<string>()
            {
                "FairyGUI",
                "Spine",
                "Spine.Unity",
                "TMPro"
            };

            Assembly[] ass = AppDomain.CurrentDomain.GetAssemblies();
            list.AddRange((from assembly in ass
                             where !(assembly.ManifestModule is System.Reflection.Emit.ModuleBuilder)
                             from type in assembly.GetExportedTypes()
                             where type.Namespace != null && namespaces.Contains(type.Namespace) && !isExcluded(type)
                             select type));
            if (list.Remove(typeof(TransformMode)))
            {
                Log.Print("删除成功");
            }
            
            return list;
        }
    }

    static bool isExcluded(Type type)
    {
        if (type == typeof(TransformMode))
            return true;
        if (type == typeof(SkeletonExtensions2))
            return true;
        return false;
    }

    [BlittableCopy]
    static IEnumerable<Type> Blittables
    {
        get
        {
            return new List<Type>()
            {
                typeof(Vector3),
                typeof(Vector2),
                typeof(float),
                typeof(double),
                typeof(int),
                typeof(long),
                typeof(Color),
                typeof(Color32),
                typeof(Vector4)
            };
        }
    }

    [Filter]
    static bool Filter(MemberInfo memberInfo)
    {
        return memberInfo.Name == "runInEditMode" ||
               memberInfo.Name == "get_runInEditMode" ||
               memberInfo.Name == "set_runInEditMode" || 
               memberInfo.Name.Contains("InheritsRotation") ||
               memberInfo.Name.Contains("InheritsScale");
    }
}