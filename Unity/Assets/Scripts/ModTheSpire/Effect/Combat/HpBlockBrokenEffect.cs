using ModTheSpire.ModTheSpire_Effect;

namespace ModTheSpire.Effect.Combat
{
    public class HpBlockBrokenEffect : AbstractEffect
    {
        private View_HpBlockBrokenEffect mCom;
        public HpBlockBrokenEffect(float x, float y)
        {
            mCom = View_HpBlockBrokenEffect.CreateInstance();
            mCom.SetPosition(x,y,0);
            mCom.t0.Play(1,0,Finish);
        }

        public override void Dispose()
        {
            base.Dispose();
            mCom.Dispose();
        }
    }
}