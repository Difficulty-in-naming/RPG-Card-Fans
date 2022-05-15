using System;
using DG.Tweening;
using FairyGUI;
using UnityEngine;

public class NormalWindow: BaseWindow
{
    public WindowAnimType EnterWindowAnim = WindowAnimType.None;
    public WindowAnimType ExitWindowAnim = WindowAnimType.None;
    private bool mInAnimation;

    /// <summary>
    /// 正在播放动画
    /// </summary>
    public bool InAnimation
    {
        get => mInAnimation;
        private set => mInAnimation = value;
    }

    public Tween Tween;

    public Action<NormalWindow> CloseCallback;

    public override void OnClose(bool forceDestory)
    {
        base.OnClose(forceDestory);
        Tween?.Kill(false);
        GRoot.inst.HideWindowImmediately(this, !Base.Widget.Pool || forceDestory);
        touchable = true;
        Base.OnExit();
        //UIManager.Touchable(true);
        InAnimation = false;
        if (CloseCallback != null)
        {
            CloseCallback(this);
        }
    }

    public override void OnCreate()
    {
        base.OnCreate();
        InAnimation = false;
        touchable = true;
        Base.OnEnter();
        UIKit.Inst.SetBackground();
        //UIManager.Touchable(true);
    }

    protected override void DoShowAnimation()
    {
        Base.OnWindowShown();
        InAnimation = true;
        touchable = false;
        if (EnterWindowAnim == WindowAnimType.Custom)
        {
            Base.DoShowAnimation();
        }
        else if(EnterWindowAnim != WindowAnimType.None)
        {
            PlayAnimation(EnterWindowAnim,true, Base.DoShowAnimation);
        }
        else
        {
            OnCreate();
        }
    }

    protected override void DoHideAnimation()
    {
        Base.OnWindowHide();
        InAnimation = true;
        touchable = false;
        if (ExitWindowAnim == WindowAnimType.Custom)
        {
            Base.DoHideAnimation();
        }
        else if(ExitWindowAnim != WindowAnimType.None)
        {
            PlayAnimation(ExitWindowAnim,false, Base.DoHideAnimation);
        }
        else
        {
            OnClose(false);
        }
    }

    private void PlayAnimation(WindowAnimType type,bool show,GTweenCallback callback)
    {
        float duration = 0.5f;
        if ((type & WindowAnimType.Fall) != 0)
        {
            if (show)
            {
                y = -GRoot.inst.height;
                TweenMoveY(GetCenterPoint().y, duration).OnComplete(callback).SetIgnoreEngineTimeScale(true).SetEase(EaseType.BackOut);
            }
            else
            {
                TweenMoveY(GRoot.inst.height, duration).OnComplete(callback).SetIgnoreEngineTimeScale(true).SetEase(EaseType.BackIn);
            }
        }
        if ((type & WindowAnimType.Rise) != 0)
        {
            if (show)
            {
                y = GRoot.inst.height;
                TweenMoveY(GetCenterPoint().y, duration).OnComplete(callback).SetIgnoreEngineTimeScale(true).SetEase(EaseType.BackOut);
            }
            else
            {
                TweenMoveY(-GRoot.inst.height, duration).OnComplete(callback).SetIgnoreEngineTimeScale(true).SetEase(EaseType.BackIn);
            }
        }
        if ((type & WindowAnimType.FadeIn) != 0)
        {
            alpha = 0;
            TweenFade(1, duration).OnComplete(callback).SetIgnoreEngineTimeScale(true).SetEase(EaseType.SineInOut);
        }
        if ((type & WindowAnimType.FadeOut) != 0)
            TweenFade(0, duration).OnComplete(callback).SetIgnoreEngineTimeScale(true).SetEase(EaseType.SineInOut);
        if ((type & WindowAnimType.ScaleToNormal) != 0)
        {
            scale = Vector2.zero;
            SetPivot(0.5f,0.5f);
            TweenScale(Vector2.one, 0.3f).OnComplete(callback).SetIgnoreEngineTimeScale(true).SetEase(EaseType.BackOut);
        }
        if ((type & WindowAnimType.ScaleToZero) != 0)
        {
            SetPivot(0.5f,0.5f);
            TweenScale(Vector2.zero, 0.3f).OnComplete(callback).SetIgnoreEngineTimeScale(true).SetEase(EaseType.BackIn);
        }

        if ((type & WindowAnimType.Jelly) != 0)
        {
            SetPivot(0.5f,0.5f);
            scale = Vector2.zero;
            TweenScale2(new Vector2(1.0625f, 0.8875f), 0.15f).SetEase(EaseType.Linear).OnComplete(() =>
                TweenScale2(new Vector2(0.95f, 1.0227f), 0.1f).SetEase(EaseType.Linear).OnComplete(() =>
                    TweenScale2(Vector2.one, 0.083f).SetEase(EaseType.Linear).OnComplete(() =>
                        TweenScale2(new Vector2(1.0122f, 1), 0.1f).SetEase(EaseType.Linear).OnComplete(() =>
                            TweenScale2(Vector2.one, 0.133f).SetEase(EaseType.Linear)).OnComplete(callback))));
        }
    }

    private GTweener TweenScale2(Vector2 vec,float duration)
    {
        return TweenScale(vec,duration).SetIgnoreEngineTimeScale(true);
    }
    
    private Vector2 GetCenterPoint()
    {
        GComponent r;
        if (parent != null)
            r = parent;
        else
            r = this.root;

        return new Vector2((int) ((r.width - this.width) / 2), (int) ((r.height - this.height) / 2));
    }
    
    public NormalWindow(UIBase @base): base(@base)
    {
    }
}