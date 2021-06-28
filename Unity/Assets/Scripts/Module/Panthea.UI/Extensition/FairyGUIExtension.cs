using FairyGUI;
using UnityEngine;

namespace DreamLib.Unity.UI.FairyGUIExtension
{
    public static class FairyGUIExtension
    {
        public static Vector3 MousePosition => GRoot.inst.GlobalToLocal(Stage.inst.GetTouchPosition(-1));
    }
}