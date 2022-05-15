using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Cysharp.Threading.Tasks;
using Panthea.Asset;
using Newtonsoft.Json;
using Newtonsoft.Json.Utilities;
using UnityEngine;

namespace Config.ConfigCore
{
    public interface IConfig
    {
    }

    /// <summary>
    /// 特殊函数 PostPipeline,PrePipeline
    /// private static void PostPipeline:在配置表被加载之后做一些特殊的处理
    /// (未实现)private static void PrePipeline:在配置表被加载之前做一些特殊的处理
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public abstract class ConfigAssetManager<T>: IConfig where T : IConfig
    {
        protected static Dictionary<int, T> IntKeyValue;
        protected static Dictionary<string, T> StringKeyValue;
        private static Type Type;

        /// <summary>
        /// 用于随机取值使用的
        /// </summary>
        protected static List<T> Values;

        public static async UniTask Load(string path)
        {
            Type = typeof (T);
            string json = null;
            try
            {
                json = (await AssetsKit.Inst.Load<TextAsset>(path)).text;
                if (string.IsNullOrEmpty(json))
                {
                    return;
                }
            }
            catch(Exception e)
            {
                throw new Exception("找不到文件:" + path + "\n" + e);
            }

            try
            {
                bool isInt = Type.GetProperty("Id")?.PropertyType == typeof(int);
                var method = Type.GetMethod("PostPipeline", BindingFlags.NonPublic | BindingFlags.Static);
                if (isInt)
                {
                    AotHelper.EnsureDictionary<int,T>();
                    IntKeyValue = JsonConvert.DeserializeObject<Dictionary<int, T>>(json);
                    if (Type.GetProperty("Key") != null)
                    {
                        StringKeyValue = new Dictionary<string, T>();
                        if (method != null)
                        {
                            if (method.ReturnType == typeof(Task))
                            {
                                await (Task) method.Invoke(null, new object[] {IntKeyValue, StringKeyValue});
                            }
                            else
                            {
                                method.Invoke(null, new object[] {IntKeyValue, StringKeyValue});
                            }
                        }
                    }
                    else
                    {
                        if (method != null)
                        {
                            if (method.ReturnType == typeof(Task))
                            {
                                await (Task) method.Invoke(null, new object[] {IntKeyValue});
                            }
                            else
                            {
                                method.Invoke(null, new object[] {IntKeyValue});
                            }
                        }
                    }
                }
                else
                {
                    AotHelper.EnsureDictionary<string,T>();
                    StringKeyValue = new Dictionary<string, T>(StringComparer.OrdinalIgnoreCase);
                    JsonConvert.PopulateObject(json, StringKeyValue);
                    if (method != null)
                    {
                        if (method.ReturnType == typeof(Task))
                        {
                            await (Task) method.Invoke(null, new object[] {StringKeyValue});
                        }
                        else
                        {
                            method.Invoke(null, new object[] {StringKeyValue});
                        }
                    }
                }
            }
            catch(Exception e)
            {
                throw new Exception("加载Json文件出错:" + path + "\n" + e);
            }
            
        }

        public static void Release()
        {
            if (Values != null)
            {
                Values.Clear();
            }

            IntKeyValue.Clear();
            StringKeyValue.Clear();
        }

        public static T Read(int id, bool throwException = true)
        {
            if (IntKeyValue.TryGetValue(id, out var value))
            {
                return value;
            }

            //if(throwException)
            //    Debugger.LogWarning("Id:" + id + "不存在");
            return default;
        }

        public static T Read(string id, bool throwException = true)
        {
            if (id == null)
            {
                return default;
            }

            if (StringKeyValue.TryGetValue(id, out var value))
            {
                return value;
            }

            //if(throwException)
            //    Debugger.LogWarning("Id:" + id + "不存在");
            return default;
        }

        public static Dictionary<int, T> ReadintDict()
        {
            return IntKeyValue;
        }

        public static Dictionary<string, T> ReadstringDict()
        {
            return StringKeyValue;
        }

        public static List<T> ReadList()
        {
            if (Values == null)
            {
                if (IntKeyValue != null && IntKeyValue.Count != 0)
                {
                    Values = IntKeyValue.Values.ToList();
                }
                else if (StringKeyValue != null && StringKeyValue.Count != 0)
                {
                    Values = StringKeyValue.Values.ToList();
                }
                else
                {
                    Values = new List<T>();
                }
            }

            return Values;
        }

        public virtual void Dispose()
        {
        }
    }

    public abstract class ConfigAssetManager
    {
        private static readonly List<Type> LoadedConfig = new List<Type>();

        internal static void Clear()
        {
            for (int i = 0; i < LoadedConfig.Count; i++)
            {
                // ReSharper disable once PossibleNullReferenceException
                ((IDictionary) LoadedConfig[i].GetField("Dict", BindingFlags.NonPublic | BindingFlags.Static).GetValue(LoadedConfig[i])).Clear();
            }
        }
    }
}