public interface IUnityModule
{
    /// <summary>
    /// 除了创建的地方不要修改这个变量
    /// </summary>
    UnityObject BindTarget { get; set; }
}