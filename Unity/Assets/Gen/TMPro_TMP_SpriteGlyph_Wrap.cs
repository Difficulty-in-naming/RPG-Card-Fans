
using System;

namespace PuertsStaticWrap
{
    public static class TMPro_TMP_SpriteGlyph_Wrap
    {

        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {

                if (paramLen == 0)
                
                {
            
                    {
                
                        var result = new TMPro.TMP_SpriteGlyph();
                
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(TMPro.TMP_SpriteGlyph), result);
                    
                    }
                
                }
            
                if (paramLen == 5)
                
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    var argHelper4 = new Puerts.ArgumentHelper((int)data, isolate, info, 4);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.TextCore.GlyphMetrics), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.TextCore.GlyphRect), false, false) && argHelper3.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper4.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetUInt32(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.TextCore.GlyphMetrics>(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.TextCore.GlyphRect>(false);
                    
                        var Arg3 = argHelper3.GetFloat(false);
                    
                        var Arg4 = argHelper4.GetInt32(false);
                    
                        var result = new TMPro.TMP_SpriteGlyph(Arg0, Arg1, Arg2, Arg3, Arg4);
                
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(TMPro.TMP_SpriteGlyph), result);
                    
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
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.TextCore.GlyphMetrics), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.TextCore.GlyphRect), false, false) && argHelper3.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper4.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper5.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.Sprite), false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetUInt32(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.TextCore.GlyphMetrics>(false);
                    
                        var Arg2 = argHelper2.Get<UnityEngine.TextCore.GlyphRect>(false);
                    
                        var Arg3 = argHelper3.GetFloat(false);
                    
                        var Arg4 = argHelper4.GetInt32(false);
                    
                        var Arg5 = argHelper5.Get<UnityEngine.Sprite>(false);
                    
                        var result = new TMPro.TMP_SpriteGlyph(Arg0, Arg1, Arg2, Arg3, Arg4, Arg5);
                
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(TMPro.TMP_SpriteGlyph), result);
                    
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to TMPro.TMP_SpriteGlyph constructor");
    
    
            } catch (Exception e) {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
            return IntPtr.Zero;
        }
    
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_sprite(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as TMPro.TMP_SpriteGlyph;
                var result = obj.sprite;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_sprite(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as TMPro.TMP_SpriteGlyph;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.sprite = argHelper.Get<UnityEngine.Sprite>(false);
                
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
                    
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    {"sprite", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_sprite, Setter = S_sprite} }
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
