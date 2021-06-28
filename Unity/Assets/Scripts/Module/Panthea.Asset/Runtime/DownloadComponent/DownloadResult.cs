namespace Panthea.Asset
{
    public class DownloadResult
    {
        public string WritePath;
        public uint RemoteCrc32;

        public DownloadResult(string writePath, uint remoteCrc32)
        {
            WritePath = writePath;
            RemoteCrc32 = remoteCrc32;
        }
    }
}