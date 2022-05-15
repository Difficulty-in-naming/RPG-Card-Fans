using System.Collections.Generic;
using FairyGUI;
using ModTheSpire.Effect;
using ModTheSpire.ModTheSpire_Title;
using UnityEngine;

namespace ModTheSpire.UI.ViewModel
{
    public class UI_Title : UIBase<View_Title>
    {
        private float DustTimer = 0.05f;
        private List<TitleCloud> TopCloud = new();
        private List<TitleCloud> MidCloud = new();
        private List<TitleDust> Dust = new();
        protected override void OnInit(IUIParams p)
        {
            base.OnInit(p);
            View.MakeFullScreen();
            View.Center();
            View.MainMenuEnter.Play();
            View.Start.onClick.Add(() =>
            {
                var panel = UIKit.Inst.Create<UI_SelectGameMode>();
                View.MainMenuEnter.PlayReverse(null);
            });
            for (var i = 1; i <= 7; i++)
            {
                this.TopCloud.Add(new TitleCloud($"ui://ModTheSpire_Title/topCloud{i}", Random.Range(10, 50), Random.Range(-1920, 1921),
                    View.TopCloudHolder));
            }

            for (var i = 1; i <= 13; i++)
            {
                this.MidCloud.Add(new TitleCloud($"ui://ModTheSpire_Title/midCloud{i}", Random.Range(-50, -10), Random.Range(-1920, 1921),
                    View.MidCloudHolder));
            }
        }

        public override void Update()
        {
            base.Update();
            DustTimer -= Time.deltaTime;
            if (this.DustTimer < 0)
            {
                DustTimer = 0.05f;
                var dust = new TitleDust();
                Dust.Add(dust);
                View.DustHolder.AddChild(dust.Loader);
            }

            for (int i = Dust.Count - 1; i >= 0; i--)
            {
                if (this.Dust[i].Update())
                {
                    this.Dust.RemoveAt(i);       
                }
            }
            for (var i = 0; i < 7; i++)
            {
                this.TopCloud[i].Update();
            }

            for (var i = 0; i < 13; i++)
            {
                this.MidCloud[i].Update();
            }
        }
    }

    public class TitleCloud
    {
        private FairyGUI.GLoader Loader;
        private float Vy;
        private float Y;
        private float Vx;
        private float X;

        public TitleCloud(string path, float vx, float x, FairyGUI.GComponent parent)
        {
            Loader = (GLoader)UIObjectFactory.NewObject(ObjectType.Loader);
            parent.AddChild(this.Loader);
            X = x;
            Vx = vx;
            Y = -900 + Random.Range(-250, 250);
            Loader.SetPosition(X, Y, 0);
            Loader.url = path;
            Vy = Random.Range(-Vx / 10, Vx / 10);
        }

        public void Update()
        {
            this.X += this.Vx * Time.deltaTime;
            this.Y += this.Vy * Time.deltaTime;
            if (this.Vx > 0 && this.Loader.x > 1920)
            {
                this.X = -1920;
                this.Y = -900 + Random.Range(-250, 520);
                this.Vx = Random.Range(10, 50);
                this.Vy = Random.Range(-this.Vx / 5, this.Vy / 5);
            }
            else if (this.Loader.x < -1920)
            {
                this.X = 1920;
                this.Y = -1100 + Random.Range(-50, 50);
                this.Vx = Random.Range(10, 50);
                this.Vy = Random.Range(-this.Vx / 5, this.Vy / 5);
            }

            this.Loader.SetPosition(this.X, this.Y, 0);
        }

        public void Dispose()
        {
            Loader.Dispose();
        }
    }
}

public class TitleDust
{
    private readonly float Vx;
    private readonly float Vy;
    private readonly float Va;
    private float Scale;
    public FairyGUI.GLoader Loader;
    private Color Vc;
    private float Interval;
    public float Duration;

    public TitleDust()
    {
        Loader = (GLoader)UIObjectFactory.NewObject(ObjectType.Loader);
        this.Loader.url = "ui://ModTheSpire_Effect/smoke" + Mathf.Floor(Random.Range(1, 4));
        this.Loader.SetPivot(0.5f, 0.5f, true);
        this.Loader.touchable = false;
        this.Scale = Random.Range(6, 8);
        this.Loader.SetScale(this.Scale, this.Scale);
        var x = -600;
        var y = Random.Range(-200, 0);
        this.Loader.SetPosition(x, y, 0);
        this.Vx = Random.Range(400, 1200);
        this.Vy = Random.Range(-50, 50);
        this.Va = Random.Range(-50, 50);
        var tmp = Random.Range(51, 77);
        float r, g, b, a;
        g = tmp + Random.Range(0, 26);
        r = g + Random.Range(0, 26);
        b = tmp;
        a = 255;
        this.Vc = new Color(r, g, b, a);
        this.Loader.color = this.Vc;
        this.Loader.alpha = 0.2f;
        this.Interval = Mathf.Floor(Random.Range(3, 4));
        this.Loader.TweenFade(0, this.Interval).SetEase(FairyGUI.EaseType.SineInOut);
    }

    public bool Update()
    {
        float x, y;
        this.Duration += Time.deltaTime;
        x = this.Vx * Time.deltaTime;
        y = this.Vy * Time.deltaTime;
        this.Scale += Time.deltaTime / 3;
        this.Loader.x += x;
        this.Loader.y += y;
        this.Loader.rotation = this.Va * Time.deltaTime;
        this.Loader.SetScale(this.Scale, this.Scale);
        if (this.Duration > this.Interval)
        {
            this.Loader.Dispose();
            return true;
        }

        return false;
    }
}
