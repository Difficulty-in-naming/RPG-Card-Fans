using Cysharp.Threading.Tasks;
using ModTheSpire.Event;
using ModTheSpire.Unit;

namespace ModTheSpire.Effect.Other
{
    public class AnimateSlowAttackAction : IGameAction
    {
        public float Duration { get; set; }
        public ActionType Type { get; } = ActionType.WAIT;
        private AbstractCreature Owner;
        public AnimateSlowAttackAction(AbstractCreature owner)
        {
            Owner = owner;
        }
        
        public void Init()
        {
        }

        public async UniTask<bool> Update()
        {
            Owner.DisplayObject.PlaySlowAttack();
            await UniTask.Delay(500);
            return true;
        }
    }
}