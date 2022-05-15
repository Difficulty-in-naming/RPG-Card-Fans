using Core.Utils;
using FairyGUI;
using ModTheSpire.DataDefine;
using UnityEngine;

namespace ModTheSpire.Effect.Combat
{
    public class SmallLaserEffect : AbstractEffect
    {
        private float mX;
        private float mY;
        private float mX2;
        private float mY2;
        private GLoader mLoader1;
        private GLoader mLoader2;
        private float mRotation;
        private float mScale = 1;

        public SmallLaserEffect(float x, float y, float x2, float y2)
        {
            mX = x;
            mY = y;
            mX2 = x2;
            mY2 = y2;
            mLoader1 = UIObjectFactory.NewObject(ObjectType.Loader).asLoader;
            mLoader2 = UIObjectFactory.NewObject(ObjectType.Loader).asLoader;
            mLoader1.url = mLoader2.url = "Vfx/combat/laserThin";
            mLoader1.color = mLoader2.color = MTSColor.Cyan.Clone();
            this.mRotation = Mathf.Atan2(x2 - x, y2 - y);
            this.mRotation *= Mathf.Rad2Deg;
            this.mRotation = -this.mRotation + 90;
            mLoader1.blendMode = mLoader2.blendMode = BlendMode.Add;
            mLoader1.TweenFade(1,0.5f).SetEase(EaseType.QuadOut);
            mLoader1.TweenFade(0,0.5f).SetEase(EaseType.BounceIn).SetDelay(0.5f);
            mLoader2.TweenFade(1,0.5f).SetEase(EaseType.QuadOut);
            mLoader2.TweenFade(0,0.5f).SetEase(EaseType.BounceIn).SetDelay(0.5f);
            mLoader1.rotation = mLoader2.rotation = mRotation;
        }

        public override void Update()
        {
            base.Update();
            if(this.Duration >= 1) {
                this.IsDone = true;
                mLoader1.Dispose();
                mLoader2.Dispose();
                mLoader2.height = Mathf.Floor(Random.Range(50,91));
                mLoader2.scaleX = this.mScale + Random.Range(-0.02f,0.02f);
                mLoader1.scaleX = this.mScale + Random.Range(-0.01f,0.01f);
            }
        }
    }
}