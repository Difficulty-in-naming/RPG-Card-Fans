using FairyGUI;
using UnityEngine;

namespace ModTheSpire.Effect.Combat
{
    public class ExhaustPileParticle : AbstractEffect
    {
        public FairyGUI.GLoader Loader;
        private float Interval = 2;
        public ExhaustPileParticle() {
            this.Loader = (GLoader)UIObjectFactory.NewObject(ObjectType.Loader);
            this.Loader.SetPosition(24,24,0);
            this.Loader.url = ImageMaster.EXHAUST_L;
            this.Loader.SetPivot(0.5f,0.5f,true);
            this.Loader.autoSize = true;
            var scale = Random.Range(0.5f,0.7f);
            var color = new Color();
            color.g = Random.Range(51,102);
            color.r = color.g + 26;
            color.b = color.r + 26;
            this.Loader.color = color;
            this.Loader.alpha = 0;
            this.Loader.rotation = Random.Range(0,360);
            this.Loader.SetScale(scale,scale);
            this.Loader.TweenScale(new Vector2(0.1f,0.1f),2).SetEase(EaseType.BounceIn);
        }

        public override void Update()
        {
            this.Loader.rotation += this.Interval * Time.deltaTime;
            this.Loader.alpha = this.Duration / this.Interval;
            if(this.Duration >= this.Interval) {
                this.IsDone = true;
                this.Loader.Dispose();
            }
        }
    }
}