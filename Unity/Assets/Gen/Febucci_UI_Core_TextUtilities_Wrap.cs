
using System;
namespace PuertsStaticWrap
{
    public static class Febucci_UI_Core_TextUtilities_Wrap
    {
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to Febucci.UI.Core.TextUtilities constructor");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
            return IntPtr.Zero;
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_RotateAround(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Vector2>(false);
                        var Arg2 = argHelper2.GetFloat(false);
                        var result = Febucci.UI.Core.TextUtilities.RotateAround(Arg0,Arg1,Arg2);
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
        private static void F_MoveChar(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3[]>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                        Febucci.UI.Core.TextUtilities.MoveChar(Arg0,Arg1);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_SetChar(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3[]>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                        Febucci.UI.Core.TextUtilities.SetChar(Arg0,Arg1);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_LerpUnclamped(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                if (paramLen == 3)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3[]), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false))
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3[]>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                        var Arg2 = argHelper2.GetFloat(false);
                        Febucci.UI.Core.TextUtilities.LerpUnclamped(Arg0,Arg1,Arg2);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.Color32[]), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Color32), false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false))
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Color32[]>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Color32>(false);
                        var Arg2 = argHelper2.GetFloat(false);
                        Febucci.UI.Core.TextUtilities.LerpUnclamped(Arg0,Arg1,Arg2);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to LerpUnclamped");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_GetMiddlePos(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3[]>(false);
                        var result = Febucci.UI.Core.TextUtilities.GetMiddlePos(Arg0);
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
        private static void F_RotateChar(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                if (paramLen == 2)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3[]), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false))
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3[]>(false);
                        var Arg1 = argHelper1.GetFloat(false);
                        Febucci.UI.Core.TextUtilities.RotateChar(Arg0,Arg1);
                        return;
                    }
                }
                if (paramLen == 3)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3[]), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false))
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3[]>(false);
                        var Arg1 = argHelper1.GetFloat(false);
                        var Arg2 = argHelper2.Get<UnityEngine.Vector3>(false);
                        Febucci.UI.Core.TextUtilities.RotateChar(Arg0,Arg1,Arg2);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to RotateChar");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_SetColor(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Color32[]>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Color32>(false);
                        Febucci.UI.Core.TextUtilities.SetColor(Arg0,Arg1);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_CalculateCurveDuration(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.AnimationCurve>(false);
                        var result = Febucci.UI.Core.TextUtilities.CalculateCurveDuration(Arg0);
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_IsTagLongEnough(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    {
                        var Arg0 = argHelper0.GetString(false);
                        var result = Febucci.UI.Core.TextUtilities.IsTagLongEnough(Arg0);
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
        private static void G_verticesPerChar(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = Febucci.UI.Core.TextUtilities.verticesPerChar;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
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
                    { new Puerts.MethodKey {Name = "RotateAround", IsStatic = true}, F_RotateAround },
                    { new Puerts.MethodKey {Name = "MoveChar", IsStatic = true}, F_MoveChar },
                    { new Puerts.MethodKey {Name = "SetChar", IsStatic = true}, F_SetChar },
                    { new Puerts.MethodKey {Name = "LerpUnclamped", IsStatic = true}, F_LerpUnclamped },
                    { new Puerts.MethodKey {Name = "GetMiddlePos", IsStatic = true}, F_GetMiddlePos },
                    { new Puerts.MethodKey {Name = "RotateChar", IsStatic = true}, F_RotateChar },
                    { new Puerts.MethodKey {Name = "SetColor", IsStatic = true}, F_SetColor },
                    { new Puerts.MethodKey {Name = "CalculateCurveDuration", IsStatic = true}, F_CalculateCurveDuration },
                    { new Puerts.MethodKey {Name = "IsTagLongEnough", IsStatic = true}, F_IsTagLongEnough },
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    {"verticesPerChar", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_verticesPerChar, Setter = null} },
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