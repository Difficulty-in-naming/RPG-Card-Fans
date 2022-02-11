﻿
using System;

namespace PuertsStaticWrap
{
    public static class UnityEngine_PhysicsScene_Wrap
    {

        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {

                {
            
                    {
                
                        var result = new UnityEngine.PhysicsScene();
                
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(UnityEngine.PhysicsScene), result);
                    
                    }
                
                }
            
    
            } catch (Exception e) {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
            return IntPtr.Zero;
        }
    
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_ToString(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.PhysicsScene)Puerts.Utils.GetSelf((int)data, self);
        
                if (paramLen == 0)
            
                {
            
                    {
                
                        var result = obj.ToString();
                
                        Puerts.PuertsDLL.ReturnString(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to ToString");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_GetHashCode(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.PhysicsScene)Puerts.Utils.GetSelf((int)data, self);
        
                if (paramLen == 0)
            
                {
            
                    {
                
                        var result = obj.GetHashCode();
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to GetHashCode");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_Equals(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.PhysicsScene)Puerts.Utils.GetSelf((int)data, self);
        
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Object>(false);
                    
                        var result = obj.Equals(Arg0);
                
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.PhysicsScene), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.PhysicsScene>(false);
                    
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
        private static void M_IsValid(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.PhysicsScene)Puerts.Utils.GetSelf((int)data, self);
        
                {
            
                    {
                
                        var result = obj.IsValid();
                
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_IsEmpty(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.PhysicsScene)Puerts.Utils.GetSelf((int)data, self);
        
                {
            
                    {
                
                        var result = obj.IsEmpty();
                
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_Simulate(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.PhysicsScene)Puerts.Utils.GetSelf((int)data, self);
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    {
                
                        var Arg0 = argHelper0.GetFloat(false);
                    
                        obj.Simulate(Arg0);
                
                        
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_Raycast(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.PhysicsScene)Puerts.Utils.GetSelf((int)data, self);
        
                if (paramLen == 5)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    var argHelper4 = new Puerts.ArgumentHelper((int)data, isolate, info, 4);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper3.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper4.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.GetFloat(false);
                    
                        var Arg3 = argHelper3.GetInt32(false);
                    
                        var Arg4 = (UnityEngine.QueryTriggerInteraction)argHelper4.GetInt32(false);
                    
                        var result = obj.Raycast(Arg0, Arg1, Arg2, Arg3, Arg4);
                
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit), true, true) && argHelper3.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper4.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.RaycastHit>(true);
                    
                        var Arg3 = argHelper3.GetFloat(false);
                    
                        var Arg4 = argHelper4.GetInt32(false);
                    
                        var result = obj.Raycast(Arg0, Arg1, out Arg2, Arg3, Arg4);
                
                        argHelper2.SetByRefValue(Arg2);
                        
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit[]), false, false) && argHelper3.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper4.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.RaycastHit[]>(false);
                    
                        var Arg3 = argHelper3.GetFloat(false);
                    
                        var Arg4 = argHelper4.GetInt32(false);
                    
                        var result = obj.Raycast(Arg0, Arg1, Arg2, Arg3, Arg4);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                }
            
                if (paramLen == 4)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper3.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.GetFloat(false);
                    
                        var Arg3 = argHelper3.GetInt32(false);
                    
                        var result = obj.Raycast(Arg0, Arg1, Arg2, Arg3);
                
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit), true, true) && argHelper3.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.RaycastHit>(true);
                    
                        var Arg3 = argHelper3.GetFloat(false);
                    
                        var result = obj.Raycast(Arg0, Arg1, out Arg2, Arg3);
                
                        argHelper2.SetByRefValue(Arg2);
                        
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit[]), false, false) && argHelper3.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.RaycastHit[]>(false);
                    
                        var Arg3 = argHelper3.GetFloat(false);
                    
                        var result = obj.Raycast(Arg0, Arg1, Arg2, Arg3);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                }
            
                if (paramLen == 3)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.GetFloat(false);
                    
                        var result = obj.Raycast(Arg0, Arg1, Arg2);
                
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit), true, true))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.RaycastHit>(true);
                    
                        var result = obj.Raycast(Arg0, Arg1, out Arg2);
                
                        argHelper2.SetByRefValue(Arg2);
                        
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit[]), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.RaycastHit[]>(false);
                    
                        var result = obj.Raycast(Arg0, Arg1, Arg2);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                }
            
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var result = obj.Raycast(Arg0, Arg1);
                
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                }
            
                if (paramLen == 6)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    var argHelper4 = new Puerts.ArgumentHelper((int)data, isolate, info, 4);
                
                    var argHelper5 = new Puerts.ArgumentHelper((int)data, isolate, info, 5);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit), true, true) && argHelper3.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper4.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper5.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.RaycastHit>(true);
                    
                        var Arg3 = argHelper3.GetFloat(false);
                    
                        var Arg4 = argHelper4.GetInt32(false);
                    
                        var Arg5 = (UnityEngine.QueryTriggerInteraction)argHelper5.GetInt32(false);
                    
                        var result = obj.Raycast(Arg0, Arg1, out Arg2, Arg3, Arg4, Arg5);
                
                        argHelper2.SetByRefValue(Arg2);
                        
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit[]), false, false) && argHelper3.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper4.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper5.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.RaycastHit[]>(false);
                    
                        var Arg3 = argHelper3.GetFloat(false);
                    
                        var Arg4 = argHelper4.GetInt32(false);
                    
                        var Arg5 = (UnityEngine.QueryTriggerInteraction)argHelper5.GetInt32(false);
                    
                        var result = obj.Raycast(Arg0, Arg1, Arg2, Arg3, Arg4, Arg5);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to Raycast");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_CapsuleCast(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.PhysicsScene)Puerts.Utils.GetSelf((int)data, self);
        
                if (paramLen == 8)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    var argHelper4 = new Puerts.ArgumentHelper((int)data, isolate, info, 4);
                
                    var argHelper5 = new Puerts.ArgumentHelper((int)data, isolate, info, 5);
                
                    var argHelper6 = new Puerts.ArgumentHelper((int)data, isolate, info, 6);
                
                    var argHelper7 = new Puerts.ArgumentHelper((int)data, isolate, info, 7);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper3.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper4.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit), true, true) && argHelper5.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper6.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper7.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.GetFloat(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.Vector3>(false);
                    
                        var Arg4 = argHelper4.Get<UnityEngine.RaycastHit>(true);
                    
                        var Arg5 = argHelper5.GetFloat(false);
                    
                        var Arg6 = argHelper6.GetInt32(false);
                    
                        var Arg7 = (UnityEngine.QueryTriggerInteraction)argHelper7.GetInt32(false);
                    
                        var result = obj.CapsuleCast(Arg0, Arg1, Arg2, Arg3, out Arg4, Arg5, Arg6, Arg7);
                
                        argHelper4.SetByRefValue(Arg4);
                        
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper3.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper4.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit[]), false, false) && argHelper5.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper6.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper7.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.GetFloat(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.Vector3>(false);
                    
                        var Arg4 = argHelper4.Get<UnityEngine.RaycastHit[]>(false);
                    
                        var Arg5 = argHelper5.GetFloat(false);
                    
                        var Arg6 = argHelper6.GetInt32(false);
                    
                        var Arg7 = (UnityEngine.QueryTriggerInteraction)argHelper7.GetInt32(false);
                    
                        var result = obj.CapsuleCast(Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                }
            
                if (paramLen == 7)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    var argHelper4 = new Puerts.ArgumentHelper((int)data, isolate, info, 4);
                
                    var argHelper5 = new Puerts.ArgumentHelper((int)data, isolate, info, 5);
                
                    var argHelper6 = new Puerts.ArgumentHelper((int)data, isolate, info, 6);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper3.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper4.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit), true, true) && argHelper5.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper6.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.GetFloat(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.Vector3>(false);
                    
                        var Arg4 = argHelper4.Get<UnityEngine.RaycastHit>(true);
                    
                        var Arg5 = argHelper5.GetFloat(false);
                    
                        var Arg6 = argHelper6.GetInt32(false);
                    
                        var result = obj.CapsuleCast(Arg0, Arg1, Arg2, Arg3, out Arg4, Arg5, Arg6);
                
                        argHelper4.SetByRefValue(Arg4);
                        
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper3.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper4.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit[]), false, false) && argHelper5.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper6.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.GetFloat(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.Vector3>(false);
                    
                        var Arg4 = argHelper4.Get<UnityEngine.RaycastHit[]>(false);
                    
                        var Arg5 = argHelper5.GetFloat(false);
                    
                        var Arg6 = argHelper6.GetInt32(false);
                    
                        var result = obj.CapsuleCast(Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                }
            
                if (paramLen == 6)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    var argHelper4 = new Puerts.ArgumentHelper((int)data, isolate, info, 4);
                
                    var argHelper5 = new Puerts.ArgumentHelper((int)data, isolate, info, 5);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper3.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper4.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit), true, true) && argHelper5.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.GetFloat(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.Vector3>(false);
                    
                        var Arg4 = argHelper4.Get<UnityEngine.RaycastHit>(true);
                    
                        var Arg5 = argHelper5.GetFloat(false);
                    
                        var result = obj.CapsuleCast(Arg0, Arg1, Arg2, Arg3, out Arg4, Arg5);
                
                        argHelper4.SetByRefValue(Arg4);
                        
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper3.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper4.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit[]), false, false) && argHelper5.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.GetFloat(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.Vector3>(false);
                    
                        var Arg4 = argHelper4.Get<UnityEngine.RaycastHit[]>(false);
                    
                        var Arg5 = argHelper5.GetFloat(false);
                    
                        var result = obj.CapsuleCast(Arg0, Arg1, Arg2, Arg3, Arg4, Arg5);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
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
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper3.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper4.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit), true, true))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.GetFloat(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.Vector3>(false);
                    
                        var Arg4 = argHelper4.Get<UnityEngine.RaycastHit>(true);
                    
                        var result = obj.CapsuleCast(Arg0, Arg1, Arg2, Arg3, out Arg4);
                
                        argHelper4.SetByRefValue(Arg4);
                        
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper3.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper4.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit[]), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.GetFloat(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.Vector3>(false);
                    
                        var Arg4 = argHelper4.Get<UnityEngine.RaycastHit[]>(false);
                    
                        var result = obj.CapsuleCast(Arg0, Arg1, Arg2, Arg3, Arg4);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to CapsuleCast");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_OverlapCapsule(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.PhysicsScene)Puerts.Utils.GetSelf((int)data, self);
        
                if (paramLen == 6)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    var argHelper4 = new Puerts.ArgumentHelper((int)data, isolate, info, 4);
                
                    var argHelper5 = new Puerts.ArgumentHelper((int)data, isolate, info, 5);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper3.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.Collider[]), false, false) && argHelper4.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper5.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.GetFloat(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.Collider[]>(false);
                    
                        var Arg4 = argHelper4.GetInt32(false);
                    
                        var Arg5 = (UnityEngine.QueryTriggerInteraction)argHelper5.GetInt32(false);
                    
                        var result = obj.OverlapCapsule(Arg0, Arg1, Arg2, Arg3, Arg4, Arg5);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
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
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper3.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.Collider[]), false, false) && argHelper4.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.GetFloat(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.Collider[]>(false);
                    
                        var Arg4 = argHelper4.GetInt32(false);
                    
                        var result = obj.OverlapCapsule(Arg0, Arg1, Arg2, Arg3, Arg4);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                }
            
                if (paramLen == 4)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper3.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.Collider[]), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.GetFloat(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.Collider[]>(false);
                    
                        var result = obj.OverlapCapsule(Arg0, Arg1, Arg2, Arg3);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to OverlapCapsule");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_SphereCast(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.PhysicsScene)Puerts.Utils.GetSelf((int)data, self);
        
                if (paramLen == 7)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    var argHelper4 = new Puerts.ArgumentHelper((int)data, isolate, info, 4);
                
                    var argHelper5 = new Puerts.ArgumentHelper((int)data, isolate, info, 5);
                
                    var argHelper6 = new Puerts.ArgumentHelper((int)data, isolate, info, 6);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper3.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit), true, true) && argHelper4.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper5.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper6.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.GetFloat(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.Vector3>(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.RaycastHit>(true);
                    
                        var Arg4 = argHelper4.GetFloat(false);
                    
                        var Arg5 = argHelper5.GetInt32(false);
                    
                        var Arg6 = (UnityEngine.QueryTriggerInteraction)argHelper6.GetInt32(false);
                    
                        var result = obj.SphereCast(Arg0, Arg1, Arg2, out Arg3, Arg4, Arg5, Arg6);
                
                        argHelper3.SetByRefValue(Arg3);
                        
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper3.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit[]), false, false) && argHelper4.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper5.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper6.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.GetFloat(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.Vector3>(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.RaycastHit[]>(false);
                    
                        var Arg4 = argHelper4.GetFloat(false);
                    
                        var Arg5 = argHelper5.GetInt32(false);
                    
                        var Arg6 = (UnityEngine.QueryTriggerInteraction)argHelper6.GetInt32(false);
                    
                        var result = obj.SphereCast(Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                }
            
                if (paramLen == 6)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    var argHelper4 = new Puerts.ArgumentHelper((int)data, isolate, info, 4);
                
                    var argHelper5 = new Puerts.ArgumentHelper((int)data, isolate, info, 5);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper3.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit), true, true) && argHelper4.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper5.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.GetFloat(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.Vector3>(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.RaycastHit>(true);
                    
                        var Arg4 = argHelper4.GetFloat(false);
                    
                        var Arg5 = argHelper5.GetInt32(false);
                    
                        var result = obj.SphereCast(Arg0, Arg1, Arg2, out Arg3, Arg4, Arg5);
                
                        argHelper3.SetByRefValue(Arg3);
                        
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper3.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit[]), false, false) && argHelper4.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper5.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.GetFloat(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.Vector3>(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.RaycastHit[]>(false);
                    
                        var Arg4 = argHelper4.GetFloat(false);
                    
                        var Arg5 = argHelper5.GetInt32(false);
                    
                        var result = obj.SphereCast(Arg0, Arg1, Arg2, Arg3, Arg4, Arg5);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
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
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper3.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit), true, true) && argHelper4.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.GetFloat(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.Vector3>(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.RaycastHit>(true);
                    
                        var Arg4 = argHelper4.GetFloat(false);
                    
                        var result = obj.SphereCast(Arg0, Arg1, Arg2, out Arg3, Arg4);
                
                        argHelper3.SetByRefValue(Arg3);
                        
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper3.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit[]), false, false) && argHelper4.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.GetFloat(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.Vector3>(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.RaycastHit[]>(false);
                    
                        var Arg4 = argHelper4.GetFloat(false);
                    
                        var result = obj.SphereCast(Arg0, Arg1, Arg2, Arg3, Arg4);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                }
            
                if (paramLen == 4)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper3.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit), true, true))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.GetFloat(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.Vector3>(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.RaycastHit>(true);
                    
                        var result = obj.SphereCast(Arg0, Arg1, Arg2, out Arg3);
                
                        argHelper3.SetByRefValue(Arg3);
                        
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper3.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit[]), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.GetFloat(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.Vector3>(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.RaycastHit[]>(false);
                    
                        var result = obj.SphereCast(Arg0, Arg1, Arg2, Arg3);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to SphereCast");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_OverlapSphere(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.PhysicsScene)Puerts.Utils.GetSelf((int)data, self);
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    var argHelper4 = new Puerts.ArgumentHelper((int)data, isolate, info, 4);
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.GetFloat(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.Collider[]>(false);
                    
                        var Arg3 = argHelper3.GetInt32(false);
                    
                        var Arg4 = (UnityEngine.QueryTriggerInteraction)argHelper4.GetInt32(false);
                    
                        var result = obj.OverlapSphere(Arg0, Arg1, Arg2, Arg3, Arg4);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_BoxCast(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.PhysicsScene)Puerts.Utils.GetSelf((int)data, self);
        
                if (paramLen == 8)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    var argHelper4 = new Puerts.ArgumentHelper((int)data, isolate, info, 4);
                
                    var argHelper5 = new Puerts.ArgumentHelper((int)data, isolate, info, 5);
                
                    var argHelper6 = new Puerts.ArgumentHelper((int)data, isolate, info, 6);
                
                    var argHelper7 = new Puerts.ArgumentHelper((int)data, isolate, info, 7);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper3.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit), true, true) && argHelper4.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Quaternion), false, false) && argHelper5.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper6.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper7.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.Vector3>(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.RaycastHit>(true);
                    
                        var Arg4 = argHelper4.Get<UnityEngine.Quaternion>(false);
                    
                        var Arg5 = argHelper5.GetFloat(false);
                    
                        var Arg6 = argHelper6.GetInt32(false);
                    
                        var Arg7 = (UnityEngine.QueryTriggerInteraction)argHelper7.GetInt32(false);
                    
                        var result = obj.BoxCast(Arg0, Arg1, Arg2, out Arg3, Arg4, Arg5, Arg6, Arg7);
                
                        argHelper3.SetByRefValue(Arg3);
                        
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper3.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit[]), false, false) && argHelper4.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Quaternion), false, false) && argHelper5.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper6.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper7.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.Vector3>(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.RaycastHit[]>(false);
                    
                        var Arg4 = argHelper4.Get<UnityEngine.Quaternion>(false);
                    
                        var Arg5 = argHelper5.GetFloat(false);
                    
                        var Arg6 = argHelper6.GetInt32(false);
                    
                        var Arg7 = (UnityEngine.QueryTriggerInteraction)argHelper7.GetInt32(false);
                    
                        var result = obj.BoxCast(Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                }
            
                if (paramLen == 7)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    var argHelper4 = new Puerts.ArgumentHelper((int)data, isolate, info, 4);
                
                    var argHelper5 = new Puerts.ArgumentHelper((int)data, isolate, info, 5);
                
                    var argHelper6 = new Puerts.ArgumentHelper((int)data, isolate, info, 6);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper3.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit), true, true) && argHelper4.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Quaternion), false, false) && argHelper5.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper6.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.Vector3>(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.RaycastHit>(true);
                    
                        var Arg4 = argHelper4.Get<UnityEngine.Quaternion>(false);
                    
                        var Arg5 = argHelper5.GetFloat(false);
                    
                        var Arg6 = argHelper6.GetInt32(false);
                    
                        var result = obj.BoxCast(Arg0, Arg1, Arg2, out Arg3, Arg4, Arg5, Arg6);
                
                        argHelper3.SetByRefValue(Arg3);
                        
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper3.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit[]), false, false) && argHelper4.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Quaternion), false, false) && argHelper5.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper6.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.Vector3>(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.RaycastHit[]>(false);
                    
                        var Arg4 = argHelper4.Get<UnityEngine.Quaternion>(false);
                    
                        var Arg5 = argHelper5.GetFloat(false);
                    
                        var Arg6 = argHelper6.GetInt32(false);
                    
                        var result = obj.BoxCast(Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                }
            
                if (paramLen == 6)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    var argHelper4 = new Puerts.ArgumentHelper((int)data, isolate, info, 4);
                
                    var argHelper5 = new Puerts.ArgumentHelper((int)data, isolate, info, 5);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper3.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit), true, true) && argHelper4.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Quaternion), false, false) && argHelper5.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.Vector3>(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.RaycastHit>(true);
                    
                        var Arg4 = argHelper4.Get<UnityEngine.Quaternion>(false);
                    
                        var Arg5 = argHelper5.GetFloat(false);
                    
                        var result = obj.BoxCast(Arg0, Arg1, Arg2, out Arg3, Arg4, Arg5);
                
                        argHelper3.SetByRefValue(Arg3);
                        
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper3.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit[]), false, false) && argHelper4.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Quaternion), false, false) && argHelper5.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.Vector3>(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.RaycastHit[]>(false);
                    
                        var Arg4 = argHelper4.Get<UnityEngine.Quaternion>(false);
                    
                        var Arg5 = argHelper5.GetFloat(false);
                    
                        var result = obj.BoxCast(Arg0, Arg1, Arg2, Arg3, Arg4, Arg5);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
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
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper3.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit), true, true) && argHelper4.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Quaternion), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.Vector3>(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.RaycastHit>(true);
                    
                        var Arg4 = argHelper4.Get<UnityEngine.Quaternion>(false);
                    
                        var result = obj.BoxCast(Arg0, Arg1, Arg2, out Arg3, Arg4);
                
                        argHelper3.SetByRefValue(Arg3);
                        
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper3.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit[]), false, false) && argHelper4.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Quaternion), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.Vector3>(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.RaycastHit[]>(false);
                    
                        var Arg4 = argHelper4.Get<UnityEngine.Quaternion>(false);
                    
                        var result = obj.BoxCast(Arg0, Arg1, Arg2, Arg3, Arg4);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                }
            
                if (paramLen == 4)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper3.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit), true, true))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.Vector3>(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.RaycastHit>(true);
                    
                        var result = obj.BoxCast(Arg0, Arg1, Arg2, out Arg3);
                
                        argHelper3.SetByRefValue(Arg3);
                        
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper3.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.RaycastHit[]), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.Vector3>(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.RaycastHit[]>(false);
                    
                        var result = obj.BoxCast(Arg0, Arg1, Arg2, Arg3);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to BoxCast");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_OverlapBox(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.PhysicsScene)Puerts.Utils.GetSelf((int)data, self);
        
                if (paramLen == 6)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    var argHelper4 = new Puerts.ArgumentHelper((int)data, isolate, info, 4);
                
                    var argHelper5 = new Puerts.ArgumentHelper((int)data, isolate, info, 5);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.Collider[]), false, false) && argHelper3.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Quaternion), false, false) && argHelper4.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper5.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.Collider[]>(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.Quaternion>(false);
                    
                        var Arg4 = argHelper4.GetInt32(false);
                    
                        var Arg5 = (UnityEngine.QueryTriggerInteraction)argHelper5.GetInt32(false);
                    
                        var result = obj.OverlapBox(Arg0, Arg1, Arg2, Arg3, Arg4, Arg5);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
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
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.Collider[]), false, false) && argHelper3.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Quaternion), false, false) && argHelper4.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.Collider[]>(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.Quaternion>(false);
                    
                        var Arg4 = argHelper4.GetInt32(false);
                    
                        var result = obj.OverlapBox(Arg0, Arg1, Arg2, Arg3, Arg4);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                }
            
                if (paramLen == 4)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.Collider[]), false, false) && argHelper3.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Quaternion), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.Collider[]>(false);
                    
                        var Arg3 = argHelper3.Get<UnityEngine.Quaternion>(false);
                    
                        var result = obj.OverlapBox(Arg0, Arg1, Arg2, Arg3);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                }
            
                if (paramLen == 3)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.Collider[]), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.Collider[]>(false);
                    
                        var result = obj.OverlapBox(Arg0, Arg1, Arg2);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to OverlapBox");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void O_op_Equality(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    {
                 
                        var arg0 = argHelper0.Get<UnityEngine.PhysicsScene>(false);
                     
                        var arg1 = argHelper1.Get<UnityEngine.PhysicsScene>(false);
                    
                        var result = arg0 == arg1;
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
        private static void O_op_Inequality(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    {
                 
                        var arg0 = argHelper0.Get<UnityEngine.PhysicsScene>(false);
                     
                        var arg1 = argHelper1.Get<UnityEngine.PhysicsScene>(false);
                    
                        var result = arg0 != arg1;
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        
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
                    { new Puerts.MethodKey {Name = "ToString", IsStatic = false}, M_ToString },
{ new Puerts.MethodKey {Name = "GetHashCode", IsStatic = false}, M_GetHashCode },
{ new Puerts.MethodKey {Name = "Equals", IsStatic = false}, M_Equals },
{ new Puerts.MethodKey {Name = "IsValid", IsStatic = false}, M_IsValid },
{ new Puerts.MethodKey {Name = "IsEmpty", IsStatic = false}, M_IsEmpty },
{ new Puerts.MethodKey {Name = "Simulate", IsStatic = false}, M_Simulate },
{ new Puerts.MethodKey {Name = "Raycast", IsStatic = false}, M_Raycast },
{ new Puerts.MethodKey {Name = "CapsuleCast", IsStatic = false}, M_CapsuleCast },
{ new Puerts.MethodKey {Name = "OverlapCapsule", IsStatic = false}, M_OverlapCapsule },
{ new Puerts.MethodKey {Name = "SphereCast", IsStatic = false}, M_SphereCast },
{ new Puerts.MethodKey {Name = "OverlapSphere", IsStatic = false}, M_OverlapSphere },
{ new Puerts.MethodKey {Name = "BoxCast", IsStatic = false}, M_BoxCast },
{ new Puerts.MethodKey {Name = "OverlapBox", IsStatic = false}, M_OverlapBox },
{ new Puerts.MethodKey {Name = "op_Equality", IsStatic = true}, O_op_Equality },
{ new Puerts.MethodKey {Name = "op_Inequality", IsStatic = true}, O_op_Inequality }
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
