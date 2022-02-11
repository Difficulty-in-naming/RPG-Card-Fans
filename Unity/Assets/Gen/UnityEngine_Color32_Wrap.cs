
using System;

namespace PuertsStaticWrap
{
    public static class UnityEngine_Color32_Wrap
    {

        static UnityEngine.Color32 HeapValue;
    
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        unsafe private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {

                if (paramLen == 4)
                
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper3.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetByte(false);
                    
                        var Arg1 = argHelper1.GetByte(false);
                    
                        var Arg2 = argHelper2.GetByte(false);
                    
                        var Arg3 = argHelper3.GetByte(false);
                    
                        HeapValue = new UnityEngine.Color32(Arg0, Arg1, Arg2, Arg3);
                 
                        fixed (UnityEngine.Color32* result = &HeapValue)
                        {
                            return new IntPtr(result);
                        }
                    
                    }
                
                }
            
                if (paramLen == 0)
                
                {
            
                    {
                
                        HeapValue = new UnityEngine.Color32();
                 
                        fixed (UnityEngine.Color32* result = &HeapValue)
                        {
                            return new IntPtr(result);
                        }
                    
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to UnityEngine.Color32 constructor");
    
    
            } catch (Exception e) {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
            return IntPtr.Zero;
        }
    
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_Lerp(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Color32>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Color32>(false);
                    
                        var Arg2 = argHelper2.GetFloat(false);
                    
                        var result = UnityEngine.Color32.Lerp(Arg0, Arg1, Arg2);
                
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
        private static void F_LerpUnclamped(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Color32>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Color32>(false);
                    
                        var Arg2 = argHelper2.GetFloat(false);
                    
                        var result = UnityEngine.Color32.LerpUnclamped(Arg0, Arg1, Arg2);
                
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
        unsafe private static void M_ToString(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.Color32*)self;
        
                if (paramLen == 0)
            
                {
            
                    {
                
                        var result = (*obj).ToString();
                
                        Puerts.PuertsDLL.ReturnString(isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetString(false);
                    
                        var result = (*obj).ToString(Arg0);
                
                        Puerts.PuertsDLL.ReturnString(isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false) && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.IFormatProvider), false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetString(false);
                    
                        var Arg1 = argHelper1.Get<System.IFormatProvider>(false);
                    
                        var result = (*obj).ToString(Arg0, Arg1);
                
                        Puerts.PuertsDLL.ReturnString(isolate, info, result);
                        
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
        unsafe private static void G_r(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.Color32*)self;
                var result = (*obj).r;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        unsafe private static void S_r(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.Color32*)self;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                (*obj).r = argHelper.GetByte(false);
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        unsafe private static void G_g(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.Color32*)self;
                var result = (*obj).g;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        unsafe private static void S_g(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.Color32*)self;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                (*obj).g = argHelper.GetByte(false);
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        unsafe private static void G_b(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.Color32*)self;
                var result = (*obj).b;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        unsafe private static void S_b(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.Color32*)self;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                (*obj).b = argHelper.GetByte(false);
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        unsafe private static void G_a(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.Color32*)self;
                var result = (*obj).a;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        unsafe private static void S_a(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.Color32*)self;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                (*obj).a = argHelper.GetByte(false);
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        unsafe private static void GetItem(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.Color32*)self;
                var keyHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
        
                if (keyHelper.IsMatch(Puerts.JsValueType.Number, null, false, false))
                {
                    var key = keyHelper.GetInt32(false);
                    var result = (*obj)[key];
                    Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                    return;
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        unsafe private static void SetItem(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.Color32*)self;
                var keyHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                var valueHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                if (keyHelper.IsMatch(Puerts.JsValueType.Number, null, false, false))
                {
                    var key = keyHelper.GetInt32(false);
                    (*obj)[key] = valueHelper.GetByte(false);
                    return;
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
                BlittableCopy = true,
                Constructor = Constructor,
                Methods = new System.Collections.Generic.Dictionary<Puerts.MethodKey, Puerts.V8FunctionCallback>()
                {
                    { new Puerts.MethodKey {Name = "Lerp", IsStatic = true}, F_Lerp },
{ new Puerts.MethodKey {Name = "LerpUnclamped", IsStatic = true}, F_LerpUnclamped },
{ new Puerts.MethodKey {Name = "ToString", IsStatic = false}, M_ToString },
{ new Puerts.MethodKey {Name = "get_Item", IsStatic = false}, GetItem }
,
{ new Puerts.MethodKey {Name = "set_Item", IsStatic = false}, SetItem }

                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    {"r", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_r, Setter = S_r} },
{"g", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_g, Setter = S_g} },
{"b", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_b, Setter = S_b} },
{"a", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_a, Setter = S_a} }
                },
                LazyMethods = new System.Collections.Generic.Dictionary<Puerts.MethodKey, Puerts.V8FunctionCallback>()
                {
                    
                },
                LazyProperties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    
                }
            };
        }
    
        unsafe private static UnityEngine.Color32 StaticGetter(int jsEnvIdx, IntPtr isolate, Puerts.IGetValueFromJs getValueApi, IntPtr value, bool isByRef)
        {
            UnityEngine.Color32* result = (UnityEngine.Color32*)getValueApi.GetNativeObject(isolate, value, isByRef);
            return result == null ? default(UnityEngine.Color32) : *result;
        }

        unsafe private static void StaticSetter(int jsEnvIdx, IntPtr isolate, Puerts.ISetValueToJs setValueApi, IntPtr value, UnityEngine.Color32 val)
        {
            HeapValue = val;
            fixed (UnityEngine.Color32* result = &HeapValue)
            {
                var typeId = Puerts.JsEnv.jsEnvs[jsEnvIdx].GetTypeId(typeof(UnityEngine.Color32));
                setValueApi.SetNativeObject(isolate, value, typeId, new IntPtr(result));
            }
        }
        
        public static void InitBlittableCopy(Puerts.JsEnv jsEnv)
        {
            Puerts.StaticTranslate<UnityEngine.Color32>.ReplaceDefault(StaticSetter, StaticGetter);
            int jsEnvIdx = jsEnv.Index;
            jsEnv.RegisterGeneralGetSet(typeof(UnityEngine.Color32), (IntPtr isolate, Puerts.IGetValueFromJs getValueApi, IntPtr value, bool isByRef) =>
            {
                return StaticGetter(jsEnvIdx, isolate, getValueApi, value, isByRef);
            }, (IntPtr isolate, Puerts.ISetValueToJs setValueApi, IntPtr value, object obj) => 
            {
                StaticSetter(jsEnvIdx, isolate, setValueApi, value, (UnityEngine.Color32)obj);
            });
        }
        
    }
}
