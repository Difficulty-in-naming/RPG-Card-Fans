using DG.Tweening;
using DG.Tweening.Core;
using DG.Tweening.Plugins.Options;
using UnityEngine;

#if PANTHEA_COMMON_DOTWEEN_SUPPORT
public partial class UnityObject
{
    public TweenerCore<Vector3, Vector3, VectorOptions> DOMove(Vector3 endValue, float duration, bool snapping = false)
    {
        var t = DOTween.To(() => Position, x => Position = x, endValue, duration);
        t.SetOptions(snapping).SetTarget(this);
        return t;
    }
    
    public TweenerCore<Quaternion, Vector3, QuaternionOptions> DORotate(Vector3 endValue, float duration, RotateMode mode = RotateMode.Fast)
    {
        var t = DOTween.To(() => Rotation, x => Rotation = x, endValue, duration);
        t.SetTarget(this);
        t.plugOptions.rotateMode = mode;
        return t;
    }
}
#endif

