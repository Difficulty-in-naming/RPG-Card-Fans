using Cysharp.Threading.Tasks;

namespace Panthea.Asset
{
    public interface IDownloadPlatform
    {
        UniTask<DownloadResult> Download(string path);
        UniTask<string> GetText(string path);
        UniTask<byte[]> GetBytes(string path);
    }
}