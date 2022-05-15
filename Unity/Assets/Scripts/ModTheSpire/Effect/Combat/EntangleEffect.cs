using FairyGUI;
using ModTheSpire.ModTheSpire_Effect;

namespace ModTheSpire.Effect.Combat
{
    public class EntangleEffect : AbstractEffect
    {
        private GComponent mLoader;
        public EntangleEffect(float x, float y, float targetX, float targetY)
        {
            mLoader = View_EntangleEffect.CreateInstance();
            mLoader.SetPosition(x,y,0);
            var transition = mLoader.GetTransition("t0");
            transition.SetValue("XY", targetX, targetX);
            transition.Play();
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
            mLoader.Dispose();
        }
    }
}