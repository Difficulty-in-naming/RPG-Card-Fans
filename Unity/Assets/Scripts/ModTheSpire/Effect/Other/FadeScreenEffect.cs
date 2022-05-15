using System;
using FairyGUI;
using ModTheSpire.ModTheSpire_Effect;
using UnityEngine;

namespace ModTheSpire.Effect.Other
{
    public struct FadeScreenEffect
    {
        public FadeScreenEffect(bool toDark,Action callback)
        {
            var fade = View_FadeScreen.CreateInstance();
            fade.MakeFullScreen();
            fade.Center();
            GRoot.inst.AddChild(fade);
            var alpha = toDark ? 0 : 1;
            fade.alpha = alpha;
            fade.sortingOrder = short.MaxValue;
            fade.TweenFade(alpha == 0 ? 1 : 0, 1.5f).SetEase(EaseType.SineInOut).OnComplete(() =>
            {
                fade.TweenFade(alpha == 0 ? 0 : 1, 1.5f).SetEase(EaseType.SineInOut).OnComplete(fade.Dispose);
                callback();
            });
        }
    }
}