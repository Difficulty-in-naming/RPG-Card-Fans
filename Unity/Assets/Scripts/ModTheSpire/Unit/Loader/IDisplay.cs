using FairyGUI;
using ModTheSpire.UI.ViewComponent;
using UnityEngine;

namespace ModTheSpire.Unit.Loader
{
    public interface IDisplay
    {
        float X { get; set; }
        float Y { get; set; }
        Vector3 Rotation { get; set; }
        float ScaleX { get; set; }
        float ScaleY { get; set; }
        int SortingOrder { get; set; }
        bool Visible { get; set; }
        Color32 Color { get; set; }
        float Alpha { get; set; }
        GComponent UnitComponent { get; set; }
        FairyGUI.GGraph Bounds { get; set; }
        ViewComponent_HealthBar HealthComponent { get; set; }
        object Self { get; }
        GObject PowerComponent { get; set; }
        GObject NameComponent { get; set; }
        //Self;//可以保存自身Object.比如Spine你可以保存SkeletonAnimation.然后在别的地方你可以使用Self做一些特定操作
        bool FlipX { get; set; }
        bool FlipY { get; set; }
        void Dispose();
        void SetHitBox(Rect rect);
        Rect GetHitBox();
        void SetParent(GComponent p);
        object SetAnimation(string animation, bool loop = false);
        object AddAnimation(string animation, bool loop = false,float delay = 0);
        void PlayFastAttack();
        void PlaySlowAttack();
        void PlayHop();
        void PlayJump();
        void PlayFastShake(float duration);
        void PlaySlowShake(float duration);
        void PlayStagger();
    }
}