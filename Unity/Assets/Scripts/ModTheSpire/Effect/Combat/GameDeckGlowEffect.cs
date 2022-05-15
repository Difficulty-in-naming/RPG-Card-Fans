using Core.Utils;
using FairyGUI;
using ModTheSpire.DataDefine;
using UnityEngine;

namespace ModTheSpire.Effect.Combat
{
    public class GameDeckGlowEffect : AbstractEffect
    {
        private readonly float Interval = Random.Range(2f, 5f);
        private float Vx = Random.Range(10, 20) * (Random.value < 0.5f ? -1 : 1);
        private float Vy = Random.Range(10, 20) * (Random.value < 0.5f ? -1 : 1);
        private readonly float Vr = Random.Range(-120, 120);
        public GLoader Loader;

        public GameDeckGlowEffect()
        {
            Loader = (GLoader)UIObjectFactory.NewObject(ObjectType.Loader);
            var color = (Color)MTSColor.Cream.Clone();
            var darkness = Random.Range(0.1f, 0.4f);
            color.r -= darkness;
            color.g -= darkness;
            color.b -= darkness;
            Loader.color = color;
            Loader.url = "ui://ModTheSpire_Effect/p" + Mathf.Floor(Random.Range(1, 7));
            Loader.SetPosition(Random.Range(35, 85), Random.Range(35, 85), 0);
            Loader.SetScale(0.75f, 0.75f);
            Loader.TweenFade(0, Interval).SetEase(EaseType.Linear);
        }

        public override void Update()
        {
            base.Update();
            Loader.rotation = Vr * Time.deltaTime;
            float x = Loader.x, y = Loader.y;
            if (Vy != 0)
            {
                y += Vy * Time.deltaTime;
                Vy = Mathf.Lerp(Vy, 0, Time.deltaTime / 4);
                if (Vy < 0.5)
                    Vy = 0;
            }

            if (Vx != 0)
            {
                x += Vx * Time.deltaTime;
                Vx = Mathf.Lerp(Vx, 0, Time.deltaTime / 4);
                if (Vx < 0.5)
                    Vx = 0;
            }

            Loader.SetPosition(x, y, 0);
            if (Duration > Interval)
            {
                IsDone = true;
                Loader.Dispose();
            }
        }
    }
}