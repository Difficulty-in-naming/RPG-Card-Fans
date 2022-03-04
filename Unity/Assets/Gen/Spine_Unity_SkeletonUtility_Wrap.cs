
using System;

namespace PuertsStaticWrap
{
    public static class Spine_Unity_SkeletonUtility_Wrap
    {

        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {

                {
            
                    {
                
                        var result = new Spine.Unity.SkeletonUtility();
                
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(Spine.Unity.SkeletonUtility), result);
                    
                    }
                
                }
            
    
            } catch (Exception e) {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
            return IntPtr.Zero;
        }
    
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_AddBoundingBoxGameObject(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
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
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.Skeleton), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false) && argHelper3.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false) && argHelper4.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.Transform), false, false) && argHelper5.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<Spine.Skeleton>(false);
                    
                        var Arg1 = argHelper1.GetString(false);
                    
                        var Arg2 = argHelper2.GetString(false);
                    
                        var Arg3 = argHelper3.GetString(false);
                    
                        var Arg4 = argHelper4.Get<UnityEngine.Transform>(false);
                    
                        var Arg5 = argHelper5.GetBoolean(false);
                    
                        var result = Spine.Unity.SkeletonUtility.AddBoundingBoxGameObject(Arg0, Arg1, Arg2, Arg3, Arg4, Arg5);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
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
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.Skeleton), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false) && argHelper3.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false) && argHelper4.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.Transform), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<Spine.Skeleton>(false);
                    
                        var Arg1 = argHelper1.GetString(false);
                    
                        var Arg2 = argHelper2.GetString(false);
                    
                        var Arg3 = argHelper3.GetString(false);
                    
                        var Arg4 = argHelper4.Get<UnityEngine.Transform>(false);
                    
                        var result = Spine.Unity.SkeletonUtility.AddBoundingBoxGameObject(Arg0, Arg1, Arg2, Arg3, Arg4);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false) && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.BoundingBoxAttachment), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.Slot), false, false) && argHelper3.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.Transform), false, false) && argHelper4.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetString(false);
                    
                        var Arg1 = argHelper1.Get<Spine.BoundingBoxAttachment>(false);
                    
                        var Arg2 = argHelper2.Get<Spine.Slot>(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.Transform>(false);
                    
                        var Arg4 = argHelper4.GetBoolean(false);
                    
                        var result = Spine.Unity.SkeletonUtility.AddBoundingBoxGameObject(Arg0, Arg1, Arg2, Arg3, Arg4);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 4)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false) && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.BoundingBoxAttachment), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.Slot), false, false) && argHelper3.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.Transform), false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetString(false);
                    
                        var Arg1 = argHelper1.Get<Spine.BoundingBoxAttachment>(false);
                    
                        var Arg2 = argHelper2.Get<Spine.Slot>(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.Transform>(false);
                    
                        var result = Spine.Unity.SkeletonUtility.AddBoundingBoxGameObject(Arg0, Arg1, Arg2, Arg3);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to AddBoundingBoxGameObject");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_AddBoundingBoxAsComponent(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 4)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.BoundingBoxAttachment), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.Slot), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.GameObject), false, false) && argHelper3.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<Spine.BoundingBoxAttachment>(false);
                    
                        var Arg1 = argHelper1.Get<Spine.Slot>(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.GameObject>(false);
                    
                        var Arg3 = argHelper3.GetBoolean(false);
                    
                        var result = Spine.Unity.SkeletonUtility.AddBoundingBoxAsComponent(Arg0, Arg1, Arg2, Arg3);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 3)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.BoundingBoxAttachment), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.Slot), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.GameObject), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<Spine.BoundingBoxAttachment>(false);
                    
                        var Arg1 = argHelper1.Get<Spine.Slot>(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.GameObject>(false);
                    
                        var result = Spine.Unity.SkeletonUtility.AddBoundingBoxAsComponent(Arg0, Arg1, Arg2);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to AddBoundingBoxAsComponent");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_SetColliderPointsLocal(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.PolygonCollider2D>(false);
                    
                        var Arg1 = argHelper1.Get<Spine.Slot>(false);
                    
                        var Arg2 = argHelper2.Get<Spine.BoundingBoxAttachment>(false);
                    
                        Spine.Unity.SkeletonUtility.SetColliderPointsLocal(Arg0, Arg1, Arg2);
                
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_GetBoundingBoxBounds(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.BoundingBoxAttachment), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<Spine.BoundingBoxAttachment>(false);
                    
                        var Arg1 = argHelper1.GetFloat(false);
                    
                        var result = Spine.Unity.SkeletonUtility.GetBoundingBoxBounds(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Spine.BoundingBoxAttachment), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<Spine.BoundingBoxAttachment>(false);
                    
                        var result = Spine.Unity.SkeletonUtility.GetBoundingBoxBounds(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to GetBoundingBoxBounds");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_AddBoneRigidbody2D(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 3)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.GameObject), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Boolean, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.GameObject>(false);
                    
                        var Arg1 = argHelper1.GetBoolean(false);
                    
                        var Arg2 = argHelper2.GetFloat(false);
                    
                        var result = Spine.Unity.SkeletonUtility.AddBoneRigidbody2D(Arg0, Arg1, Arg2);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.GameObject), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.GameObject>(false);
                    
                        var Arg1 = argHelper1.GetBoolean(false);
                    
                        var result = Spine.Unity.SkeletonUtility.AddBoneRigidbody2D(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.GameObject), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.GameObject>(false);
                    
                        var result = Spine.Unity.SkeletonUtility.AddBoneRigidbody2D(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to AddBoneRigidbody2D");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_ResubscribeEvents(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonUtility;
        
                {
            
                    {
                
                        obj.ResubscribeEvents();
                
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_RegisterBone(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonUtility;
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    {
                
                        var Arg0 = argHelper0.Get<Spine.Unity.SkeletonUtilityBone>(false);
                    
                        obj.RegisterBone(Arg0);
                
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_UnregisterBone(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonUtility;
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    {
                
                        var Arg0 = argHelper0.Get<Spine.Unity.SkeletonUtilityBone>(false);
                    
                        obj.UnregisterBone(Arg0);
                
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_RegisterConstraint(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonUtility;
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    {
                
                        var Arg0 = argHelper0.Get<Spine.Unity.SkeletonUtilityConstraint>(false);
                    
                        obj.RegisterConstraint(Arg0);
                
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_UnregisterConstraint(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonUtility;
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    {
                
                        var Arg0 = argHelper0.Get<Spine.Unity.SkeletonUtilityConstraint>(false);
                    
                        obj.UnregisterConstraint(Arg0);
                
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_CollectBones(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonUtility;
        
                {
            
                    {
                
                        obj.CollectBones();
                
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_GetBoneRoot(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonUtility;
        
                {
            
                    {
                
                        var result = obj.GetBoneRoot();
                
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
        private static void M_SpawnRoot(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonUtility;
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    {
                
                        var Arg0 = (Spine.Unity.SkeletonUtilityBone.Mode)argHelper0.GetInt32(false);
                    
                        var Arg1 = argHelper1.GetBoolean(false);
                    
                        var Arg2 = argHelper2.GetBoolean(false);
                    
                        var Arg3 = argHelper3.GetBoolean(false);
                    
                        var result = obj.SpawnRoot(Arg0, Arg1, Arg2, Arg3);
                
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
        private static void M_SpawnHierarchy(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonUtility;
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    {
                
                        var Arg0 = (Spine.Unity.SkeletonUtilityBone.Mode)argHelper0.GetInt32(false);
                    
                        var Arg1 = argHelper1.GetBoolean(false);
                    
                        var Arg2 = argHelper2.GetBoolean(false);
                    
                        var Arg3 = argHelper3.GetBoolean(false);
                    
                        var result = obj.SpawnHierarchy(Arg0, Arg1, Arg2, Arg3);
                
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
        private static void M_SpawnBoneRecursively(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonUtility;
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    var argHelper4 = new Puerts.ArgumentHelper((int)data, isolate, info, 4);
                
                    var argHelper5 = new Puerts.ArgumentHelper((int)data, isolate, info, 5);
                
                    {
                
                        var Arg0 = argHelper0.Get<Spine.Bone>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Transform>(false);
                    
                        var Arg2 = (Spine.Unity.SkeletonUtilityBone.Mode)argHelper2.GetInt32(false);
                    
                        var Arg3 = argHelper3.GetBoolean(false);
                    
                        var Arg4 = argHelper4.GetBoolean(false);
                    
                        var Arg5 = argHelper5.GetBoolean(false);
                    
                        var result = obj.SpawnBoneRecursively(Arg0, Arg1, Arg2, Arg3, Arg4, Arg5);
                
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
        private static void M_SpawnBone(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonUtility;
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    var argHelper4 = new Puerts.ArgumentHelper((int)data, isolate, info, 4);
                
                    var argHelper5 = new Puerts.ArgumentHelper((int)data, isolate, info, 5);
                
                    {
                
                        var Arg0 = argHelper0.Get<Spine.Bone>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Transform>(false);
                    
                        var Arg2 = (Spine.Unity.SkeletonUtilityBone.Mode)argHelper2.GetInt32(false);
                    
                        var Arg3 = argHelper3.GetBoolean(false);
                    
                        var Arg4 = argHelper4.GetBoolean(false);
                    
                        var Arg5 = argHelper5.GetBoolean(false);
                    
                        var result = obj.SpawnBone(Arg0, Arg1, Arg2, Arg3, Arg4, Arg5);
                
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
        private static void G_SkeletonComponent(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonUtility;
                var result = obj.SkeletonComponent;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_Skeleton(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonUtility;
                var result = obj.Skeleton;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_IsValid(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonUtility;
                var result = obj.IsValid;
                Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_PositionScale(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonUtility;
                var result = obj.PositionScale;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_boneRoot(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonUtility;
                var result = obj.boneRoot;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_boneRoot(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonUtility;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.boneRoot = argHelper.Get<UnityEngine.Transform>(false);
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_flipBy180DegreeRotation(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonUtility;
                var result = obj.flipBy180DegreeRotation;
                Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_flipBy180DegreeRotation(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonUtility;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.flipBy180DegreeRotation = argHelper.GetBoolean(false);
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_skeletonRenderer(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonUtility;
                var result = obj.skeletonRenderer;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_skeletonRenderer(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonUtility;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.skeletonRenderer = argHelper.Get<Spine.Unity.SkeletonRenderer>(false);
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_skeletonGraphic(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonUtility;
                var result = obj.skeletonGraphic;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_skeletonGraphic(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonUtility;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.skeletonGraphic = argHelper.Get<Spine.Unity.SkeletonGraphic>(false);
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_skeletonAnimation(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonUtility;
                var result = obj.skeletonAnimation;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_skeletonAnimation(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonUtility;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.skeletonAnimation = argHelper.Get<Spine.Unity.ISkeletonAnimation>(false);
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_boneComponents(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonUtility;
                var result = obj.boneComponents;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_boneComponents(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonUtility;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.boneComponents = argHelper.Get<System.Collections.Generic.List<Spine.Unity.SkeletonUtilityBone>>(false);
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_constraintComponents(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonUtility;
                var result = obj.constraintComponents;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_constraintComponents(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonUtility;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.constraintComponents = argHelper.Get<System.Collections.Generic.List<Spine.Unity.SkeletonUtilityConstraint>>(false);
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void A_OnReset(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonUtility;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.OnReset += argHelper.Get<Spine.Unity.SkeletonUtility.SkeletonUtilityDelegate>(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void R_OnReset(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonUtility;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.OnReset -= argHelper.Get<Spine.Unity.SkeletonUtility.SkeletonUtilityDelegate>(false);
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
                    { new Puerts.MethodKey {Name = "AddBoundingBoxGameObject", IsStatic = true}, F_AddBoundingBoxGameObject },
{ new Puerts.MethodKey {Name = "AddBoundingBoxAsComponent", IsStatic = true}, F_AddBoundingBoxAsComponent },
{ new Puerts.MethodKey {Name = "SetColliderPointsLocal", IsStatic = true}, F_SetColliderPointsLocal },
{ new Puerts.MethodKey {Name = "GetBoundingBoxBounds", IsStatic = true}, F_GetBoundingBoxBounds },
{ new Puerts.MethodKey {Name = "AddBoneRigidbody2D", IsStatic = true}, F_AddBoneRigidbody2D },
{ new Puerts.MethodKey {Name = "ResubscribeEvents", IsStatic = false}, M_ResubscribeEvents },
{ new Puerts.MethodKey {Name = "RegisterBone", IsStatic = false}, M_RegisterBone },
{ new Puerts.MethodKey {Name = "UnregisterBone", IsStatic = false}, M_UnregisterBone },
{ new Puerts.MethodKey {Name = "RegisterConstraint", IsStatic = false}, M_RegisterConstraint },
{ new Puerts.MethodKey {Name = "UnregisterConstraint", IsStatic = false}, M_UnregisterConstraint },
{ new Puerts.MethodKey {Name = "CollectBones", IsStatic = false}, M_CollectBones },
{ new Puerts.MethodKey {Name = "GetBoneRoot", IsStatic = false}, M_GetBoneRoot },
{ new Puerts.MethodKey {Name = "SpawnRoot", IsStatic = false}, M_SpawnRoot },
{ new Puerts.MethodKey {Name = "SpawnHierarchy", IsStatic = false}, M_SpawnHierarchy },
{ new Puerts.MethodKey {Name = "SpawnBoneRecursively", IsStatic = false}, M_SpawnBoneRecursively },
{ new Puerts.MethodKey {Name = "SpawnBone", IsStatic = false}, M_SpawnBone },
{ new Puerts.MethodKey {Name = "add_OnReset", IsStatic = false}, A_OnReset },
{ new Puerts.MethodKey {Name = "remove_OnReset", IsStatic = false},  R_OnReset }
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    {"SkeletonComponent", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_SkeletonComponent, Setter = null} },
{"Skeleton", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_Skeleton, Setter = null} },
{"IsValid", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_IsValid, Setter = null} },
{"PositionScale", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_PositionScale, Setter = null} },
{"boneRoot", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_boneRoot, Setter = S_boneRoot} },
{"flipBy180DegreeRotation", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_flipBy180DegreeRotation, Setter = S_flipBy180DegreeRotation} },
{"skeletonRenderer", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_skeletonRenderer, Setter = S_skeletonRenderer} },
{"skeletonGraphic", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_skeletonGraphic, Setter = S_skeletonGraphic} },
{"skeletonAnimation", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_skeletonAnimation, Setter = S_skeletonAnimation} },
{"boneComponents", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_boneComponents, Setter = S_boneComponents} },
{"constraintComponents", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_constraintComponents, Setter = S_constraintComponents} }
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
