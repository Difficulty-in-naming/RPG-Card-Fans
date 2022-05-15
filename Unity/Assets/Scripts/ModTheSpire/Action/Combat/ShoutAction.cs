using Cysharp.Threading.Tasks;
using ModTheSpire.Dungeon;
using ModTheSpire.Effect.Combat;
using ModTheSpire.Event;
using ModTheSpire.Unit;
using ModTheSpire.Unit.Character;

namespace ModTheSpire.Effect.Other
{
    public class ShoutAction :  IGameAction
    {
        public float Duration { get; set; }
        public ActionType Type { get; } = ActionType.TEXT;
        private AbstractCreature mSource;
        private string mText;
        private int mInterval;
        private int mBubbleDuration;

        public ShoutAction(AbstractCreature source, string text, int interval = 500, int bubbleDuration = 3000)
        {
            mSource = source;
            mText = text;
            mInterval = interval;
            mBubbleDuration = bubbleDuration;
        }

        public void Init()
        {
        }
        
        public UniTask<bool> Update()
        {
            var hitBox = this.mSource.DisplayObject.GetHitBox();
            DungeonManager.EffectManager.Play(new MegaSpeechBubble(hitBox.center.x, hitBox.center.y, mText, mBubbleDuration,
                !(mSource is AbstractPlayer)));
            return UniTask.FromResult(true);
        }
    }
}