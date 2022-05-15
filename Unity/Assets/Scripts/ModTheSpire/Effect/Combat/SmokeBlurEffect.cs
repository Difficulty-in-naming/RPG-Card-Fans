using FairyGUI;
using UnityEngine;

namespace ModTheSpire.Effect.Combat
{
    public class SmokeBlurEffect : AbstractEffect
    {
        float mX;
        float mY;
        private float mVy;
        private float mVa;
        private GLoader mLoader;
        public SmokeBlurEffect(float x, float y)
        {
            mX = x;
            mY = y;
            
            mLoader = (GLoader)UIObjectFactory.NewObject(ObjectType.Loader);
            var targetScale = 0f;
            if(Random.value < 0.5){
                mLoader.url = ImageMaster.EXHAUST_L;
                targetScale = Random.Range(0.8F,2.2F);
            }else{
                mLoader.url = ImageMaster.EXHAUST_S;
                targetScale = Random.Range(0.8F,1.2F);
            }
            mLoader.SetScale(0.01f,0.01f);
            mLoader.SetPosition(x + Random.Range(-180, 150), y + Random.Range(-240, 150), 0);
            var color = new Color32();
            color.r = (byte)Random.Range(128, 153);
            color.g = (byte)(color.r + Random.Range(0, 51));
            color.b = 51;
            mLoader.color = color;
            var time = Random.Range(2, 2.5f);
            mLoader.rotation =Random.Range(0,360);
            this.mVy = Random.Range(1,5);
            this.mVa = Random.Range(-250,250);
            mLoader.TweenScale(new Vector2(targetScale,targetScale),time).SetEase(EaseType.ExpoOut).OnComplete(Finish);
            mLoader.TweenFade(0,0.33f).SetDelay(time - 0.33f).SetEase(EaseType.Linear);
        }

        public override void Update()
        {
            base.Update();
            mLoader.x += Random.Range(-2, 2) + mVy;
            mLoader.y += Random.Range(-2, 2) + mVy;
            mLoader.rotation += mVa * Time.deltaTime;
        }

        public override void Dispose()
        {
            base.Dispose();
            mLoader.Dispose();
        }
    }
}