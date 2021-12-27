
using System;
namespace PuertsStaticWrap
{
    public static class TMPro_HighlightState_Wrap
    {
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {
                if (paramLen == 2)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Color32), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(TMPro.TMP_Offset), false, false))
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Color32>(false);
                        var Arg1 = argHelper1.Get<TMPro.TMP_Offset>(false);
                        var result = new TMPro.HighlightState(Arg0,Arg1);
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(TMPro.HighlightState), result);
                    }
                }
                if (paramLen == 0)
                {
                    {
                        var result = new TMPro.HighlightState();
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(TMPro.HighlightState), result);
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to TMPro.HighlightState constructor");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
            return IntPtr.Zero;
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_GetHashCode(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (TMPro.HighlightState)Puerts.Utils.GetSelf((int)data, self);
                if (paramLen == 0)
                {
                    {
                        var result = obj.GetHashCode();
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to GetHashCode");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_Equals(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (TMPro.HighlightState)Puerts.Utils.GetSelf((int)data, self);
                if (paramLen == 1)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    if (argHelper0.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false))
                    {
                        var Arg0 = argHelper0.Get<System.Object>(false);
                        var result = obj.Equals(Arg0);
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(TMPro.HighlightState), false, false))
                    {
                        var Arg0 = argHelper0.Get<TMPro.HighlightState>(false);
                        var result = obj.Equals(Arg0);
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to Equals");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_color(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (TMPro.HighlightState)Puerts.Utils.GetSelf((int)data, self);
                var result = obj.color;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_color(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (TMPro.HighlightState)Puerts.Utils.GetSelf((int)data, self);
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.color = argHelper.Get<UnityEngine.Color32>(false);
                Puerts.Utils.SetSelf((int)data, self, obj);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_padding(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (TMPro.HighlightState)Puerts.Utils.GetSelf((int)data, self);
                var result = obj.padding;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_padding(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (TMPro.HighlightState)Puerts.Utils.GetSelf((int)data, self);
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.padding = argHelper.Get<TMPro.TMP_Offset>(false);
                Puerts.Utils.SetSelf((int)data, self, obj);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void O_op_Equality(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    {
                        var arg0 = argHelper0.Get<TMPro.HighlightState>(false);
                        var arg1 = argHelper1.Get<TMPro.HighlightState>(false);
                        var result = arg0 == arg1;
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void O_op_Inequality(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    {
                        var arg0 = argHelper0.Get<TMPro.HighlightState>(false);
                        var arg1 = argHelper1.Get<TMPro.HighlightState>(false);
                        var result = arg0 != arg1;
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
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
                    { new Puerts.MethodKey {Name = "GetHashCode", IsStatic = false}, M_GetHashCode },
                    { new Puerts.MethodKey {Name = "Equals", IsStatic = false}, M_Equals },
                    { new Puerts.MethodKey {Name = "op_Equality", IsStatic = true}, O_op_Equality },
                    { new Puerts.MethodKey {Name = "op_Inequality", IsStatic = true}, O_op_Inequality },
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    {"color", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_color, Setter = S_color} },
                    {"padding", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_padding, Setter = S_padding} },
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