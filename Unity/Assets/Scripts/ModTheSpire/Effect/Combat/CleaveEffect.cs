using FairyGUI;
using ModTheSpire.ModTheSpire_Effect;
using UnityEngine;

namespace ModTheSpire.Effect.Combat
{
    public class CleaveEffect : AbstractEffect
    {
        private GComponent mLoader;
        private float mStallTimer;
        private float mScale;
        public CleaveEffect(float x,float y)
        {
            mLoader = View_CleaveEffect.CreateInstance();
            mLoader.SetPosition(x,y,0);

            mLoader.rotation = Random.Range(-5,1);
            mScale = 1.2f;
            mLoader.SetScale(mScale, mScale);
            mStallTimer = Random.Range(0,0.2f);
        }

        public override void Update()
        {
            base.Update();
            if(mStallTimer > 0){
                mStallTimer -= Time.deltaTime;
                return;
            }

            mScale += 0.005f;
            mLoader.SetScale(mScale,mScale);
            mLoader.rotation += Random.Range(-0.5f, 0.5f);
        }
    }
}