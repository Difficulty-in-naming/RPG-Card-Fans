using ModTheSpire.DataDefine;
using ModTheSpire.Dungeon;
using UnityEngine;

namespace ModTheSpire.Effect.Combat
{
    public class IntenseZoomEffect :AbstractEffect
    {
        private bool isBlack;
        private float x;
        private float y;
        private static int AMT = 10;

        public IntenseZoomEffect(float x, float y, bool isBlack) {
            this.x = x;
            this.y = y;
            this.isBlack = isBlack;
        }

        public override void Update()
        {
            base.Update();
            if (this.isBlack) {
                DungeonManager.EffectManager.Play(new BorderFlashEffect(Color.black, this.isBlack));
            } else {
                DungeonManager.EffectManager.Play(new BorderFlashEffect(MTSColor.Gold, this.isBlack));
            }
            for (int i = 0; i < 10; ++i) {
                DungeonManager.EffectManager.Play(new IntenseZoomParticle(this.x, this.y, this.isBlack));
            }
            Finish();
        }
    }
}