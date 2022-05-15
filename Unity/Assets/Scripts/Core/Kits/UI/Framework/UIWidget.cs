using System;

[AttributeUsage(AttributeTargets.Class)]
public class UIWidget: Attribute
{
    /// <summary>
    ///     自定义层级 (默认为10）
    /// </summary>
    public UIDeepEnum Depth = UIDeepEnum.Default;

    /// <summary>
    ///     切换场景的时候不销毁该界面
    ///     回退键也不会销毁
    /// </summary>
    public bool DontDestroyOnLoad;

    /// <summary>
    ///     不要自动全屏进行适配.
    ///     用于一些特殊情况
    /// </summary>
    public bool DontFullScreen;

    /// <summary>
    ///     设置了该标记的UI不会被放入堆栈当中
    ///     即调用RemoveFromParent的时候不会被移除
    /// </summary>
    public bool GetControl = false;

    /// <summary>
    ///     如果为True回退键不会关闭界面
    /// </summary>
    public bool IngoreBack;

    /// <summary>
    ///     当物体被销毁时第一时间压入池中(默认不开启池模式)
    /// </summary>
    public bool Pool;

    /// <summary>
    ///     是否可以重复创建(该选项默认关闭)
    /// </summary>
    public bool Repeat;

    /// <summary>
    ///     是否开启FairyBatch优化(该选项默认开启)
    /// </summary>
    public bool Optimize = true;

    /// <summary>
    ///     是否显示黑底界面
    /// </summary>
    public bool Background = false;

    /// <summary>
    ///     默认参数
    /// </summary>
    public static UIWidget Default { get; } = new UIWidget();


    public virtual UIWidget Clone()
    {
        return new UIWidget
        {
            Pool = Pool,
            Depth = Depth,
            DontFullScreen = DontFullScreen,
            DontDestroyOnLoad = DontDestroyOnLoad,
            Repeat = Repeat,
            IngoreBack = IngoreBack
        };
    }
}

[AttributeUsage(AttributeTargets.Class)]
public class UIBackgroundArgs: Attribute
{
    public Type Type { get; }
    public bool FollowMainAnim { get; }

    public UIBackgroundArgs(Type type)
    {
        Type = type;
    }
}

public class UIWindow: UIWidget
{
    /// <summary>
    ///     窗口打开时播放的动画(仅IsWindow为true的时候有效)
    /// </summary>
    public WindowAnimType Enter = WindowAnimType.None;

    /// <summary>
    ///     窗口关闭时播放的动画(仅当IsWindow为false的时候有效)
    /// </summary>
    public WindowAnimType Exit = WindowAnimType.None;

    public override UIWidget Clone()
    {
        return new UIWindow
        {
            Pool = Pool,
            Depth = Depth,
            DontFullScreen = DontFullScreen,
            DontDestroyOnLoad = DontDestroyOnLoad,
            Repeat = Repeat,
            IngoreBack = IngoreBack,
            Enter = Enter,
            Exit = Exit
        };
    }
}