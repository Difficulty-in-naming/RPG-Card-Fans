using FairyGUI;

public class BaseWindow: Window
{
    public UIBase Base { get; private set; }

    public BaseWindow(UIBase @base)
    {
        Base = @base;
    }

    protected override void OnInit()
    {
        base.OnInit();
    }

    protected override void DoShowAnimation()
    {
        OnCreate();
    }

    protected override void DoHideAnimation()
    {
        OnClose(false);
        //if (mBackground != null) mBackground.visible = false;
    }

    public virtual void OnClose(bool forceDestory)
    {
    }

    public virtual void OnCreate()
    {
        base.OnShown();
    }
}