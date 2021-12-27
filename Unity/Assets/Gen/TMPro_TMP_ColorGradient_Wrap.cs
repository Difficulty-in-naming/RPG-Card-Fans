
using System;
namespace PuertsStaticWrap
{
    public static class TMPro_TMP_ColorGradient_Wrap
    {
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {
                if (paramLen == 0)
                {
                    {
                        var result = new TMPro.TMP_ColorGradient();
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(TMPro.TMP_ColorGradient), result);
                    }
                }
                if (paramLen == 1)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Color), false, false))
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Color>(false);
                        var result = new TMPro.TMP_ColorGradient(Arg0);
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(TMPro.TMP_ColorGradient), result);
                    }
                }
                if (paramLen == 4)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Color), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Color), false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Color), false, false)
                        && argHelper3.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Color), false, false))
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Color>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Color>(false);
                        var Arg2 = argHelper2.Get<UnityEngine.Color>(false);
                        var Arg3 = argHelper3.Get<UnityEngine.Color>(false);
                        var result = new TMPro.TMP_ColorGradient(Arg0,Arg1,Arg2,Arg3);
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(TMPro.TMP_ColorGradient), result);
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to TMPro.TMP_ColorGradient constructor");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
            return IntPtr.Zero;
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_colorMode(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as TMPro.TMP_ColorGradient;
                var result = obj.colorMode;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, (int)result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_colorMode(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as TMPro.TMP_ColorGradient;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.colorMode = (TMPro.ColorMode)argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_topLeft(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as TMPro.TMP_ColorGradient;
                var result = obj.topLeft;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_topLeft(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as TMPro.TMP_ColorGradient;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.topLeft = argHelper.Get<UnityEngine.Color>(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_topRight(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as TMPro.TMP_ColorGradient;
                var result = obj.topRight;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_topRight(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as TMPro.TMP_ColorGradient;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.topRight = argHelper.Get<UnityEngine.Color>(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_bottomLeft(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as TMPro.TMP_ColorGradient;
                var result = obj.bottomLeft;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_bottomLeft(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as TMPro.TMP_ColorGradient;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.bottomLeft = argHelper.Get<UnityEngine.Color>(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_bottomRight(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as TMPro.TMP_ColorGradient;
                var result = obj.bottomRight;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_bottomRight(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as TMPro.TMP_ColorGradient;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.bottomRight = argHelper.Get<UnityEngine.Color>(false);
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
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    {"colorMode", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_colorMode, Setter = S_colorMode} },
                    {"topLeft", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_topLeft, Setter = S_topLeft} },
                    {"topRight", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_topRight, Setter = S_topRight} },
                    {"bottomLeft", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_bottomLeft, Setter = S_bottomLeft} },
                    {"bottomRight", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_bottomRight, Setter = S_bottomRight} },
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