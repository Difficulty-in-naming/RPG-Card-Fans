using Core;
using FairyGUI;
using UnityEngine;

namespace DreamLib.Unity.UI.FairyGUIExtension
{
    public static class FairyGUIExtension
    {
        public static Vector3 MousePosition => GRoot.inst.GlobalToLocal(Stage.inst.GetTouchPosition(-1));
        public static Vector2 ConvertWorldPositionToUIPosition(Vector3 worldPosition,GComponent view)
        {
            Vector3 screenPos = GameEntry.Camera.GetComponent<Camera>().WorldToScreenPoint(worldPosition);
            screenPos.y = Screen.height - screenPos.y;
            Vector2 pt = view.GlobalToLocal(screenPos);
            return pt;
        }
    }
}