using FairyGUI;
using ModTheSpire.ModTheSpire_Effect;
using ModTheSpire.Unit;

namespace ModTheSpire.Effect.Combat
{
    public class WebParticleEffect : AbstractEffect
    {
        private float mX;
        private float mY;
        private GComponent mloader;
        public WebParticleEffect(float x, float y)
        {
            mX = x;
            mY = y;
            mloader = View_WebParticleEffect.CreateInstance();
            mloader.GetTransition("t0").Play();
            mloader.SetPosition(x,y,0);
        }

        public override void Update()
        {
            base.Update();
            if(Duration >= 1)
                Finish();
        }

        public override void Dispose()
        {
            base.Dispose();
            mloader.Dispose();
        }
    }
}