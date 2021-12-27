
using System;
namespace PuertsStaticWrap
{
    public static class FairyGUI_GTween_Wrap
    {
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {
                {
                    {
                        var result = new FairyGUI.GTween();
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(FairyGUI.GTween), result);
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
        private static void F_To(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                if (paramLen == 3)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false))
                    {
                        var Arg0 = argHelper0.GetFloat(false);
                        var Arg1 = argHelper1.GetFloat(false);
                        var Arg2 = argHelper2.GetFloat(false);
                        var result = FairyGUI.GTween.To(Arg0,Arg1,Arg2);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector2), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector2), false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false))
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Vector2>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Vector2>(false);
                        var Arg2 = argHelper2.GetFloat(false);
                        var result = FairyGUI.GTween.To(Arg0,Arg1,Arg2);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false))
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                        var Arg2 = argHelper2.GetFloat(false);
                        var result = FairyGUI.GTween.To(Arg0,Arg1,Arg2);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector4), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector4), false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false))
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Vector4>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Vector4>(false);
                        var Arg2 = argHelper2.GetFloat(false);
                        var result = FairyGUI.GTween.To(Arg0,Arg1,Arg2);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Color), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Color), false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false))
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Color>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Color>(false);
                        var Arg2 = argHelper2.GetFloat(false);
                        var result = FairyGUI.GTween.To(Arg0,Arg1,Arg2);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to To");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_ToDouble(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    {
                        var Arg0 = argHelper0.GetDouble(false);
                        var Arg1 = argHelper1.GetDouble(false);
                        var Arg2 = argHelper2.GetFloat(false);
                        var result = FairyGUI.GTween.ToDouble(Arg0,Arg1,Arg2);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_DelayedCall(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    {
                        var Arg0 = argHelper0.GetFloat(false);
                        var result = FairyGUI.GTween.DelayedCall(Arg0);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_Shake(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                        var Arg1 = argHelper1.GetFloat(false);
                        var Arg2 = argHelper2.GetFloat(false);
                        var result = FairyGUI.GTween.Shake(Arg0,Arg1,Arg2);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_IsTweening(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                if (paramLen == 1)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    if (argHelper0.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false))
                    {
                        var Arg0 = argHelper0.Get<System.Object>(false);
                        var result = FairyGUI.GTween.IsTweening(Arg0);
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        return;
                    }
                }
                if (paramLen == 2)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    if (argHelper0.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false))
                    {
                        var Arg0 = argHelper0.Get<System.Object>(false);
                        var Arg1 = (FairyGUI.TweenPropType)argHelper1.GetInt32(false);
                        var result = FairyGUI.GTween.IsTweening(Arg0,Arg1);
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to IsTweening");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_Kill(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                if (paramLen == 1)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    if (argHelper0.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false))
                    {
                        var Arg0 = argHelper0.Get<System.Object>(false);
                        FairyGUI.GTween.Kill(Arg0);
                        return;
                    }
                }
                if (paramLen == 2)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    if (argHelper0.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                    {
                        var Arg0 = argHelper0.Get<System.Object>(false);
                        var Arg1 = argHelper1.GetBoolean(false);
                        FairyGUI.GTween.Kill(Arg0,Arg1);
                        return;
                    }
                }
                if (paramLen == 3)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    if (argHelper0.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                    {
                        var Arg0 = argHelper0.Get<System.Object>(false);
                        var Arg1 = (FairyGUI.TweenPropType)argHelper1.GetInt32(false);
                        var Arg2 = argHelper2.GetBoolean(false);
                        FairyGUI.GTween.Kill(Arg0,Arg1,Arg2);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to Kill");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_GetTween(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                if (paramLen == 1)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    if (argHelper0.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false))
                    {
                        var Arg0 = argHelper0.Get<System.Object>(false);
                        var result = FairyGUI.GTween.GetTween(Arg0);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                }
                if (paramLen == 2)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    if (argHelper0.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false))
                    {
                        var Arg0 = argHelper0.Get<System.Object>(false);
                        var Arg1 = (FairyGUI.TweenPropType)argHelper1.GetInt32(false);
                        var result = FairyGUI.GTween.GetTween(Arg0,Arg1);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to GetTween");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_Clean(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    {
                        FairyGUI.GTween.Clean();
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_catchCallbackExceptions(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = FairyGUI.GTween.catchCallbackExceptions;
                Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_catchCallbackExceptions(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                FairyGUI.GTween.catchCallbackExceptions = argHelper.GetBoolean(false);
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
                    { new Puerts.MethodKey {Name = "To", IsStatic = true}, F_To },
                    { new Puerts.MethodKey {Name = "ToDouble", IsStatic = true}, F_ToDouble },
                    { new Puerts.MethodKey {Name = "DelayedCall", IsStatic = true}, F_DelayedCall },
                    { new Puerts.MethodKey {Name = "Shake", IsStatic = true}, F_Shake },
                    { new Puerts.MethodKey {Name = "IsTweening", IsStatic = true}, F_IsTweening },
                    { new Puerts.MethodKey {Name = "Kill", IsStatic = true}, F_Kill },
                    { new Puerts.MethodKey {Name = "GetTween", IsStatic = true}, F_GetTween },
                    { new Puerts.MethodKey {Name = "Clean", IsStatic = true}, F_Clean },
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    {"catchCallbackExceptions", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_catchCallbackExceptions, Setter = S_catchCallbackExceptions} },
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