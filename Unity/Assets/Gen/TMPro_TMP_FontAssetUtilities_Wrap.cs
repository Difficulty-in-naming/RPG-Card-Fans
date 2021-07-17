using System;

namespace PuertsStaticWrap
{
    public static class TMPro_TMP_FontAssetUtilities_Wrap
    {
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {
                
                
                {
                    
                    
                    
                    
                    {
                        
                        var result = new TMPro.TMP_FontAssetUtilities();
                        
                        
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(TMPro.TMP_FontAssetUtilities), result);
                    }
                }
                
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
            return IntPtr.Zero;
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_GetCharacterFromFontAsset(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                
                
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                    var argHelper4 = new Puerts.ArgumentHelper((int)data, isolate, info, 4);
                    var argHelper5 = new Puerts.ArgumentHelper((int)data, isolate, info, 5);
                    
                    
                    
                    {
                        
                        var Arg0 = argHelper0.GetUInt32(false);
                        var Arg1 = argHelper1.Get<TMPro.TMP_FontAsset>(false);
                        var Arg2 = argHelper2.GetBoolean(false);
                        var Arg3 = (TMPro.FontStyles)argHelper3.GetInt32(false);
                        var Arg4 = (TMPro.FontWeight)argHelper4.GetInt32(false);
                        var Arg5 = argHelper5.GetBoolean(true);
                        var result = TMPro.TMP_FontAssetUtilities.GetCharacterFromFontAsset(Arg0,Arg1,Arg2,Arg3,Arg4,out Arg5);
                        
                        argHelper5.SetByRefValue(Arg5);
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
        private static void F_GetCharacterFromFontAssets(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                
                
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                    var argHelper4 = new Puerts.ArgumentHelper((int)data, isolate, info, 4);
                    var argHelper5 = new Puerts.ArgumentHelper((int)data, isolate, info, 5);
                    var argHelper6 = new Puerts.ArgumentHelper((int)data, isolate, info, 6);
                    
                    
                    
                    {
                        
                        var Arg0 = argHelper0.GetUInt32(false);
                        var Arg1 = argHelper1.Get<TMPro.TMP_FontAsset>(false);
                        var Arg2 = argHelper2.Get<System.Collections.Generic.List<TMPro.TMP_FontAsset>>(false);
                        var Arg3 = argHelper3.GetBoolean(false);
                        var Arg4 = (TMPro.FontStyles)argHelper4.GetInt32(false);
                        var Arg5 = (TMPro.FontWeight)argHelper5.GetInt32(false);
                        var Arg6 = argHelper6.GetBoolean(true);
                        var result = TMPro.TMP_FontAssetUtilities.GetCharacterFromFontAssets(Arg0,Arg1,Arg2,Arg3,Arg4,Arg5,out Arg6);
                        
                        argHelper6.SetByRefValue(Arg6);
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
        private static void F_GetSpriteCharacterFromSpriteAsset(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                
                
                {
                    
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    
                    
                    
                    {
                        
                        var Arg0 = argHelper0.GetUInt32(false);
                        var Arg1 = argHelper1.Get<TMPro.TMP_SpriteAsset>(false);
                        var Arg2 = argHelper2.GetBoolean(false);
                        var result = TMPro.TMP_FontAssetUtilities.GetSpriteCharacterFromSpriteAsset(Arg0,Arg1,Arg2);
                        
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
        private static void G_instance(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                var result = TMPro.TMP_FontAssetUtilities.instance;
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
                    { new Puerts.MethodKey {Name = "GetCharacterFromFontAsset", IsStatic = true},  F_GetCharacterFromFontAsset },
                    { new Puerts.MethodKey {Name = "GetCharacterFromFontAssets", IsStatic = true},  F_GetCharacterFromFontAssets },
                    { new Puerts.MethodKey {Name = "GetSpriteCharacterFromSpriteAsset", IsStatic = true},  F_GetSpriteCharacterFromSpriteAsset },
                    
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    {"instance", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_instance, Setter = null} },
                    
                }
            };
        }
        
    }
}