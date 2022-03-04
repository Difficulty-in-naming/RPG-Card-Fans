
using System;

namespace PuertsStaticWrap
{
    public static class UnityEngine_InspectorOrderAttribute_Wrap
    {

        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {

                if (paramLen == 2)
                
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = (UnityEngine.InspectorSort)argHelper0.GetInt32(false);
                    
                        var Arg1 = (UnityEngine.InspectorSortDirection)argHelper1.GetInt32(false);
                    
                        var result = new UnityEngine.InspectorOrderAttribute(Arg0, Arg1);
                
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(UnityEngine.InspectorOrderAttribute), result);
                    
                    }
                
                }
            
                if (paramLen == 1)
                
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = (UnityEngine.InspectorSort)argHelper0.GetInt32(false);
                    
                        var result = new UnityEngine.InspectorOrderAttribute(Arg0);
                
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(UnityEngine.InspectorOrderAttribute), result);
                    
                    }
                
                }
            
                if (paramLen == 0)
                
                {
            
                    {
                
                        var result = new UnityEngine.InspectorOrderAttribute();
                
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(UnityEngine.InspectorOrderAttribute), result);
                    
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to UnityEngine.InspectorOrderAttribute constructor");
    
    
            } catch (Exception e) {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
            return IntPtr.Zero;
        }
        
        public static Puerts.TypeRegisterInfo GetRegisterInfo()
        {
            return new Puerts.TypeRegisterInfo()
            {
                BlittableCopy = false,
                Constructor = Constructor,
                Methods = new System.Collections.Generic.Dictionary<Puerts.MethodKey, Puerts.V8FunctionCallback>()
                {
                    
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
