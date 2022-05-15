/********************************
  该脚本是自动生成的请勿手动修改
*********************************/
using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using Config.ConfigCore;
using UnityEngine;
using UnityEngine.Networking;
using System.IO;
using DB;
namespace TCG.Config
{
	
	
		public partial class LocalizationProperty : IConfig, ILocalization
		{
			

			private string mId;
private string mChinese;
private string mChinese_tw;
private string mEnglish;

			
			/// <summary>
			/// Id
			/// </summary>
			public string Id
			{
				get => mId;
				set => mId = value;
			}
			

			/// <summary>
			/// 中文
			/// </summary>
			public string Chinese
			{
				get => mChinese;
				set => mChinese = value;
			}
			

			/// <summary>
			/// 繁体中文
			/// </summary>
			public string Chinese_tw
			{
				get => mChinese_tw;
				set => mChinese_tw = value;
			}
			

			/// <summary>
			/// 英文
			/// </summary>
			public string English
			{
				get => mEnglish;
				set => mEnglish = value;
			}
			


        	public static string Read(string id,Language? language = null,bool throwException = true)
        	{
        	    var property = Get(id, throwException);
	    if (property == null)
                          return id;
        	    return property.ToLoc(language);
        	}

			public static LocalizationProperty Get(string id, bool throwException = true)
			{
				return ConfigAssetManager<LocalizationProperty>.Read(id, throwException);
			}

			

			public static Dictionary<string,LocalizationProperty> ReadDict()
			{
				return ConfigAssetManager<LocalizationProperty>.ReadstringDict();
			}

			public static List<LocalizationProperty> ReadList()
			{
				return ConfigAssetManager<LocalizationProperty>.ReadList();
			}
		}
	

}