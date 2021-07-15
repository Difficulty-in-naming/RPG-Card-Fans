﻿using FairyGUI;
using UnityEngine;

namespace DreamLib.Unity.UI.FairyGUIExtension
{
    public static class FairyGUIExtension
    {
        public static Vector3 MousePosition => GRoot.inst.GlobalToLocal(Stage.inst.GetTouchPosition(-1));

        /*public static GTweener TweenColor(this GObject obj,Color endValue, float duration)
        {
            return GTween.To(obj., endValue, duration).SetTarget(obj, TweenPropType.ScaleY);
        }*/
    }
}