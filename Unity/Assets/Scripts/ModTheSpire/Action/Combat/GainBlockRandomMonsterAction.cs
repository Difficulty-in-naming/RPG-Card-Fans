using Cysharp.Threading.Tasks;
using ModTheSpire.Dungeon;
using ModTheSpire.Effect.Combat;
using ModTheSpire.Event;

namespace ModTheSpire.Effect.Other
{
    public class GainBlockRandomMonsterAction : IGameAction
    {
        private readonly int mBlockAmount;
        public float Duration { get; set; }
        public ActionType Type { get; } = ActionType.BLOCK;
        public void Init()
        {
        }

        public GainBlockRandomMonsterAction(int blockAmount)
        {
            mBlockAmount = blockAmount;
        }
        
        public async UniTask<bool> Update()
        {
            var target = DungeonManager.Inst.CurrentRoom.Monsters.Random();
            if(target != null){
                DungeonManager.EffectManager.Play(new FlashAtkImgEffect(target.DisplayObject.X,target.DisplayObject.Y,AttackEffect.SHIELD));
                target.Block += this.mBlockAmount;
            }
            await UniTask.Delay(500);
            return true;
        }
    }
}