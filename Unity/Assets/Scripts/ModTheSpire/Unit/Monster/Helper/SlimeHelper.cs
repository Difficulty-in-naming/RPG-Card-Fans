using Cysharp.Threading.Tasks;
using Spine;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.Helper
{
    public class SlimeHelper
    {
        public static void SlimeAnimListener(TrackEntry entry, Spine.Event e)
        {
            var roll = Mathf.FloorToInt(Random.Range(1, 5));
            MediaManager.PlayVoice($"Audio/sound/SOTE_SFX_SlimeBlink_${roll}_v2.ogg").Forget();
        }
    }
}