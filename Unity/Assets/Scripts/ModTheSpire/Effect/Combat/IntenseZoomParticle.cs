using FairyGUI;
using ModTheSpire.DataDefine;
using UnityEngine;

namespace ModTheSpire.Effect.Combat
{
    public class IntenseZoomParticle : AbstractEffect
    {
        private float mX;
        private float flickerDuration = 0.0f;
        private GLoader mLoader;
        private float mAlpha;
        public IntenseZoomParticle(float x, float y, bool isBlack)
        {
            mX = x;
            int i = Random.Range(0,2);
            mLoader = UIObjectFactory.NewObject(ObjectType.Loader).asLoader;
            mLoader.autoSize = true;
            mLoader.url = i == 0 ? ImageMaster.CONE_2 : (i == 1 ? ImageMaster.CONE_4 : ImageMaster.CONE_5); 
            mLoader.color = isBlack ? Color.black : MTSColor.Gold;
            mLoader.SetPivot(0, 0.5f, true);
            mLoader.SetPosition(x,y,0);
            GTween.To(1f, 0f, 1.5f)
                .OnUpdate(t1 => mAlpha = (float)(isBlack ? Random.Range(0.5f, 1.0f) * t1.value.d : Random.Range(0.2f, 0.7f) * t1.value.d))
                .SetEase(EaseType.QuadOut).SetTarget(this);
            this.randomize();
        }

        public void randomize() {
            mLoader.rotation = Random.Range(0,360.0f);
            mLoader.x = mX + Random.Range(200.0f, 600.0f) * this.Duration;
            mLoader.scaleX = Random.Range(1.0f, 1.3f);
            mLoader.scaleY = Random.Range(0.9f, 1.2f);
            mLoader.alpha = mAlpha;
        }
        
        public override void Update()
        {
            base.Update();
            this.flickerDuration -= Time.deltaTime;
            if (this.flickerDuration < 0.0f) {
                this.randomize();
                this.flickerDuration = Random.Range(0.0f, 0.05f);
            }
            if (Duration >= 1.5f)
            {
                Finish();
            }
        }

        public override void Dispose()
        {
            base.Dispose();
            mLoader.Dispose();
            GTween.Kill(this);
        }
    }
}