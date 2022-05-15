using DG.Tweening;
using FairyGUI;
using UnityEngine;

namespace Core.Utils.Unity
{
    public static class CameraUtils
    {
        public static void Shake(ShakeVibrato vibrato, ShakeDur dur, Vector3 strength)
        {
            var cams = Object.FindObjectsOfType<Camera>();
            for (int i = 0; i < cams.Length; i++)
            {
                var c = cams[i];
                c.DOKill(true);
                c.DOShakePosition(dur.Value, strength, vibrato.Value, 180, false);
            }
        }
    }
}

public class ShakeDur
{
    public static ShakeDur DEFAULT = new ShakeDur(1f);
    public static ShakeDur SHORT = new ShakeDur(0.3f);
    public static ShakeDur MED = new ShakeDur(0.5f);
    public static ShakeDur LONG = new ShakeDur(1f);
    public static ShakeDur XLONG = new ShakeDur(3f);
    public float Value { get; }

    public ShakeDur(float value)
    {
        Value = value;
    }
}

public class ShakeVibrato 
{
    public static ShakeVibrato LOW = new ShakeVibrato(30);
    public static ShakeVibrato MED = new ShakeVibrato(50);
    public static ShakeVibrato HIGH = new ShakeVibrato(100);
    public int Value { get; }

    public ShakeVibrato(int value)
    {
        Value = value;
    }
}
