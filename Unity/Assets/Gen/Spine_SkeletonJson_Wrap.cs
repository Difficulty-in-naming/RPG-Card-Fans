
using System;
namespace PuertsStaticWrap
{
    public static class Spine_SkeletonJson_Wrap
    {
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {
                if (paramLen >= 0)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.Atlas), false, false))
                    {
                        var Arg0 = argHelper0.GetParams<Spine.Atlas>(info, 0, paramLen);
                        var result = new Spine.SkeletonJson(Arg0);
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(Spine.SkeletonJson), result);
                    }
                }
                if (paramLen == 0)
                {
                    {
                        var result = new Spine.SkeletonJson();
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(Spine.SkeletonJson), result);
                    }
                }
                if (paramLen == 1)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.AttachmentLoader), false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.AttachmentLoader>(false);
                        var result = new Spine.SkeletonJson(Arg0);
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(Spine.SkeletonJson), result);
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to Spine.SkeletonJson constructor");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
            return IntPtr.Zero;
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_ReadSkeletonData(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.SkeletonJson;
                if (paramLen == 1)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false))
                    {
                        var Arg0 = argHelper0.GetString(false);
                        var result = obj.ReadSkeletonData(Arg0);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.IO.TextReader), false, false))
                    {
                        var Arg0 = argHelper0.Get<System.IO.TextReader>(false);
                        var result = obj.ReadSkeletonData(Arg0);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to ReadSkeletonData");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_Scale(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.SkeletonJson;
                var result = obj.Scale;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_Scale(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.SkeletonJson;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.Scale = argHelper.GetFloat(false);
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
                    { new Puerts.MethodKey {Name = "ReadSkeletonData", IsStatic = false}, M_ReadSkeletonData },
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    {"Scale", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_Scale, Setter = S_Scale} },
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