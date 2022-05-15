using System;
using Cysharp.Threading.Tasks;
using ModTheSpire.Event;

namespace ModTheSpire.Effect.Other
{
    public class DoFuncAction : IGameAction
    {
        public float Duration { get; set; }
        public ActionType Type { get; } = ActionType.WAIT;
        private int Interval { get; }
        private Action Action { get; }
        public void Init()
        {
        }

        public DoFuncAction(Action action,int duration = 0)
        {
            Action = action;
            Interval = duration;
        }

        public async UniTask<bool> Update()
        {
            Action();
            await UniTask.Delay(Interval);
            return true;
        }
    }
}