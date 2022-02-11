
using System;

namespace PuertsStaticWrap
{
    public static class UnityEngine_CustomCollider2D_Wrap
    {

        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {

                {
            
                    {
                
                        var result = new UnityEngine.CustomCollider2D();
                
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(UnityEngine.CustomCollider2D), result);
                    
                    }
                
                }
            
    
            } catch (Exception e) {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
            return IntPtr.Zero;
        }
    
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_GetCustomShapes(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as UnityEngine.CustomCollider2D;
        
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.PhysicsShapeGroup2D), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.PhysicsShapeGroup2D>(false);
                    
                        var result = obj.GetCustomShapes(Arg0);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 3)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.PhysicsShapeGroup2D), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.PhysicsShapeGroup2D>(false);
                    
                        var Arg1 = argHelper1.GetInt32(false);
                    
                        var Arg2 = argHelper2.GetInt32(false);
                    
                        var result = obj.GetCustomShapes(Arg0, Arg1, Arg2);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.PhysicsShapeGroup2D), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.PhysicsShapeGroup2D>(false);
                    
                        var Arg1 = argHelper1.GetInt32(false);
                    
                        var result = obj.GetCustomShapes(Arg0, Arg1);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(Unity.Collections.NativeArray<UnityEngine.PhysicsShape2D>), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(Unity.Collections.NativeArray<UnityEngine.Vector2>), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<Unity.Collections.NativeArray<UnityEngine.PhysicsShape2D>>(false);
                    
                        var Arg1 = argHelper1.Get<Unity.Collections.NativeArray<UnityEngine.Vector2>>(false);
                    
                        var result = obj.GetCustomShapes(Arg0, Arg1);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to GetCustomShapes");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_SetCustomShapes(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as UnityEngine.CustomCollider2D;
        
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.PhysicsShapeGroup2D), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.PhysicsShapeGroup2D>(false);
                    
                        obj.SetCustomShapes(Arg0);
                
                        
                        
                        return;
                    }
                
                }
            
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(Unity.Collections.NativeArray<UnityEngine.PhysicsShape2D>), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(Unity.Collections.NativeArray<UnityEngine.Vector2>), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<Unity.Collections.NativeArray<UnityEngine.PhysicsShape2D>>(false);
                    
                        var Arg1 = argHelper1.Get<Unity.Collections.NativeArray<UnityEngine.Vector2>>(false);
                    
                        obj.SetCustomShapes(Arg0, Arg1);
                
                        
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to SetCustomShapes");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_SetCustomShape(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as UnityEngine.CustomCollider2D;
        
                if (paramLen == 3)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.PhysicsShapeGroup2D), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.PhysicsShapeGroup2D>(false);
                    
                        var Arg1 = argHelper1.GetInt32(false);
                    
                        var Arg2 = argHelper2.GetInt32(false);
                    
                        obj.SetCustomShape(Arg0, Arg1, Arg2);
                
                        
                        
                        return;
                    }
                
                }
            
                if (paramLen == 4)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(Unity.Collections.NativeArray<UnityEngine.PhysicsShape2D>), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(Unity.Collections.NativeArray<UnityEngine.Vector2>), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper3.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<Unity.Collections.NativeArray<UnityEngine.PhysicsShape2D>>(false);
                    
                        var Arg1 = argHelper1.Get<Unity.Collections.NativeArray<UnityEngine.Vector2>>(false);
                    
                        var Arg2 = argHelper2.GetInt32(false);
                    
                        var Arg3 = argHelper3.GetInt32(false);
                    
                        obj.SetCustomShape(Arg0, Arg1, Arg2, Arg3);
                
                        
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to SetCustomShape");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_ClearCustomShapes(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as UnityEngine.CustomCollider2D;
        
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetInt32(false);
                    
                        var Arg1 = argHelper1.GetInt32(false);
                    
                        obj.ClearCustomShapes(Arg0, Arg1);
                
                        
                        
                        return;
                    }
                
                }
            
                if (paramLen == 0)
            
                {
            
                    {
                
                        obj.ClearCustomShapes();
                
                        
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to ClearCustomShapes");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_customShapeCount(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as UnityEngine.CustomCollider2D;
                var result = obj.customShapeCount;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_customVertexCount(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as UnityEngine.CustomCollider2D;
                var result = obj.customVertexCount;
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
                    { new Puerts.MethodKey {Name = "GetCustomShapes", IsStatic = false}, M_GetCustomShapes },
{ new Puerts.MethodKey {Name = "SetCustomShapes", IsStatic = false}, M_SetCustomShapes },
{ new Puerts.MethodKey {Name = "SetCustomShape", IsStatic = false}, M_SetCustomShape },
{ new Puerts.MethodKey {Name = "ClearCustomShapes", IsStatic = false}, M_ClearCustomShapes }
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    {"customShapeCount", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_customShapeCount, Setter = null} },
{"customVertexCount", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_customVertexCount, Setter = null} }
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
