using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameConfig : MonoBehaviour
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
}
