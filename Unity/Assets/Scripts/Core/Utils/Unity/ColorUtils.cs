using UnityEngine;

namespace Core.Utils.Unity
{
    public static class ColorUtils
    {
        public static int RGBToInt(this Color color)
        {
            return RGBToInt(new Color32((byte)Mathf.RoundToInt(color.r * 255), (byte)Mathf.RoundToInt(color.g * 255),
                (byte)Mathf.RoundToInt(color.b * 255), (byte)Mathf.RoundToInt(color.a * 255)));
        }

        public static int RGBToInt(this Color32 color)
        {
            var result = (color.r << 0) + (color.g << 8) + (color.b << 16);
            return result;
        }
        
        public static int RGBAToInt(this Color color)
        {
            return RGBAToInt(new Color32((byte)Mathf.RoundToInt(color.r * 255), (byte)Mathf.RoundToInt(color.g * 255),
                (byte)Mathf.RoundToInt(color.b * 255), (byte)Mathf.RoundToInt(color.a * 255)));
        }

        public static int RGBAToInt(this Color32 color)
        {
            var result = (color.r << 0) + (color.g << 8) + (color.b << 16) + (color.a << 24);
            return result;
        }
        
        public static Color32 IntToRGBA(int rgba)
        {
            byte red = (byte)(rgba >> 0 & 255);
            var green = (byte)(rgba >> 8 & 255);
            var blue = (byte)(rgba >> 16 & 255);
            var alpha = (byte)(rgba >> 24 & 255);
            return new Color32(red, green, blue, alpha);
        }
        
        public static Color32 IntToRGB(int rgba)
        {
            byte red = (byte)(rgba >> 0 & 255);
            var green = (byte)(rgba >> 8 & 255);
            var blue = (byte)(rgba >> 16 & 255);
            byte alpha = 255;
            return new Color32(red, green, blue, alpha);
        }
    }
}