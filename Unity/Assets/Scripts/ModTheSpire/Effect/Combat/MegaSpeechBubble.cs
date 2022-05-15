using FairyGUI;
using Febucci.UI;
using ModTheSpire.DataDefine;
using ModTheSpire.ModTheSpire_Effect;
using UnityEngine;

namespace ModTheSpire.Effect.Combat
{
    public class MegaSpeechBubble : AbstractEffect
    {
        private float mX;
        private float mY;
        private string mMsg;
        private int mInterval;
        private bool mFlipX;
        private GComponent mInstance;
        private TextAnimator mSuperText;
        private GImage mBg;
        public MegaSpeechBubble(float x, float y, string msg, int interval, bool flipX)
        {
            mX = x;
            mY = y;
            mMsg = msg;
            mInterval = interval;
            mFlipX = flipX;
            mInstance = View_SpeechBubble.CreateInstance();
            mBg = mInstance.GetChild("Bg").asImage;
            if(mFlipX)
                mBg.flip = FlipType.Horizontal;
            var graph = mInstance.GetChild("Holder").asGraph;
            mSuperText = Resources.Load<GameObject>("TMP").GetComponent<TextAnimator>();
            var wrap = new GoWrapper(mSuperText.gameObject);
            wrap.SetScale(100, 100);
            var textMeshPro = mSuperText.tmproText;
            textMeshPro.color = MTSColor.Gray;
            textMeshPro.text = "{speechsize}{offset}" + mMsg + "{/offset}{/speechsize}";
            textMeshPro.lineSpacing = -50;
            var size = textMeshPro.rectTransform.sizeDelta;
            size.x = 2;
            textMeshPro.rectTransform.sizeDelta = size;
            graph.SetNativeObject(wrap);
            mInstance.GetTransition("t0").Play();
        }

        public override void Update()
        {
            base.Update();
            mSuperText.tmproText.alpha = mBg.alpha;
            if(Duration >= mInterval)
                Finish();
        }

        public override void Dispose()
        {
            base.Dispose();
            mInstance.Dispose();
        }
    }
}