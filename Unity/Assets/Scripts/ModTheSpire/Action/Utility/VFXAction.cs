using Cysharp.Threading.Tasks;
using ModTheSpire.Dungeon;
using ModTheSpire.Event;

namespace ModTheSpire.Effect.Other
{
    public class VFXAction : IGameAction
    {
        private readonly AbstractEffect mEffect;
        private readonly int mInterval;
        private readonly EffectOrder mOrder;
        public float Duration { get; set; }

        public ActionType Type { get; } = ActionType.WAIT;
        public VFXAction(AbstractEffect effect, int interval, EffectOrder order = EffectOrder.MID)
        {
            mEffect = effect;
            mInterval = interval;
            mOrder = order;
        }
        
        public void Init()
        {
        }

        public async UniTask<bool> Update()
        {
            DungeonManager.EffectManager.Play(mEffect);
            await UniTask.Delay(this.mInterval);
            return true;
        }
    }
}