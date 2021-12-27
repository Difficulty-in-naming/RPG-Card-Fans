
using System;
namespace PuertsStaticWrap
{
    public static class FairyGUI_EMRenderSupport_Wrap
    {
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {
                {
                    {
                        var result = new FairyGUI.EMRenderSupport();
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(FairyGUI.EMRenderSupport), result);
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
        private static void F_Add(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    {
                        var Arg0 = argHelper0.Get<FairyGUI.EMRenderTarget>(false);
                        FairyGUI.EMRenderSupport.Add(Arg0);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_Remove(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    {
                        var Arg0 = argHelper0.Get<FairyGUI.EMRenderTarget>(false);
                        FairyGUI.EMRenderSupport.Remove(Arg0);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_Update(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    {
                        FairyGUI.EMRenderSupport.Update();
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_Reload(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    {
                        FairyGUI.EMRenderSupport.Reload();
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_packageListReady(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = FairyGUI.EMRenderSupport.packageListReady;
                Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_hasTarget(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = FairyGUI.EMRenderSupport.hasTarget;
                Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_orderChanged(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = FairyGUI.EMRenderSupport.orderChanged;
                Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_orderChanged(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                FairyGUI.EMRenderSupport.orderChanged = argHelper.GetBoolean(false);
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
                    { new Puerts.MethodKey {Name = "Add", IsStatic = true}, F_Add },
                    { new Puerts.MethodKey {Name = "Remove", IsStatic = true}, F_Remove },
                    { new Puerts.MethodKey {Name = "Update", IsStatic = true}, F_Update },
                    { new Puerts.MethodKey {Name = "Reload", IsStatic = true}, F_Reload },
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    {"packageListReady", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_packageListReady, Setter = null} },
                    {"hasTarget", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_hasTarget, Setter = null} },
                    {"orderChanged", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_orderChanged, Setter = S_orderChanged} },
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