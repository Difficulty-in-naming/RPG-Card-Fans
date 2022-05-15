using System.Collections.Generic;
using Cysharp.Threading.Tasks;
using UnityEngine;

namespace ModTheSpire.Event
{
    public class QueueMessageKit
    {
        private static QueueMessageKit _inst;
        public static QueueMessageKit Inst => _inst ??= new QueueMessageKit();
        private QueueMessageKit()
        {
        }
        private bool Waiting { get; set; } 
        private readonly List<IGameAction> mList = new();
        private IGameAction CurrentRunning { get; set; }
        public void AddToBottom(IGameAction func)
        {
            mList.Insert(0,func);
        }
    
        public void AddToTop(IGameAction func){
            mList.Add(func);
        }

        public void Remove(IGameAction func){
            mList.RemoveAll(item => item == func);
        }

        public void ClearPostCombatActions()
        {
            for (var index = mList.Count - 1; index >= 0; index--)
            {
                var e = mList[index];
                //if (e is HealAction || e is GainBlockAction || e is UseCardAction || e.Type == ActionType.DAMAGE) continue;
                mList.RemoveAt(index);
            }
        }

        public async UniTask Update()
        {
            if(Waiting && CurrentRunning != null) {
                CurrentRunning.Duration += Time.deltaTime;
                return;
            }
            var action = this.CurrentRunning ?? this.mList[^1];
            if(action != null){
                if(this.CurrentRunning != action){
                    action.Init();
                    this.CurrentRunning = action;
                }
                this.Waiting = true;
                var result = await action.Update();
                this.Waiting = false;
                if(result)
                {
                    this.CurrentRunning = null;
                }
            }
        }
    }
}