using System;
using System.Collections;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;
using UnityEngine;

public class PathUtils
{
    private static Regex FormatPathRegex = new Regex(@"\/|\/\/|\\|\\\\", RegexOptions.Compiled);

    public static string FormatFilePath(string path)
    {
        path = FormatPathRegex.Replace(path, "/");
        return path;
    }

    /// <summary>
    /// 格式化文件路径
    /// </summary>
    /// <param name="path"></param>
    /// <returns></returns>
    public static string FullPathToUnityPath(string path)
    {
        path = FormatFilePath(path);
        return Regex.Replace(path, Application.dataPath, "Assets", RegexOptions.IgnoreCase);
    }

    /// <summary>
    /// 格式化文件路径
    /// </summary>
    /// <param name="path"></param>
    /// <returns></returns>
    public static string FullPathToAssetbundlePath(string path, string abPath)
    {
        path = FormatPathRegex.Replace(path, "/");
        return Regex.Replace(path, Application.dataPath + "/" + abPath, "", RegexOptions.IgnoreCase);
    }

    public static string RemoveFileExtension(string path)
    {
        string extension = System.IO.Path.GetExtension(path);
        if (extension != null)
        {
            string result = path.Substring(0, path.Length - extension.Length);
            return result;
        }

        return path;
    }

    public static string CalculateMD5(string path)
    {
        using (var md5 = MD5.Create())
        {
            using (var stream = System.IO.File.OpenRead(path))
            {
                var hash = md5.ComputeHash(stream);
                return BitConverter.ToString(hash).Replace("-", "").ToLowerInvariant();
            }
        }
    }

    public static string CreateMD5(string input)
    {
        // Use input string to calculate MD5 hash
        using (MD5 md5 = MD5.Create())
        {
            byte[] inputBytes = Encoding.ASCII.GetBytes(input);
            byte[] hashBytes = md5.ComputeHash(inputBytes);

            // Convert the byte array to hexadecimal string
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < hashBytes.Length; i++)
            {
                sb.Append(hashBytes[i].ToString("X2"));
            }

            return sb.ToString();
        }
    }

    /*/// <summary>
    /// 格式化文件路径
    /// </summary>
    /// <param name="path"></param>
    /// <returns></returns>
    public static string FullPathToPackPath(string path)
    {
        path = FormatPathRegex.Replace(path, "/");
        int index = path.IndexOf("/" + AssetBundleConfig.PackPath.TrimEnd('/'));
        if (index == -1)
            return path;
        return path.Substring(index + AssetBundleConfig.PackPath.Length).Trim('/');
    }*/
}