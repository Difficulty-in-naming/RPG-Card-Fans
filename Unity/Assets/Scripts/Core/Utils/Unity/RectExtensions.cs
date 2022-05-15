using UnityEngine;

namespace Core.Utils.Unity
{
    public static class RectExtensions
    {
        public static Vector2 LeftTop(this Rect rect)
        {
            return new Vector2(rect.xMin, rect.yMin);
        }
        
        public static Vector2 RightTop(this Rect rect)
        {
            return new Vector2(rect.xMax, rect.yMin);
        }
        
        public static Vector2 LeftBottom(this Rect rect)
        {
            return new Vector2(rect.xMin, rect.yMax);
        }
        
        public static Vector2 RightBottom(this Rect rect)
        {
            return new Vector2(rect.xMax, rect.yMax);
        }
    }
}