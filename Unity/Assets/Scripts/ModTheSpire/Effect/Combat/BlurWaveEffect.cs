using DG.Tweening;
using FairyGUI;
using UnityEngine;

namespace ModTheSpire.Effect.Combat
{
    public class BlurWaveEffect :AbstractEffect
    {
        private float mStallTimer;
        private GLoader mLoader;
        private float mScale;
        private float mSpeedTarget = 2000;
        private float mRotation;
        private int mFlipper = 270;

        public BlurWaveEffect(float x, float y, Color color, float speed, BlendMode blendMode)
        {
            mStallTimer = Random.Range(0,0.3f);
            mLoader = UIObjectFactory.NewObject(ObjectType.Loader).asLoader;
            mLoader.SetPosition(x, y, 0);
            mLoader.url = "Vfx/combat/blurWave.png";
            mLoader.rotation = mRotation = Random.Range(0, 360);
            mScale = Random.Range(0.5f,0.9f);
            mLoader.SetPivot(0.5f,0.5f,true);
            mLoader.color = (Color32)color;
            color.g -= Random.Range(0, 26);
            color.b -= Random.Range(0, 51);
            mLoader.alpha = 0;
            mLoader.TweenFade(0.7f,0.5f).SetEase(EaseType.SineInOut);
            mLoader.TweenFade(0,1).SetEase(EaseType.SineInOut).SetDelay((float)1.5);
            mLoader.blendMode = blendMode;
            DOTween.To(() => mSpeedTarget, t1 =>
            {
                mSpeedTarget = t1;
            }, speed, 2).SetEase(Ease.InOutSine);
        }

        public override void Update()
        {
            base.Update();
            mStallTimer -= Time.deltaTime;
            if(this.mStallTimer < 0) {
                mLoader.x += Mathf.Cos(this.mRotation) * this.mSpeedTarget;
                mLoader.y += Mathf.Sin(this.mRotation) * this.mSpeedTarget;
                mLoader.SetScale(this.mScale + Random.Range(-0.08f, 0.08f), this.mScale + Random.Range(-0.08f, 0.08f));
                mLoader.rotation = this.mRotation + this.mFlipper + Random.Range(-3, 4);
                this.mScale *= 1 + Time.deltaTime * 2;
                if (this.Duration >= 2) {
                    Finish();
                }
            }
        }

        public override void Dispose()
        {
            base.Dispose();
            mLoader.Dispose();
        }
    }
}