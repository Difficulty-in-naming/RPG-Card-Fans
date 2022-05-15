using System;
using System.Collections.Generic;
using System.Globalization;

namespace Core.Utils
{
    public static class StringUtils
    {
        private static Dictionary<long, string> LongMapString = new(1000);
        private static Dictionary<double, string> DoubleMapString = new(1000);
        public static bool IsBase64(this string base64String) {
            if (string.IsNullOrEmpty(base64String) || base64String.Length % 4 != 0
                                                   || base64String.Contains(" ") || base64String.Contains("\t") || base64String.Contains("\r") || base64String.Contains("\n"))
                return false;

            try{
                Convert.FromBase64String(base64String);
                return true;
            }
            catch(Exception exception){
                // Handle the exception
            }
            return false;
        }
        
        public static string ZeroGCString(this int number)
        {
            if (LongMapString.TryGetValue(number, out var value))
                return value;
            var str = number.ToString(CultureInfo.CurrentCulture);
            LongMapString[number] = str;
            return str;
        }
        
        public static string ZeroGCString(this double number)
        {
            if (DoubleMapString.TryGetValue(number, out var value))
                return value;
            var str = number.ToString(CultureInfo.CurrentCulture);
            DoubleMapString[number] = str;
            return str;
        }
    }
}
