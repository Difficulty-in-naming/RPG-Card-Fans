using Cysharp.Threading.Tasks;
using ModTheSpire.Event;
using ModTheSpire.Unit.Monster;

namespace ModTheSpire.Effect.Other
{
    public class EscapeAction : IGameAction
    {
        private readonly AbstractMonster mMonster;
        public float Duration { get; set; }
        public ActionType Type { get; } = ActionType.TEXT;
        public void Init()
        {
        }

        public EscapeAction(AbstractMonster monster)
        {
            mMonster = monster;
        }
        
        public async UniTask<bool> Update()
        {
            mMonster.Escape();
            await UniTask.Delay(500);
            return true;
        }
    }
}