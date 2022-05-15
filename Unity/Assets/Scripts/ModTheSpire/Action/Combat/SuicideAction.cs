using Cysharp.Threading.Tasks;
using ModTheSpire.Event;
using ModTheSpire.Unit;
using ModTheSpire.Unit.Monster;

namespace ModTheSpire.Effect.Other
{
    public class SuicideAction : IGameAction
    {
        private AbstractCreature mOwner;
        private bool mTriggerRelics = false;
        public SuicideAction(AbstractCreature owner, bool triggerRelics = false) {
            this.mOwner = owner;
            this.mTriggerRelics = triggerRelics;
        }

        public void update() {
            /*if (this.duration == 0.0f) {
                this.m.gold = 0;
                this.m.currentHealth = 0;
                this.m.die(this.relicTrigger);
                this.m.healthBarUpdatedEvent();
            }
            this.tickDuration();*/
        }

        public float Duration { get; set; }
        public ActionType Type { get; } = ActionType.DAMAGE;
        public void Init()
        {
        }

        public async UniTask<bool> Update()
        {
            this.mOwner.Gold = 0;
            this.mOwner.Health = 0;
            await UniTask.NextFrame();
            return true;
        }
    }
}