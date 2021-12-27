
using System;
namespace PuertsStaticWrap
{
    public static class Spine_Unity_MeshGenerator_Wrap
    {
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {
                {
                    {
                        var result = new Spine.Unity.MeshGenerator();
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(Spine.Unity.MeshGenerator), result);
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
        private static void F_GenerateSingleSubmeshInstruction(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    {
                        var Arg0 = argHelper0.Get<Spine.Unity.SkeletonRendererInstruction>(false);
                        var Arg1 = argHelper1.Get<Spine.Skeleton>(false);
                        var Arg2 = argHelper2.Get<UnityEngine.Material>(false);
                        Spine.Unity.MeshGenerator.GenerateSingleSubmeshInstruction(Arg0,Arg1,Arg2);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_RequiresMultipleSubmeshesByDrawOrder(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    {
                        var Arg0 = argHelper0.Get<Spine.Skeleton>(false);
                        var result = Spine.Unity.MeshGenerator.RequiresMultipleSubmeshesByDrawOrder(Arg0);
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
        private static void F_GenerateSkeletonRendererInstruction(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                if (paramLen == 6)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                    var argHelper4 = new Puerts.ArgumentHelper((int)data, isolate, info, 4);
                    var argHelper5 = new Puerts.ArgumentHelper((int)data, isolate, info, 5);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.Unity.SkeletonRendererInstruction), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.Skeleton), false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Collections.Generic.Dictionary<Spine.Slot, UnityEngine.Material>), false, false)
                        && argHelper3.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Collections.Generic.List<Spine.Slot>), false, false)
                        && argHelper4.IsMatch(Puerts.JsValueType.Boolean, null, false, false)
                        && argHelper5.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.Unity.SkeletonRendererInstruction>(false);
                        var Arg1 = argHelper1.Get<Spine.Skeleton>(false);
                        var Arg2 = argHelper2.Get<System.Collections.Generic.Dictionary<Spine.Slot, UnityEngine.Material>>(false);
                        var Arg3 = argHelper3.Get<System.Collections.Generic.List<Spine.Slot>>(false);
                        var Arg4 = argHelper4.GetBoolean(false);
                        var Arg5 = argHelper5.GetBoolean(false);
                        Spine.Unity.MeshGenerator.GenerateSkeletonRendererInstruction(Arg0,Arg1,Arg2,Arg3,Arg4,Arg5);
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
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.Unity.SkeletonRendererInstruction), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.Skeleton), false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Collections.Generic.Dictionary<Spine.Slot, UnityEngine.Material>), false, false)
                        && argHelper3.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Collections.Generic.List<Spine.Slot>), false, false)
                        && argHelper4.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.Unity.SkeletonRendererInstruction>(false);
                        var Arg1 = argHelper1.Get<Spine.Skeleton>(false);
                        var Arg2 = argHelper2.Get<System.Collections.Generic.Dictionary<Spine.Slot, UnityEngine.Material>>(false);
                        var Arg3 = argHelper3.Get<System.Collections.Generic.List<Spine.Slot>>(false);
                        var Arg4 = argHelper4.GetBoolean(false);
                        Spine.Unity.MeshGenerator.GenerateSkeletonRendererInstruction(Arg0,Arg1,Arg2,Arg3,Arg4);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to GenerateSkeletonRendererInstruction");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_TryReplaceMaterials(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    {
                        var Arg0 = argHelper0.Get<Spine.ExposedList<Spine.Unity.SubmeshInstruction>>(false);
                        var Arg1 = argHelper1.Get<System.Collections.Generic.Dictionary<UnityEngine.Material, UnityEngine.Material>>(false);
                        Spine.Unity.MeshGenerator.TryReplaceMaterials(Arg0,Arg1);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_Begin(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.MeshGenerator;
                {
                    {
                        obj.Begin();
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_AddSubmesh(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.MeshGenerator;
                if (paramLen == 2)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(Spine.Unity.SubmeshInstruction), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.Unity.SubmeshInstruction>(false);
                        var Arg1 = argHelper1.GetBoolean(false);
                        obj.AddSubmesh(Arg0,Arg1);
                        return;
                    }
                }
                if (paramLen == 1)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(Spine.Unity.SubmeshInstruction), false, false))
                    {
                        var Arg0 = argHelper0.Get<Spine.Unity.SubmeshInstruction>(false);
                        obj.AddSubmesh(Arg0);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to AddSubmesh");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_BuildMesh(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.MeshGenerator;
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    {
                        var Arg0 = argHelper0.Get<Spine.Unity.SkeletonRendererInstruction>(false);
                        var Arg1 = argHelper1.GetBoolean(false);
                        obj.BuildMesh(Arg0,Arg1);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_BuildMeshWithArrays(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.MeshGenerator;
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    {
                        var Arg0 = argHelper0.Get<Spine.Unity.SkeletonRendererInstruction>(false);
                        var Arg1 = argHelper1.GetBoolean(false);
                        obj.BuildMeshWithArrays(Arg0,Arg1);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_ScaleVertexData(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.MeshGenerator;
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    {
                        var Arg0 = argHelper0.GetFloat(false);
                        obj.ScaleVertexData(Arg0);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_FillVertexData(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.MeshGenerator;
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Mesh>(false);
                        obj.FillVertexData(Arg0);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_FillLateVertexData(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.MeshGenerator;
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Mesh>(false);
                        obj.FillLateVertexData(Arg0);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_FillTriangles(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.MeshGenerator;
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Mesh>(false);
                        obj.FillTriangles(Arg0);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_EnsureVertexCapacity(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.MeshGenerator;
                if (paramLen == 4)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.Boolean, null, false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.Boolean, null, false, false)
                        && argHelper3.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                    {
                        var Arg0 = argHelper0.GetInt32(false);
                        var Arg1 = argHelper1.GetBoolean(false);
                        var Arg2 = argHelper2.GetBoolean(false);
                        var Arg3 = argHelper3.GetBoolean(false);
                        obj.EnsureVertexCapacity(Arg0,Arg1,Arg2,Arg3);
                        return;
                    }
                }
                if (paramLen == 3)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.Boolean, null, false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                    {
                        var Arg0 = argHelper0.GetInt32(false);
                        var Arg1 = argHelper1.GetBoolean(false);
                        var Arg2 = argHelper2.GetBoolean(false);
                        obj.EnsureVertexCapacity(Arg0,Arg1,Arg2);
                        return;
                    }
                }
                if (paramLen == 2)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                    {
                        var Arg0 = argHelper0.GetInt32(false);
                        var Arg1 = argHelper1.GetBoolean(false);
                        obj.EnsureVertexCapacity(Arg0,Arg1);
                        return;
                    }
                }
                if (paramLen == 1)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false))
                    {
                        var Arg0 = argHelper0.GetInt32(false);
                        obj.EnsureVertexCapacity(Arg0);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to EnsureVertexCapacity");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_TrimExcess(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.MeshGenerator;
                {
                    {
                        obj.TrimExcess();
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_FillMeshLocal(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                if (paramLen == 2)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.Mesh), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.RegionAttachment), false, false))
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Mesh>(false);
                        var Arg1 = argHelper1.Get<Spine.RegionAttachment>(false);
                        Spine.Unity.MeshGenerator.FillMeshLocal(Arg0,Arg1);
                        return;
                    }
                }
                if (paramLen == 3)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.Mesh), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.MeshAttachment), false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.SkeletonData), false, false))
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Mesh>(false);
                        var Arg1 = argHelper1.Get<Spine.MeshAttachment>(false);
                        var Arg2 = argHelper2.Get<Spine.SkeletonData>(false);
                        Spine.Unity.MeshGenerator.FillMeshLocal(Arg0,Arg1,Arg2);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to FillMeshLocal");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_VertexCount(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.MeshGenerator;
                var result = obj.VertexCount;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_Buffers(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.MeshGenerator;
                var result = obj.Buffers;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_settings(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.MeshGenerator;
                var result = obj.settings;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_settings(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.MeshGenerator;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.settings = argHelper.Get<Spine.Unity.MeshGenerator.Settings>(false);
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
                    { new Puerts.MethodKey {Name = "GenerateSingleSubmeshInstruction", IsStatic = true}, F_GenerateSingleSubmeshInstruction },
                    { new Puerts.MethodKey {Name = "RequiresMultipleSubmeshesByDrawOrder", IsStatic = true}, F_RequiresMultipleSubmeshesByDrawOrder },
                    { new Puerts.MethodKey {Name = "GenerateSkeletonRendererInstruction", IsStatic = true}, F_GenerateSkeletonRendererInstruction },
                    { new Puerts.MethodKey {Name = "TryReplaceMaterials", IsStatic = true}, F_TryReplaceMaterials },
                    { new Puerts.MethodKey {Name = "Begin", IsStatic = false}, M_Begin },
                    { new Puerts.MethodKey {Name = "AddSubmesh", IsStatic = false}, M_AddSubmesh },
                    { new Puerts.MethodKey {Name = "BuildMesh", IsStatic = false}, M_BuildMesh },
                    { new Puerts.MethodKey {Name = "BuildMeshWithArrays", IsStatic = false}, M_BuildMeshWithArrays },
                    { new Puerts.MethodKey {Name = "ScaleVertexData", IsStatic = false}, M_ScaleVertexData },
                    { new Puerts.MethodKey {Name = "FillVertexData", IsStatic = false}, M_FillVertexData },
                    { new Puerts.MethodKey {Name = "FillLateVertexData", IsStatic = false}, M_FillLateVertexData },
                    { new Puerts.MethodKey {Name = "FillTriangles", IsStatic = false}, M_FillTriangles },
                    { new Puerts.MethodKey {Name = "EnsureVertexCapacity", IsStatic = false}, M_EnsureVertexCapacity },
                    { new Puerts.MethodKey {Name = "TrimExcess", IsStatic = false}, M_TrimExcess },
                    { new Puerts.MethodKey {Name = "FillMeshLocal", IsStatic = true}, F_FillMeshLocal },
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    {"VertexCount", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_VertexCount, Setter = null} },
                    {"Buffers", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_Buffers, Setter = null} },
                    {"settings", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_settings, Setter = S_settings} },
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