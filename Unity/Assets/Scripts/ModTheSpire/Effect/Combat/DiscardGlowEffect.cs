using Core.Utils;
using FairyGUI;
using ModTheSpire.DataDefine;
using UnityEngine;

namespace ModTheSpire.Effect.Combat
{
    public class DiscardGlowEffect : AbstractEffect
    {
        private float Interval = Random.Range(0.4f, 0.9f);
        private float Vy = -Random.Range(30, 61);
        private float Vr = Random.Range(-180, 181);
        public GLoader Loader;
        private readonly bool IsAbove;

        public DiscardGlowEffect(bool isAbove)
        {
            IsAbove = isAbove;
            Loader = (GLoader)UIObjectFactory.NewObject(ObjectType.Loader);
            var color = (Color)MTSColor.DiscardColor.Clone();
            var darkness = Random.Range(0.1f, 0.4f);
            color.r -= darkness;
            color.g -= darkness;
            color.b -= darkness;
            this.Loader.color = color;
            this.Loader.url = "ui://ModTheSpire_Effect/p" + Mathf.Floor(Random.Range(1, 7));
            this.Loader.SetPosition(Random.Range(35, 85), Random.Range(35, 85), 0);
            var scale = Random.Range(0.9f, 1.1f);
            this.Loader.SetScale(scale, scale);
            this.Loader.alpha = 1;
            this.Loader.TweenFade(0, this.Interval).SetEase(EaseType.Linear);
            this.Loader.blendMode = Random.value < 0.5 ? BlendMode.Add : BlendMode.Normal;
        }

        private void SetPosition()
        {
            var roll = Mathf.Floor(Random.Range(0, 9));
            if (this.IsAbove)
            {
                switch (roll)
                {
                    case 0:
                        this.Loader.SetPosition(86, 102, 0);
                        break;
                    case 1:
                        this.Loader.SetPosition(80, 111, 0);
                        break;
                    case 2:
                        this.Loader.SetPosition(72, 109, 0);
                        break;
                    case 3:
                        this.Loader.SetPosition(64, 107, 0);
                        break;
                    case 4:
                        this.Loader.SetPosition(58, 106, 0);
                        break;
                    case 5:
                        this.Loader.SetPosition(50, 104, 0);
                        break;
                    case 6:
                        this.Loader.SetPosition(42, 101, 0);
                        break;
                    case 7:
                        this.Loader.SetPosition(36, 98, 0);
                        break;
                    case 8:
                        this.Loader.SetPosition(30, 95, 0);
                        break;
                }
            }
            else
            {
                switch (roll)
                {
                    case 0:
                        this.Loader.SetPosition(36, 61, 0);
                        break;
                    case 1:
                        this.Loader.SetPosition(44, 53, 0);
                        break;
                    case 2:
                        this.Loader.SetPosition(52, 40, 0);
                        break;
                    case 3:
                        this.Loader.SetPosition(60, 40, 0);
                        break;
                    case 4:
                        this.Loader.SetPosition(68, 40, 0);
                        break;
                    case 5:
                        this.Loader.SetPosition(76, 40, 0);
                        break;
                    case 6:
                        this.Loader.SetPosition(88, 40, 0);
                        break;
                    case 7:
                        this.Loader.SetPosition(96, 40, 0);
                        break;
                    case 8:
                        this.Loader.SetPosition(105, 61, 0);
                        break;
                }
            }
        }

        public override void Update()
        {
            this.Loader.rotation = this.Vr * Time.deltaTime;
            this.Loader.y += this.Vy * Time.deltaTime;
            var d = this.Interval - this.Duration;
            if (d < 0.1)
            {
                this.Loader.SetScale(d / this.Interval * 2, d / this.Interval * 2);
            }

            if (d < 0.25)
            {
                this.Loader.alpha = d * 4;
            }

            if (d <= 0)
            {
                this.IsDone = true;
                this.Loader.Dispose();
            }
        }
    }
}