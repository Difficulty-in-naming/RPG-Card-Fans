using Cysharp.Threading.Tasks;
using ModTheSpire.Event;
using ModTheSpire.Unit;

namespace ModTheSpire.Effect.Other
{
    public class HideHealthBarAction : IGameAction
    {
        private AbstractCreature mOwner;
        public HideHealthBarAction(AbstractCreature owner)
        {
            mOwner = owner;
        }

        public float Duration { get; set; }
        public ActionType Type { get; } = ActionType.WAIT;
        public void Init()
        {
        }

        public UniTask<bool> Update()
        {
            mOwner.DisplayObject.HealthComponent.Visible = false;
            return UniTask.FromResult(true);
        }
    }
}