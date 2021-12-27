
using System;
namespace PuertsStaticWrap
{
    public static class Spine_Unity_MaterialChecks_Wrap
    {
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {
                {
                    {
                        var result = new Spine.Unity.MaterialChecks();
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(Spine.Unity.MaterialChecks), result);
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
        private static void F_IsMaterialSetupProblematic(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                if (paramLen == 2)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.Unity.SkeletonRenderer), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, true, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.Unity.SkeletonRenderer>(false);
                        var Arg1 = argHelper1.GetString(true);
                        var result = Spine.Unity.MaterialChecks.IsMaterialSetupProblematic(Arg0,ref Arg1);
                        argHelper1.SetByRefValue(Arg1);
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.Material), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, true, false))
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Material>(false);
                        var Arg1 = argHelper1.GetString(true);
                        var result = Spine.Unity.MaterialChecks.IsMaterialSetupProblematic(Arg0,ref Arg1);
                        argHelper1.SetByRefValue(Arg1);
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to IsMaterialSetupProblematic");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_IsZSpacingRequired(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Material>(false);
                        var Arg1 = argHelper1.GetString(true);
                        var result = Spine.Unity.MaterialChecks.IsZSpacingRequired(Arg0,ref Arg1);
                        argHelper1.SetByRefValue(Arg1);
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
        private static void F_IsColorSpaceSupported(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Material>(false);
                        var Arg1 = argHelper1.GetString(true);
                        var result = Spine.Unity.MaterialChecks.IsColorSpaceSupported(Arg0,ref Arg1);
                        argHelper1.SetByRefValue(Arg1);
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
        private static void F_UsesSpineShader(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Material>(false);
                        var result = Spine.Unity.MaterialChecks.UsesSpineShader(Arg0);
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
        private static void F_IsTextureSetupProblematic(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                    var argHelper4 = new Puerts.ArgumentHelper((int)data, isolate, info, 4);
                    var argHelper5 = new Puerts.ArgumentHelper((int)data, isolate, info, 5);
                    var argHelper6 = new Puerts.ArgumentHelper((int)data, isolate, info, 6);
                    var argHelper7 = new Puerts.ArgumentHelper((int)data, isolate, info, 7);
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Material>(false);
                        var Arg1 = (UnityEngine.ColorSpace)argHelper1.GetInt32(false);
                        var Arg2 = argHelper2.GetBoolean(false);
                        var Arg3 = argHelper3.GetBoolean(false);
                        var Arg4 = argHelper4.GetBoolean(false);
                        var Arg5 = argHelper5.GetString(false);
                        var Arg6 = argHelper6.GetString(false);
                        var Arg7 = argHelper7.GetString(true);
                        var result = Spine.Unity.MaterialChecks.IsTextureSetupProblematic(Arg0,Arg1,Arg2,Arg3,Arg4,Arg5,Arg6,ref Arg7);
                        argHelper7.SetByRefValue(Arg7);
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
        private static void F_EnablePMAAtMaterial(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Material>(false);
                        var Arg1 = argHelper1.GetBoolean(false);
                        Spine.Unity.MaterialChecks.EnablePMAAtMaterial(Arg0,Arg1);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_kPMANotSupportedLinearMessage(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = Spine.Unity.MaterialChecks.kPMANotSupportedLinearMessage;
                Puerts.PuertsDLL.ReturnString(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_kZSpacingRequiredMessage(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = Spine.Unity.MaterialChecks.kZSpacingRequiredMessage;
                Puerts.PuertsDLL.ReturnString(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_kZSpacingRecommendedMessage(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = Spine.Unity.MaterialChecks.kZSpacingRecommendedMessage;
                Puerts.PuertsDLL.ReturnString(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_kAddNormalsRequiredMessage(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = Spine.Unity.MaterialChecks.kAddNormalsRequiredMessage;
                Puerts.PuertsDLL.ReturnString(isolate, info, result);
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
                    { new Puerts.MethodKey {Name = "IsMaterialSetupProblematic", IsStatic = true}, F_IsMaterialSetupProblematic },
                    { new Puerts.MethodKey {Name = "IsZSpacingRequired", IsStatic = true}, F_IsZSpacingRequired },
                    { new Puerts.MethodKey {Name = "IsColorSpaceSupported", IsStatic = true}, F_IsColorSpaceSupported },
                    { new Puerts.MethodKey {Name = "UsesSpineShader", IsStatic = true}, F_UsesSpineShader },
                    { new Puerts.MethodKey {Name = "IsTextureSetupProblematic", IsStatic = true}, F_IsTextureSetupProblematic },
                    { new Puerts.MethodKey {Name = "EnablePMAAtMaterial", IsStatic = true}, F_EnablePMAAtMaterial },
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    {"kPMANotSupportedLinearMessage", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_kPMANotSupportedLinearMessage, Setter = null} },
                    {"kZSpacingRequiredMessage", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_kZSpacingRequiredMessage, Setter = null} },
                    {"kZSpacingRecommendedMessage", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_kZSpacingRecommendedMessage, Setter = null} },
                    {"kAddNormalsRequiredMessage", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_kAddNormalsRequiredMessage, Setter = null} },
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