using FairyGUI;
using ModTheSpire.UI.ViewComponent;
using UnityEngine;

namespace ModTheSpire.Unit.Loader
{

    public class TextureDisplay : IDisplay
    {
        public float X { get; set; }
        public float Y { get; set; }
        public Vector3 Rotation { get; set; }
        public float ScaleX { get; set; }
        public float ScaleY { get; set; }
        public int SortingOrder { get; set; }
        public bool Visible { get; set; }
        public Color32 Color { get; set; }
        public float Alpha { get; set; }
        public GComponent UnitComponent { get; set; }
        public GGraph Bounds { get; set; }
        public ViewComponent_HealthBar HealthComponent { get; set; }
        public object Self { get; }
        public GObject PowerComponent { get; set; }
        public GObject NameComponent { get; set; }
        public bool FlipX { get; set; }
        public bool FlipY { get; set; }

        public void Dispose()
        {
            throw new System.NotImplementedException();
        }

        public void SetHitBox(Rect rect)
        {
            throw new System.NotImplementedException();
        }

        public Rect GetHitBox()
        {
            throw new System.NotImplementedException();
        }

        public void SetParent(GComponent p)
        {
            throw new System.NotImplementedException();
        }

        object IDisplay.SetAnimation(string animation, bool loop)
        {
            throw new System.NotImplementedException();
        }

        object IDisplay.AddAnimation(string animation, bool loop, float delay)
        {
            throw new System.NotImplementedException();
        }

        public void SetAnimation(string animation, bool loop = false)
        {
            throw new System.NotImplementedException();
        }

        public void AddAnimation(string animation, bool loop = false, float delay = 0)
        {
            throw new System.NotImplementedException();
        }

        public void PlayFastAttack()
        {
            throw new System.NotImplementedException();
        }

        public void PlaySlowAttack()
        {
            throw new System.NotImplementedException();
        }

        public void PlayHop()
        {
            throw new System.NotImplementedException();
        }

        public void PlayJump()
        {
            throw new System.NotImplementedException();
        }

        public void PlayFastShake(float duration)
        {
            throw new System.NotImplementedException();
        }

        public void PlaySlowShake(float duration)
        {
            throw new System.NotImplementedException();
        }

        public void PlayStagger()
        {
            throw new System.NotImplementedException();
        }
    }
}