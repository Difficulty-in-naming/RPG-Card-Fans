using Cysharp.Threading.Tasks;
using FairyGUI;
using UnityEngine;

namespace ModTheSpire.Effect.Combat
{
    public class FlashAtkImgEffect : AbstractEffect
    {
        private float Interval = 0.6f;
        private GLoader Loader;
        private int BlockSound;
        private AttackEffect Effect;
        private bool Mute;

        public FlashAtkImgEffect(float x, float y, AttackEffect effect, bool mute = false)
        {
            Effect = effect;
            Mute = mute;
            this.Loader = (GLoader)UIObjectFactory.NewObject(ObjectType.Loader);
            GRoot.inst.AddChild(this.Loader);
            this.Loader.url = this.LoadImage();
            this.Loader.SetPosition(x, y, 0);
            if (!Mute)
            {
                this.PlaySound();
            }

            this.Loader.TweenFade(0, 0.6f).SetEase(EaseType.SineInOut);
            this.Loader.TweenMoveY(y + 80, 0.6f).SetEase(EaseType.ExpoIn);
        }

        public override void Dispose()
        {
            base.Dispose();
            Loader.Dispose();
        }

        private string LoadImage()
        {
            switch (this.Effect)
            {
                case AttackEffect.SLASH_DIAGONAL:
                {
                    return "Vfx/attack/slash_light.png";
                }
                case AttackEffect.SLASH_HEAVY:
                {
                    return "Vfx/attack/slash_heavy.png";
                }
                case AttackEffect.SLASH_HORIZONTAL:
                {
                    return "Vfx/attack/slash_horizontal.png";
                }
                case AttackEffect.SLASH_VERTICAL:
                {
                    return "Vfx/attack/slash_vertical.png";
                }
                case AttackEffect.BLUNT_LIGHT:
                {
                    return "Vfx/attack/blunt_light.png";
                }
                case AttackEffect.BLUNT_HEAVY:
                {
                    this.Loader.rotation = Random.Range(0, 361);
                    return "Vfx/attack/blunt_heavy.png";
                }
                case AttackEffect.FIRE:
                {
                    return "Vfx/attack/fire.png";
                }
                case AttackEffect.POISON:
                {
                    return "Vfx/attack/poison.png";
                }
                case AttackEffect.SHIELD:
                {
                    return "Vfx/attack/shield.png";
                }
                case AttackEffect.NONE:
                {
                    return null;
                }
            }

            return "Vfx/attack/slash_light.png";
        }

        private void PlaySound()
        {
            switch (this.Effect)
            {
                case AttackEffect.SLASH_HEAVY:
                {
                    MediaManager.PlayVoice("Audio/sound/SOTE_SFX_HeavyAtk_v2.ogg").Forget();
                    break;
                }
                case AttackEffect.BLUNT_LIGHT:
                {
                    MediaManager.PlayVoice("Audio/sound/SOTE_SFX_FastBlunt_v2.ogg").Forget();
                    break;
                }
                case AttackEffect.BLUNT_HEAVY:
                {
                    MediaManager.PlayVoice("Audio/sound/SOTE_SFX_HeavyBlunt_v2.ogg").Forget();
                    break;
                }
                case AttackEffect.FIRE:
                {
                    MediaManager.PlayVoice("Audio/sound/SOTE_SFX_FireIgnite_2_v1.ogg").Forget();
                    break;
                }
                case AttackEffect.POISON:
                {
                    MediaManager.PlayVoice("Audio/sound/SOTE_SFX_PoisonCard_2_v1.ogg").Forget();
                    break;
                }
                case AttackEffect.SHIELD:
                {
                    this.PlayBlockSound();
                    break;
                }
                case AttackEffect.NONE:
                {
                    break;
                }
                default:
                {
                    MediaManager.PlayVoice("Audio/sound/SOTE_SFX_FastAtk_v2.ogg").Forget();
                    return;
                }
            }
        }

        private void PlayBlockSound()
        {
            if (this.BlockSound == 0)
            {
                MediaManager.PlayVoice("Audio/sound/SOTE_SFX_GainDefense_RR1_v3.ogg").Forget();
            }
            else if (this.BlockSound == 1)
            {
                MediaManager.PlayVoice("Audio/sound/SOTE_SFX_GainDefense_RR3_v3.ogg").Forget();
            }
            else
            {
                MediaManager.PlayVoice("Audio/sound/SOTE_SFX_GainDefense_RR2_v3.ogg").Forget();
            }

            if (++this.BlockSound > 2)
            {
                this.BlockSound = 0;
            }
        }

        public override void Update()
        {
            if (this.Duration >= this.Interval)
            {
                Finish();
            }
        }
    }
}
