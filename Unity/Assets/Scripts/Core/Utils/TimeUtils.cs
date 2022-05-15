using System;
using System.Globalization;
using System.Threading.Tasks;
using Cysharp.Threading.Tasks;
using UnityEngine;
using UnityEngine.Networking;

namespace Core.Utils
{
    public static class TimeUtils
    {
        private static DateTimeOffset UtcDateTime { get; set; }
        private static long UtcTimeStamp { get; set; }
        private static long BaseSystemUpTime { get; } = (long) Time.realtimeSinceStartup;
        private static DateTime Epoch { get; } = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc);
        private static bool HasFetchUtcTime { get; set; } = false;
        static TimeUtils()
        {
            if (UtcTimeStamp == 0)
            {
                UtcDateTime = new DateTimeOffset(DateTime.UtcNow);
                UtcTimeStamp = UtcDateTime.ToUnixTimeSeconds();
            }

            FetchUtcTime().Forget();
        }

        ///系统会不停的校对时间.直到成功完成校对为止
        public static async UniTaskVoid FetchUtcTime()
        {
            while (!HasFetchUtcTime)
            {
                if (Application.internetReachability != NetworkReachability.NotReachable)
                {
                    using var request = UnityWebRequest.Get("https://www.microsoft.com");
                    var response = await request.SendWebRequest();
                    string todaysDates = response.GetResponseHeader("date");
                    UtcDateTime = DateTime.ParseExact(todaysDates,
                        "ddd, dd MMM yyyy HH:mm:ss 'GMT'",
                        CultureInfo.InvariantCulture.DateTimeFormat,
                        DateTimeStyles.AssumeUniversal).ToUniversalTime();
                    UtcTimeStamp = UtcDateTime.ToUnixTimeSeconds();
                    response.Dispose();
                    HasFetchUtcTime = true;
                    Log.Print("当前UTC时间为:" + UtcDateTime + "   " + UtcTimeStamp);
                }
                await Task.Delay(30000);//每30秒执行一次
            }
        }

        /// <summary>
        /// 返回当前UTC时间(全球)
        /// </summary>
        /// <returns></returns>
        public static long GetUtcTimeStamp()
        {
            return UtcTimeStamp + (long) Time.realtimeSinceStartup - BaseSystemUpTime;
        }

        /// <summary>
        /// 将DateTime转换为UTC时间(全球)
        /// </summary>
        /// <returns></returns>
        public static long GetUtcTimeStamp(DateTime dt)
        {
            return ConvertDateTimeToStamp(dt) + (long) Time.realtimeSinceStartup - BaseSystemUpTime;
        }

        /// <summary>
        /// 返回当前UTC时间(全球)
        /// </summary>
        /// <returns></returns>
        public static DateTime GetUtcDateTime()
        {
            return DateTimeOffset.FromUnixTimeSeconds(GetUtcTimeStamp()).DateTime;
        }

        /// <summary>
        /// 返回当前UTC时间(全球)
        /// </summary>
        /// <param name="dt"></param>
        /// <returns></returns>
        public static DateTime GetUtcDateTime(DateTime dt)
        {
            return DateTimeOffset.FromUnixTimeSeconds(GetUtcTimeStamp(dt)).DateTime;
        }

        /// <summary>
        /// 返回当前UTC时间(本地)
        /// </summary>
        /// <returns></returns>
        public static long GetLocalTimeStamp()
        {
            long utcTime = GetUtcTimeStamp();
            return ConvertDateTimeToStamp(DateTimeOffset.FromUnixTimeSeconds(utcTime).LocalDateTime);
        }

        /// <summary>
        /// 返回当前UTC时间(本地)
        /// </summary>
        /// <returns></returns>
        public static DateTime GetLocalDateTime()
        {
            long utcTime = GetUtcTimeStamp();
            return DateTimeOffset.FromUnixTimeSeconds(utcTime).LocalDateTime;
        }

        /// <summary>
        /// 将DateTime转换为UTC时间
        /// </summary>
        /// <param name="time"></param>
        /// <returns></returns>
        public static long ConvertDateTimeToStamp(DateTime time)
        {
            TimeSpan elapsedTime = time - Epoch;
            return (long) elapsedTime.TotalSeconds;
        }
    
        /// <summary>
        /// 将UTC时间转换为DateTimeOffset
        /// </summary>
        /// <param name="time"></param>
        /// <returns></returns>
        public static DateTimeOffset ConvertStampToDateTime(long timeStamp)
        {
            return DateTimeOffset.FromUnixTimeSeconds(timeStamp);
        }

        /// <summary>
        /// 设置DateTime为一天的开始时间 0小时 0 分 0 秒
        /// </summary>
        /// <param name="dt"></param>
        /// <returns></returns>
        public static DateTime TodayAtZero(this DateTime dt)
        {
            return new DateTime(dt.Year, dt.Month, dt.Day, 0, 0, 0);
        }

        /// <summary>
        /// 获取两个UTC时间之间的差值
        /// </summary>
        /// <param name="fromUtcTime"></param>
        /// <param name="toUtcTime"></param>
        /// <returns></returns>
        public static TimeSpan BetweenTime(long fromUtcTime, long toUtcTime)
        {
            return DateTimeOffset.FromUnixTimeSeconds(toUtcTime) - DateTimeOffset.FromUnixTimeSeconds(fromUtcTime);
        }

        /// <summary>
        /// 给定一个数字和一个转换格式如mm:ss
        /// 比如 ConvertNumberToTimeString(90,@"mm\:ss");
        /// 则返回结果 01:30
        /// </summary>
        /// <param name="seconds"></param>
        /// <param name="format"></param>
        /// <returns></returns>
        public static string ConvertNumberToTimeString(double seconds, string format)
        {
            TimeSpan time = TimeSpan.FromSeconds(seconds);
            string text = time.ToString(format);
            return text;
        }
    }
}