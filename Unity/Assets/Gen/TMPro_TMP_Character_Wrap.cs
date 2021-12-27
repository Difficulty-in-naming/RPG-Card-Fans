
using System;
namespace PuertsStaticWrap
{
    public static class TMPro_TMP_Character_Wrap
    {
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {
                if (paramLen == 0)
                {
                    {
                        var result = new TMPro.TMP_Character();
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(TMPro.TMP_Character), result);
                    }
                }
                if (paramLen == 2)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.TextCore.Glyph), false, false))
                    {
                        var Arg0 = argHelper0.GetUInt32(false);
                        var Arg1 = argHelper1.Get<UnityEngine.TextCore.Glyph>(false);
                        var result = new TMPro.TMP_Character(Arg0,Arg1);
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(TMPro.TMP_Character), result);
                    }
                }
                if (paramLen == 3)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(TMPro.TMP_FontAsset), false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(UnityEngine.TextCore.Glyph), false, false))
                    {
                        var Arg0 = argHelper0.GetUInt32(false);
                        var Arg1 = argHelper1.Get<TMPro.TMP_FontAsset>(false);
                        var Arg2 = argHelper2.Get<UnityEngine.TextCore.Glyph>(false);
                        var result = new TMPro.TMP_Character(Arg0,Arg1,Arg2);
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(TMPro.TMP_Character), result);
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to TMPro.TMP_Character constructor");
            }
            catch (Exception e)
            {
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