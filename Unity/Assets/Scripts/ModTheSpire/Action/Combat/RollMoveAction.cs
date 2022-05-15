using Cysharp.Threading.Tasks;
using ModTheSpire.Event;
using ModTheSpire.Unit;
using ModTheSpire.Unit.Monster;

namespace ModTheSpire.Effect.Other
{
    public class RollMoveAction : IGameAction
    {
        public float Duration { get; set; }
        public ActionType Type { get; } = ActionType.WAIT;
        private AbstractMonster mEnemy;
        public RollMoveAction(AbstractMonster enemy)
        {
            mEnemy = enemy;
        }
        public void Init()
        {
        }

        public UniTask<bool> Update()
        {
            if(mEnemy != null)
                mEnemy.RollMove();
            return UniTask.FromResult(true);
        }
    }
}