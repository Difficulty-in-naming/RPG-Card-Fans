using System;
using System.Collections.Generic;
using System.Reflection;
using System.Threading.Tasks;
using FairyGUI;
using UnityEngine;

public class UIBase
{
    /// <summary>
    /// 注意如果需要修改这个变量内的值一定要先调用MarkDirty避免把池污染了
    /// UI配置,当UI界面需要特殊处理时可以修改内部的参数达到一定效果
    /// </summary>
    public UIWidget Widget { get; set; }

    public string Name { get; set; }

    public Type Type { get; set; }
    private bool mIsDirty { get; set; }
    private EventListener mOnClose { get; set; }
    protected UIManager Manager { get; }
    protected MessageKit Message { get; }

    /// <summary>
    /// 当前界面是否激活.
    /// </summary>
    public bool Active { get; set; }

    private Dictionary<EventKey, Action> mKeyEvent { get; } = new Dictionary<EventKey, Action>();
    private Dictionary<Type, object> mEventHandle { get; } = new Dictionary<Type, object>();

    public UIBase()
    {
        Manager = UIKit.Inst;
        Message = MessageKit.Inst;
    }

    /// <summary>
    /// 界面已经被销毁了.
    /// </summary>
    public bool IsDisposed
    {
        get
        {
            if (Window != null)
            {
                return Window.isDisposed;
            }
            else
            {
                return GComponent == null || GComponent.isDisposed;
            }
        }
    }

    public bool OnStage
    {
        get
        {
            if (Window != null)
            {
                return Window.onStage;
            }
            else
            {
                return GComponent.onStage;
            }
        }
    }

    public EventListener OnClose
    {
        get
        {
            return mOnClose ??= new EventListener(GComponent, "OnClose");
        }
    }

    /// <summary>
    /// 与FairyGUI通信的接口
    /// </summary>
    public GComponent GComponent { get; protected set; }

    public bool Visible
    {
        get
        {
            if (IsDisposed)
            {
                return false;
            }

            return GComponent is { visible: true, onStage: true };
        }
        set => GComponent.visible = value;
    }

    /// <summary>
    /// 窗口(仅当UIConfig标记了IsWindow为false的时候为Null)
    /// </summary>
    public NormalWindow Window { get; set; }

    #region virtual

    /// <summary>
    /// 界面准备
    /// </summary>
    /// <returns></returns>
#pragma warning disable 1998
    public virtual async Task<bool> Prepared()
#pragma warning restore 1998
    {
        return true;
    }

    /// <summary>
    /// 仅当UI界面被创建的时候触发
    /// </summary>
    /// <param name="p"></param>
    protected virtual void OnInit(IUIParams p)
    {
    }

    /// <summary>
    /// 当UI界面被销毁时触发
    /// </summary>
    protected virtual void OnRelease()
    {
    }

    /// <summary>
    /// 当UI界面处于活跃状态时调用一次在OnInit之后触发
    /// </summary>
    protected virtual void OnEnable(IUIParams p, bool refresh)
    {
    }

    /// <summary>
    /// 当UI界面处于非活跃状态是调用一次在OnClose之前触发
    /// </summary>
    protected virtual void OnDisable(bool refresh)
    {
    }

    public virtual void Update()
    {
    }

    public virtual void LateUpdate()
    {
    }

    /// <summary>
    /// 当动画播放前的时候触发仅针对UIWindow有效果
    /// </summary>
    public virtual void OnWindowShown()
    {
    }

    /// <summary>
    /// 当动画播放前的时候触发仅针对UIWindow有效果
    /// </summary>
    public virtual void OnWindowHide()
    {
    }

    /// <summary>
    /// 当UIWindow标记Animation为Custom的时候调用该函数
    /// </summary>
    public virtual void DoShowAnimation()
    {
        Window.OnCreate();
    }

    /// <summary>
    /// 当UIWindow标记Animation为Custom的时候调用该函数
    /// </summary>
    public virtual void DoHideAnimation()
    {
        Window.OnClose(false);
    }

    /// <summary>
    /// 当动画播放结束的时候触发仅针对UIWindow有效果
    /// </summary>
    public virtual void OnEnter()
    {
    }

    /// <summary>
    /// 当动画播放结束的时候触发仅针对UIWindow有效果
    /// </summary>
    public virtual void OnExit()
    {
    }

    /// <summary>
    /// 当界面处在最上层的时候被响应
    /// </summary>
    public virtual void OnFocus()
    {
    }

    /// <summary>
    /// 当界面从最上层移出时响应
    /// </summary>
    public virtual void OnLostFocus()
    {
    }

    #endregion

    #region Base

    public void BaseStart(IUIParams p)
    {
        if (!Widget.DontFullScreen)
        {
            // ReSharper disable once CompareOfFloatsByEqualityOperator
            if (GComponent.width == 1920 && GComponent.height == 1080)
            {
                if (Window != null)
                {
                    Window.MakeFullScreen();
                }
                else
                {
                    GComponent.MakeFullScreen();
                }
            }
        }

        OnInit(p);
    }

    public void BaseEnable(IUIParams p)
    {
        bool refresh = Active == false;
        Active = true;
        OnEnable(p, refresh);
    }

    public void BaseDisable()
    {
        bool refresh = Active;
        Active = false;
        if (Widget.Pool)
        {
            mOnClose?.Call(this);
        }

        RemoveAllEvent();
        OnDisable(refresh);
        OnClose.Call();
    }

    public void BaseDestroy()
    {
        if (!Widget.Pool) //不是池的话就不执行了因为是再同一帧里面执行的Disable和Destory.切换场景的时候会调用强制销毁有可能事件会被执行两次发生错误
        {
            mOnClose?.Call(this);
        }

        OnRelease();
    }

    #endregion

    #region Method

    /// <summary>
    /// 销毁自身
    /// </summary>
    public virtual void CloseMySelf()
    {
        Manager.Destroy(this);
    }

    /// <summary>
    /// 移动到目标组件下
    /// </summary>
    public void MoveTo(GComponent obj, int index = -1)
    {
        if (index == -1)
        {
            index = obj.numChildren - 1;
        }

        obj.AddChildAt(GComponent, index);
    }

    /// <summary>
    /// 标记Widget为已修改的
    /// </summary>
    public void MarkDirty()
    {
        if (mIsDirty == false)
        {
            mIsDirty = true;
            Widget = Widget.Clone();
        }
    }

    public void AddEvent<T>(MessageKit.EventDelegate<T> del) where T : IEventHandle
    {
        mEventHandle[typeof (T)] = del;
        Message.Add(del);
    }

    public void AddEvent(EventKey key, Action action)
    {
        mKeyEvent[key] = action;
        Message.Add(key, action);
    }

    public void RemoveEvent<T>(MessageKit.EventDelegate<T> del) where T : IEventHandle
    {
        mEventHandle.Remove(typeof (T));
        Message.Remove(del);
    }

    public void RemoveEvent(EventKey key, Action action)
    {
        mKeyEvent.Remove(key);
        Message.Remove(key, action);
    }

    private void RemoveAllEvent()
    {
        MethodInfo method = null;
        foreach (var node in GetType().GetMethods(BindingFlags.Public | BindingFlags.Instance))
        {
            if (node.Name == "RemoveEvent" && node.IsGenericMethod)
            {
                method = node;
            }
        }

        Dictionary<Type, object> eventHandleTmp = new Dictionary<Type, object>(mEventHandle);
        foreach (var node in eventHandleTmp)
        {
            method.MakeGenericMethod(node.Key).Invoke(this, new[] { node.Value });
        }

        Dictionary<EventKey, Action> keyEventTmp = new Dictionary<EventKey, Action>(mKeyEvent);
        foreach (var node in keyEventTmp)
        {
            RemoveEvent(node.Key, node.Value);
        }
    }

    #endregion
}

/// <summary>
/// MVVM架构中得基本UI组件
/// M代表Model即数据层(该类阉割了这部分代码,因为有的人习惯将简单得数据写在ViewModel层)
/// V代表FairyGUI生成出来得代码.即显示层
/// 我们现在继承得这个类即ViewModel层.负责将双边得数据链接再一起.
/// </summary>
/// <typeparam name="T">View</typeparam>
public abstract class UIBase<T>: UIBase where T : GComponent
{
    /// <summary>
    /// UI数据接口
    /// </summary>
    public T View;

    private const string CreateInstanceMethodName = "CreateInstance";

    private delegate T CreateInstance();

    private static readonly CreateInstance mCreateInstance;

    static UIBase()
    {
        var t = typeof (T);
        var method = t.GetMethod(CreateInstanceMethodName, BindingFlags.Static | BindingFlags.Public);
        mCreateInstance = (CreateInstance) method.CreateDelegate(typeof (CreateInstance));
    }

    protected UIBase()
    {
        Init(mCreateInstance());
    }

    public UIBase(T wrapper)
    {
        Init(wrapper);
    }

    private void Init(T wrapper)
    {
        View = wrapper;
        GComponent = wrapper;
        View.fairyBatching = true;
        View.AddRelation(GRoot.inst, RelationType.Size);
        Name = GComponent.packageItem?.name;
        AutoSet();
        OnLoaded();
    }

    private void AutoSet()
    {
#if MINISTONE
        var help = View.GetChild("Help") as GButton;
        if(help != null)
            help.onClick.Set(() =>OpenHelp());
#endif
        var close = View.GetChild("Close");
        close?.onClick.Set(CloseMySelf);
    }

    protected virtual void OnLoaded()
    {
    }
}

/// <summary>
/// 基本UI组件(ViewModel层)
/// </summary>
/// <typeparam name="T">View</typeparam>
/// <typeparam name="M">Model</typeparam>
public class UIBase<T, M>: UIBase<T> where T : GComponent
        where M : IUIModel, new()
{
    public M Model;

    /// <summary>
    /// 不要重写这个函数.如果要重写也请调用base.OnLoaded()
    /// </summary>
    protected override void OnLoaded()
    {
        base.OnLoaded();
        Model = new M();
    }
}