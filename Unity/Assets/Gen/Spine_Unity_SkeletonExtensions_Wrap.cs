
using System;
namespace PuertsStaticWrap
{
    public static class Spine_Unity_SkeletonExtensions_Wrap
    {
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to Spine.Unity.SkeletonExtensions constructor");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
            return IntPtr.Zero;
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_GetColor(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                if (paramLen == 1)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.Skeleton), false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.Skeleton>(false);
                        var result = Spine.Unity.SkeletonExtensions.GetColor(Arg0);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.RegionAttachment), false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.RegionAttachment>(false);
                        var result = Spine.Unity.SkeletonExtensions.GetColor(Arg0);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.MeshAttachment), false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.MeshAttachment>(false);
                        var result = Spine.Unity.SkeletonExtensions.GetColor(Arg0);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.Slot), false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.Slot>(false);
                        var result = Spine.Unity.SkeletonExtensions.GetColor(Arg0);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to GetColor");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_GetColorTintBlack(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    {
                        var Arg0 = argHelper0.Get<Spine.Slot>(false);
                        var result = Spine.Unity.SkeletonExtensions.GetColorTintBlack(Arg0);
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
        private static void F_SetColor(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                if (paramLen == 2)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.Skeleton), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Color), false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.Skeleton>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Color>(false);
                        Spine.Unity.SkeletonExtensions.SetColor(Arg0,Arg1);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.Skeleton), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Color32), false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.Skeleton>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Color32>(false);
                        Spine.Unity.SkeletonExtensions.SetColor(Arg0,Arg1);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.Slot), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Color), false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.Slot>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Color>(false);
                        Spine.Unity.SkeletonExtensions.SetColor(Arg0,Arg1);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.Slot), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Color32), false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.Slot>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Color32>(false);
                        Spine.Unity.SkeletonExtensions.SetColor(Arg0,Arg1);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.RegionAttachment), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Color), false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.RegionAttachment>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Color>(false);
                        Spine.Unity.SkeletonExtensions.SetColor(Arg0,Arg1);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.RegionAttachment), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Color32), false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.RegionAttachment>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Color32>(false);
                        Spine.Unity.SkeletonExtensions.SetColor(Arg0,Arg1);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.MeshAttachment), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Color), false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.MeshAttachment>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Color>(false);
                        Spine.Unity.SkeletonExtensions.SetColor(Arg0,Arg1);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.MeshAttachment), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Color32), false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.MeshAttachment>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Color32>(false);
                        Spine.Unity.SkeletonExtensions.SetColor(Arg0,Arg1);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to SetColor");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_SetLocalScale(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    {
                        var Arg0 = argHelper0.Get<Spine.Skeleton>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Vector2>(false);
                        Spine.Unity.SkeletonExtensions.SetLocalScale(Arg0,Arg1);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_GetMatrix4x4(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    {
                        var Arg0 = argHelper0.Get<Spine.Bone>(false);
                        var result = Spine.Unity.SkeletonExtensions.GetMatrix4x4(Arg0);
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
        private static void F_SetLocalPosition(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                if (paramLen == 2)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.Bone), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector2), false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.Bone>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Vector2>(false);
                        Spine.Unity.SkeletonExtensions.SetLocalPosition(Arg0,Arg1);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.Bone), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.Bone>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                        Spine.Unity.SkeletonExtensions.SetLocalPosition(Arg0,Arg1);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to SetLocalPosition");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_GetLocalPosition(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    {
                        var Arg0 = argHelper0.Get<Spine.Bone>(false);
                        var result = Spine.Unity.SkeletonExtensions.GetLocalPosition(Arg0);
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
        private static void F_GetSkeletonSpacePosition(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                if (paramLen == 1)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.Bone), false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.Bone>(false);
                        var result = Spine.Unity.SkeletonExtensions.GetSkeletonSpacePosition(Arg0);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                }
                if (paramLen == 2)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.Bone), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector2), false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.Bone>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Vector2>(false);
                        var result = Spine.Unity.SkeletonExtensions.GetSkeletonSpacePosition(Arg0,Arg1);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to GetSkeletonSpacePosition");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_GetWorldPosition(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                if (paramLen == 2)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.Bone), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.Transform), false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.Bone>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Transform>(false);
                        var result = Spine.Unity.SkeletonExtensions.GetWorldPosition(Arg0,Arg1);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                }
                if (paramLen == 3)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.Bone), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.Transform), false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.Bone>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Transform>(false);
                        var Arg2 = argHelper2.GetFloat(false);
                        var result = Spine.Unity.SkeletonExtensions.GetWorldPosition(Arg0,Arg1,Arg2);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.PointAttachment), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.Slot), false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.Transform), false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.PointAttachment>(false);
                        var Arg1 = argHelper1.Get<Spine.Slot>(false);
                        var Arg2 = argHelper2.Get<UnityEngine.Transform>(false);
                        var result = Spine.Unity.SkeletonExtensions.GetWorldPosition(Arg0,Arg1,Arg2);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.PointAttachment), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.Bone), false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.Transform), false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.PointAttachment>(false);
                        var Arg1 = argHelper1.Get<Spine.Bone>(false);
                        var Arg2 = argHelper2.Get<UnityEngine.Transform>(false);
                        var result = Spine.Unity.SkeletonExtensions.GetWorldPosition(Arg0,Arg1,Arg2);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to GetWorldPosition");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_GetQuaternion(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    {
                        var Arg0 = argHelper0.Get<Spine.Bone>(false);
                        var result = Spine.Unity.SkeletonExtensions.GetQuaternion(Arg0);
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
        private static void F_GetLocalQuaternion(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    {
                        var Arg0 = argHelper0.Get<Spine.Bone>(false);
                        var result = Spine.Unity.SkeletonExtensions.GetLocalQuaternion(Arg0);
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
        private static void F_GetLocalScale(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    {
                        var Arg0 = argHelper0.Get<Spine.Skeleton>(false);
                        var result = Spine.Unity.SkeletonExtensions.GetLocalScale(Arg0);
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
        private static void F_GetWorldToLocalMatrix(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                    var argHelper4 = new Puerts.ArgumentHelper((int)data, isolate, info, 4);
                    {
                        var Arg0 = argHelper0.Get<Spine.Bone>(false);
                        var Arg1 = argHelper1.GetFloat(true);
                        var Arg2 = argHelper2.GetFloat(true);
                        var Arg3 = argHelper3.GetFloat(true);
                        var Arg4 = argHelper4.GetFloat(true);
                        Spine.Unity.SkeletonExtensions.GetWorldToLocalMatrix(Arg0,out Arg1,out Arg2,out Arg3,out Arg4);
                        argHelper1.SetByRefValue(Arg1);
                        argHelper2.SetByRefValue(Arg2);
                        argHelper3.SetByRefValue(Arg3);
                        argHelper4.SetByRefValue(Arg4);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_WorldToLocal(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    {
                        var Arg0 = argHelper0.Get<Spine.Bone>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Vector2>(false);
                        var result = Spine.Unity.SkeletonExtensions.WorldToLocal(Arg0,Arg1);
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
        private static void F_SetPositionSkeletonSpace(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    {
                        var Arg0 = argHelper0.Get<Spine.Bone>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.Vector2>(false);
                        var result = Spine.Unity.SkeletonExtensions.SetPositionSkeletonSpace(Arg0,Arg1);
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
        private static void F_GetMaterial(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    {
                        var Arg0 = argHelper0.Get<Spine.Attachment>(false);
                        var result = Spine.Unity.SkeletonExtensions.GetMaterial(Arg0);
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
        private static void F_GetLocalVertices(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    {
                        var Arg0 = argHelper0.Get<Spine.VertexAttachment>(false);
                        var Arg1 = argHelper1.Get<Spine.Slot>(false);
                        var Arg2 = argHelper2.Get<UnityEngine.Vector2[]>(false);
                        var result = Spine.Unity.SkeletonExtensions.GetLocalVertices(Arg0,Arg1,Arg2);
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
        private static void F_GetWorldVertices(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    {
                        var Arg0 = argHelper0.Get<Spine.VertexAttachment>(false);
                        var Arg1 = argHelper1.Get<Spine.Slot>(false);
                        var Arg2 = argHelper2.Get<UnityEngine.Vector2[]>(false);
                        var result = Spine.Unity.SkeletonExtensions.GetWorldVertices(Arg0,Arg1,Arg2);
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
                    { new Puerts.MethodKey {Name = "GetColor", IsStatic = true}, F_GetColor },
                    { new Puerts.MethodKey {Name = "GetColorTintBlack", IsStatic = true}, F_GetColorTintBlack },
                    { new Puerts.MethodKey {Name = "SetColor", IsStatic = true}, F_SetColor },
                    { new Puerts.MethodKey {Name = "SetLocalScale", IsStatic = true}, F_SetLocalScale },
                    { new Puerts.MethodKey {Name = "GetMatrix4x4", IsStatic = true}, F_GetMatrix4x4 },
                    { new Puerts.MethodKey {Name = "SetLocalPosition", IsStatic = true}, F_SetLocalPosition },
                    { new Puerts.MethodKey {Name = "GetLocalPosition", IsStatic = true}, F_GetLocalPosition },
                    { new Puerts.MethodKey {Name = "GetSkeletonSpacePosition", IsStatic = true}, F_GetSkeletonSpacePosition },
                    { new Puerts.MethodKey {Name = "GetWorldPosition", IsStatic = true}, F_GetWorldPosition },
                    { new Puerts.MethodKey {Name = "GetQuaternion", IsStatic = true}, F_GetQuaternion },
                    { new Puerts.MethodKey {Name = "GetLocalQuaternion", IsStatic = true}, F_GetLocalQuaternion },
                    { new Puerts.MethodKey {Name = "GetLocalScale", IsStatic = true}, F_GetLocalScale },
                    { new Puerts.MethodKey {Name = "GetWorldToLocalMatrix", IsStatic = true}, F_GetWorldToLocalMatrix },
                    { new Puerts.MethodKey {Name = "WorldToLocal", IsStatic = true}, F_WorldToLocal },
                    { new Puerts.MethodKey {Name = "SetPositionSkeletonSpace", IsStatic = true}, F_SetPositionSkeletonSpace },
                    { new Puerts.MethodKey {Name = "GetMaterial", IsStatic = true}, F_GetMaterial },
                    { new Puerts.MethodKey {Name = "GetLocalVertices", IsStatic = true}, F_GetLocalVertices },
                    { new Puerts.MethodKey {Name = "GetWorldVertices", IsStatic = true}, F_GetWorldVertices },
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
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