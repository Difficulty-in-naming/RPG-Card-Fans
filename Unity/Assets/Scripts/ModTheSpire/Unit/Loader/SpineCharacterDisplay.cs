using FairyGUI;
using ModTheSpire.ModTheSpire_Combat;
using ModTheSpire.UI.ViewComponent;
using Spine.Unity;
using UnityEngine;

namespace ModTheSpire.Unit.Loader
{
    public class SpineCharacterDisplay : IDisplay
    {
        private SkeletonAnimation SkeletonAnimation;
        private UnityObject Uo;
        private GoWrapper mWrapper;

        public float Alpha
        {
            get => SkeletonAnimation.Skeleton.A;
            set => SkeletonAnimation.Skeleton.A = value;
        }

        public float X
        {
            get => Uo.X;
            set => Uo.X = value;
        }

        public float Y
        {
            get => Uo.Y;
            set => Uo.Y = value;
        }

        public Vector3 Rotation
        {
            get => Uo.EulerAngles;
            set => Uo.EulerAngles = value;
        }

        public float ScaleX
        {
            get => Uo.LocalScale.x;
            set => Uo.LocalScaleX = value;
        }

        public float ScaleY
        {
            get => Uo.LocalScale.y;
            set => Uo.LocalScaleY = value;
        }

        public int SortingOrder
        {
            get => this.UnitComponent.sortingOrder;
            set => this.UnitComponent.sortingOrder = value;
        }

        public bool Visible
        {
            get => this.UnitComponent.visible;
            set => this.UnitComponent.visible = value;
        }

        public Color32 Color
        {
            get => this.SkeletonAnimation.Skeleton.GetColor();
            set => this.SkeletonAnimation.Skeleton.SetColor(value);
        }

        public bool FlipX
        {
            get => SkeletonAnimation.Skeleton.ScaleX < 0;
            set => SkeletonAnimation.Skeleton.ScaleX *= -1;
        }

        public bool FlipY
        {
            get => SkeletonAnimation.Skeleton.ScaleY < 0;
            set => SkeletonAnimation.Skeleton.ScaleY *= -1;
        }

        public GComponent UnitComponent { get; set; }
        public GGraph Bounds { get; set; }
        public ViewComponent_HealthBar HealthComponent { get; set; }
        public object Self { get; }
        public GObject PowerComponent { get; set; }
        public GObject NameComponent { get; set; }

        public SpineCharacterDisplay(SkeletonAnimation animation)
        {
            Self = SkeletonAnimation = animation;
            Uo = new UnityObject(SkeletonAnimation.gameObject);
            UnitComponent = View_UnitWrap.CreateInstance();
            mWrapper = new GoWrapper();
            mWrapper.SetWrapTarget(animation.gameObject, true);
            UnitComponent.GetChild("ModelLoader").asGraph.SetNativeObject(this.mWrapper);
            HealthComponent = new ViewComponent_HealthBar(this.UnitComponent.GetChild("HealthBar").asProgress);
            PowerComponent = this.UnitComponent.GetChild("PowerList");
            NameComponent = this.UnitComponent.GetChild("DisplayName");
            Bounds = this.UnitComponent.GetChild("Bounds").asGraph;
            Bounds.SetPivot(0.5f, 0.5f, true);
            Rotation = Vector3.zero;
            ScaleX = 1;
            ScaleY = 1;
            SortingOrder = 0;
            X = 0;
            Y = 0;
            Visible = true;
            Color = UnityEngine.Color.white;
        }

        public void PlayFastAttack()
        {
            if (!(this.UnitComponent.GetTransition("Jump").playing || this.UnitComponent.GetTransition("Hop").playing))
            {
                var transition = this.UnitComponent.GetTransition("FastAttack");
                if (!transition.playing)
                    transition.Play();
            }
        }

        public void PlayHop()
        {
            if (!(this.UnitComponent.GetTransition("Jump").playing))
            {
                var transition = this.UnitComponent.GetTransition("Hop");
                if (!transition.playing)
                    transition.Play();
            }
        }

        public void PlayJump()
        {
            if (!(this.UnitComponent.GetTransition("Hop").playing))
            {
                var transition = this.UnitComponent.GetTransition("Jump");
                if (!transition.playing)
                    transition.Play();
            }
        }

        public void PlaySlowAttack()
        {
            if (!(this.UnitComponent.GetTransition("Jump").playing || this.UnitComponent.GetTransition("Hop").playing))
            {
                var transition = this.UnitComponent.GetTransition("SlowAttack");
                if (!transition.playing)
                    transition.Play();
            }
        }

        public void PlaySlowShake(float duration)
        {
            if (!(this.UnitComponent.GetTransition("Jump").playing || this.UnitComponent.GetTransition("Hop").playing))
            {
                var transition = this.UnitComponent.GetTransition("SlowShake");
                if (!transition.playing)
                {
                    transition.Play();
                }
            }
        }

        public void PlayFastShake(float duration)
        {
            if (!(this.UnitComponent.GetTransition("Jump").playing || this.UnitComponent.GetTransition("Hop").playing))
            {
                var transition = this.UnitComponent.GetTransition("FastShake");
                if (!transition.playing)
                    transition.Play();
            }
        }

        public void PlayStagger()
        {
            if (!(this.UnitComponent.GetTransition("Jump").playing || this.UnitComponent.GetTransition("Hop").playing))
            {
                var transition = this.UnitComponent.GetTransition("Stagger");
                if (!transition.playing)
                    transition.Play();
            }
        }

        public void SetHitBox(Rect rect)
        {
             this.Bounds.x = rect.x;
             this.Bounds.y = rect.y;
             this.Bounds.width = rect.width;
             this.Bounds.height = rect.height;
        }

        public Rect GetHitBox() {
            return new Rect(this.Bounds.x, this.Bounds.y, this.Bounds.width, this.Bounds.height);
        }

        public void Dispose()
        {
            this.UnitComponent.Dispose();
            this.mWrapper.Dispose();
            Uo.Dispose();
        }
        
        public void SetParent(GComponent p)
        {
            if (p != null)
            {
                p.AddChild(this.UnitComponent);
            }
        }

        public object SetAnimation(string animation, bool loop = false)
        {
            return SkeletonAnimation.AnimationState.SetAnimation(0, animation, loop);
        }

        public object AddAnimation(string animation, bool loop = false, float delay = 0)
        {
            return SkeletonAnimation.AnimationState.AddAnimation(0, animation, loop, delay);
        }
    }
}