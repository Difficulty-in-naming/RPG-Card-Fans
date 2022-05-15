using Core.Utils;
using FairyGUI;
using ModTheSpire.DataDefine;
using UnityEngine;
using Color = UnityEngine.Color;

namespace ModTheSpire.Effect.Combat
{
    public class DamageImpactCurvyEffect : AbstractEffect
    {
        private GLoader mLoader;
        private float mInterval;
        private float mSpeed;
        private float mWaveIntensity;
        private float mWaveSpeed;
        private float mRotation;
        private float mScale;
        private float mX;
        private float mY;
        private Color mColor;

        public DamageImpactCurvyEffect(float x, float y):this(x,y,MTSColor.Goldenrod.Clone()){}
        public DamageImpactCurvyEffect(float x, float y, Color color)
        {
            mX = x;
            mY = y;
            mColor = color;
            mLoader = UIObjectFactory.NewObject(ObjectType.Loader).asLoader;
            mLoader.url = "Vfx/combat/strikeLine3";
            mInterval = Random.Range(0.8f,1.1f);
            mLoader.SetPivot(0.5f,0.5f,true);
            mLoader.SetPosition(x,y,0);
            mLoader.color = color;
            mRotation = Random.Range(0,360);
            mLoader.rotation = this.mRotation;
            mWaveIntensity = Random.Range(5,30);
            mWaveSpeed = Random.Range(-20,20);
            mLoader.alpha = 0.25f;
            mLoader.blendMode = BlendMode.Add;
            mLoader.TweenFade(0,this.mInterval / 2).SetEase(FairyGUI.EaseType.Linear).SetDelay(this.mInterval / 2);
        }

        public override void Update()
        {
            base.Update();
            if(Duration >= mInterval)
                Finish();
            var tmpX = Mathf.Cos(this.mRotation) * this.mSpeed * Time.deltaTime;
            var tmpY = Mathf.Sin(this.mRotation) * this.mSpeed * Time.deltaTime;
            mLoader.x += tmpX;
            mLoader.y += tmpY;
            mRotation += Mathf.Cos((mInterval - this.Duration) * mWaveSpeed) * mWaveIntensity * Time.deltaTime * 60;
            mScale = (mInterval - this.Duration) / mInterval * 0.75f;
            mLoader.SetScale(mScale,mScale);
            mLoader.rotation = mRotation;
        }

        public override void Dispose()
        {
            base.Dispose();
            mLoader.Dispose();
        }
    }
}