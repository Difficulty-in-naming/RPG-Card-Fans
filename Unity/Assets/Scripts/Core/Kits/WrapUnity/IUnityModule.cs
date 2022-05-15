public abstract class AUnityModule
{
    /// <summary>
    /// 除了创建的地方不要修改这个变量
    /// </summary>
    public UnityObject BindTarget { get; set; }

    public void OnAwake()
    {
    }

    public void OnDestroy()
    {
    }
}