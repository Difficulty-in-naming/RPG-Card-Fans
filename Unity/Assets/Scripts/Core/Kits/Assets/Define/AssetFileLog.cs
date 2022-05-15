using Newtonsoft.Json;
using UnityEngine.Scripting;

namespace Panthea.Asset
{
    public class AssetFileLog
    {
        public uint Crc;
        public long Version;
        public string Path;
        public string[] Dependencies;
        public string[] Files;

        ///在Android设备上不知为何无法反序列化.
        [Preserve]
        [JsonConstructor]
        public AssetFileLog()
        {
        }
        
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