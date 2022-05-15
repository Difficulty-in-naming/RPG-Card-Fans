using Cysharp.Threading.Tasks;
using ModTheSpire.Dungeon;
using ModTheSpire.Effect.Combat;
using ModTheSpire.Event;
using ModTheSpire.Unit;

namespace ModTheSpire.Effect.Other
{
    public class GainBlockAction : IGameAction
    {
        private readonly AbstractCreature mTarget;
        private readonly int mAmount;
        private readonly AbstractCreature mSource;
        public float Duration { get; set; }
        public ActionType Type { get; } = ActionType.BLOCK;
        public void Init()
        {
        }

        public GainBlockAction(AbstractCreature target, int amount, AbstractCreature source = null)
        {
            mTarget = target;
            mAmount = amount;
            mSource = source;
        }

        public async UniTask<bool> Update()
        {
            if(this.mTarget != null && !this.mTarget.IsDying && !this.mTarget.IsDead){
                var hitbox = this.mTarget.DisplayObject.GetHitBox();
                DungeonManager.EffectManager.Play(new FlashAtkImgEffect(hitbox.center.x, hitbox.center.y, AttackEffect.SHIELD));
                this.mTarget.Block += this.mAmount;
                await UniTask.Delay(250);
                return true;
            }
            return true;
        }
    }
}