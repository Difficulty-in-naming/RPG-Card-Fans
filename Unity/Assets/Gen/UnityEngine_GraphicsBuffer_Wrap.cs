﻿
using System;

namespace PuertsStaticWrap
{
    public static class UnityEngine_GraphicsBuffer_Wrap
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
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = (UnityEngine.GraphicsBuffer.Target)argHelper0.GetInt32(false);
                    
                        var Arg1 = argHelper1.GetInt32(false);
                    
                        var Arg2 = argHelper2.GetInt32(false);
                    
                        var result = new UnityEngine.GraphicsBuffer(Arg0, Arg1, Arg2);
                
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(UnityEngine.GraphicsBuffer), result);
                    
                    }
                
                }
            
                if (paramLen == 4)
                
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper3.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = (UnityEngine.GraphicsBuffer.Target)argHelper0.GetInt32(false);
                    
                        var Arg1 = (UnityEngine.GraphicsBuffer.UsageFlags)argHelper1.GetInt32(false);
                    
                        var Arg2 = argHelper2.GetInt32(false);
                    
                        var Arg3 = argHelper3.GetInt32(false);
                    
                        var result = new UnityEngine.GraphicsBuffer(Arg0, Arg1, Arg2, Arg3);
                
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(UnityEngine.GraphicsBuffer), result);
                    
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to UnityEngine.GraphicsBuffer constructor");
    
    
            } catch (Exception e) {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
            return IntPtr.Zero;
        }
    
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_Dispose(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as UnityEngine.GraphicsBuffer;
        
                {
            
                    {
                
                        obj.Dispose();
                
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_Release(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as UnityEngine.GraphicsBuffer;
        
                {
            
                    {
                
                        obj.Release();
                
                        
                        
                        
                    }
                
                }
            
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
                var obj = Puerts.Utils.GetSelf((int)data, self) as UnityEngine.GraphicsBuffer;
        
                {
            
                    {
                
                        var result = obj.IsValid();
                
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
        private static void M_SetData(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as UnityEngine.GraphicsBuffer;
        
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Array>(false);
                    
                        obj.SetData(Arg0);
                
                        
                        
                        return;
                    }
                
                }
            
                if (paramLen == 4)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper3.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Array>(false);
                    
                        var Arg1 = argHelper1.GetInt32(false);
                    
                        var Arg2 = argHelper2.GetInt32(false);
                    
                        var Arg3 = argHelper3.GetInt32(false);
                    
                        obj.SetData(Arg0, Arg1, Arg2, Arg3);
                
                        
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to SetData");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_GetData(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as UnityEngine.GraphicsBuffer;
        
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Array>(false);
                    
                        obj.GetData(Arg0);
                
                        
                        
                        return;
                    }
                
                }
            
                if (paramLen == 4)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper3.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Array>(false);
                    
                        var Arg1 = argHelper1.GetInt32(false);
                    
                        var Arg2 = argHelper2.GetInt32(false);
                    
                        var Arg3 = argHelper3.GetInt32(false);
                    
                        obj.GetData(Arg0, Arg1, Arg2, Arg3);
                
                        
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to GetData");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_GetNativeBufferPtr(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as UnityEngine.GraphicsBuffer;
        
                {
            
                    {
                
                        var result = obj.GetNativeBufferPtr();
                
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
        private static void M_SetCounterValue(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as UnityEngine.GraphicsBuffer;
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    {
                
                        var Arg0 = argHelper0.GetUInt32(false);
                    
                        obj.SetCounterValue(Arg0);
                
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_CopyCount(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 3)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.ComputeBuffer), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.ComputeBuffer), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.ComputeBuffer>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.ComputeBuffer>(false);
                    
                        var Arg2 = argHelper2.GetInt32(false);
                    
                        UnityEngine.GraphicsBuffer.CopyCount(Arg0, Arg1, Arg2);
                
                        
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.GraphicsBuffer), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.ComputeBuffer), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.GraphicsBuffer>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.ComputeBuffer>(false);
                    
                        var Arg2 = argHelper2.GetInt32(false);
                    
                        UnityEngine.GraphicsBuffer.CopyCount(Arg0, Arg1, Arg2);
                
                        
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.ComputeBuffer), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.GraphicsBuffer), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.ComputeBuffer>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.GraphicsBuffer>(false);
                    
                        var Arg2 = argHelper2.GetInt32(false);
                    
                        UnityEngine.GraphicsBuffer.CopyCount(Arg0, Arg1, Arg2);
                
                        
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.GraphicsBuffer), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.GraphicsBuffer), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.GraphicsBuffer>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.GraphicsBuffer>(false);
                    
                        var Arg2 = argHelper2.GetInt32(false);
                    
                        UnityEngine.GraphicsBuffer.CopyCount(Arg0, Arg1, Arg2);
                
                        
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to CopyCount");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_count(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as UnityEngine.GraphicsBuffer;
                var result = obj.count;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_stride(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as UnityEngine.GraphicsBuffer;
                var result = obj.stride;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_target(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as UnityEngine.GraphicsBuffer;
                var result = obj.target;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, (int)result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_usageFlags(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as UnityEngine.GraphicsBuffer;
                var result = obj.usageFlags;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, (int)result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_bufferHandle(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as UnityEngine.GraphicsBuffer;
                var result = obj.bufferHandle;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_name(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as UnityEngine.GraphicsBuffer;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.name = argHelper.GetString(false);
                
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
                    { new Puerts.MethodKey {Name = "Dispose", IsStatic = false}, M_Dispose },
{ new Puerts.MethodKey {Name = "Release", IsStatic = false}, M_Release },
{ new Puerts.MethodKey {Name = "IsValid", IsStatic = false}, M_IsValid },
{ new Puerts.MethodKey {Name = "SetData", IsStatic = false}, M_SetData },
{ new Puerts.MethodKey {Name = "GetData", IsStatic = false}, M_GetData },
{ new Puerts.MethodKey {Name = "GetNativeBufferPtr", IsStatic = false}, M_GetNativeBufferPtr },
{ new Puerts.MethodKey {Name = "SetCounterValue", IsStatic = false}, M_SetCounterValue },
{ new Puerts.MethodKey {Name = "CopyCount", IsStatic = true}, F_CopyCount }
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    {"count", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_count, Setter = null} },
{"stride", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_stride, Setter = null} },
{"target", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_target, Setter = null} },
{"usageFlags", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_usageFlags, Setter = null} },
{"bufferHandle", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_bufferHandle, Setter = null} },
{"name", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = null, Setter = S_name} }
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
