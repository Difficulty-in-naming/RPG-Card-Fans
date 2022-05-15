using FairyGUI;
using ModTheSpire.ModTheSpire_Effect;
using UnityEngine;

namespace ModTheSpire.Effect.Combat
{
    public class CardPoofParticle : AbstractEffect
    {
        private View_CardPoofParticle mLoader;
        public CardPoofParticle(float x, float y)
        {
            string img = "";
            bool flipX = Random.value > 0.5f;
            bool flipY = Random.value > 0.5f;
            switch (Random.Range(0, 3))
            {
                case 0:
                {
                    img = ImageMaster.SMOKE_1;
                    break;
                }
                case 1:
                {
                    img = ImageMaster.SMOKE_2;
                    break;
                }
                default:
                {
                    img = ImageMaster.SMOKE_3;
                    break;
                }
            }

            mLoader = View_CardPoofParticle.CreateInstance();
            mLoader.SetPivot(0.5f, 0.5f, true);
            mLoader.icon = img;
            mLoader.t0.SetValue("EndRotation", Random.Range(-400, 401));
            mLoader.t0.SetValue("EndXY", Random.Range(-170, 171), Random.Range(-170, 171));
            mLoader.xy = new Vector2(x + Random.Range(-160, 161), y + Random.Range(-180, 181));
            float rg = Random.Range(0.4f, 0.8f);
            mLoader.GetChild("icon").asLoader.color = new Color(rg + 0.05f, rg, rg + 0.05f, 1);
            var scale = Random.Range(0.8f, 2.5f);
            mLoader.SetScale(scale * (flipX ? -1 : 1), scale * (flipY ? -1 : 1));
            mLoader.rotation = Random.Range(0, 361);
            mLoader.t0.Play(1, Random.Range(0, 0.1f), Finish);
        }

        public override void Dispose()
        {
            mLoader.Dispose();
        }
    }
}