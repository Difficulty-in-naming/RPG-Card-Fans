using UnityEngine;

namespace ModTheSpire.DataDefine
{
    public static class MTSColor
    {
        public static Color32 Red = new Color32(255, 0, 0, 255);
        public static Color32 Chartreuse = new Color32(128, 255, 0, 255);
        public static Color32 White = new Color32(255, 255, 255, 255);
        public static Color32 Black = new Color32(0, 0, 0, 255);
        public static Color32 Gray = new Color32(127, 127, 127, 255);
        public static Color32 FireBrick = new Color32(0, 0, 0, 153);
        public static Color32 TwoThirdsTransparentBlackColor = new Color32(0, 0, 0, 166);
        public static Color32 Cream = new Color32(255, 246, 226, 255);
        public static Color32 DiscardColor = new Color32(138, 118, 155, 255);
        public static Color32 RedText = new Color32(255, 101, 99, 255);
        public static Color32 GreenText = new Color32(127, 255, 0, 255);
        public static Color32 BlueText = new Color32(135, 206, 235, 255);
        public static Color32 Gold = new Color32(239, 200, 81, 255);
        public static Color32 PurpleText = new Color32(238, 130, 238, 255);
        public static Color32 RedHpBarColor = new Color32(204, 13, 13, 255);
        public static Color32 GreenHpBarColor = new Color32(120, 190, 60, 255);
        public static Color32 BlueHpBarColor = new Color32(49, 86, 140, 255);
        public static Color32 OrangeHbBarColor = new Color32(255, 128, 0, 255);
        public static Color32 Royal = new Color32(65, 105, 225, 255);
        public static Color32 Sky = new Color32(135, 206, 235, 255);
        public static Color32 Cyan = new Color32(0, 255, 255, 255);
        public static Color32 Orange = new Color32(255, 165, 0, 255);
        public static Color32 Goldenrod = new Color32(218, 165, 32, 255);
        public static Color32 Scarlet = new Color32(255, 52, 28, 255);
        public static Color32 DarkGray = new Color32(63, 63, 63, 255);
        public static Color32 Coral = new Color32(255, 127, 80, 255);

        public static Color32 Random(byte min, byte max)
        {
            var r = (byte)Mathf.Clamp(Mathf.FloorToInt(UnityEngine.Random.Range(min, max)), 0, 255);
            var g = (byte)Mathf.Clamp(Mathf.FloorToInt(UnityEngine.Random.Range(min, max)), 0, 255);
            var b = (byte)Mathf.Clamp(Mathf.FloorToInt(UnityEngine.Random.Range(min, max)), 0, 255);
            return new Color32(r, g, b, 255);
        }

        public static Color32 Lerp(this Color32 from, Color32 to, float t)
        {
            from.r += (byte)(t * (to.r - from.r));
            from.g += (byte)(t * (to.g - from.g));
            from.b += (byte)(t * (to.b - from.b));
            from.a += (byte)(t * (to.a - from.a));
            return from.Clamp();
        }

        public static Color32 Clamp(this Color32 color)
        {
            color.r = (byte)Mathf.Clamp(color.r, 0, 255);
            color.g = (byte)Mathf.Clamp(color.g, 0, 255);
            color.b = (byte)Mathf.Clamp(color.b, 0, 255);
            color.a = (byte)Mathf.Clamp(color.a, 0, 255);
            return color;
        }
    }
}