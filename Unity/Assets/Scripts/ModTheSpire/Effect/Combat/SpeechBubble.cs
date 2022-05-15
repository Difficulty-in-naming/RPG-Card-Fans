using Febucci.UI;
using ModTheSpire.DataDefine;
using ModTheSpire.ModTheSpire_Effect;
using UnityEngine;

namespace ModTheSpire.Effect.Combat
{
    public class SpeechBubble : AbstractEffect
    {
        private readonly int mInterval;
        private readonly FairyGUI.GComponent mInstance;
        private readonly FairyGUI.GImage mBg ;
        private readonly TextAnimator mSuperText;

        public SpeechBubble(float x, float y, string msg, int interval = 2000, bool flipX = false)
        {
            mInterval = interval / 1000;
            this.mInstance = View_SpeechBubble.CreateInstance().asCom;
            this.mBg = this.mInstance.GetChild("Bg").asImage;
            if(flipX)
                this.mBg.flip = FairyGUI.FlipType.Horizontal;
            this.mInstance.SetPosition(x,y,0);
            var graph = this.mInstance.GetChild("Holder").asGraph;
            this.mSuperText = Resources.Load<GameObject>("TMP").GetComponent<TextAnimator>();
            var wrap = new FairyGUI.GoWrapper(this.mSuperText.gameObject);
            wrap.SetScale(100, 100);
            var textMeshPro = this.mSuperText.tmproText;
            textMeshPro.color = MTSColor.Gray;
            textMeshPro.text = $"<shake>{msg}</shake>";
            textMeshPro.lineSpacing = -50;
            var size = textMeshPro.rectTransform.sizeDelta;
            size.x = 2;
            textMeshPro.rectTransform.sizeDelta = size;
            graph.SetNativeObject(wrap);
            this.mInstance.GetTransition("t0").Play();
        }

        public override void Update()
        {
            base.Update();
            this.mSuperText.tmproText.alpha = this.mBg.alpha;
            if (this.Duration >= mInterval)
            {
                Finish();
            }
        }

        public override void Dispose()
        {
            base.Dispose();
            mInstance.Dispose();
        }
    }
}