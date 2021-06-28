using System;
using System.IO;
using System.Security.Cryptography;
using System.Text;

namespace Module.Panthea.Utils
{
    public static class FileUtils
    {
        private static byte[] AesIV256 { get; } = { 17, 243, 74, 187, 226, 250, 127, 90, 53, 42, 96, 13, 152, 155, 47, 193 };

        private static byte[] AesKey256 { get; } =
        {
            161, 36, 168, 189, 234, 133, 73, 189, 21, 60, 168, 29, 186, 216, 240, 6, 73, 255, 34, 203, 86, 90, 103, 237, 221, 147, 136, 228, 245,
            26, 245, 65
        };

        private static AesCryptoServiceProvider Aes { get; } =
            new AesCryptoServiceProvider { BlockSize = 128, KeySize = 256, Key = AesKey256, IV = AesIV256 };

        private static ICryptoTransform Encryptor { get; } = Aes.CreateEncryptor();
        private static ICryptoTransform Decryptor { get; } = Aes.CreateDecryptor();

        public static void EncodeAllTextAndWrite(string path, string text)
        {
            var dir = Path.GetDirectoryName(path);
            if (!Directory.Exists(dir))
            {
                Directory.CreateDirectory(dir);
            }
#if !UNITY_EDITOR
            byte[] src = Encoding.Unicode.GetBytes(text);
            using (ICryptoTransform encrypt = Aes.CreateEncryptor())
            {
                byte[] dest = encrypt.TransformFinalBlock(src, 0, src.Length);
                var str = Convert.ToBase64String(dest);
                File.WriteAllText(path,str);
            }
            return;
#endif
            File.WriteAllText(path, text);
        }

        public static string ReadAndDecodeAllText(string path)
        {
            try
            {
                var text = File.ReadAllText(path);
#if !UNITY_EDITOR
                byte[] src = System.Convert.FromBase64String(text);
                using (ICryptoTransform decrypt = Aes.CreateDecryptor())
                {
                    byte[] dest = decrypt.TransformFinalBlock(src, 0, src.Length);
                    return Encoding.Unicode.GetString(dest);
                }
#endif
                return text;
            }
            catch (Exception e)
            {
                Log.Error($"没有找到该文件 {path}\n{e}");
            }

            return "";
        }

        public static void WriteAllText(string path, string text)
        {
            File.WriteAllText(path, text);
        }
    }
}