using Cysharp.Threading.Tasks;
using ModTheSpire.Dungeon;
using ModTheSpire.Effect.Combat;
using ModTheSpire.Event;

namespace ModTheSpire.Effect.Other
{
    public class TalkAction : IGameAction
    {
        private readonly float mX;
        private readonly float mY;
        private readonly string mText;
        private readonly bool mFlipX;
        private readonly int mInterval;
        private readonly int mBubbleDuration;
        public float Duration { get; set; }
        public ActionType Type { get; } = ActionType.TEXT;
        
        public TalkAction(float x,float y,string text,bool flipX = false,int interval = 2000,int bubbleDuration = 2000)
        {
            mX = x;
            mY = y;
            mText = text;
            mFlipX = flipX;
            mInterval = interval;
            mBubbleDuration = bubbleDuration;
        }
        public void Init()
        {
            throw new System.NotImplementedException();
        }

        public async UniTask<bool> Update()
        {
            DungeonManager.EffectManager.Play(new SpeechBubble(this.mX,this.mY,this.mText,this.mBubbleDuration,this.mFlipX));
            await UniTask.Delay(this.mInterval);
            return true;
        }
    }
}