﻿
using System;

namespace PuertsStaticWrap
{
    public static class UnityEngine_ILogHandler_Wrap
    {

        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {

    
            } catch (Exception e) {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
            return IntPtr.Zero;
        }
    
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_LogFormat(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as UnityEngine.ILogHandler;
        
                if (paramLen >= 3)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.Object), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false) && argHelper3.IsMatchParams(Puerts.JsValueType.Any, typeof(System.Object), 3, paramLen))
                
                    {
                
                        var Arg0 = (UnityEngine.LogType)argHelper0.GetInt32(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Object>(false);
                    
                        var Arg2 = argHelper2.GetString(false);
                    
                        var Arg3 = argHelper3.GetParams<System.Object>(info, 3, paramLen);
                    
                        obj.LogFormat(Arg0, Arg1, Arg2, Arg3);
                
                        
                        
                        return;
                    }
                
                }
            
                if (paramLen == 3)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.Object), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false))
                
                    {
                
                        var Arg0 = (UnityEngine.LogType)argHelper0.GetInt32(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Object>(false);
                    
                        var Arg2 = argHelper2.GetString(false);
                    
                        obj.LogFormat(Arg0, Arg1, Arg2);
                
                        
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to LogFormat");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_LogException(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as UnityEngine.ILogHandler;
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Exception>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Object>(false);
                    
                        obj.LogException(Arg0, Arg1);
                
                        
                        
                        
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
                    { new Puerts.MethodKey {Name = "LogFormat", IsStatic = false}, M_LogFormat },
{ new Puerts.MethodKey {Name = "LogException", IsStatic = false}, M_LogException }
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
