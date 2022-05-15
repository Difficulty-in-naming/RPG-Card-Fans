/*
using System.Text;
using COSXML.Transfer;
using Cysharp.Threading.Tasks;
using Panthea.Asset;
using Tencent.Cos;
using UnityEngine;

namespace Panthea.Asset
{
    public class CosDownload: IDownloadPlatform
    {
        private string Host { get; }
        private readonly string mRelativePath;
        private readonly string mSavePath;

        public CosDownload(string host, string relativePath, string savePath)
        {
            Host = host;
            mRelativePath = relativePath;
            mSavePath = savePath;
        }

        private string FormatUrl(string path)
        {
            string url = Host + mRelativePath + path;
            return url;
        }

        public async UniTask<DownloadResult> Download(string path)
        {
            var savePath = mSavePath + path;
            string url = FormatUrl(path);
            COSXMLDownloadTask.DownloadTaskResult result = await FileStorageManager.Inst.Download(CosConfig.Bucket, url, savePath);
            uint crc32 = 0;
            if (result.responseHeaders.TryGetValue("x-cos-meta-crc32",out var crcStr))
            {
                uint.TryParse(crcStr[0],out crc32);
            }
            return new DownloadResult(savePath, crc32);
        }

        public async UniTask<string> GetText(string path)
        {
            string url = FormatUrl(path);
            var bytes = await GetBytes(path);
            return Encoding.UTF8.GetString(bytes);
            //return await mDownloadHandler.GetText(url);
        }

        public async UniTask<byte[]> GetBytes(string path)
        {
            string url = FormatUrl(path);
            return (await FileStorageManager.Inst.GetBytes(CosConfig.Bucket, url)).content;
            //return await mDownloadHandler.GetBytes(url);
        }
    }
}
*/
