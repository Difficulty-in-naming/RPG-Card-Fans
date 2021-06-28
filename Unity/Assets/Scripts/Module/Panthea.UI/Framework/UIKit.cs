using System;
using System.IO;
using FairyGUI;
using UnityEngine;

namespace Panthea.UI
{
    public class UIKit
    {
        public static void LoadPackage(string path)
        {
            path = PathUtils.FormatFilePath(path);
            var data = ResourcesManager.LoadData(path);
            var dirName = Path.GetDirectoryName(path);
            var dataName = Path.GetFileNameWithoutExtension(path).Replace("_fui","");
            UIPackage.AddPackage(data, dataName, async delegate(string name, string extension, Type type, PackageItem item)
            {
                object asset = null;
                if (type == typeof(Texture))
                {
                    asset = await ResourcesManager.LoadTexture(dirName + "/" + name + extension);
                }
                else if (type == typeof(AudioClip))
                {
                    asset = await ResourcesManager.LoadAudioClip(dirName + "/" + name + extension);
                }
                else if (type == typeof(TextAsset))
                {
                    asset = ResourcesManager.LoadData(dirName + "/" + name + extension);
                }
                item.owner.SetItemAsset(item, asset, DestroyMethod.None);
            });
        }
    }
}
