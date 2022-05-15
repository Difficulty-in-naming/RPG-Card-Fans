using ModTheSpire.Dungeon;

namespace ModTheSpire.Effect.Combat
{
    public class SmokeBombEffect : AbstractEffect
    {
        float mX;
        float mY;

        public SmokeBombEffect(float x, float y)
        {
            mX = x;
            mY = y;
        }

        public override void Update()
        {
            base.Update();
                if(this.Duration == 0){
                    SoundMaster.PlayVoice(SoundMaster.ATTACK_WHIFF_2);
                    for(var i = 0;i<90;i++){
                        DungeonManager.EffectManager.Play(new SmokeBlurEffect(this.mX,this.mY));
                    }
                }
                if(this.Duration >= 0.2)
                {
                    SoundMaster.PlayVoice(SoundMaster.ATTACK_WHIFF_2);
                    Finish();
                }
        }
    }
}