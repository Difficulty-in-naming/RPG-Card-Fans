using Cysharp.Threading.Tasks;
using ModTheSpire.Dungeon;
using ModTheSpire.Effect.Combat;
using ModTheSpire.Event;
using ModTheSpire.Unit;

namespace ModTheSpire.Effect.Other
{
    public class LoseBlockAction : IGameAction
    {
        public float Duration { get; set; }
        public ActionType Type { get; } = ActionType.BLOCK;
        private AbstractCreature mTarget;
        private int mAmount;
        private bool mNoAnimation;
        private AbstractCreature mSource;
        public void Init()
        {
        }

        public LoseBlockAction(AbstractCreature target, int amount, bool noAnimation = false, AbstractCreature source = null)
        {
            mTarget = target;
            mAmount = amount;
            mNoAnimation = noAnimation;
            mSource = source ?? target;
        }

        public async UniTask<bool> Update()
        {
            if(mTarget is { IsDying: false, IsDead: false }){
                return true;
            }
            if(mAmount == 0)
                return true;
            if(mTarget.Block == 0)
                return true;
            mTarget.Block -= mAmount;
            if(mTarget.Block < 0)
                mTarget.Block = 0;
            if(mTarget.Block == 0){
                if(!mNoAnimation){
                    var hitbox = mTarget.DisplayObject.GetHitBox();
                    DungeonManager.EffectManager.Play(new HpBlockBrokenEffect(hitbox.center.x, hitbox.center.y));
                }
            } else {
                var blockCom = mTarget.DisplayObject.UnitComponent.GetChild("Block");
                blockCom.SetScale(5,5);
                blockCom.TweenScale(UnityEngine.Vector2.one,0.7f).SetDelay(0.3f);
            }
            await UniTask.Delay(500);
            return true;
        }
    }
}