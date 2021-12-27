
using System;
namespace PuertsStaticWrap
{
    public static class TMPro_TMP_PackageUtilities_Wrap
    {
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {
                {
                    {
                        var result = new TMPro.TMP_PackageUtilities();
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(TMPro.TMP_PackageUtilities), result);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
            return IntPtr.Zero;
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_ImportProjectResourcesMenu(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    {
                        TMPro.TMP_PackageUtilities.ImportProjectResourcesMenu();
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_ImportExamplesContentMenu(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    {
                        TMPro.TMP_PackageUtilities.ImportExamplesContentMenu();
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        public static Puerts.TypeRegisterInfo GetRegisterInfo()
        {
            return new Puerts.TypeRegisterInfo()
            {
                BlittableCopy = false,
                Constructor = Constructor,
                Methods = new System.Collections.Generic.Dictionary<Puerts.MethodKey, Puerts.V8FunctionCallback>()
                {
                    { new Puerts.MethodKey {Name = "ImportProjectResourcesMenu", IsStatic = true}, F_ImportProjectResourcesMenu },
                    { new Puerts.MethodKey {Name = "ImportExamplesContentMenu", IsStatic = true}, F_ImportExamplesContentMenu },
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                },
                LazyMethods = new System.Collections.Generic.Dictionary<Puerts.MethodKey, Puerts.V8FunctionCallback>()
                {
                },
                LazyProperties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                }
            };
        }
    }
}