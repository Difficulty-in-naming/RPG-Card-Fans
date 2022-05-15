using ModTheSpire.Dungeon;
using ModTheSpire.Unit;
using UnityEngine;

namespace ModTheSpire.Effect.Combat
{
    public class WebEffect:AbstractEffect
    {
        private AbstractCreature mTarget;
        private float mX;
        private float mY;
        private float mTimer;
        private int mCount;

        public WebEffect(AbstractCreature target, float x, float y)
        {
            mTarget = target;
            mX = x;
            mY = y;
        }

        public override void Update()
        {
            base.Update();
            this.mTimer -= Time.deltaTime;
            if(this.mTimer < 0){
                this.mTimer += 0.1f;
                var obj = this.mTarget.DisplayObject.GetHitBox();
                switch(this.mCount){
                    case 0:{
                        DungeonManager.EffectManager.Play(new WebLineEffect(mX,mY,true));
                        DungeonManager.EffectManager.Play(new WebLineEffect(mX,mY,true));
                        DungeonManager.EffectManager.Play(new WebParticleEffect(obj.center.x - 90,obj.center.y - 10));
                        break;
                    }
                    case 1:{
                        DungeonManager.EffectManager.Play(new WebLineEffect(mX,mY,true));
                        DungeonManager.EffectManager.Play(new WebLineEffect(mX,mY,true));
                        break;
                    }
                    case 2:{
                        DungeonManager.EffectManager.Play(new WebLineEffect(mX,mY,true));
                        DungeonManager.EffectManager.Play(new WebLineEffect(mX,mY,true));
                        DungeonManager.EffectManager.Play(new WebParticleEffect(obj.center.x + 70,obj.center.y + 80));
                        break;
                    }
                    case 4:{
                        DungeonManager.EffectManager.Play(new WebParticleEffect(obj.center.x + 30,obj.center.y - 100));
                        break;
                    }
                }
                this.mCount++;
            }
            if(Duration >= 1)
                Finish();
        }
    }
}