using Core.Utils.Unity;
using ModTheSpire.Dungeon;
using UnityEngine;

namespace ModTheSpire.Effect.Combat
{
    public class ShockWaveEffect : AbstractEffect
    {
        private float mX;
        private float mY;
        private Color mColor;
        private ShockWaveType mShockWaveType;

        public ShockWaveEffect(float x, float y, Color color, ShockWaveType shockWaveType)
        {
            mX = x;
            mY = y;
            mColor = color;
            mShockWaveType = shockWaveType;
        }

        public override void Update()
        {
            base.Update();
            var speed = Random.Range(1000,1201);
            switch(this.mShockWaveType){
                case ShockWaveType.ADDITIVE: {
                    for(var i = 0;i<40;i++){
                        DungeonManager.EffectManager.Play(new BlurWaveEffect(this.mX,this.mY,this.mColor,speed,FairyGUI.BlendMode.Add));
                    }
                    break;
                }
                case ShockWaveType.NORMAL:{
                    for(var i = 0;i<40;i++){
                        DungeonManager.EffectManager.Play(new BlurWaveEffect(this.mX,this.mY,this.mColor,speed,FairyGUI.BlendMode.Normal));
                    }
                    break;
                }
                case ShockWaveType.CHAOTIC:
                {
                    CameraUtils.Shake(ShakeVibrato.HIGH, ShakeDur.SHORT, new Vector3(0.1f, 0));
                    for(var i = 0;i<40;i++){
                        DungeonManager.EffectManager.Play(new BlurWaveChaoticEffect(this.mX,this.mY,this.mColor,speed));
                    }

                    break;
                }
            }
        }
    }
    
    public enum ShockWaveType {
        ADDITIVE,
        NORMAL,
        CHAOTIC
    }
}