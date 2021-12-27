
using System;
namespace PuertsStaticWrap
{
    public static class TMPro_TMPro_ExtensionMethods_Wrap
    {
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to TMPro.TMPro_ExtensionMethods constructor");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
            return IntPtr.Zero;
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_ArrayToString(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    {
                        var Arg0 = argHelper0.Get<System.Char[]>(false);
                        var result = TMPro.TMPro_ExtensionMethods.ArrayToString(Arg0);
                        Puerts.PuertsDLL.ReturnString(isolate, info, result);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_IntToString(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                if (paramLen == 1)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(int[]), false, false))
                    {
                        var Arg0 = argHelper0.Get<int[]>(false);
                        var result = TMPro.TMPro_ExtensionMethods.IntToString(Arg0);
                        Puerts.PuertsDLL.ReturnString(isolate, info, result);
                        return;
                    }
                }
                if (paramLen == 3)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(int[]), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false))
                    {
                        var Arg0 = argHelper0.Get<int[]>(false);
                        var Arg1 = argHelper1.GetInt32(false);
                        var Arg2 = argHelper2.GetInt32(false);
                        var result = TMPro.TMPro_ExtensionMethods.IntToString(Arg0,Arg1,Arg2);
                        Puerts.PuertsDLL.ReturnString(isolate, info, result);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to IntToString");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_Compare(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                if (paramLen == 2)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Color32), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Color32), false, false))
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Color32>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Color32>(false);
                        var result = TMPro.TMPro_ExtensionMethods.Compare(Arg0,Arg1);
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Color), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Color), false, false))
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Color>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Color>(false);
                        var result = TMPro.TMPro_ExtensionMethods.Compare(Arg0,Arg1);
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        return;
                    }
                }
                if (paramLen == 3)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false))
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                        var Arg2 = argHelper2.GetInt32(false);
                        var result = TMPro.TMPro_ExtensionMethods.Compare(Arg0,Arg1,Arg2);
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Quaternion), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Quaternion), false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false))
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Quaternion>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Quaternion>(false);
                        var Arg2 = argHelper2.GetInt32(false);
                        var result = TMPro.TMPro_ExtensionMethods.Compare(Arg0,Arg1,Arg2);
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to Compare");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_CompareRGB(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                if (paramLen == 2)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Color32), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Color32), false, false))
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Color32>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Color32>(false);
                        var result = TMPro.TMPro_ExtensionMethods.CompareRGB(Arg0,Arg1);
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Color), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Color), false, false))
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Color>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Color>(false);
                        var result = TMPro.TMPro_ExtensionMethods.CompareRGB(Arg0,Arg1);
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to CompareRGB");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_Multiply(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Color32>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Color32>(false);
                        var result = TMPro.TMPro_ExtensionMethods.Multiply(Arg0,Arg1);
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
        private static void F_Tint(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                if (paramLen == 2)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Color32), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Color32), false, false))
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Color32>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Color32>(false);
                        var result = TMPro.TMPro_ExtensionMethods.Tint(Arg0,Arg1);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Color32), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false))
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Color32>(false);
                        var Arg1 = argHelper1.GetFloat(false);
                        var result = TMPro.TMPro_ExtensionMethods.Tint(Arg0,Arg1);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to Tint");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_MinAlpha(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Color>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Color>(false);
                        var result = TMPro.TMPro_ExtensionMethods.MinAlpha(Arg0,Arg1);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
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
                    { new Puerts.MethodKey {Name = "ArrayToString", IsStatic = true}, F_ArrayToString },
                    { new Puerts.MethodKey {Name = "IntToString", IsStatic = true}, F_IntToString },
                    { new Puerts.MethodKey {Name = "Compare", IsStatic = true}, F_Compare },
                    { new Puerts.MethodKey {Name = "CompareRGB", IsStatic = true}, F_CompareRGB },
                    { new Puerts.MethodKey {Name = "Multiply", IsStatic = true}, F_Multiply },
                    { new Puerts.MethodKey {Name = "Tint", IsStatic = true}, F_Tint },
                    { new Puerts.MethodKey {Name = "MinAlpha", IsStatic = true}, F_MinAlpha },
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                },
                LazyMethods = new System.Collections.Generic.Dictionary<Puerts.MethodKey, Puerts.V8FunctionCallback>()
                {
                    { new Puerts.MethodKey {Name = "FindInstanceID", IsStatic = true},  null},
                },
                LazyProperties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                }
            };
        }
    }
}