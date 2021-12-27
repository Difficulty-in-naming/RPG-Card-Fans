
using System;
namespace PuertsStaticWrap
{
    public static class FairyGUI_GPath_Wrap
    {
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {
                {
                    {
                        var result = new FairyGUI.GPath();
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(FairyGUI.GPath), result);
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
        private static void M_Create(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.GPath;
                if (paramLen == 2)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(FairyGUI.GPathPoint), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(FairyGUI.GPathPoint), false, false))
                    {
                        var Arg0 = argHelper0.Get<FairyGUI.GPathPoint>(false);
                        var Arg1 = argHelper1.Get<FairyGUI.GPathPoint>(false);
                        obj.Create(Arg0,Arg1);
                        return;
                    }
                }
                if (paramLen == 3)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(FairyGUI.GPathPoint), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(FairyGUI.GPathPoint), false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(FairyGUI.GPathPoint), false, false))
                    {
                        var Arg0 = argHelper0.Get<FairyGUI.GPathPoint>(false);
                        var Arg1 = argHelper1.Get<FairyGUI.GPathPoint>(false);
                        var Arg2 = argHelper2.Get<FairyGUI.GPathPoint>(false);
                        obj.Create(Arg0,Arg1,Arg2);
                        return;
                    }
                }
                if (paramLen == 4)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(FairyGUI.GPathPoint), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(FairyGUI.GPathPoint), false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(FairyGUI.GPathPoint), false, false)
                        && argHelper3.IsMatch(Puerts.JsValueType.NativeObject, typeof(FairyGUI.GPathPoint), false, false))
                    {
                        var Arg0 = argHelper0.Get<FairyGUI.GPathPoint>(false);
                        var Arg1 = argHelper1.Get<FairyGUI.GPathPoint>(false);
                        var Arg2 = argHelper2.Get<FairyGUI.GPathPoint>(false);
                        var Arg3 = argHelper3.Get<FairyGUI.GPathPoint>(false);
                        obj.Create(Arg0,Arg1,Arg2,Arg3);
                        return;
                    }
                }
                if (paramLen == 1)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Collections.Generic.IEnumerable<FairyGUI.GPathPoint>), false, false))
                    {
                        var Arg0 = argHelper0.Get<System.Collections.Generic.IEnumerable<FairyGUI.GPathPoint>>(false);
                        obj.Create(Arg0);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to Create");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_Clear(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.GPath;
                {
                    {
                        obj.Clear();
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_GetPointAt(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.GPath;
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    {
                        var Arg0 = argHelper0.GetFloat(false);
                        var result = obj.GetPointAt(Arg0);
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
        private static void M_GetSegmentLength(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.GPath;
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    {
                        var Arg0 = argHelper0.GetInt32(false);
                        var result = obj.GetSegmentLength(Arg0);
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
        private static void M_GetPointsInSegment(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.GPath;
                if (paramLen == 6)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                    var argHelper4 = new Puerts.ArgumentHelper((int)data, isolate, info, 4);
                    var argHelper5 = new Puerts.ArgumentHelper((int)data, isolate, info, 5);
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper3.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Collections.Generic.List<UnityEngine.Vector3>), false, false)
                        && argHelper4.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Collections.Generic.List<float>), false, false)
                        && argHelper5.IsMatch(Puerts.JsValueType.Number, null, false, false))
                    {
                        var Arg0 = argHelper0.GetInt32(false);
                        var Arg1 = argHelper1.GetFloat(false);
                        var Arg2 = argHelper2.GetFloat(false);
                        var Arg3 = argHelper3.Get<System.Collections.Generic.List<UnityEngine.Vector3>>(false);
                        var Arg4 = argHelper4.Get<System.Collections.Generic.List<float>>(false);
                        var Arg5 = argHelper5.GetFloat(false);
                        obj.GetPointsInSegment(Arg0,Arg1,Arg2,Arg3,Arg4,Arg5);
                        return;
                    }
                }
                if (paramLen == 5)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                    var argHelper4 = new Puerts.ArgumentHelper((int)data, isolate, info, 4);
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper3.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Collections.Generic.List<UnityEngine.Vector3>), false, false)
                        && argHelper4.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Collections.Generic.List<float>), false, false))
                    {
                        var Arg0 = argHelper0.GetInt32(false);
                        var Arg1 = argHelper1.GetFloat(false);
                        var Arg2 = argHelper2.GetFloat(false);
                        var Arg3 = argHelper3.Get<System.Collections.Generic.List<UnityEngine.Vector3>>(false);
                        var Arg4 = argHelper4.Get<System.Collections.Generic.List<float>>(false);
                        obj.GetPointsInSegment(Arg0,Arg1,Arg2,Arg3,Arg4);
                        return;
                    }
                }
                if (paramLen == 4)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper3.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Collections.Generic.List<UnityEngine.Vector3>), false, false))
                    {
                        var Arg0 = argHelper0.GetInt32(false);
                        var Arg1 = argHelper1.GetFloat(false);
                        var Arg2 = argHelper2.GetFloat(false);
                        var Arg3 = argHelper3.Get<System.Collections.Generic.List<UnityEngine.Vector3>>(false);
                        obj.GetPointsInSegment(Arg0,Arg1,Arg2,Arg3);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to GetPointsInSegment");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_GetAllPoints(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.GPath;
                if (paramLen == 2)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Collections.Generic.List<UnityEngine.Vector3>), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false))
                    {
                        var Arg0 = argHelper0.Get<System.Collections.Generic.List<UnityEngine.Vector3>>(false);
                        var Arg1 = argHelper1.GetFloat(false);
                        obj.GetAllPoints(Arg0,Arg1);
                        return;
                    }
                }
                if (paramLen == 1)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Collections.Generic.List<UnityEngine.Vector3>), false, false))
                    {
                        var Arg0 = argHelper0.Get<System.Collections.Generic.List<UnityEngine.Vector3>>(false);
                        obj.GetAllPoints(Arg0);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to GetAllPoints");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_length(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.GPath;
                var result = obj.length;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_segmentCount(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.GPath;
                var result = obj.segmentCount;
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
                    { new Puerts.MethodKey {Name = "Create", IsStatic = false}, M_Create },
                    { new Puerts.MethodKey {Name = "Clear", IsStatic = false}, M_Clear },
                    { new Puerts.MethodKey {Name = "GetPointAt", IsStatic = false}, M_GetPointAt },
                    { new Puerts.MethodKey {Name = "GetSegmentLength", IsStatic = false}, M_GetSegmentLength },
                    { new Puerts.MethodKey {Name = "GetPointsInSegment", IsStatic = false}, M_GetPointsInSegment },
                    { new Puerts.MethodKey {Name = "GetAllPoints", IsStatic = false}, M_GetAllPoints },
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    {"length", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_length, Setter = null} },
                    {"segmentCount", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_segmentCount, Setter = null} },
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