using FairyGUI;
using UnityEngine;

namespace ModTheSpire.Effect.Combat
{
    public class WebLineEffect : AbstractEffect
    {
        private float mX;
        private float mY;
        private GLoader mLoader;
        private float mScale;
        public WebLineEffect(float x, float y,bool facingLeft)
        {
            mX = x;
            mY = y;
            mLoader = (GLoader)UIObjectFactory.NewObject(ObjectType.Loader);
            mLoader.url = "Vfx/horizontal_line.png";
            mLoader.SetPosition(x + Random.Range(-20, 20), y * 128 + Random.Range(-10, 10), 0);
            mLoader.rotation = Random.Range(170,185);
            if(!facingLeft)
                mLoader.rotation += 180;
            mScale = Random.Range(0.8f,1f);
            mLoader.scaleY = mScale;
            var g = Random.Range(153, 230);
            var color = new Color(g,g,g + 26);
            mLoader.alpha = 0;
            mLoader.color = color;
            mLoader.TweenFade(0.8f,0.5f).SetEase(EaseType.SineInOut);
            mLoader.TweenFade(0.01f,0.5f).SetEase(EaseType.QuartOut).SetDelay(0.5f);
            mLoader.blendMode = BlendMode.Add;
        }

        public override void Update()
        {
            base.Update();
            mLoader.scaleX = this.mScale * 2 * Mathf.Cos(1 - this.Duration * 16) / 4 + 1.5f;
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