public static class UnityModuleExt
{
    public static void Dispose(this IUnityModule module)
    {
        module.BindTarget.DestoryModule(module);
    }
}