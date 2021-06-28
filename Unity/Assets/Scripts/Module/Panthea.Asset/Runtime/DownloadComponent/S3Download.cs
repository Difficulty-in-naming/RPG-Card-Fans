/*using Cysharp.Threading.Tasks;
using Panthea.Asset;
using UnityEngine;

namespace Panthea.Asset
{
    public class S3Download: IDownloadPlatform
    {
        private IDownloadHandler mDownloadHandler { get; }
        private string Host { get; }
        private readonly string mRelativePath;
        private readonly string mSavePath;
        private static readonly string Version = Application.version;
        private static readonly string Platform = AssetsConfig.Platform;

        public S3Download(string host, string relativePath, string savePath, IDownloadHandler downloadHandler)
        {
            Host = host;
            mRelativePath = relativePath;
            mSavePath = savePath;
            mDownloadHandler = downloadHandler;
        }

        private string FormatUrl(string path)
        {
            string url = Host + mRelativePath + Version + "/" + Platform + "/" + path;
            return url;
        }

        public async UniTask<DownloadResult> Download(DownloadThread thread)
        {
            return await mDownloadHandler.Download(thread);
        }

        public async UniTask<DownloadThread> FetchHeader(string path)
        {
            long length = 0;
            uint crc32 = 0;
            long version = 0;
            string url = FormatUrl(path);
            var headers = await mDownloadHandler.GetHeaders(url);
            if (headers != null)
            {
                long.TryParse(headers["Content-Length"], out length);
                uint.TryParse(headers["x-amz-meta-crc32"], out crc32);
                long.TryParse(headers["x-amz-meta-version"], out version);
            }
            else
            {
                throw new RemoteFileNotFound(url + "上找不到这个文件");
            }

            return new DownloadThread(url, mSavePath + path, length, version, crc32);
        }

        public async UniTask<string> GetText(string path)
        {
            string url = FormatUrl(path);
            return await mDownloadHandler.GetText(url);
        }

        public async UniTask<byte[]> GetBytes(string path)
        {
            string url = FormatUrl(path);
            return await mDownloadHandler.GetBytes(url);
        }
    }
}*/