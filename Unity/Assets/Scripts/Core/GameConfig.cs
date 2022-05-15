using UnityEngine;

namespace Core
{
    public class GameConfig
    {
        public static bool MobileRuntime
        {
            get
            {
#if UNITY_EDITOR
                return UnityEditor.EditorPrefs.GetBool(nameof (MobileRuntime), false);
#else
            return true;
#endif
            }
        }

        public static Vector2Int ScreenSize = new Vector2Int(1920, 1080);
    }
}