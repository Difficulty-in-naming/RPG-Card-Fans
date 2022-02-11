
using System;

namespace PuertsStaticWrap
{
    public static class TMPro_TMPro_EventManager_Wrap
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
        private static void F_ON_MATERIAL_PROPERTY_CHANGED(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    {
                
                        var Arg0 = argHelper0.GetBoolean(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Material>(false);
                    
                        TMPro.TMPro_EventManager.ON_MATERIAL_PROPERTY_CHANGED(Arg0, Arg1);
                
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_ON_FONT_PROPERTY_CHANGED(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    {
                
                        var Arg0 = argHelper0.GetBoolean(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Object>(false);
                    
                        TMPro.TMPro_EventManager.ON_FONT_PROPERTY_CHANGED(Arg0, Arg1);
                
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_ON_SPRITE_ASSET_PROPERTY_CHANGED(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    {
                
                        var Arg0 = argHelper0.GetBoolean(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Object>(false);
                    
                        TMPro.TMPro_EventManager.ON_SPRITE_ASSET_PROPERTY_CHANGED(Arg0, Arg1);
                
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_ON_TEXTMESHPRO_PROPERTY_CHANGED(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    {
                
                        var Arg0 = argHelper0.GetBoolean(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Object>(false);
                    
                        TMPro.TMPro_EventManager.ON_TEXTMESHPRO_PROPERTY_CHANGED(Arg0, Arg1);
                
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_ON_DRAG_AND_DROP_MATERIAL_CHANGED(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.GameObject>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Material>(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.Material>(false);
                    
                        TMPro.TMPro_EventManager.ON_DRAG_AND_DROP_MATERIAL_CHANGED(Arg0, Arg1, Arg2);
                
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_ON_TEXT_STYLE_PROPERTY_CHANGED(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    {
                
                        var Arg0 = argHelper0.GetBoolean(false);
                    
                        TMPro.TMPro_EventManager.ON_TEXT_STYLE_PROPERTY_CHANGED(Arg0);
                
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_ON_COLOR_GRADIENT_PROPERTY_CHANGED(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Object>(false);
                    
                        TMPro.TMPro_EventManager.ON_COLOR_GRADIENT_PROPERTY_CHANGED(Arg0);
                
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_ON_TEXT_CHANGED(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Object>(false);
                    
                        TMPro.TMPro_EventManager.ON_TEXT_CHANGED(Arg0);
                
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_ON_TMP_SETTINGS_CHANGED(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    {
                
                        TMPro.TMPro_EventManager.ON_TMP_SETTINGS_CHANGED();
                
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_ON_RESOURCES_LOADED(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    {
                
                        TMPro.TMPro_EventManager.ON_RESOURCES_LOADED();
                
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_ON_TEXTMESHPRO_UGUI_PROPERTY_CHANGED(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    {
                
                        var Arg0 = argHelper0.GetBoolean(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Object>(false);
                    
                        TMPro.TMPro_EventManager.ON_TEXTMESHPRO_UGUI_PROPERTY_CHANGED(Arg0, Arg1);
                
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_ON_COMPUTE_DT_EVENT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Object>(false);
                    
                        var Arg1 = argHelper1.Get<TMPro.Compute_DT_EventArgs>(false);
                    
                        TMPro.TMPro_EventManager.ON_COMPUTE_DT_EVENT(Arg0, Arg1);
                
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_COMPUTE_DT_EVENT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                var result = TMPro.TMPro_EventManager.COMPUTE_DT_EVENT;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_MATERIAL_PROPERTY_EVENT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                var result = TMPro.TMPro_EventManager.MATERIAL_PROPERTY_EVENT;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_FONT_PROPERTY_EVENT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                var result = TMPro.TMPro_EventManager.FONT_PROPERTY_EVENT;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_SPRITE_ASSET_PROPERTY_EVENT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                var result = TMPro.TMPro_EventManager.SPRITE_ASSET_PROPERTY_EVENT;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_TEXTMESHPRO_PROPERTY_EVENT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                var result = TMPro.TMPro_EventManager.TEXTMESHPRO_PROPERTY_EVENT;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_DRAG_AND_DROP_MATERIAL_EVENT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                var result = TMPro.TMPro_EventManager.DRAG_AND_DROP_MATERIAL_EVENT;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_TEXT_STYLE_PROPERTY_EVENT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                var result = TMPro.TMPro_EventManager.TEXT_STYLE_PROPERTY_EVENT;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_COLOR_GRADIENT_PROPERTY_EVENT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                var result = TMPro.TMPro_EventManager.COLOR_GRADIENT_PROPERTY_EVENT;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_TMP_SETTINGS_PROPERTY_EVENT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                var result = TMPro.TMPro_EventManager.TMP_SETTINGS_PROPERTY_EVENT;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_RESOURCE_LOAD_EVENT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                var result = TMPro.TMPro_EventManager.RESOURCE_LOAD_EVENT;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_TEXTMESHPRO_UGUI_PROPERTY_EVENT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                var result = TMPro.TMPro_EventManager.TEXTMESHPRO_UGUI_PROPERTY_EVENT;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_TEXT_CHANGED_EVENT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                var result = TMPro.TMPro_EventManager.TEXT_CHANGED_EVENT;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
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
                    { new Puerts.MethodKey {Name = "ON_MATERIAL_PROPERTY_CHANGED", IsStatic = true}, F_ON_MATERIAL_PROPERTY_CHANGED },
{ new Puerts.MethodKey {Name = "ON_FONT_PROPERTY_CHANGED", IsStatic = true}, F_ON_FONT_PROPERTY_CHANGED },
{ new Puerts.MethodKey {Name = "ON_SPRITE_ASSET_PROPERTY_CHANGED", IsStatic = true}, F_ON_SPRITE_ASSET_PROPERTY_CHANGED },
{ new Puerts.MethodKey {Name = "ON_TEXTMESHPRO_PROPERTY_CHANGED", IsStatic = true}, F_ON_TEXTMESHPRO_PROPERTY_CHANGED },
{ new Puerts.MethodKey {Name = "ON_DRAG_AND_DROP_MATERIAL_CHANGED", IsStatic = true}, F_ON_DRAG_AND_DROP_MATERIAL_CHANGED },
{ new Puerts.MethodKey {Name = "ON_TEXT_STYLE_PROPERTY_CHANGED", IsStatic = true}, F_ON_TEXT_STYLE_PROPERTY_CHANGED },
{ new Puerts.MethodKey {Name = "ON_COLOR_GRADIENT_PROPERTY_CHANGED", IsStatic = true}, F_ON_COLOR_GRADIENT_PROPERTY_CHANGED },
{ new Puerts.MethodKey {Name = "ON_TEXT_CHANGED", IsStatic = true}, F_ON_TEXT_CHANGED },
{ new Puerts.MethodKey {Name = "ON_TMP_SETTINGS_CHANGED", IsStatic = true}, F_ON_TMP_SETTINGS_CHANGED },
{ new Puerts.MethodKey {Name = "ON_RESOURCES_LOADED", IsStatic = true}, F_ON_RESOURCES_LOADED },
{ new Puerts.MethodKey {Name = "ON_TEXTMESHPRO_UGUI_PROPERTY_CHANGED", IsStatic = true}, F_ON_TEXTMESHPRO_UGUI_PROPERTY_CHANGED },
{ new Puerts.MethodKey {Name = "ON_COMPUTE_DT_EVENT", IsStatic = true}, F_ON_COMPUTE_DT_EVENT }
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    {"COMPUTE_DT_EVENT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_COMPUTE_DT_EVENT, Setter = null} },
{"MATERIAL_PROPERTY_EVENT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_MATERIAL_PROPERTY_EVENT, Setter = null} },
{"FONT_PROPERTY_EVENT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_FONT_PROPERTY_EVENT, Setter = null} },
{"SPRITE_ASSET_PROPERTY_EVENT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_SPRITE_ASSET_PROPERTY_EVENT, Setter = null} },
{"TEXTMESHPRO_PROPERTY_EVENT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_TEXTMESHPRO_PROPERTY_EVENT, Setter = null} },
{"DRAG_AND_DROP_MATERIAL_EVENT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_DRAG_AND_DROP_MATERIAL_EVENT, Setter = null} },
{"TEXT_STYLE_PROPERTY_EVENT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_TEXT_STYLE_PROPERTY_EVENT, Setter = null} },
{"COLOR_GRADIENT_PROPERTY_EVENT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_COLOR_GRADIENT_PROPERTY_EVENT, Setter = null} },
{"TMP_SETTINGS_PROPERTY_EVENT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_TMP_SETTINGS_PROPERTY_EVENT, Setter = null} },
{"RESOURCE_LOAD_EVENT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_RESOURCE_LOAD_EVENT, Setter = null} },
{"TEXTMESHPRO_UGUI_PROPERTY_EVENT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_TEXTMESHPRO_UGUI_PROPERTY_EVENT, Setter = null} },
{"TEXT_CHANGED_EVENT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_TEXT_CHANGED_EVENT, Setter = null} }
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
