
using System;
namespace PuertsStaticWrap
{
    public static class Spine_Unity_WaitForSpineEvent_Wrap
    {
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {
                if (paramLen == 3)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.AnimationState), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.EventData), false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.AnimationState>(false);
                        var Arg1 = argHelper1.Get<Spine.EventData>(false);
                        var Arg2 = argHelper2.GetBoolean(false);
                        var result = new Spine.Unity.WaitForSpineEvent(Arg0,Arg1,Arg2);
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(Spine.Unity.WaitForSpineEvent), result);
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.Unity.SkeletonAnimation), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.EventData), false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.Unity.SkeletonAnimation>(false);
                        var Arg1 = argHelper1.Get<Spine.EventData>(false);
                        var Arg2 = argHelper2.GetBoolean(false);
                        var result = new Spine.Unity.WaitForSpineEvent(Arg0,Arg1,Arg2);
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(Spine.Unity.WaitForSpineEvent), result);
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.AnimationState), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.AnimationState>(false);
                        var Arg1 = argHelper1.GetString(false);
                        var Arg2 = argHelper2.GetBoolean(false);
                        var result = new Spine.Unity.WaitForSpineEvent(Arg0,Arg1,Arg2);
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(Spine.Unity.WaitForSpineEvent), result);
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.Unity.SkeletonAnimation), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.Unity.SkeletonAnimation>(false);
                        var Arg1 = argHelper1.GetString(false);
                        var Arg2 = argHelper2.GetBoolean(false);
                        var result = new Spine.Unity.WaitForSpineEvent(Arg0,Arg1,Arg2);
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(Spine.Unity.WaitForSpineEvent), result);
                    }
                }
                if (paramLen == 2)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.AnimationState), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.EventData), false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.AnimationState>(false);
                        var Arg1 = argHelper1.Get<Spine.EventData>(false);
                        var result = new Spine.Unity.WaitForSpineEvent(Arg0,Arg1);
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(Spine.Unity.WaitForSpineEvent), result);
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.Unity.SkeletonAnimation), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.EventData), false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.Unity.SkeletonAnimation>(false);
                        var Arg1 = argHelper1.Get<Spine.EventData>(false);
                        var result = new Spine.Unity.WaitForSpineEvent(Arg0,Arg1);
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(Spine.Unity.WaitForSpineEvent), result);
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.AnimationState), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.AnimationState>(false);
                        var Arg1 = argHelper1.GetString(false);
                        var result = new Spine.Unity.WaitForSpineEvent(Arg0,Arg1);
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(Spine.Unity.WaitForSpineEvent), result);
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.Unity.SkeletonAnimation), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.Unity.SkeletonAnimation>(false);
                        var Arg1 = argHelper1.GetString(false);
                        var result = new Spine.Unity.WaitForSpineEvent(Arg0,Arg1);
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(Spine.Unity.WaitForSpineEvent), result);
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to Spine.Unity.WaitForSpineEvent constructor");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
            return IntPtr.Zero;
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_NowWaitFor(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.WaitForSpineEvent;
                if (paramLen == 3)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.AnimationState), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.EventData), false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.AnimationState>(false);
                        var Arg1 = argHelper1.Get<Spine.EventData>(false);
                        var Arg2 = argHelper2.GetBoolean(false);
                        var result = obj.NowWaitFor(Arg0,Arg1,Arg2);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.AnimationState), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.AnimationState>(false);
                        var Arg1 = argHelper1.GetString(false);
                        var Arg2 = argHelper2.GetBoolean(false);
                        var result = obj.NowWaitFor(Arg0,Arg1,Arg2);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                }
                if (paramLen == 2)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.AnimationState), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.EventData), false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.AnimationState>(false);
                        var Arg1 = argHelper1.Get<Spine.EventData>(false);
                        var result = obj.NowWaitFor(Arg0,Arg1);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.AnimationState), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.AnimationState>(false);
                        var Arg1 = argHelper1.GetString(false);
                        var result = obj.NowWaitFor(Arg0,Arg1);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to NowWaitFor");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_WillUnsubscribeAfterFiring(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.WaitForSpineEvent;
                var result = obj.WillUnsubscribeAfterFiring;
                Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_WillUnsubscribeAfterFiring(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.WaitForSpineEvent;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.WillUnsubscribeAfterFiring = argHelper.GetBoolean(false);
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
                    { new Puerts.MethodKey {Name = "NowWaitFor", IsStatic = false}, M_NowWaitFor },
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    {"WillUnsubscribeAfterFiring", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_WillUnsubscribeAfterFiring, Setter = S_WillUnsubscribeAfterFiring} },
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