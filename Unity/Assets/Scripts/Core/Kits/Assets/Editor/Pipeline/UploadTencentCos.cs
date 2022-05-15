/*using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using COSXML;
using COSXML.Auth;
using COSXML.Model.Object;
using COSXML.Transfer;
using Force.Crc32;
using NPOI.SS.Formula.Functions;
using Panthea.Asset;
using Tencent.Cos;
using UnityEditor;
using UnityEngine;

namespace Panthea.Editor.Asset
{
    public class UploadTencentCos : AResPipeline
    {
        private TransferManager InitTransfer()
        {
            string region = "ap-guangzhou";
            CosXmlConfig config = new CosXmlConfig.Builder()
                    .IsHttps(true)
                    .SetRegion(region)
                    .SetDebugLog(true)
                    .Build();

            string secretId = "AKIDWo1BUZ6OxGK0ZxR9yXCbt68ubkdOmBU5";
            string secretKey = "WGuTtALUKvUYM0Ok0WngKkeI2ZtwyFG9";
            long durationSecond = 600; //每次请求签名有效时长，单位为秒
            QCloudCredentialProvider cosCredentialProvider = new DefaultQCloudCredentialProvider(secretId, secretKey, durationSecond);
            CosXml cosXml = new CosXmlServer(config, cosCredentialProvider);
            TransferConfig transferConfig = new TransferConfig();
            return new TransferManager(cosXml, transferConfig);
        }
        
        public override async Task Do()
        {
            try
            {
                var transfer = InitTransfer();
                var dir = new DirectoryInfo(BuildPreference.Instance.OutputPath);
                List<Task> tasks = new List<Task>();
                EditorUtility.DisplayProgressBar("正在上传文件到Cos服务器", "上传中...", 0);
                foreach (var node in dir.GetFiles("*.*",SearchOption.AllDirectories))
                {
                    if (node.Extension == AssetsConfig.Suffix || node.Extension == ".json")
                    {
                        string key = "resources/" + EditorUserBuildSettings.activeBuildTarget.ToString().ToLower() + "/" + PlayerSettings.bundleVersion + "/" + 
                                PathUtils.FormatFilePath(node.FullName).Replace(BuildPreference.Instance.OutputPath, "");
                        PutObjectRequest request = new PutObjectRequest(CosConfig.Bucket, key, node.FullName);
                        request.IsHttps = true;
                        request.SetRequestHeader("x-cos-meta-crc32", Crc32CAlgorithm.Compute(node.FullName).ToString());
                        request.IsNeedMD5 = true;
                        var config = new COSXMLUploadTask(request);
                        config.SetSrcPath(node.FullName);
                        tasks.Add(transfer.UploadAsync(config));
                    }
                }

                await Task.WhenAll(tasks);
            }
            catch (Exception e)
            {
                Debug.LogError(e);
            }
            finally
            {
                EditorUtility.ClearProgressBar();
            }
        }
    }
}*/