using ModTheSpire.ModTheSpire_Effect;

namespace ModTheSpire.Effect.Combat
{
    public class PowerDebuffEffect : AbstractEffect
    {
        private View_PowerDebuffEffect mEffect;
        public PowerDebuffEffect(float x, float y, string msg)
        {
            mEffect = View_PowerDebuffEffect.CreateInstance();
            mEffect.text = msg;
            mEffect.SetPosition(x, y, 0);
            mEffect.GetTransition("t0").Play(1, 0, Finish);
        }

        public override void Dispose()
        {
            base.Dispose();
            mEffect.Dispose();
        }
    }
}