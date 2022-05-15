using Cysharp.Threading.Tasks;
using ModTheSpire.Event;

namespace ModTheSpire.Effect.Other
{
    public class SFXAction : IGameAction
    {
        public float Duration { get; set; }
        public ActionType Type { get; } = ActionType.WAIT;
        private SoundMaster Key;
        private float PitchVar = 0.0f;
        private bool Adjust = false;

        public SFXAction(SoundMaster key, float pitchVar = 0, bool pitchAdjust = false) {
            this.Key = key;
            this.PitchVar = pitchVar;
            this.Adjust = pitchAdjust;
        }

        public void Init()
        {
            throw new System.NotImplementedException();
        }

        public UniTask<bool> Update()
        {
            if (!this.Adjust)
            {
                SoundMaster.PlayVoice(Key, PitchVar);
            }
            else
            {
                SoundMaster.PlayVoice(Key, PitchVar, false);
            }
            return UniTask.FromResult(true);
        }
    }
}