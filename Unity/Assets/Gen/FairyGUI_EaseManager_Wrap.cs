﻿
using System;

namespace PuertsStaticWrap
{
    public static class FairyGUI_EaseManager_Wrap
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
        private static void F_Evaluate(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
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
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper3.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper4.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper5.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(FairyGUI.CustomEase), false, false))
                
                    {
                
                        var Arg0 = (FairyGUI.EaseType)argHelper0.GetInt32(false);
                    
                        var Arg1 = argHelper1.GetFloat(false);
                    
                        var Arg2 = argHelper2.GetFloat(false);
                    
                        var Arg3 = argHelper3.GetFloat(false);
                    
                        var Arg4 = argHelper4.GetFloat(false);
                    
                        var Arg5 = argHelper5.Get<FairyGUI.CustomEase>(false);
                    
                        var result = FairyGUI.EaseManager.Evaluate(Arg0, Arg1, Arg2, Arg3, Arg4, Arg5);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        
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
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper3.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper4.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = (FairyGUI.EaseType)argHelper0.GetInt32(false);
                    
                        var Arg1 = argHelper1.GetFloat(false);
                    
                        var Arg2 = argHelper2.GetFloat(false);
                    
                        var Arg3 = argHelper3.GetFloat(false);
                    
                        var Arg4 = argHelper4.GetFloat(false);
                    
                        var result = FairyGUI.EaseManager.Evaluate(Arg0, Arg1, Arg2, Arg3, Arg4);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        
                        return;
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
                
                        var Arg0 = (FairyGUI.EaseType)argHelper0.GetInt32(false);
                    
                        var Arg1 = argHelper1.GetFloat(false);
                    
                        var Arg2 = argHelper2.GetFloat(false);
                    
                        var Arg3 = argHelper3.GetFloat(false);
                    
                        var result = FairyGUI.EaseManager.Evaluate(Arg0, Arg1, Arg2, Arg3);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 3)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = (FairyGUI.EaseType)argHelper0.GetInt32(false);
                    
                        var Arg1 = argHelper1.GetFloat(false);
                    
                        var Arg2 = argHelper2.GetFloat(false);
                    
                        var result = FairyGUI.EaseManager.Evaluate(Arg0, Arg1, Arg2);
                
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to Evaluate");
        
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
                    { new Puerts.MethodKey {Name = "Evaluate", IsStatic = true}, F_Evaluate }
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
