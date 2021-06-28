namespace Panthea.Asset
{
    public class AssetFileLog
    {
        public uint Crc;
        public long Version;
        public string Path;
        public string[] Dependencies;
        public string[] Files;

        public AssetFileLog(uint crc, long version, string path, string[] files, string[] dependencies)
        {
            Crc = crc;
            Version = version;
            Path = path;
            Files = files;
            Dependencies = dependencies;
        }
    }
}