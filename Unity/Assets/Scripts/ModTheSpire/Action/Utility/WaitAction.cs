using Cysharp.Threading.Tasks;
using ModTheSpire.Event;

namespace ModTheSpire.Effect.Other
{
    public class WaitAction : IGameAction
    {
        public float Duration { get; set; }
        public ActionType Type { get; }= ActionType.WAIT;
        private int mInterval { get; set; }
        public void Init()
        {
            throw new System.NotImplementedException();
        }

        public WaitAction(int duration)
        {
            mInterval = duration;
        }
        
        public async UniTask<bool> Update()
        {
            await UniTask.Delay(mInterval);
            return true;
        }
    }
}