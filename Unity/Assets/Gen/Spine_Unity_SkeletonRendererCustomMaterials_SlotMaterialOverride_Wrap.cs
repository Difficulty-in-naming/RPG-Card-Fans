
using System;
namespace PuertsStaticWrap
{
    public static class Spine_Unity_SkeletonRendererCustomMaterials_SlotMaterialOverride_Wrap
    {
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {
                {
                    {
                        var result = new Spine.Unity.SkeletonRendererCustomMaterials.SlotMaterialOverride();
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(Spine.Unity.SkeletonRendererCustomMaterials.SlotMaterialOverride), result);
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
        private static void M_Equals(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (Spine.Unity.SkeletonRendererCustomMaterials.SlotMaterialOverride)Puerts.Utils.GetSelf((int)data, self);
                if (paramLen == 1)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(Spine.Unity.SkeletonRendererCustomMaterials.SlotMaterialOverride), false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.Unity.SkeletonRendererCustomMaterials.SlotMaterialOverride>(false);
                        var result = obj.Equals(Arg0);
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false))
                    {
                        var Arg0 = argHelper0.Get<System.Object>(false);
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
        private static void G_overrideDisabled(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (Spine.Unity.SkeletonRendererCustomMaterials.SlotMaterialOverride)Puerts.Utils.GetSelf((int)data, self);
                var result = obj.overrideDisabled;
                Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_overrideDisabled(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (Spine.Unity.SkeletonRendererCustomMaterials.SlotMaterialOverride)Puerts.Utils.GetSelf((int)data, self);
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.overrideDisabled = argHelper.GetBoolean(false);
                Puerts.Utils.SetSelf((int)data, self, obj);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_slotName(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (Spine.Unity.SkeletonRendererCustomMaterials.SlotMaterialOverride)Puerts.Utils.GetSelf((int)data, self);
                var result = obj.slotName;
                Puerts.PuertsDLL.ReturnString(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_slotName(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (Spine.Unity.SkeletonRendererCustomMaterials.SlotMaterialOverride)Puerts.Utils.GetSelf((int)data, self);
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.slotName = argHelper.GetString(false);
                Puerts.Utils.SetSelf((int)data, self, obj);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_material(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (Spine.Unity.SkeletonRendererCustomMaterials.SlotMaterialOverride)Puerts.Utils.GetSelf((int)data, self);
                var result = obj.material;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_material(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (Spine.Unity.SkeletonRendererCustomMaterials.SlotMaterialOverride)Puerts.Utils.GetSelf((int)data, self);
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.material = argHelper.Get<UnityEngine.Material>(false);
                Puerts.Utils.SetSelf((int)data, self, obj);
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
                    { new Puerts.MethodKey {Name = "Equals", IsStatic = false}, M_Equals },
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    {"overrideDisabled", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_overrideDisabled, Setter = S_overrideDisabled} },
                    {"slotName", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_slotName, Setter = S_slotName} },
                    {"material", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_material, Setter = S_material} },
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