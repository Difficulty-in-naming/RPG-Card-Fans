using Core.Utils;
using Core.Utils.Unity;
using DG.Tweening;
using FairyGUI;
using ModTheSpire.DataDefine;
using ModTheSpire.Dungeon;
using UnityEngine;

namespace ModTheSpire.Effect.Combat
{
    public class WeightyImpactEffect : AbstractEffect
    {
        private float mX;
        private float mY;
        private Color mColor;
        private readonly float mInitY;
        private readonly float mTargetY;
        private FairyGUI.GLoader[] mLoader = new FairyGUI.GLoader[3];
        private float mInitHeight = 0;
        private float mScale;
        private bool mImpactHook;
        public WeightyImpactEffect(float x, float y): this(x,y,new Color(1,1,0.1f,0)) { }
        public WeightyImpactEffect(float x, float y, Color color)
        {
            mX = x;
            mColor = color;

            this.mInitY = FairyGUI.GRoot.inst.height;
            this.mTargetY = y - 180;
            this.Create();
            this.mInitHeight = mLoader[0].height;
            DOTween.To(() => mInitY, t1 => mY = t1, mTargetY, 1).SetEase(Ease.InOutSine);
        }
        
        private void Create()
        {
            for (int i = 0; i < 3; i++)
            {
                mLoader[i] = UIObjectFactory.NewObject(ObjectType.Loader).asLoader;
                mLoader[i].url = "Vfx/combat/weightImpact";
                mLoader[i].SetPivot(0.5f,0.5f,true);
                mLoader[i].SetPosition(this.mX,this.mInitY,0);
                mLoader[i].rotation = Random.Range(-1f,1f);
                mLoader[i].color = mColor;
                mLoader[i].alpha = 0.6f;
                mLoader[i].TweenFade(0,0.2f).SetEase(EaseType.SineInOut).SetDelay(0.8f);
                mLoader[i].TweenFade(0.2f,0.8f).SetEase(EaseType.QuadInOut);
                mLoader[i].blendMode = BlendMode.Add;
                mLoader[i].SetSize(mLoader[i].texture.width,mLoader[i].texture.height);
                mLoader[i].fill = FillType.ScaleFree;
            }
        }

        public override void Update()
        {
            base.Update();
            mScale += Time.deltaTime;
            mLoader[0].SetScale(mScale* Random.Range(0.99f, 1.01f) * 0.3f,mScale* Random.Range(0.99f, 1.01f) * 2 * (1 - this.Duration + 0.8f));
            mLoader[1].SetScale(mScale* Random.Range(0.99f, 1.01f) * 0.7f,mScale* Random.Range(0.99f, 1.01f) * 1.3f * (1 - this.Duration + 0.8f));
            mLoader[2].SetScale(mScale* Random.Range(0.99f, 1.01f),mScale* Random.Range(0.99f, 1.01f) * (1 - this.Duration + 0.8f));
            for(var i = 0;i<3;i++){
                mLoader[i].height = this.mInitHeight * (1 - this.Duration + 2) * 5;
            }
            mLoader[0].y = this.mY + 140;
            mLoader[1].y = this.mY + 40;
            mLoader[2].y = this.mY;
            if(this.Duration >= 1){
                this.IsDone = true;
                SoundMaster.PlayVoice(SoundMaster.ATTACK_IRON_2, -0.5f, false);
            } else if(this.Duration > 0.8){
                if(this.mImpactHook == false){
                    var i = 0;
                    this.mImpactHook = true;
                    DungeonManager.EffectManager.Play(new BorderFlashEffect(MTSColor.Orange.Clone()));
                    CameraUtils.Shake(ShakeVibrato.HIGH, ShakeDur.MED, new Vector2(0, 0.1f));
                    for(i = 0;i<10;i++)
                    {
                        DungeonManager.EffectManager.Play(new DamageImpactCurvyEffect(mX, mY));
                    }
                    for(i = 0;i<30;i++)
                    {
                        DungeonManager.EffectManager.Play(new UpgradeShineParticleEffect(mX + Random.Range(-100, 100), mY + Random.Range(-50, 120)));
                    }
                }
            }
        }
    }
}