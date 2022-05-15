﻿using System.IO;
using Core.Utils.Crc32;

namespace Panthea.Asset
{
    public class AssetsUtils
    {
        /// <summary>
        /// 检查文件完整性
        /// </summary>
        /// <returns></returns>
        public static bool CheckIntegrity(string file, uint compareCrc)
        {
            Stream stream;
            if (file.StartsWith(AssetsConfig.StreamingAssets))
            {
#if UNITY_ANDROID && !UNITY_EDITOR
            file = file.Replace(AssetsConfig.StreamingAssets, "");
            file = "assets" + file;
#endif
                stream = BetterStreamingAssets.GetStream(file);
            }
            else
            {
                stream = new FileStream(file, FileMode.Open, FileAccess.Read);
            }

            return CheckIntegrity(stream, compareCrc);
        }

        /// <summary>
        /// 检查文件完整性
        /// </summary>
        /// <returns></returns>
        public static bool CheckIntegrity(Stream stream, uint compareCrc)
        {
            var localCrc = Crc32CAlgorithm.Compute(stream);
            return localCrc == compareCrc;
        }
    }
}