using FairyGUI;
using ModTheSpire.ModTheSpire_Effect;
using UnityEngine;

namespace ModTheSpire.Effect.Combat
{
    public class BorderFlashEffect : AbstractEffect
    {
        private Color mColor;
        private bool mAdditive;
        private GComponent mLoader;
        public BorderFlashEffect(Color color, bool additive = false)
        {
            mColor = color;
            mAdditive = additive;
            mLoader = View_BorderFlashEffect.CreateInstance();
            mLoader.GetTransition("t0").Play();
            var image = mLoader.GetChild("n0").asImage;
            image.color = mColor;
            if(mAdditive == true)
                image.blendMode = BlendMode.Add;
        }

        public override void Update()
        {
            base.Update();
            if(this.Duration >= 1)
                Finish();
        }

        public override void Dispose()
        {
            base.Dispose();
            mLoader.Dispose();
        }
    }
}