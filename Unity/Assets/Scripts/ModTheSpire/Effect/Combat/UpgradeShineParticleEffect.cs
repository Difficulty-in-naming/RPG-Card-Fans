using FairyGUI;
using UnityEngine;

namespace ModTheSpire.Effect.Combat
{
    public class UpgradeShineParticleEffect : AbstractEffect
    {
        public FairyGUI.GLoader[] mLoader = new FairyGUI.GLoader[2];
        private float mInterval;
        private float mScale;
        private float mVx;
        private float mVy;
        private float mFloor;
        private static int mGravity = 3000;

        public UpgradeShineParticleEffect(float x,float y)
        {
            for (int i = 0; i < 2; i++)
            {
                mLoader[i] = UIObjectFactory.NewObject(ObjectType.Loader).asLoader;
                mInterval = Random.Range(0.5f,1f);
                mLoader[i].SetPivot(0.5f,0.5f,true);
                mLoader[i].color = new Color32((byte)Random.Range(127,255),(byte)Random.Range(102, 153),(byte)Random.Range(0, 51),255);
                if(mInterval > 0.9)
                    mLoader[i].alpha = 0;
                else
                    mLoader[i].alpha = 1;
                
                mLoader[i].rotation = Random.Range(0,360);
                mVx = Random.Range(-900,900);
                mVx = Random.Range(-500,1000);
                mFloor = Random.Range(100,250);
                mLoader[i].blendMode = BlendMode.Add;
                mLoader[i].SetPosition(x,y,0);
                if(this.mInterval > 0.9)
                    this.mLoader[i].TweenFade(1,Mathf.Clamp(this.mInterval - 0.9f,0,0.1f)).SetEase(EaseType.SineInOut);
                mLoader[i].TweenFade(0,0.1f).SetEase(FairyGUI.EaseType.QuadInOut).SetDelay(this.mInterval - 0.1f);
            }
        }

        public override void Update()
        {
            base.Update();
            mVy -= mGravity * Time.deltaTime;
            for (var i = 0; i < 2; i++) {
                mLoader[i].x += mVx * Time.deltaTime;
                mLoader[i].y += mVy * Time.deltaTime;
                mLoader[i].SetScale(Random.Range(0.7f,1.3f),Random.Range(0.7f,1.3f));
                mLoader[i].rotation = Angle(mVx,mVy);
            }
            if(mLoader[0].y <mFloor){
                mVy = -mVy * 0.75f;
                for (var i = 0; i < 2; i++) {
                    mLoader[i].y = mFloor + 0.1f;
                }
                mVx *= 1.1f;
            }
        }
        
        private static float Angle(float x,float y){
            var angle = Mathf.Atan2(y,x) * Mathf.Rad2Deg;
            if(angle<0)
                angle += 360;
            return angle;
        }
    }
}